import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import WebSocket from 'ws';
import * as fs from 'node:fs';
import * as path from 'node:path';
// @ts-ignore
import { default as protobuf } from 'protobufjs';
import { mod } from '../../../../../../../js/src/static_dependencies/noble-curves/abstract/modular.js';

const root = protobuf.loadSync(
    path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'trade.proto')
);

const AssetPosition = root.lookupType('trade.AssetPosition');
const AssetPositions = root.lookupType('trade.AssetPositions');
const Bootstrap = root.lookupType('trade.Bootstrap');
const CancelOrder = root.lookupType('trade.CancelOrder');
const CancelOrderAck = root.lookupType('trade.CancelOrderAck');
const CancelOrderReject = root.lookupType('trade.CancelOrderReject');
const Credentials = root.lookupType('trade.Credentials');
const Done = root.lookupType('trade.Done');
const Fill = root.lookupType('trade.Fill');
const FixedPointDecimal = root.lookupType('trade.FixedPointDecimal');
const Heartbeat = root.lookupType('trade.Heartbeat');
const MassCancel = root.lookupType('trade.MassCancel');
const MassCancelAck = root.lookupType('trade.MassCancelAck');
const ModifyOrder = root.lookupType('trade.ModifyOrder');
const ModifyOrderAck = root.lookupType('trade.ModifyOrderAck');
const ModifyOrderReject = root.lookupType('trade.ModifyOrderReject');
const NewOrder = root.lookupType('trade.NewOrder');
const NewOrderAck = root.lookupType('trade.NewOrderAck');
const NewOrderReject = root.lookupType('trade.NewOrderReject');
const OrderRequest = root.lookupType('trade.OrderRequest');
const OrderResponse = root.lookupType('trade.OrderResponse');
const RawUnits = root.lookupType('trade.RawUnits');
const RestingOrder = root.lookupType('trade.RestingOrder');
const RestingOrders = root.lookupType('trade.RestingOrders');
const TradingStatus = root.lookupType('trade.TradingStatus');

const apiKey = Deno.env.get("API_KEY");
const secretKey = Deno.env.get("API_SECRET");
const subAccountId = Deno.env.get("SUB_ACCOUNT_ID");

const wsUrl = `wss://staging.cube.exchange/os`;
const ws = new WebSocket(wsUrl);
let heartbeatInterval;

function uint8ArrayToHex(array: Uint8Array): string {
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

function uint8ArrayToBase64(array: Uint8Array): string {
    const binaryString = array.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binaryString);
}

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
        accessKeyId: apiKey,
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

ws.on('message', (payload: any) => {
    console.log('message - begin');

    const uint8Array = new Uint8Array(payload);
    const uint8ArrayHex = uint8ArrayToHex(uint8Array);
    const uint8ArrayBase64 = uint8ArrayToBase64(uint8Array);

     // try { console.log('AssetPosition:', JSON.stringify(AssetPosition.decode(uint8Array)));} catch(error) {}
     // try { console.log('AssetPositions:', JSON.stringify(AssetPositions.decode(uint8Array)));} catch(error) {}
     try { console.log('Bootstrap:', JSON.stringify(Bootstrap.decode(uint8Array)));} catch(error) {}
     // try { console.log('CancelOrder:', JSON.stringify(CancelOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('CancelOrderAck:', JSON.stringify(CancelOrderAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('CancelOrderReject:', JSON.stringify(CancelOrderReject.decode(uint8Array)));} catch(error) {}
     // try { console.log('ConnectionStatus:', JSON.stringify(ConnectionStatus.decode(uint8Array)));} catch(error) {}
     // try { console.log('Credentials:', JSON.stringify(Credentials.decode(uint8Array)));} catch(error) {}
     // try { console.log('Done:', JSON.stringify(Done.decode(uint8Array)));} catch(error) {}
     // try { console.log('Fill:', JSON.stringify(Fill.decode(uint8Array)));} catch(error) {}
     // try { console.log('FixedPointDecimal:', JSON.stringify(FixedPointDecimal.decode(uint8Array)));} catch(error) {}
     try { console.log('Heartbeat:', JSON.stringify(Heartbeat.decode(uint8Array)));} catch(error) {}
     // try { console.log('MassCancel:', JSON.stringify(MassCancel.decode(uint8Array)));} catch(error) {}
     // try { console.log('MassCancelAck:', JSON.stringify(MassCancelAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('ModifyOrder:', JSON.stringify(ModifyOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('ModifyOrderAck:', JSON.stringify(ModifyOrderAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('ModifyOrderReject:', JSON.stringify(ModifyOrderReject.decode(uint8Array)));} catch(error) {}
     // try { console.log('NewOrder:', JSON.stringify(NewOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('NewOrderAck:', JSON.stringify(NewOrderAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('NewOrderReject:', JSON.stringify(NewOrderReject.decode(uint8Array)));} catch(error) {}
     // try { console.log('OrderRequest:', JSON.stringify(OrderRequest.decode(uint8Array)));} catch(error) {}
     try { console.log('OrderResponse:', JSON.stringify(OrderResponse.decode(uint8Array)));} catch(error) {}
     // try { console.log('OrderType:', JSON.stringify(OrderType.decode(uint8Array)));} catch(error) {}
     // try { console.log('PostOnly:', JSON.stringify(PostOnly.decode(uint8Array)));} catch(error) {}
     // try { console.log('RawUnits:', JSON.stringify(RawUnits.decode(uint8Array)));} catch(error) {}
     // try { console.log('RestingOrder:', JSON.stringify(RestingOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('RestingOrders:', JSON.stringify(RestingOrders.decode(uint8Array)));} catch(error) {}
     // try { console.log('SelfTradePrevention:', JSON.stringify(SelfTradePrevention.decode(uint8Array)));} catch(error) {}
     // try { console.log('Side:', JSON.stringify(Side.decode(uint8Array)));} catch(error) {}
     // try { console.log('TimeInForce:', JSON.stringify(TimeInForce.decode(uint8Array)));} catch(error) {}
     // try { console.log('TradingStatus:', JSON.stringify(TradingStatus.decode(uint8Array)));} catch(error) {}

    console.log('message - end');
});

ws.on('close', (code, reason) => {
    console.log('WebSocket closed:', code, Buffer.from(reason).toString());
    clearInterval(heartbeatInterval);
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

function sendHeartbeat() {
    const timestamp = Date.now();
    const heartbeat = Heartbeat.create({
        request_id: timestamp,
        timestamp: timestamp
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
    const decimalAmount = 0.001;
    const decimalPrice = orderSide == 'BUY' ? 130 : 160;
    const quantityTickSize = marketConstants['quantityTickSize'];
    const priceTickSize = marketConstants['priceTickSize'];

    const exchangeOrderType = orderType == 'LIMIT' ? 0 : 1;
    const exchangeOrderSide = orderSide == 'BUY' ? 0 : 1;
    const exchangeAmount = Math.floor(decimalAmount * (1 / quantityTickSize))
    const exchangePrice = Math.floor(decimalPrice * (1 / priceTickSize))

    const newOrder = NewOrder.create({
        clientOrderId: Date.now(),
        requestId: 1,
        marketId: marketId,
        price: exchangePrice, // price in the smallest unit
        quantity: exchangeAmount, // quantity in lots
        side: exchangeOrderSide,
        timeInForce: 1, // GOOD_FOR_SESSION
        orderType: exchangeOrderType,
        subaccountId: parseInt(subAccountId),
        postOnly: 1, // Enabled,
        cancelOnDisconnect: false
    });

    const cancelOrder = CancelOrder.create({
        marketId: marketId,
        clientOrderId: Date.now(),
        requestId: 1,
        subaccountId: parseInt(subAccountId),
    });

    const modifyOrder = ModifyOrder.create({
        marketId: marketId,
        clientOrderId: Date.now(),
        requestId: 1,
        newPrice: 1,
        newQuantity: 1,
        subAccountId: parseInt(subAccountId),
        selfTradePrevention: 1,  //optional
        postOnly: 1,
    });

    const heartbeat = Heartbeat.create({
        requestId: 1,
        timestamp: Date.now(),
    });
    
    const massCancel = MassCancel.create({
        subAccountId: parseInt(subAccountId),
        requestId: 1,
        marketId: marketId,   // optional (If specified, only orders on the corresponding market will be canceled.)
        side: 0,   // optional (If specified, only orders with this side will be canceled.)
    });
    
    const orderRequest = OrderRequest.create({
        new: newOrder,
        cancel: cancelOrder,
        modify: modifyOrder,
        heartbeat: heartbeat,
        massCancel: massCancel,
    });

    const buffer = OrderRequest.encode(orderRequest).finish();
    ws.send(buffer);
    console.log('Limit order sent.');
}
