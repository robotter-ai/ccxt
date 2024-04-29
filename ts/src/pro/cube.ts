
// ----------------------------------------------------------------------------
import cubeRest from '../cube.js';

// -----------------------------------------------------------------------------

export default class cube extends cubeRest {
    describe () {
        return this.deepExtend (super.describe (), {
            'has': {
                'ws': true,
                'watchBalance': false,
                'watchMyTrades': false,
                'watchOHLCV': false,
                'watchOrderBook': true,
                'watchOrders': false,
                'watchTicker': false,
                'watchTrades': false,
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
}
