import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import WebSocket from 'ws';
import * as fs from 'node:fs';
import * as path from 'node:path';
// @ts-ignore
import { default as protobuf } from 'protobufjs';

const root = protobuf.loadSync(
    path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'trade.proto')
);
const Credentials = root.lookupType('trade.Credentials');
const OrderRequest = root.lookupType('trade.OrderRequest');
const NewOrder = root.lookupType('trade.NewOrder');
const ClientMessage = root.lookupType('trade.OrderRequest'); // If such a type exists or adjust accordingly
const Heartbeat = root.lookupType('trade.Heartbeat');

const apiKey = Deno.env.get("API_KEY");
const secretKey = Deno.env.get("API_SECRET");
const subAccountId = Deno.env.get("SUB_ACCOUNT_ID");

const wsUrl = `wss://staging.cube.exchange/os`;
const ws = new WebSocket(wsUrl);
let heartbeatInterval;

enum TSOLTUDSC {
    marketId = 200047,
    quantityTickSize = 0.0001,
    priceTickSize = 0.01
}

enum TBTCTUDSC {
    marketId = 200005,
    quantityTickSize = 1e-05,
    priceTickSize = 0.1,
}

const MarketConstants = {
    "tsoltusdc": TSOLTUDSC,
    "tbtctusdc": TBTCTUDSC
}

ws.on('open', () => {
    console.log('WebSocket connection opened.');

    const timestampSecs = Math.floor(Date.now() / 1000);
    const timestampBytes = Buffer.alloc(8);
    timestampBytes.writeBigInt64LE(BigInt(timestampSecs));
    const secretKeyBytes = Buffer.from(secretKey, 'hex');
    const signature = crypto.createHmac('sha256', secretKeyBytes)
        .update('cube.xyz')
        .update(timestampBytes)
        .digest('base64');

    const credentialsMessage = Credentials.create({
        access_key_id: apiKey,
        signature: signature,
        timestamp: timestampSecs
    });
    const credentialsBuffer = Credentials.encode(credentialsMessage).finish();
    ws.send(credentialsBuffer);

    // Set up heartbeat interval
    heartbeatInterval = setInterval(sendHeartbeat, 10000);

    // Send a limit order example
    sendLimitOrder();
});

ws.on('message', (data) => {
    // const message = OrderResponse.decode(new Uint8Array(data)); // Adjust the type as necessary
    // console.log('Received message:', data, message);
    console.log('Received message:', data);
});

ws.on('close', (code, reason) => {
    console.log('WebSocket closed:', code, Buffer.from(reason).toString());
    clearInterval(heartbeatInterval);
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

function sendHeartbeat() {
    const heartbeat = Heartbeat.create({
        request_id: Date.now()
    });
    const message = OrderRequest.create({
        heartbeat: heartbeat
    });
    const buffer = OrderRequest.encode(message).finish();
    ws.send(buffer);
    console.log('Heartbeat sent.');
}

function sendLimitOrder() {
    const marketSymbol = 'tsoltusdc';
    const marketConstants = MarketConstants[marketSymbol];
    const marketId = marketConstants['marketId'];
    const orderType = 'LIMIT'
    const orderSide = 'BUY'
    const decimalAmount = 0.1;
    const decimalPrice = orderSide == 'BUY' ? 130 : 160;
    const quantityTickSize = marketConstants['quantityTickSize'];
    const priceTickSize = marketConstants['priceTickSize'];

    const exchangeOrderType = orderType == 'LIMIT' ? 0 : 1;
    const exchangeOrderSide = orderSide == 'BUY' ? 0 : 1;
    const exchangeAmount = Math.floor(decimalAmount * (1 / quantityTickSize))
    const exchangePrice = Math.floor(decimalPrice * (1 / priceTickSize))

    const newOrder = NewOrder.create({
        client_order_id: Date.now(),
        request_id: 1,
        market_id: marketId,
        price: exchangePrice, // price in the smallest unit
        quantity: exchangeAmount, // quantity in lots
        side: exchangeOrderSide,
        time_in_force: 1, // GOOD_FOR_SESSION
        order_type: exchangeOrderType, // LIMIT
        subaccount_id: parseInt(subAccountId)
    });

    const orderRequest = OrderRequest.create({
        new: newOrder
    });

    const buffer = OrderRequest.encode(orderRequest).finish();
    ws.send(buffer);
    console.log('Limit order sent.');
}
