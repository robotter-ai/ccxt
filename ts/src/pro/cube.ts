
// ----------------------------------------------------------------------------

import cubeRest from '../cube.js';
import { Int, OrderBook } from '../base/types.js';

// -----------------------------------------------------------------------------

export default class cube extends cubeRest {
    describe () {
        // TODO check all info!!!
        return this.deepExtend (super.describe (), {
            'has': {
                'ws': true,
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
                'createOrderWs': false,
                'editOrderWs': false,
                'cancelOrderWs': false,
                'cancelOrdersWs': false,
                'cancelAllOrdersWs': false,
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
            },
            'urls': {
                'api': {
                    'ws': {
                        'production': {
                            'iridium': 'wss://api.cube.exchange/ir',
                            'mendelev': 'wss://api.cube.exchange/md',
                            'osmium': 'wss://api.cube.exchange/os',
                        },
                        'staging': {
                            'iridium': 'wss://staging.cube.exchange/ir',
                            'mendelev': 'wss://staging.cube.exchange/md',
                            'osmium': 'wss://staging.cube.exchange/os',
                        },
                    },
                },
            },
            'options': {
                'environment': 'staging',
                'api': {
                    'ws': {
                        'mendelev': {
                            'public': {
                                'orderbook': '/book/:market_id',
                                'orderbookTops': '/tops',
                            },
                        },
                    },
                },
            },
        });
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
        await this.loadMarkets ();
        const environment = this.options['environment'];
        const marketId = this.safeStringLower (symbol);
        const market = this.market (marketId);
        symbol = this.safeSymbol (marketId, market);
        const url = this.urls['api']['ws'][environment]['mendelev'] + this.options['api']['ws']['mendelev']['public']['orderbook'];
        const requestId = '';
        const subParams = [];
        const request = {
            'method': 'SUBSCRIBE',
            'params': subParams,
            'id': requestId,
        };
        const messageHash = '';
        return await this.watch (url, messageHash, request, messageHash);
    }
}
