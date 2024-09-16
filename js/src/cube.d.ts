import Exchange from './abstract/cube.js';
import { Balances, Currencies, Currency, IndexType, Int, Market, Num, OHLCV, Order, OrderBook, OrderSide, OrderType, Str, Strings, Ticker, Tickers, Trade, TradingFeeInterface, Transaction } from './base/types.js';
/**
 * @class cube
 * @augments Exchange
 */
export default class cube extends Exchange {
    describe(): any;
    removeNonBase16Chars(input: string): string;
    generateSignature(): any[];
    generateAuthenticationHeaders(): {
        'x-api-key': string;
        'x-api-signature': any;
        'x-api-timestamp': any;
    };
    authenticateRequest(request: any): any;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
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
    parseCurrencies(assets: any): Currencies;
    fetchMarkets(params?: {}): Promise<Market[]>;
    parseMarkets(markets: any): Market[];
    parseMarket(market: any): Market;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    parseBidsAsks(bidasks: any, priceKey?: IndexType, amountKey?: IndexType, countOrIdKey?: IndexType): any;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTicker(ticker: any, market?: Market): Ticker;
    fetchTickers(symbols?: string[], params?: {}): Promise<Tickers>;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchBalance(params?: {}): Promise<Balances>;
    parseBalance(response: any): Balances;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    validateCreateOrderResponse(response: object): void;
    handleCreateOrderReject(reason: any): void;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    validateCancelOrderResponse(response: object, order: object): void;
    handleCancelOrderReject(reason: string, order: object): void;
    handleCancelOrderAck(reason: string, ack: object): void;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<{
        info: import("./base/types.js").Dictionary<any>;
        market: import("./base/types.js").Dictionary<any>;
    }>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchRawOrder(id: string, symbol?: any, params?: {}): Promise<any>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseOrders(orders: object, market?: Market, since?: Int, limit?: Int, params?: {}): Order[];
    parseOrder(order: any, market?: Market): Order;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchRawOrders(): Promise<any[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrades(trades: any, market?: Market, since?: Int, limit?: Int, params?: {}): Trade[];
    parseTrade(trade: any, market?: any): Trade;
    fetchTradingFee(symbol: string, params?: {}): Promise<TradingFeeInterface>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseMyTrade(trade: any, order: any): Promise<{
        id: string;
        timestamp: number;
        datetime: string;
        symbol: string;
        order: any;
        type: string;
        side: string;
        takerOrMaker: any;
        price: number;
        amount: number;
        cost: any;
        fee: import("./base/types.js").Dictionary<any>;
        fees: any[];
        info: any;
    }>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchStatus(params?: {}): Promise<{
        status: any;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchDeposits(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchDepositAddresses(codes?: Strings, params?: {}): Promise<{
        info: {
            subaccounts: any[];
            sources: any[];
        };
    }>;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
    fetchWithdrawals(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransaction(transaction: any, currency?: Currency): Transaction;
    parseTransactionStatus(status: any): string;
    countWithLoop(items: any): number;
    countItems(input: any): number;
}
