
// ---------------------------------------------------------------------------

// import { Market } from '../ccxt.js'; // TODO verify!!!
import Exchange from './abstract/cube.js';
import { InsufficientFunds, AuthenticationError, BadRequest } from './base/errors.js';
// import { InsufficientFunds, AuthenticationError, BadRequest, ExchangeError } from './base/errors.js'; // TODO verify!!!
import { TICK_SIZE } from './base/functions/number.js';
// import type { Int, Num, Order, OrderSide, OrderType, Str, Ticker, IndexType } from './base/types.js'; // TODO verify!!!

// ---------------------------------------------------------------------------

/**
 * @class tradeogre
 * @augments Exchange
 */
export default class cube extends Exchange {
    describe () {
        // TODO verify all!!!
        return this.deepExtend (super.describe (), {
            'id': 'cube',
            'name': 'cube',
            'countries': [ ],
            'rateLimit': 100,
            'version': 'v0',
            'pro': false,
            'has': {
                'CORS': undefined,
                'spot': true,
                'margin': false,
                'swap': true,
                'future': false,
                'option': false,
                'addMargin': false,
                'cancelAllOrders': true,
                'cancelOrder': true,
                'cancelOrders': false,
                'closeAllPositions': false,
                'closePosition': false,
                'createDepositAddress': false,
                'createMarketOrder': false,
                'createOrder': true,
                'createOrders': false,
                'createPostOnlyOrder': false,
                'createReduceOnlyOrder': false,
                'createStopLimitOrder': false,
                'createStopMarketOrder': false,
                'createStopOrder': false,
                'fetchAccounts': true,
                'fetchBalance': true,
                'fetchBorrowInterest': false,
                'fetchBorrowRateHistory': false,
                'fetchClosedOrders': false,
                'fetchCrossBorrowRate': false,
                'fetchCrossBorrowRates': false,
                'fetchCurrencies': true,
                'fetchDeposit': false,
                'fetchDepositAddress': false,
                'fetchDepositAddresses': false,
                'fetchDepositAddressesByNetwork': false,
                'fetchDeposits': false,
                'fetchDepositsWithdrawals': false,
                'fetchFundingHistory': false,
                'fetchFundingRate': false,
                'fetchFundingRateHistory': false,
                'fetchFundingRates': false,
                'fetchIndexOHLCV': false,
                'fetchIsolatedBorrowRate': false,
                'fetchIsolatedBorrowRates': false,
                'fetchLedger': false,
                'fetchLedgerEntry': false,
                'fetchLeverageTiers': false,
                'fetchMarketLeverageTiers': false,
                'fetchMarkets': true,
                'fetchMarkOHLCV': false,
                'fetchMyTrades': false,
                'fetchOHLCV': false,
                'fetchOpenInterest': false,
                'fetchOpenInterestHistory': false,
                'fetchOpenOrders': true,
                'fetchOrder': true,
                'fetchOrderBook': true,
                'fetchOrderBooks': false,
                'fetchOrders': false,
                'fetchOrderTrades': false,
                'fetchPermissions': false,
                'fetchPosition': false,
                'fetchPositions': false,
                'fetchPositionsForSymbol': false,
                'fetchPositionsRisk': false,
                'fetchPremiumIndexOHLCV': false,
                'fetchTicker': true,
                'fetchTickers': false,
                'fetchTrades': true,
                'fetchTradingLimits': false,
                'fetchTransactionFee': false,
                'fetchTransactionFees': false,
                'fetchTransactions': false,
                'fetchTransfers': false,
                'fetchWithdrawAddresses': false,
                'fetchWithdrawal': false,
                'fetchWithdrawals': false,
                'reduceMargin': false,
                'setLeverage': false,
                'setMargin': false,
                'setMarginMode': false,
                'setPositionMode': false,
                'signIn': false,
                'transfer': false,
                'withdraw': false,
            },
            'urls': {
                'referral': '',
                'logo': 'https://github.com/ccxt/ccxt/assets/43336371/3aa748b7-ea44-45e9-a9e7-b1d207a2578a',
                'api': {
                    'iridium': 'https://api.cube.exchange/ir/v0',
                    'mendelev': 'https://api.cube.exchange/md/v0',
                    'osmium': 'https://api.cube.exchange/os/v0',
                    'iridiumStaging': 'https://staging.cube.exchange/ir/v0',
                    'mendelevStaging': 'https://staging.cube.exchange/md/v0',
                    'osmiumStaging': 'https://staging.cube.exchange/os/v0',
                },
                'www': 'https://tradeogre.com',
                'doc': 'https://tradeogre.com/help/api',
                'fees': 'https://tradeogre.com/help/fees',
            },
            'fees': {
                'trading': {
                    'maker': this.parseNumber ('0.002'),
                    'taker': this.parseNumber ('0.002'),
                },
            },
            'api': {
                'public': {
                    'get': {
                        'markets': 1,
                        'orders/{market}': 1,
                        'ticker/{market}': 1,
                        'history/{market}': 1,
                    },
                },
                'private': {
                    'get': {
                        'account/balance': 1,
                        'account/balances': 1,
                        'account/order/{uuid}': 1,
                    },
                    'post': {
                        'order/buy': 1,
                        'order/sell': 1,
                        'order/cancel': 1,
                        'orders': 1,
                        'account/orders': 1,
                    },
                },
            },
            'commonCurrencies': {
            },
            'precisionMode': TICK_SIZE,
            'exceptions': {
                'exact': {
                    'Must be authorized': AuthenticationError,
                    'Market not found': BadRequest,
                    'Insufficient funds': InsufficientFunds,
                    'Order not found': BadRequest,
                },
            },
            'options': {
            },
        });
    }

    // TODO fix implementation!!!
    sign (path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        let url = this.urls['api']['iridium'] + '/' + this.implodeParams (path, params);
        params = this.omit (params, this.extractParams (path));
        if (method === 'GET') {
            if (Object.keys (params).length) {
                url += '?' + this.urlencode (params);
            }
        }
        if (api === 'private') {
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': 'CCXT',
                'authorization': 'Basic ' + this.stringToBase64 (this.apiKey + ':' + this.secret),
            };
            if (method !== 'GET') {
                body = this.urlencode (params);
            }
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }

    async fetchCurrencies (params = {}) {
        /**
         * @method
         * @name cube#fetchCurrencies
         * @description fetches all available currencies on an exchange
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#markets
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} an associative dictionary of currencies
         */
        const response = await this.publicGetMarkets (params);
        // {
        //     "result": {
        //         "assets": [
        //             {
        //                 "assetId": 1,
        //                 "symbol": "BTC",
        //                 "decimals": 8,
        //                 "displayDecimals": 5,
        //                 "settles": true,
        //                 "assetType": "Crypto",
        //                 "sourceId": 1,
        //                 "metadata": {
        //                     "dustAmount": 3000
        //                 },
        //                 "status": 1
        //             },
        //             ...
        //         ],
        //         "sources": [
        //             {
        //                 "sourceId": 0,
        //                 "name": "fiat",
        //                 "metadata": {}
        //             },
        //             ...
        //         ],
        //         "markets": [
        //             {
        //                 "marketId": 100004,
        //                 "symbol": "BTCUSDC",
        //                 "baseAssetId": 1,
        //                 "baseLotSize": "1000",
        //                 "quoteAssetId": 7,
        //                 "quoteLotSize": "1",
        //                 "priceDisplayDecimals": 2,
        //                 "protectionPriceLevels": 3000,
        //                 "priceBandBidPct": 25,
        //                 "priceBandAskPct": 400,
        //                 "priceTickSize": "0.1",
        //                 "quantityTickSize": "0.00001",
        //                 "status": 1,
        //                 "feeTableId": 2
        //             },
        //             ...
        //         ],
        //         "feeTables": [
        //             {
        //                 "feeTableId": 1,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0,
        //                         "takerFeeRatio": 0.0
        //                     }
        //                 ]
        //             },
        //             {
        //                 "feeTableId": 2,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0004,
        //                         "takerFeeRatio": 0.0008
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
        const result = [];
        const rawCurrencies = this.safeDict (this.safeDict (response, 'result'), 'assets');
        for (let i = 0; i < rawCurrencies.length; i++) {
            const rawCurrency = rawCurrencies[i];
            const id = this.safeStringUpper (rawCurrency, 'symbol');
            // TODO verify!!!
            const currency = this.safeCurrencyStructure ({
                'id': id,
                'numericId': this.safeInteger (rawCurrency, 'assetId'),
                'code': this.safeStringUpper (rawCurrency, 'symbol'),
                'precision': this.safeInteger (rawCurrency, 'decimals'),
                'type': this.safeStringLower (rawCurrency, 'assetType'),
                'name': this.safeString (rawCurrency, 'symbol'),
                'active': (this.safeInteger (rawCurrency, 'status') === 1),
                'deposit': undefined,
                'withdraw': undefined,
                'fee': undefined,
                'fees': {},
                'networks': {},
                'limits': {
                    'deposit': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'withdraw': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
                'info': rawCurrency,
            });
            result.push (currency);
        }
        return result;
    }

    async fetchMarkets (params = {}) {
        /**
         * @method
         * @name cube#fetchMarkets
         * @description retrieves data on all markets for cube
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#markets
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} an array of objects representing market data
         */
        const response = await this.publicGetMarkets (params);
        // {
        //     "result": {
        //         "assets": [
        //             {
        //                 "assetId": 1,
        //                 "symbol": "BTC",
        //                 "decimals": 8,
        //                 "displayDecimals": 5,
        //                 "settles": true,
        //                 "assetType": "Crypto",
        //                 "sourceId": 1,
        //                 "metadata": {
        //                     "dustAmount": 3000
        //                 },
        //                 "status": 1
        //             },
        //             ...
        //         ],
        //         "sources": [
        //             {
        //                 "sourceId": 0,
        //                 "name": "fiat",
        //                 "metadata": {}
        //             },
        //             ...
        //         ],
        //         "markets": [
        //             {
        //                 "marketId": 100004,
        //                 "symbol": "BTCUSDC",
        //                 "baseAssetId": 1,
        //                 "baseLotSize": "1000",
        //                 "quoteAssetId": 7,
        //                 "quoteLotSize": "1",
        //                 "priceDisplayDecimals": 2,
        //                 "protectionPriceLevels": 3000,
        //                 "priceBandBidPct": 25,
        //                 "priceBandAskPct": 400,
        //                 "priceTickSize": "0.1",
        //                 "quantityTickSize": "0.00001",
        //                 "status": 1,
        //                 "feeTableId": 2
        //             },
        //             ...
        //         ],
        //         "feeTables": [
        //             {
        //                 "feeTableId": 1,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0,
        //                         "takerFeeRatio": 0.0
        //                     }
        //                 ]
        //             },
        //             {
        //                 "feeTableId": 2,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0004,
        //                         "takerFeeRatio": 0.0008
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
        const result = [];
        const rawMarkets = this.safeDict (this.safeDict (response, 'result'), 'markets');
        const rawAssets = this.safeDict (this.safeDict (response, 'result'), 'assets');
        for (let i = 0; i < rawMarkets.length; i++) {
            const rawMarket = this.safeDict(rawMarkets, i);
            const id = this.safeStringLower (rawMarket, 'symbol');
            let rawBaseAsset = undefined;
            for (let i = 0; i < rawAssets.length; i++) {
                if (this.safeString(this.safeDict(rawAssets, i), 'assetId') === this.safeString (rawMarket, 'baseAssetId')) {
                    rawBaseAsset = this.safeDict(rawAssets, i);
                    break;
                }
            }
            let rawQuoteAsset = undefined;
            for (let i = 0; i < rawAssets.length; i++) {
                if (this.safeString(this.safeDict(rawAssets, i), 'assetId') === this.safeString (rawMarket, 'quoteAssetId')) {
                    rawQuoteAsset = this.safeDict(rawAssets, i);
                    break;
                }
            }
            const baseId = this.safeStringUpper (rawBaseAsset, 'symbol');
            const quoteId = this.safeStringUpper (rawQuoteAsset, 'symbol');
            const base = this.safeCurrencyCode (baseId);
            const quote = this.safeCurrencyCode (quoteId);
            const market = this.safeMarketStructure ({
                'id': id,
                'lowercaseId': id,
                'symbol': base + '/' + quote,
                'base': base,
                'quote': quote,
                'settle': undefined,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': undefined,
                'type': 'spot',
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'active': (this.safeInteger (rawMarket, 'status') === 1),
                'contract': false,
                'linear': undefined,
                'inverse': undefined,
                'contractSize': undefined,
                'taker': this.safeNumber (this.safeDict (this.fees, 'trading'), 'taker'),
                'maker': this.safeNumber (this.safeDict (this.fees, 'trading'), 'maker'),
                'expiry': undefined,
                'expiryDatetime': undefined,
                'strike': undefined,
                'optionType': undefined,
                'precision': {
                    'amount': this.parseNumber (this.parsePrecision (this.safeString (rawMarket, 'quantityTickSize'))),
                    'price': this.parseNumber (this.parsePrecision (this.safeString (rawMarket, 'priceTickSize'))),
                },
                'limits': {
                    'leverage': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'amount': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'price': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'cost': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
                'created': undefined,
                'info': rawMarket,
            });
            result.push (market);
        }
        return result;
    }
}
