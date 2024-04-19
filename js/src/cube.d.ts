import Exchange from './abstract/cube.js';
import { Balances, Currencies, Dictionary, IndexType, Int, List, Market, Num, OHLCV, Order, OrderBook, OrderSide, OrderType, Str, Ticker, Tickers, Trade, TradingFeeInterface, Transaction } from './base/types.js';
/**
 * @class cube
 * @augments Exchange
 */
export default class cube extends Exchange {
    describe(): any;
    generateSignature(): any;
    generateAuthenticationHeaders(): {
        'x-api-key': string;
        'x-api-signature': any;
        'x-api-timestamp': any;
    };
    authenticateRequest(request: Dictionary<any>): any;
    sign(path: string, api?: Str[], method?: Str, params?: any, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    setSandboxMode(enable: any): void;
    fetchMarketMeta(symbolOrSymbols?: any): Promise<{
        symbol: any;
        marketId: any;
        market: any;
        symbols: any;
        marketIds: any;
        markets: any;
    }>;
    injectSubAccountId(request: any, params: any): void;
    fetchCurrencies(params?: {}): Promise<Currencies>;
    parseCurrencies(assets: List): Currencies;
    fetchMarkets(params?: {}): Promise<Market[]>;
    parseMarkets(markets: Dictionary<any>): Market[];
    parseMarket(market: Dictionary<any>): Market;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseBidsAsks(bidasks: any, priceKey?: IndexType, amountKey?: IndexType, countOrIdKey?: IndexType): any[];
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTicker(ticker: Dictionary<any>, market?: Market): Ticker;
    fetchTickers(symbols?: string[], params?: {}): Promise<Tickers>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchBalance(params?: {}): Promise<Balances>;
    parseBalance(response: any): Balances;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchRawOrder(id: any, symbol?: any, params?: {}): Promise<any>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseOrders(orders: object, market?: Market, since?: Int, limit?: Int, params?: {}): Order[];
    parseOrder(order: any, market?: Market): Order;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrdersAllMarkets(since?: any, limit?: any): Promise<any[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrades(rawTrades: any, market?: any): any[];
    parseTrade(trade: any, market?: any): Trade;
    fetchTradingFee(symbol: string, params?: {}): Promise<TradingFeeInterface>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchStatus(params?: {}): Promise<void>;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
}
