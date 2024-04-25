
// ----------------------------------------------------------------------------
// TODO revert imports to js!!!
import cubeRest from '../cube.ts';
import { Int, OrderBook } from '../base/types.ts';

// -----------------------------------------------------------------------------

export default class cube extends cubeRest {
    describe () {
        return this.deepExtend (super.describe (), {
            'has': {
                'ws': true,
                'cancelOrderWs': false,
                'cancelOrdersWs': false,
                'cancelAllOrdersWs': false,
                'createOrderWs': false,
                'editOrderWs': false,
                'fetchBalanceWs': false,
                'fetchDepositsWs': false,
                'fetchMarketsWs': false,
                'fetchMyTradesWs': false,
                'fetchOHLCVWs': false,
                'fetchOpenOrdersWs': false,
                'fetchOrderWs': false,
                'fetchOrdersWs': false,
                'fetchTradesWs': false,
                'fetchTradingFeesWs': false,
                'fetchWithdrawalsWs': false,
                'watchBalance': false,
                'watchMyTrades': false,
                'watchOHLCV': false,
                'watchOHLCVForSymbols': false,
                'watchOrderBook': true,
                'watchOrderBookForSymbols': false,
                'watchOrders': false,
                'watchOrdersForSymbols': false,
                'watchPositions': false,
                'watchTicker': false,
                'watchTickers': false,
                'watchTrades': false,
                'watchTradesForSymbols': false,
            },
            'options': {
                'api': {
                    'ws': {
                        'mendelev': {
                            'public': {
                                'orderbook': '/book/{marketId}',
                                'orderbookTops': '/tops',
                            },
                        },
                        'os': {
                            'private': {
                                'root': '/',
                            },
                        },
                    },
                },
            },
        });
    }

    getWebsocketUrl (system: string, privacy: string, path: string, params = {}) {
        const environment = this.options['environment'];
        path = this.implodeParams (path, params);
        return this.urls['api']['ws'][environment][system] + this.options['api']['ws'][environment][privacy][path];
    }

    async watchOrderBook (symbol: string, limit: Int = undefined, params = {}): Promise<OrderBook> {
        /**
         * @method
         * @name cube#watchOrderBook
         * @description watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
         * @see https://cubexch.gitbook.io/cube-api/websocket-market-data-api#order-book-data
         * @param {string} symbol unified symbol of the market to fetch the order book for
         * @param {int} [limit] the maximum amount of order book entries to return
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const marketId = this.safeString (meta, 'marketId');
        // const market = this.safeString (meta, 'market');
        const url = this.getWebsocketUrl ('mendelev', 'public', 'orderbook', { 'marketId': marketId });
        const klines = this.safeValue (params, 'klines', 1);
        const request = {
            'mbp': true,
            'mbo': false,
            'trades': true,
            'summary': true,
            'klines': 1,
            'marketsIds': 200047,
        };
        const messageHash = '';
        return await this.watch (url, messageHash, request, messageHash);
    }

    handleOrderBook (client: Client, message) {}

    async watchTicker (symbol: string, params = {}): Promise<Ticker> {
        /**
         * @method
         * @name cube#watchTicker
         * @description watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
         * @param {string} symbol unified symbol of the market to fetch the ticker for
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
         */
    }

    handleTicker (client: Client, message) {}

    parseTicker (ticker, market = undefined): Ticker {}

    async watchOHLCV (symbol: string, timeframe = '1m', since: Int = undefined, limit: Int = undefined, params = {}): Promise<OHLCV[]> {
        /**
         * @method
         * @name cube#watchOHLCV
         * @description watches historical candlestick data containing the open, high, low, and close price, and the volume of a market
         * @param {string} symbol unified symbol of the market to fetch OHLCV data for
         * @param {string} timeframe the length of time each candle represents
         * @param {int} [since] timestamp in ms of the earliest candle to fetch
         * @param {int} [limit] the maximum amount of candles to fetch
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {int[][]} A list of candles ordered as timestamp, open, high, low, close, volume
         */
    }

    handleOHLCV (client: Client, message) {}

    async watchTrades (symbol: string, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Trade[]> {
        /**
         * @method
         * @name cube#watchTrades
         * @description watches information on multiple trades made in a market
         * @param {string} symbol unified market symbol of the market trades were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of trade structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure
         */
    }

    handleTrades (client: Client, message) {}

    async watchOrders (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Order[]> {
        /**
         * @method
         * @name cube#watchOrders
         * @description watches information on multiple orders made by the user
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure
         */
    }

    handleOrder (client: Client, message) {}
}
