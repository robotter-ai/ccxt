
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
}
