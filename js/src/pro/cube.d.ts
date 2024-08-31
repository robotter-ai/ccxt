import cubeRest from '../cube.js';
import { Balances, Int, OHLCV, Order, OrderBook, Str, Ticker, Trade } from '../base/types.js';
import Client from '../base/ws/Client.js';
export default class cube extends cubeRest {
    describe(): any;
    getWebsocketUrl(system: string, privacy: string, path: string, params?: {}): any;
    watchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    handleOrderBook(client: Client, message: any): void;
    watchTicker(symbol: string, params?: {}): Promise<Ticker>;
    handleTicker(client: Client, message: any): void;
    watchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    handleOHLCV(client: Client, message: any): {
        symbol: string;
        interval: string;
    };
    watchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    handleTrades(client: Client, message: any): void;
    watchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    handleOrder(client: Client, message: any): void;
    watchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    watchBalance(params?: {}): Promise<Balances>;
}
