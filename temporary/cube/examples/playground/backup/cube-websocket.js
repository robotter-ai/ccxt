const WebSocket = require('ws');
const protoBuf = require('protobufjs');
const fs = require('fs');
const crypto = require('crypto');

// Tunables
const pathToTradeProto = '/path/to/trade.proto';
const apiKey = '00000000-0000-0000-0000-000000000000';
const secretKey = 'cafecafecafecafecafecafecafecafecafecafecafecafecafecafecafecafe';
const cubeApiHost = 'api.cube.exchange' // for production; change to 'staging.cube.exchange' for staging

// Load the protoBuf schema
const root = protoBuf.parse(fs.readFileSync('../../generated/')).root;
const Bootstrap = root.lookupType('trade.Bootstrap');
const Credentials = root.lookupType('trade.Credentials');

// Tests connection to Order Service:
//   Connects to websocket
//   Calculates credentials and logs in
//   Dumps received Bootstrap information to console
//
// A real implementation would also need to:
//   Send heartbeats
//   Process "OrderResponse" messages
const order_service_connect_and_log_bootstrap = () => {
    const wsUrl = `wss://${cubeApiHost}/os`

    const ws = new WebSocket(wsUrl);

    ws.on('open', () => {
        console.log('Connected to WebSocket server');

        const timestampSecs = Math.floor(Date.now() / 1000);

        const timestampBytes = Buffer.alloc(8);
        timestampBytes.writeBigInt64LE(BigInt(timestampSecs));

        const secretKeyHex = Buffer.from(secretKey, 'hex')
        // console.log('secret key hex', secretKeyHex)

        const signature = crypto.createHmac('sha256', secretKeyHex)
            .update('cube.xyz')
            .update(timestampBytes)
            .digest('base64');
        // console.log('signature', signature);

        const credentialsMessage = Credentials.create({
            accessKeyId: apiKey,  // N.B. the protobufjs library expects fields in camelCase for some reason
            signature,
            timestamp: timestampSecs
        });
        // console.log('credentials protobuf', credentialsMessage);

        const buffer = Credentials.encode(credentialsMessage).finish();
        // console.log('credentials payload', buffer.toString('hex'))

        ws.send(buffer);

        console.log('Sent Credentials');
    });

    ws.on('message', (payload) => {
        // console.log('payload', payload)
        const message = Bootstrap.decode(payload);
        console.log(message)
    });

    ws.on('close', (code, reason) => {
        console.log('Connection closed:', code, reason.toString());
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
}

order_service_connect_and_log_bootstrap();
