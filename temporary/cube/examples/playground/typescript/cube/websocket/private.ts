import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import WebSocket from 'ws';
import * as fs from 'node:fs';
import * as path from 'node:path';
// @ts-ignore
import { default as protobuf } from 'protobufjs';

const root = protobuf.parse(
    String(fs.readFileSync(
        // path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'codes.proto')
        // path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'market_data.proto')
        path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'trade.proto')
    ))
).root;
// const MdMessage = root.lookupType('market_data.MdMessage');
const Bootstrap = root.lookupType('trade.Bootstrap');
const Credentials = root.lookupType('trade.Credentials');

// @ts-ignore
const apiKey = Deno.env.API_KEY;
// @ts-ignore
const secretKey = Deno.env.API_SECRET;

const watchOrderBook = async () => {
    const wsUrl = `wss://staging.cube.exchange/os`;

    const ws = new WebSocket(wsUrl);

    ws.on('open', () => {
        console.log ('Open - begin');

        const timestampSecs = Math.floor(Date.now() / 1000);
        const timestampBytes = Buffer.alloc(8);
        timestampBytes.writeBigInt64LE(BigInt(timestampSecs));
        const secretKeyHex = Buffer.from(secretKey, 'hex')
        const signature = crypto.createHmac('sha256', secretKeyHex)
            .update('cube.xyz')
            .update(timestampBytes)
            .digest('base64');
        const credentialsMessage = Credentials.create({
            accessKeyId: apiKey,
            signature,
            timestamp: timestampSecs
        });
        const buffer = Credentials.encode(credentialsMessage).finish();
        ws.send(buffer);

        console.log('Open - end');
    });

    ws.on('message', (payload) => {
        // console.log('Message:', payload, MdMessage.decode(payload));
        console.log('Message:', payload, Bootstrap.decode(payload));
    });

    ws.on('close', (code, reason) => {
        console.log('Close:', code, reason, reason.toString());
    });

    ws.on('error', (error) => {
        console.error('Error:', error);
    });
}

(async function run () {
    await watchOrderBook();
})();
