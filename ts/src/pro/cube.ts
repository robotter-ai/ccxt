
// ----------------------------------------------------------------------------

import CubeRest from '../cube.js';

// -----------------------------------------------------------------------------

export default class Cube extends CubeRest {
    describe () {
        // TODO check all info!!!
        return this.deepExtend (super.describe (), {
            'has': {
                'ws': true,
                'watchBalance': false,
                'watchMyTrades': false,
                'watchOHLCV': false,
                'watchOHLCVForSymbols': false,
                'watchOrderBook': false,
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
                            'mendelev': 'wss://api.cube.exchange/md',
                            'osmium': 'wss://api.cube.exchange/os',
                        },
                        'staging': {
                            'mendelev': 'wss://staging.cube.exchange/md',
                            'osmium': 'wss://staging.cube.exchange/os',
                        },
                    },
                },
            },
            'streaming': {
                'keepAlive': 180000,
            },
            'options': {
                'returnRateLimits': false,
                'streamLimits': {
                    'spot': 50, // max 1024
                },
                'subscriptionLimitByStream': {
                    'spot': 200,
                },
                'streamBySubscriptionsHash': {},
                'streamIndex': -1,
                // get updates every 1000ms or 100ms
                // or every 0ms in real-time for futures
                'watchOrderBookRate': 100,
                'tradesLimit': 1000,
                'ordersLimit': 1000,
                'OHLCVLimit': 1000,
                'requestId': {},
                'watchOrderBookLimit': 1000, // default limit
                'watchTrades': {
                    'name': 'trade', // 'trade' or 'aggTrade'
                },
                'watchTicker': {
                    'name': 'ticker', // ticker = 1000ms L1+OHLCV, bookTicker = real-time L1
                },
                'watchTickers': {
                    'name': 'ticker', // ticker or miniTicker or bookTicker
                },
                'watchOHLCV': {
                    'name': 'kline', // or indexPriceKline or markPriceKline (coin-m futures)
                },
                'watchOrderBook': {
                    'maxRetries': 3,
                },
                'watchBalance': {
                    'fetchBalanceSnapshot': false, // or true
                    'awaitBalanceSnapshot': true, // whether to wait for the balance snapshot before providing updates
                },
                'watchPositions': {
                    'fetchPositionsSnapshot': true, // or false
                    'awaitPositionsSnapshot': true, // whether to wait for the positions snapshot before providing updates
                },
                'wallet': 'wb', // wb = wallet balance, cw = cross balance
                'listenKeyRefreshRate': 1200000, // 20 mins
                'ws': {
                    'cost': 5,
                },
            },
        });
    }
}
