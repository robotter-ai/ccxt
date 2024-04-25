import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import WebSocket from 'ws';
import * as fs from 'node:fs';
import * as path from 'node:path';
// @ts-ignore
import { default as protobuf } from 'protobufjs';

const root = protobuf.loadSync(
    path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'market_data.proto')
);
const MdMessage = root.lookupType('market_data.MdMessage');
const ClientMessage = root.lookupType('market_data.ClientMessage');
const Config = root.lookupType('market_data.Config');
const Heartbeat = root.lookupType('market_data.Heartbeat');

// @ts-ignore
const apiKey = Deno.env.API_KEY;
// @ts-ignore
const secretKey = Deno.env.API_SECRET;

const watchOrderBook = async () => {
    const wsUrl = `wss://staging.cube.exchange/md/book/200047?trades=true&summary=true&mbo=true`;

    const ws = new WebSocket(wsUrl);

    let heartbeatInterval;

    ws.on('open', () => {
        console.log('WebSocket connection opened. Setting up...');

        // Sending initial configuration message
        // const configMessage = Config.create({
        //     mbp: false,
        //     mbo: true,
        //     trades: true,
        //     summary: true,
        //     klines: [1],
        //     markets_ids: [200047]
        // });
        //
        // const clientMessage = ClientMessage.create({
        //     config: configMessage
        // });
        //
        // const buffer = ClientMessage.encode(clientMessage).finish();
        // ws.send(buffer);
        //
        // // Setting up heartbeat message to be sent every 30 seconds
        // heartbeatInterval = setInterval(() => {
        //     const heartbeat = Heartbeat.create({
        //         request_id: Date.now() // Using current timestamp as a unique request ID
        //     });
        //     const heartbeatMessage = ClientMessage.create({
        //         heartbeat: heartbeat
        //     });
        //     const heartbeatBuffer = ClientMessage.encode(heartbeatMessage).finish();
        //     ws.send(heartbeatBuffer);
        //     console.log('Heartbeat sent.');
        // }, 10000);

        console.log('Initial configuration and heartbeat setup complete.');
    });

    ws.on('message', (payload) => {
        const message = MdMessage.decode(new Uint8Array(payload));
        console.log('Received message:', JSON.stringify(message, null, 2));
    });

    ws.on('close', (code, reason) => {
        console.log('WebSocket connection closed:', code, Buffer.from(reason).toString());
        clearInterval(heartbeatInterval); // Clear the heartbeat interval on socket close
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
}

(async function run() {
    await watchOrderBook();
})();
