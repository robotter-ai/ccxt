import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import WebSocket from 'ws';
import * as fs from 'node:fs';
import * as path from 'node:path';
// @ts-ignore
import { default as protobuf } from 'protobufjs';

// import Long from 'long';

// protobuf.util.Long = Long;
protobuf.configure();

const root = protobuf.loadSync(
    path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'market_data.proto')
);

const AggMessage = root.lookupType('market_data.AggMessage');
const ClientMessage = root.lookupType('market_data.ClientMessage');
const Config = root.lookupType('market_data.Config');
const Heartbeat = root.lookupType('market_data.Heartbeat');
const Kline = root.lookupType('market_data.Kline');
const MarketByOrder = root.lookupType('market_data.MarketByOrder');
const MarketByOrderDiff = root.lookupType('market_data.MarketByOrderDiff');
const MarketByPrice = root.lookupType('market_data.MarketByPrice');
const MarketByPriceDiff = root.lookupType('market_data.MarketByPriceDiff');
const MarketStatus = root.lookupType('market_data.MarketStatus');
const MdMessage = root.lookupType('market_data.MdMessage');
const MdMessages = root.lookupType('market_data.MdMessages');
const RateUpdate = root.lookupType('market_data.RateUpdate');
const RateUpdates = root.lookupType('market_data.RateUpdates');
const Summary = root.lookupType('market_data.Summary');
const TopOfBook = root.lookupType('market_data.TopOfBook');
const TopOfBooks = root.lookupType('market_data.TopOfBooks');
const Trades = root.lookupType('market_data.Trades');

// @ts-ignore
const apiKey = Deno.env.API_KEY;
// @ts-ignore
const secretKey = Deno.env.API_SECRET;

function uint8ArrayToHex(array: Uint8Array): string {
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

function uint8ArrayToBase64(array: Uint8Array): string {
    const binaryString = array.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binaryString);
}

function hexToUint8Array(hexString: string): Uint8Array {
    const length = hexString.length / 2;
    const array = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
        const hexByte = hexString.substr(i * 2, 2);
        array[i] = parseInt(hexByte, 16);
    }
    return array;
}

function base64ToUint8Array(base64String: string): Uint8Array {
    const binaryString = atob(base64String);
    const length = binaryString.length;
    const array = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
        array[i] = binaryString.charCodeAt(i);
    }
    return array;
}

const watchOrderBook = async () => {
    const wsUrl = `wss://staging.cube.exchange/md/book/200047?trades=true&summary=true&mbo=true`;

    const ws = new WebSocket(wsUrl);

    let heartbeatInterval;

    ws.on('open', () => {
        console.log('WebSocket connection opened. Setting up...');

        // Sending initial configuration message
        const configMessage = Config.create({
            klines: [0],
            marketIds: [],
            mbo: true,
            trades: true,
            summary: true
        });

        const clientMessage = ClientMessage.create({
            config: configMessage
        });

        const buffer = ClientMessage.encode(clientMessage).finish();
        ws.send(buffer);

        // const uint8Array = base64ToUint8Array('EgsQARgBIAEqAQIyAA==');
        // console.log(ClientMessage.decode(uint8Array));
        // ws.send(uint8Array);

        // Setting up heartbeat message to be sent every 30 seconds
        heartbeatInterval = setInterval(() => {
            const heartbeat = Heartbeat.create({
                request_id: 1 // Using current timestamp as a unique request ID
            });
            const heartbeatMessage = ClientMessage.create({
                heartbeat: heartbeat
            });
            const heartbeatBuffer = ClientMessage.encode(heartbeatMessage).finish();
            ws.send(heartbeatBuffer);
            console.log('Heartbeat sent.');
        }, 20000);

        console.log('Initial configuration and heartbeat setup complete.');
    });

    ws.on('message', (payload) => {
        console.log('message - begin');

        const uint8Array = new Uint8Array(payload);

        // try { console.log('AggMessage:', AggMessage.decode(uint8Array));} catch (error) {}
        // try { console.log('ClientMessage:', ClientMessage.decode(uint8Array));} catch (error) {}
        // try { console.log('Config:', Config.decode(uint8Array));} catch (error) {}
        // try { console.log('Heartbeat:', Heartbeat.decode(uint8Array));} catch (error) {}
        // try { console.log('Kline:', Kline.decode(uint8Array));} catch (error) {}
        // try { console.log('MarketByOrder:', MarketByOrder.decode(uint8Array));} catch (error) {}
        // try { console.log('MarketByOrderDiff:', MarketByOrderDiff.decode(uint8Array));} catch (error) {}
        // try { console.log('MarketByPrice:', MarketByPrice.decode(uint8Array));} catch (error) {}
        // try { console.log('MarketByPriceDiff:', MarketByPriceDiff.decode(uint8Array));} catch (error) {}
        // try { console.log('MarketStatus:', MarketStatus.decode(uint8Array));} catch (error) {}
        // try { console.log('MdMessage:', JSON.stringify(MdMessage.decode(uint8Array)));} catch (error) {}
        try { console.log('MdMessages:', JSON.stringify(MdMessages.decode(uint8Array)));} catch (error) {}
        // try { console.log('RateUpdate:', RateUpdate.decode(uint8Array));} catch (error) {}
        // try { console.log('RateUpdates:', RateUpdates.decode(uint8Array));} catch (error) {}
        // try { console.log('Summary:', Summary.decode(uint8Array));} catch (error) {}
        // try { console.log('TopOfBook:', TopOfBook.decode(uint8Array));} catch (error) {}
        // try { console.log('TopOfBooks:', TopOfBooks.decode(uint8Array));} catch (error) {}
        // try { console.log('Trades:', Trades.decode(uint8Array));} catch (error) {}

        console.log('message - end');
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
