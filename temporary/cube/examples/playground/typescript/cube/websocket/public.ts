import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import WebSocket from 'ws';
import * as fs from 'node:fs';
// import protobuf from 'protobufjs';

const root = protoBuf.parse(fs.readFileSync('../../generated/')).root;
const Bootstrap = root.lookupType('trade.Bootstrap');
const Credentials = root.lookupType('trade.Credentials');

const apiKey = process.env.EXCHANGE_API_KEY;
const secretKey = process.env.EXCHANGE_API_SECRET;

const watchOrderBook = async () => {
    const wsUrl = `wss://staging.cube.exchange/md/book/200047`;

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
        console.log('Message:', payload, Bootstrap.decode(payload));
    });

    ws.on('close', (code, reason) => {
        console.log('Close:', code, reason, reason.toString());
    });

    ws.on('error', (error) => {
        console.error('Error:', error);
    });
}

await watchOrderBook();
