// ---------------------------------------------------------------------------

import Exchange from './abstract/cube.js';
import {
    InsufficientFunds,
    OrderNotFound,
    AuthenticationError,
    BadRequest,
    BadSymbol,
    InvalidOrder,
} from './base/errors.js';
import { DECIMAL_PLACES } from './base/functions/number.js';
import {
    Balances, Currencies, Dictionary,
    IndexType,
    Int,
    Market,
    Num,
    OHLCV,
    Order,
    OrderBook,
    OrderSide,
    OrderType,
    Str,
    Ticker,
    Tickers,
    Trade,
    TradingFeeInterface,
    Transaction,
} from './base/types.js';
import { sha256 } from './static_dependencies/noble-hashes/sha256.js';
import { NotSupported } from '../../js/src/base/errors.js';

// ---------------------------------------------------------------------------

/**
 * @class cube
 * @augments Exchange
 */
export default class cube extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'cube',
            'name': 'cube',
            'countries': [],
            'urls': {
                'referral': '',
                'logo': 'https://github.com/ccxt/ccxt/assets/43336371/3aa748b7-ea44-45e9-a9e7-b1d207a2578a',
                'api': {
                    'rest': {
                        'production': {
                            'iridium': 'https://api.cube.exchange/ir/v0',
                            'mendelev': 'https://api.cube.exchange/md/v0',
                            'osmium': 'https://api.cube.exchange/os/v0',
                        },
                        'staging': {
                            'iridium': 'https://staging.cube.exchange/ir/v0',
                            'mendelev': 'https://staging.cube.exchange/md/v0',
                            'osmium': 'https://staging.cube.exchange/os/v0',
                        },
                    },
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
                'www': 'https://www.cube.exchange/',
                'doc': 'https://cubexch.gitbook.io/cube-api',
                'fees': 'https://www.cube.exchange/fees',
            },
            'version': 'v0',
            'api': {
                'rest': {
                    'iridium': {
                        'public': {
                            'get': {
                                '/markets': 1,
                            },
                        },
                        'private': {
                            'get': {
                                '/users/check': 1,
                                '/users/info': 1,
                                '/users/positions': 1,
                                '/users/transfers': 1,
                                '/users/deposits': 1,
                                '/users/withdrawals': 1,
                                '/users/subaccount/{subaccountId}/orders': 1,
                                '/users/subaccount/{subaccountId}/fills': 1,
                                '/users/fee-estimate/{market_id}': 1,
                            },
                            'post': {
                                '/users/subaccounts': 1,
                                '/users/subaccounts/{subaccount_id}': 1,
                                '/users/subaccounts/{subaccount_id}/withdrawals': 1,
                            },
                        },
                    },
                    'mendelev': {
                        'public': {
                            'get': {
                                '/book/{market_id}/snapshot': 1,
                                '/parsed/book/{market_symbol}/snapshot': 1,
                                '/book/{market_id}/recent-trades': 1,
                                '/parsed/book/{market_symbol}/recent-trades': 1,
                                '/tickers/snapshot': 1,
                                '/parsed/tickers': 1,
                            },
                        },
                    },
                    'osmium': {
                        'private': {
                            'get': {
                                '/orders': 1,
                            },
                            'delete': {
                                '/orders': 1,
                                '/order': 1,
                            },
                            'post': {
                                '/order': 1,
                            },
                            'patch': {
                                '/order': 1,
                            },
                        },
                    },
                },
            },
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
                'fetchCanceledOrders': false,
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
                'fetchOHLCV': 'emulated',
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
                'fetchStatus': false,
                'fetchTicker': true,
                'fetchTickers': false,
                'fetchTrades': true,
                'fetchTradingFee': true,
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
            'timeframes': {
                '1m': '1minute',
                '1h': '1hour',
                '1d': '1day',
                '1M': '1month',
                '1y': '1year',
            },
            'timeout': 10000,
            'rateLimit': 100,
            'userAgent': false,
            'verbose': false,
            'markets': undefined,
            'symbols': undefined,
            'currencies': undefined,
            'markets_by_id': undefined,
            'currencies_by_id': undefined,
            'apiKey': '',
            'secret': '',
            'password': '',
            'uid': '',
            'options': {
                'environment': 'production',
                'subaccountId': undefined,
                'networks': {
                    'BTC': '1',
                    'ERC20': '2',
                    'SPL': '3',
                    'DOGE': '4',
                    'TAO': '5',
                    'LTC': '6',
                    'tBTC': '7',
                    'tETH': '8',
                },
                'impliedNetworks': {
                    'ETH': { 'ERC20': '2' },
                    'SOL': { 'SPL': '3' },
                },
                'legalMoney': {
                    'USD': true,
                },
            },
            'pro': false,
            'fees': {
                'trading': {
                    'maker': this.parseNumber ('0.0004'),
                    'taker': this.parseNumber ('0.0008'),
                },
            },
            'commonCurrencies': undefined,
            'precisionMode': DECIMAL_PLACES,
            'exceptions': {
                'exact': {
                    'Must be authorized': AuthenticationError,
                    'Market not found': BadRequest,
                    'Insufficient funds': InsufficientFunds,
                    'Order not found': BadRequest,
                },
            },
        });
    }

    generateSignature (): any {
        const timestamp = this.seconds ();
        const timestampBytes = this.numberToLE (timestamp, 8);
        const secretKeyBytes = this.base16ToBinary (this.secret);
        const message = this.binaryConcat (this.encode ('cube.xyz'), timestampBytes);
        const signature = this.hmac (message, secretKeyBytes, sha256, 'base64');
        return [ signature, timestamp ];
    }

    generateAuthenticationHeaders () {
        const [ signature, timestamp ] = this.generateSignature ();
        return {
            'x-api-key': this.apiKey,
            'x-api-signature': signature,
            'x-api-timestamp': timestamp.toString (),
        };
    }

    authenticateRequest (request: any): any {
        const headers = this.safeDict (request, 'headers', {});
        request['headers'] = this.extend (headers, this.generateAuthenticationHeaders ());
        return request;
    }

    sign (path: string, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        const environment = this.options['environment'];
        let endpoint = undefined;
        let apiArray = undefined;
        if (typeof api === 'string') {
            apiArray = api.split (',');
        } else {
            apiArray = api;
        }
        for (let i = 0; i < apiArray.length; i++) {
            if (api[i] === 'iridium') {
                endpoint = 'iridium';
                break;
            } else if (api[i] === 'mendelev') {
                endpoint = 'mendelev';
                break;
            } else if (api[i] === 'osmium') {
                endpoint = 'osmium';
                break;
            }
        }
        const baseUrl = this.urls['api']['rest'][environment][endpoint];
        let url = baseUrl + this.implodeParams (path, params);
        params = this.omit (params, this.extractParams (path));
        const methods = [ 'GET', 'HEAD' ];
        let found = false;
        for (let i = 0; i < methods.length; i++) {
            if (methods[i] === method) {
                if (this.countItems (params) > 0) {
                    url += '?' + this.urlencode (params);
                }
                found = true;
                break;
            }
        }
        if (!found) {
            body = JSON.stringify (params);
        }
        found = false;
        for (let i = 0; i < apiArray.length; i++) {
            if (apiArray[i] === 'private') {
                found = true;
                break;
            }
        }
        if (found) {
            let request = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Referer': 'CCXT',
                },
            };
            request = this.authenticateRequest (request);
            headers = request['headers'];
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }

    setSandboxMode (enable) {
        if (enable === true) {
            this.options['environment'] = 'staging';
        } else {
            this.options['environment'] = 'production';
        }
    }

    async fetchMarketMeta (symbolOrSymbols: any = undefined) {
        let symbol = undefined;
        let marketId = undefined;
        let market = undefined;
        let symbols = undefined;
        let marketIds = undefined;
        let markets = undefined;
        await this.loadMarkets ();
        if (symbolOrSymbols !== undefined) {
            if (typeof symbolOrSymbols === 'string') {
                marketId = symbolOrSymbols.toUpperCase ().replace ('/', '');
                market = this.market (marketId);
                marketId = market['id'];
                symbolOrSymbols = this.safeSymbol (marketId, market);
                symbol = symbolOrSymbols;
                return {
                    'symbol': symbol,
                    'marketId': marketId,
                    'market': market,
                    'symbols': symbols,
                    'marketIds': marketIds,
                    'markets': markets,
                };
            } else if (Array.isArray (symbolOrSymbols)) {
                marketIds = [];
                markets = [];
                for (let i = 0; i < symbolOrSymbols.length; i++) {
                    marketId = symbolOrSymbols[i].toUpperCase ().replace ('/', '');
                    market = this.market (marketId);
                    marketId = market['id'];
                    symbolOrSymbols[i] = this.safeSymbol (marketId, market);
                    marketIds.push (marketId);
                    markets.push (market);
                }
                symbolOrSymbols = this.marketSymbols (symbolOrSymbols);
                symbols = symbolOrSymbols;
                return {
                    'symbol': symbol,
                    'marketId': marketId,
                    'market': market,
                    'symbols': symbols,
                    'marketIds': marketIds,
                    'markets': markets,
                };
            } else {
                throw new BadSymbol (this.id + ' symbolOrSymbols must be a string or an array of strings');
            }
        }
        return {
            'symbol': symbol,
            'marketId': marketId,
            'market': market,
            'symbols': symbols,
            'marketIds': marketIds,
            'markets': markets,
        };
    }

    injectSubAccountId (request, params) {
        if (this.safeInteger (params, 'subaccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger (params, 'subaccountId');
        } else if (this.safeInteger (params, 'subAccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger (params, 'subAccountId');
        } else if (this.safeInteger (this.options, 'subaccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger (this.options, 'subaccountId');
        } else if (this.safeInteger (this.options, 'subAccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger (this.options, 'subAccountId');
        }
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
        const response = await this.restIridiumPublicGetMarkets (params);
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
        //         ...
        //     }
        // }
        const assets = this.safeList (this.safeDict (response, 'result'), 'assets');
        return this.parseCurrencies (assets);
    }

    parseCurrencies (assets: Dictionary<any>): Currencies {
        const result = {};
        for (let i = 0; i < assets.length; i++) {
            const rawCurrency = assets[i];
            const id = String (this.safeString (rawCurrency, 'symbol')).toLowerCase ();
            const code = String (id).toUpperCase ();
            const name = this.safeString (this.safeDict (rawCurrency, 'metadata'), 'currencyName');
            const networkId = this.safeString (rawCurrency, 'sourceId');
            const networks = {};
            networks[networkId] = networkId;
            const currency = this.safeCurrencyStructure ({
                'info': rawCurrency,
                'id': id,
                'numericId': this.safeInteger (rawCurrency, 'assetId'),
                'code': code,
                'precision': this.safeInteger (rawCurrency, 'decimals'),
                'type': this.safeStringLower (rawCurrency, 'assetType'),
                'name': name,
                'active': this.safeInteger (rawCurrency, 'status') === 1,
                'deposit': false,
                'withdraw': true,
                'fee': undefined, // TODO: What kind of fee is this? !!!
                'fees': {},
                'networks': networks,
                'limits': {
                    'amount': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'withdraw': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'deposit': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
            });
            result[code] = currency;
        }
        return result;
    }

    async fetchMarkets (params = {}): Promise<Market[]> {
        /**
         * @method
         * @name cube#fetchMarkets
         * @description retrieves data on all markets for cube
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#markets
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} an array of objects representing market data
         */
        const response = await this.restIridiumPublicGetMarkets (params);
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
        const rawMarkets = this.safeList (this.safeDict (response, 'result'), 'markets');
        const rawAssets = this.safeList (this.safeDict (response, 'result'), 'assets');
        this.currencies = this.parseCurrencies (rawAssets);
        return this.parseMarkets (rawMarkets);
    }

    parseMarkets (markets: Dictionary<any>): Market[] {
        const result = [];
        for (let i = 0; i < markets.length; i++) {
            const market = this.parseMarket (markets[i]);
            result.push (market);
        }
        return result;
    }

    parseMarket (market: Dictionary<any>): Market {
        const id = String (this.safeString (market, 'symbol')).toUpperCase ();
        const currenciesByNumericId = {};
        for (let i = 0; i < this.countItems (this.currencies); i++) {
            const currenciesKeysArray = Object.keys (this.currencies);
            const targetCurrency = this.safeValue (this.currencies, currenciesKeysArray[i]);
            const targetCurrencyNumericId = this.safeInteger (targetCurrency, 'numericId');
            currenciesByNumericId[targetCurrencyNumericId] = targetCurrency;
        }
        const baseAsset = currenciesByNumericId[this.safeInteger (market, 'baseAssetId')];
        const quoteAsset = currenciesByNumericId[this.safeInteger (market, 'quoteAssetId')];
        const baseSymbol = this.safeString (this.safeDict (baseAsset, 'info'), 'symbol');
        const quoteSymbol = this.safeString (this.safeDict (quoteAsset, 'info'), 'symbol');
        const marketSymbol = baseSymbol + quoteSymbol;
        return this.safeMarketStructure ({
            'id': id,
            'lowercaseId': id,
            'symbol': marketSymbol,
            'base': this.safeString (baseAsset, 'code'),
            'quote': this.safeString (quoteAsset, 'code'),
            'settle': undefined,
            'baseId': this.safeString (baseAsset, 'id'),
            'quoteId': this.safeString (quoteAsset, 'id'),
            'settleId': undefined,
            'type': 'spot',
            'spot': true,
            'margin': false,
            'swap': false,
            'future': false,
            'option': false,
            'active': this.safeInteger (market, 'status') === 1,
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
                'amount': this.countDecimalPlaces (this.safeString (market, 'quantityTickSize')),
                'price': this.countDecimalPlaces (this.safeString (market, 'priceTickSize')),
                'cost': undefined,
                'base': undefined,
                'quote': undefined,
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
            'info': market,
        });
    }

    async fetchOrderBook (symbol: string, limit: Int = undefined, params = {}): Promise<OrderBook> {
        /**
         * @method
         * @name cube#fetchOrderBook
         * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#book-market_id-snapshot
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-book-market_symbol-snapshot
         * @param {string} symbol unified symbol of the market to fetch the order book for
         * @param {int} [limit] the maximum amount of order book entries to return
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const request = { 'market_symbol': symbol };
        const response = await this.restMendelevPublicGetParsedBookMarketSymbolSnapshot (this.extend (request, params));
        //
        // {
        //   "result":{
        //       "ticker_id":"BTCUSDC",
        //       "timestamp":1711544655331,
        //       "bids":[
        //           [
        //               70635.6,
        //               0.01
        //           ]
        //       ],
        //       "asks":[
        //           [
        //               70661.8,
        //               0.1421
        //           ]
        //       ]
        //   }
        // }
        //
        const rawBids = this.safeList (this.safeDict (response, 'result'), 'bids', []);
        const rawAsks = this.safeList (this.safeDict (response, 'result'), 'asks', []);
        const bids = [];
        for (let i = 0; i < this.countItems (rawBids); i++) {
            if (!(this.parseToNumeric (rawBids[i][0]) <= 0 || this.parseToNumeric (rawBids[i][1]) <= 0)) {
                bids.push (rawBids[i]);
            }
        }
        const asks = [];
        for (let i = 0; i < this.countItems (rawAsks); i++) {
            if (!(this.parseToNumeric (rawAsks[i][0]) <= 0 || this.parseToNumeric (rawAsks[i][1]) <= 0)) {
                asks.push (rawAsks[i]);
            }
        }
        const rawOrderbook = {
            'bids': bids,
            'asks': asks,
        };
        const timestamp = this.safeInteger (this.safeDict (response, 'result'), 'timestamp'); // Don't use this.safeTimestamp()
        return this.parseOrderBook (rawOrderbook, symbol, timestamp, 'bids', 'asks');
    }

    parseBidsAsks (bidasks, priceKey: IndexType = 0, amountKey: IndexType = 1, countOrIdKey: IndexType = 2): any[] {
        return bidasks;
    }

    async fetchTicker (symbol: string, params = {}): Promise<Ticker> {
        /**
         * @method
         * @name cube#fetchTicker
         * @description fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-tickers
         * @param {string} symbol unified symbol of the market to fetch the ticker for
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const tickers = await this.fetchTickers ([ symbol ], params);
        const ticker = this.safeValue (tickers, symbol, undefined);
        if (ticker === undefined) {
            throw new BadSymbol (this.id + ' fetchTicker() symbol ' + symbol + ' not found');
        }
        return ticker;
    }

    parseTicker (ticker: Dictionary<any>, market: Market = undefined): Ticker {
        //
        //       {
        //         ticker_id: "JTOUSDC",
        //         base_currency: "JTO",
        //         quote_currency: "USDC",
        //         timestamp: 1713217334960,
        //         last_price: 2.6624,
        //         base_volume: 337.12,
        //         quote_volume: 961.614166,
        //         bid: 2.6627,
        //         ask: 2.6715,
        //         high: 3.0515,
        //         low: 2.6272,
        //         open: 2.8051,
        //       }
        //
        const timestamp = this.safeInteger (ticker, 'timestamp');
        return this.safeTicker ({
            'symbol': this.safeString (market, 'symbol'),
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'high': this.safeNumber (ticker, 'high'),
            'low': this.safeNumber (ticker, 'low'),
            'bid': this.safeNumber (ticker, 'bid'),
            'bidVolume': this.safeNumber (ticker, 'base_volume'),
            'ask': this.safeNumber (ticker, 'ask'),
            'askVolume': this.safeNumber (ticker, 'quote_volume'),
            'vwap': undefined,
            'open': this.safeNumber (ticker, 'open'),
            'close': undefined,
            'last': this.safeNumber (ticker, 'last_price'),
            'previousClose': undefined,
            'change': undefined,
            'percentage': undefined,
            'average': undefined,
            'baseVolume': this.safeNumber (ticker, 'base_volume'),
            'quoteVolume': this.safeNumber (ticker, 'quote_volume'),
            'info': ticker,
        }, market);
    }

    async fetchTickers (symbols: string[] = undefined, params = {}): Promise<Tickers> {
        /**
         * @method
         * @name cube#fetchTickers
         * @description fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each market
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-tickers
         * @param {string[]|undefined} symbols unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} a dictionary of [ticker structures]{@link https://docs.ccxt.com/#/?id=ticker-structure}
         */
        const meta = await this.fetchMarketMeta (symbols);
        symbols = this.safeList (meta, 'symbols');
        const response = await this.restMendelevPublicGetParsedTickers (params);
        //
        //  {
        //     result: [
        //       {
        //     ticker_id: "JTOUSDC",
        //     base_currency: "JTO",
        //     quote_currency: "USDC",
        //     timestamp: 1713216571697,
        //     last_price: 2.6731,
        //     base_volume: 333.66,
        //     quote_volume: 953.635304,
        //     bid: 2.6653,
        //     ask: 2.6761,
        //     high: 3.0515,
        //     low: 2.6272,
        //     open: 2.8231,
        //      },
        //    ],
        //  }
        //
        const rawTickers = this.safeList (response, 'result', []);
        const result = {};
        for (let i = 0; i < rawTickers.length; i++) {
            const rawTicker = rawTickers[i];
            const marketId = this.marketId (this.safeString (rawTicker, 'ticker_id').toUpperCase ().replace ('/', ''));
            const market = this.market (marketId);
            const symbol = this.safeString (market, 'symbol');
            const ticker = this.parseTicker (rawTicker, market);
            result[symbol] = ticker;
        }
        return this.filterByArrayTickers (result, 'symbol', symbols);
    }

    async fetchOHLCV (symbol: string, timeframe = '1m', since: Int = undefined, limit: Int = undefined, params = {}): Promise<OHLCV[]> {
        /**
         * @method
         * @name cube#fetchOHLCV
         * @description fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-tickers
         * @param {string} symbol unified symbol of the market to fetch OHLCV data for
         * @param {string} timeframe the length of time each candle represents
         * @param {int} [since] timestamp in ms of the earliest candle to fetch
         * @param {int} [limit] the maximum amount of candles to fetch
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {int[][]} A list of candles ordered as timestamp, open, high, low, close, volume
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const market = this.safeDict (meta, 'market');
        const request = {
            'duration': this.timeframes[timeframe],
        };
        if (limit !== undefined) {
            request['limit'] = limit;
        }
        if (since !== undefined) {
            request['startTime'] = since;
        }
        const response = await this.restMendelevPublicGetParsedTickers (this.extend (request, params));
        const data = this.safeValue (response, 'result', []);
        //
        //  {
        //     result: [
        //       {
        //     ticker_id: "JTOUSDC",
        //     base_currency: "JTO",
        //     quote_currency: "USDC",
        //     timestamp: 1713216571697,
        //     last_price: 2.6731,
        //     base_volume: 333.66,
        //     quote_volume: 953.635304,
        //     bid: 2.6653,
        //     ask: 2.6761,
        //     high: 3.0515,
        //     low: 2.6272,
        //     open: 2.8231,
        //      },
        //    ],
        //  }
        //
        return this.parseOHLCVs (data, market, timeframe, since, limit);
    }

    parseOHLCV (ohlcv, market: Market = undefined) : OHLCV {
        //
        //       {
        //         ticker_id: "JTOUSDC",
        //         base_currency: "JTO",
        //         quote_currency: "USDC",
        //         timestamp: 1713217334960,
        //         last_price: 2.6624,
        //         base_volume: 337.12,
        //         quote_volume: 961.614166,
        //         bid: 2.6627,
        //         ask: 2.6715,
        //         high: 3.0515,
        //         low: 2.6272,
        //         open: 2.8051,
        //       }
        //
        return [
            Math.round (this.safeInteger (ohlcv, 'timestamp') / 1000), // timestamp should be a multiple of 60 seconds (1 minute)' - js/src/test/Exchange/base/test.sharedMethods.js 378
            this.safeNumber (ohlcv, 'open'),
            this.safeNumber (ohlcv, 'high'),
            this.safeNumber (ohlcv, 'low'),
            this.safeNumber (ohlcv, 'last_price'),
            this.safeNumber (ohlcv, 'quote_volume'),
        ];
    }

    async fetchBalance (params = {}): Promise<Balances> {
        /**
         * @method
         * @name cube#fetchBalance
         * @description query for balance and get the amount of funds available for trading or funds locked in orders
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#users-positions
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} a [balance structure]{@link https://github.com/ccxt/ccxt/wiki/Manual#order-structure}
         */
        await this.fetchMarketMeta ();
        const response = await this.restIridiumPrivateGetUsersPositions (params);
        const subaccountId = this.safeString (this.options, 'subaccountId');
        const allOrders = await this.fetchOrdersAllMarkets ();
        const result = this.safeList (this.safeDict (this.safeDict (response, 'result'), subaccountId), 'inner');
        return this.parseBalance (result, allOrders);
    }

    parseBalance (response: any, allOrders: any = undefined): Balances {
        const openOrders = [];
        const filledUnsettledOrders = [];
        const allMarketsByNumericId = {};
        for (let i = 0; i < this.countItems (this.markets_by_id); i++) {
            const marketArrayItem = Object.values (this.markets_by_id)[i];
            const market = marketArrayItem[0];
            const marketInfo = this.safeDict (market, 'info');
            const marketNumericId = this.safeString (marketInfo, 'marketId');
            allMarketsByNumericId[marketNumericId] = market;
        }
        const free = {};
        const used = {};
        const total = {};
        const currenciesByNumericId = {};
        for (let i = 0; i < this.countItems (this.currencies); i++) {
            const currenciesKeysArray = Object.keys (this.currencies);
            const targetCurrency = this.safeValue (this.currencies, currenciesKeysArray[i]);
            const targetCurrencyNumericId = this.safeInteger (targetCurrency, 'numericId');
            currenciesByNumericId[targetCurrencyNumericId] = targetCurrency;
        }
        for (let i = 0; i < this.countItems (response); i++) {
            const asset = response[i];
            const assetAmount = parseInt (this.safeString (asset, 'amount'));
            if (assetAmount > 0) {
                const assetNumericId = this.parseToInt (this.safeString (asset, 'assetId'));
                const currency = currenciesByNumericId[assetNumericId];
                const currencyPrecision = this.safeInteger (currency, 'precision');
                const assetSymbol = this.safeString (currency, 'code');
                total[assetSymbol] = assetAmount / 10 ** currencyPrecision;
                used[assetSymbol] = 0; // To prevent the 'parser' from adding 'null' when there are no orders holding an asset.
                free[assetSymbol] = 0; // To prevent the 'parser' from adding 'null' when there are no orders holding an asset.
            }
        }
        for (let i = 0; i < this.countItems (allOrders); i++) {
            const order = allOrders[i];
            const orderStatus = this.safeString (order, 'status');
            if (orderStatus === 'open') {
                openOrders.push (order);
            }
            if (orderStatus === 'filled') {
                const isSettled = this.safeString (order, 'settled');
                if (!isSettled) {
                    filledUnsettledOrders.push (order);
                }
            }
        }
        for (let i = 0; i < this.countItems (openOrders); i++) {
            const order = openOrders[i];
            const orderMarketId = this.safeString (order, 'marketId');
            const orderMarket = this.safeDict (allMarketsByNumericId, orderMarketId);
            const orderSide = this.safeString (order, 'side');
            const orderBaseToken = this.safeString (orderMarket, 'base');
            const orderQuoteToken = this.safeString (orderMarket, 'quote');
            const orderAmount = this.safeInteger (order, 'qty');
            const orderPrice = this.safeInteger (order, 'price');
            let targetToken = '';
            let lotSize = 0;
            if (orderSide === 'Ask') {
                targetToken = orderBaseToken;
                lotSize = this.safeInteger (this.safeDict (orderMarket, 'info'), 'baseLotSize');
            } else if (orderSide === 'Bid') {
                targetToken = orderQuoteToken;
                lotSize = this.safeInteger (this.safeDict (orderMarket, 'info'), 'quoteLotSize');
            }
            const targetCurrency = this.currency (targetToken);
            const targetCurrencyPrecision = this.safeInteger (targetCurrency, 'precision');
            let orderLockedAmount = 0;
            if (orderSide === 'Ask') {
                orderLockedAmount = orderAmount * lotSize / 10 ** targetCurrencyPrecision;
            } else if (orderSide === 'Bid') {
                orderLockedAmount = orderAmount * orderPrice * lotSize / 10 ** targetCurrencyPrecision;
            }
            used[targetToken] += orderLockedAmount;
            free[targetToken] = total[targetToken] - used[targetToken];
        }
        for (let i = 0; i < this.countItems (total); i++) { // For when an asset does not have any values locked in orders.
            const targetToken = Object.keys (total)[i];
            if (this.safeValue (free, targetToken) === 0) {
                const targetTokenTotalAmount = this.safeValue (total, targetToken);
                free[targetToken] = targetTokenTotalAmount;
            }
        }
        const timestamp = this.milliseconds ();
        const result = {
            'info': {
                'balances': response,
                'openOrders': openOrders,
                'filledUnsettledOrders': filledUnsettledOrders,
            },
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'free': free,
            'used': used,
            'total': total,
        };
        for (let i = 0; i < this.countItems (total); i++) {
            const assetSymbol = Object.keys (total)[i];
            const assetBalances = {
                'free': this.safeNumber (free, assetSymbol),
                'used': this.safeNumber (used, assetSymbol),
                'total': this.safeNumber (total, assetSymbol),
            };
            result[assetSymbol] = assetBalances;
        }
        return this.safeBalance (result);
    }

    async createOrder (symbol: string, type: OrderType, side: OrderSide, amount: number, price: Num = undefined, params = {}): Promise<Order> {
        /**
         * @method
         * @name cube#createOrder
         * @description create a trade order
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#order
         * @param {string} symbol unified symbol of the market to create an order in
         * @param {string} type 'market' or 'limit' or 'STOP_LOSS' or 'STOP_LOSS_LIMIT' or 'TAKE_PROFIT' or 'TAKE_PROFIT_LIMIT' or 'STOP'
         * @param {string} side 'buy' or 'sell'
         * @param {float} amount how much of you want to trade in units of the base currency
         * @param {float} [price] the price that the order is to be fullfilled, in units of the quote currency, ignored in market orders
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const marketId = this.safeString (meta, 'marketId');
        const market = this.safeDict (meta, 'market');
        const rawMarketId = this.safeInteger (this.safeDict (market, 'info'), 'marketId');
        const exchangeAmount = this.parseToInt (amount * 100);
        let exchangeOrderType = undefined;
        if (type === 'limit') {
            exchangeOrderType = 0;
        } else if (type === 'market') {
            exchangeOrderType = 1;
        } else if (type === 'MARKET_WITH_PROTECTION') {
            exchangeOrderType = 2;
        } else {
            throw new InvalidOrder ('OrderType was not recognized: ' + type);
        }
        let exchangeOrderSide = undefined;
        if (side === 'buy') {
            exchangeOrderSide = 0;
        } else if (side === 'sell') {
            exchangeOrderSide = 1;
        } else {
            throw new InvalidOrder ('OrderSide was not recognized: ' + side);
        }
        const timestamp = this.milliseconds ();
        const clientOrderIdFromParams = this.safeInteger (params, 'clientOrderId');
        const clientOrderId = (clientOrderIdFromParams === undefined) ? timestamp : clientOrderIdFromParams;
        const request = {
            'clientOrderId': clientOrderId,
            'requestId': this.safeInteger (params, 'requestId', 1),
            'marketId': rawMarketId,
            'quantity': exchangeAmount,
            'side': exchangeOrderSide,
            'timeInForce': this.safeInteger (params, 'timeInForce', 1),
            'orderType': exchangeOrderType,
            'selfTradePrevention': this.safeInteger (params, 'selfTradePrevention', 0),
            'postOnly': this.safeInteger (params, 'postOnly', 0),
            'cancelOnDisconnect': this.safeBool (params, 'cancelOnDisconnect', false),
        };
        if (price !== undefined) {
            request['price'] = this.parseToInt (price * 100);
        }
        this.injectSubAccountId (request, params);
        const response = await this.restOsmiumPrivatePostOrder (this.extend (request, params));
        const order = this.safeDict (this.safeDict (response, 'result'), 'Ack');
        const exchangeOrderId = this.safeString (order, 'exchangeOrderId');
        const fetchedOrder = await this.fetchRawOrder (exchangeOrderId, marketId);
        let orderStatus = 'filled';
        if (fetchedOrder !== undefined && this.safeString (fetchedOrder, 'exchangeOrderId') !== undefined) {
            orderStatus = 'open';
        }
        return this.parseOrder (
            {
                'order': order,
                'fetchedOrder': fetchedOrder,
                'orderStatus': orderStatus,
            },
            market as Market
        );
    }

    async cancelOrder (id: string, symbol: Str = undefined, params = {}) {
        /**
         * @method
         * @name cube#cancelOrder
         * @description cancels an open order
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#order-1
         * @param {string} id order id
         * @param {string} symbol unified symbol of the market the order was made in
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const marketId = this.safeString (meta, 'marketId');
        const market = this.safeDict (meta, 'market');
        const rawMarketId = this.safeInteger (this.safeDict (market, 'info'), 'marketId');
        let fetchedOrder = await this.fetchRawOrder (id, marketId);
        if (fetchedOrder === undefined) {
            fetchedOrder = {};
        }
        const clientOrderId = parseInt (this.safeString (fetchedOrder, 'clientOrderId'));
        const request = {
            'clientOrderId': clientOrderId,
            'requestId': this.safeInteger (params, 'requestId'),
            'marketId': rawMarketId,
        };
        this.injectSubAccountId (request, params);
        const response = await this.restOsmiumPrivateDeleteOrder (this.extend (request, params));
        return this.parseOrder (
            {
                'fetchedOrder': fetchedOrder,
                'cancellationResponse': response,
            },
            market as Market
        );
    }

    async cancelAllOrders (symbol: Str = undefined, params = {}) {
        /**
         * @method
         * @name cube#cancelAllOrders
         * @description cancel all open orders
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#orders-1
         * @param {string} symbol cube cancelAllOrders cannot setting symbol, it will cancel all open orders
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const market = this.safeDict (meta, 'market');
        const rawMarkeId = this.safeInteger (this.safeDict (market, 'info'), 'marketId');
        const request = {
            'marketId': rawMarkeId,
            'requestId': this.safeInteger (params, 'requestId', 1),
            'side': this.safeInteger (params, 'side', undefined),
        };
        this.injectSubAccountId (request, params);
        // TODO wrong response, it is needed to return the cancelled orders!!!
        return await this.restOsmiumPrivateDeleteOrders (this.extend (request, params));
    }

    async fetchOrder (id: string, symbol: Str = undefined, params = {}): Promise<Order> {
        /**
         * @method
         * @name cube#fetchOrder
         * @description fetches information on an order made by the user
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#orders
         * @param {string} symbol unified symbol of the market the order was made in
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const market = this.safeDict (meta, 'market') as Market;
        const request = {};
        this.injectSubAccountId (request, params);
        const rawResponse = await this.restOsmiumPrivateGetOrders (this.extend (request, params));
        //
        //  {
        //      "result": {
        //          "orders": [
        //              {
        //                  "clientOrderId": 1713422528124,
        //                  "exchangeOrderId": 1295024967,
        //                  "marketId": 100006,
        //                  "price": 11000,
        //                  "orderQuantity": 1,
        //                  "side": 0,
        //                  "timeInForce": 1,
        //                  "orderType": 0,
        //                  "remainingQuantity": 1,
        //                  "restTime": 1713422528222471490,
        //                  "subaccountId": 38393,
        //                  "cumulativeQuantity": 0,
        //                  "cancelOnDisconnect": false
        //              },
        //              ...
        //          ]
        //      }
        //  }
        //
        const result = this.safeList (this.safeDict (rawResponse, 'result'), 'orders');
        const order = await this.parseOrder ({ 'fetchedOrder': this.safeValue (result, 0) }, market);
        if (order !== undefined) {
            return order;
        }
        throw new OrderNotFound ('Order "' + id + '" not found.');
    }

    async fetchRawOrder (id, symbol = undefined, params = {}) {
        /**
         * @method
         * @name cube#fetchRawOrder
         * @description fetches information on an order made by the user
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#orders
         * @param {string} symbol unified symbol of the market the order was made in
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const request = {};
        this.injectSubAccountId (request, params);
        const rawResponse = await this.restOsmiumPrivateGetOrders (this.extend (request, params));
        //
        // {
        //    "result": {
        //        "orders": [
        //            {
        //                "clientOrderId": 1713422528124,
        //                "exchangeOrderId": 1295024967,
        //                "marketId": 100006,
        //                "price": 11000,
        //                "orderQuantity": 1,
        //                "side": 0,
        //                "timeInForce": 1,
        //                "orderType": 0,
        //                "remainingQuantity": 1,
        //                "restTime": 1713422528222471490,
        //                "subaccountId": 38393,
        //                "cumulativeQuantity": 0,
        //                "cancelOnDisconnect": false
        //            },
        //            ...
        //        ]
        //    }
        // }
        //
        const result = this.safeList (this.safeDict (rawResponse, 'result'), 'orders');
        let order = undefined;
        for (let i = 0; i < this.countItems (result); i++) {
            const exchangeOrderId = this.safeString (result[i], 'exchangeOrderId');
            if (id === exchangeOrderId) {
                order = result[i];
                break;
            }
        }
        return order;
    }

    async fetchOrders (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Order[]> {
        /**
         * @method
         * @name cube#fetchOrders
         * @description fetch all unfilled currently open orders
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        const market = this.safeMarket (this.safeString (meta, 'marketId'), this.safeDict (meta, 'market') as Market, '/');
        const request = {};
        this.injectSubAccountId (request, params);
        const response = await this.restIridiumPrivateGetUsersSubaccountSubaccountIdOrders (this.extend (request, params));
        const rawOrders = this.safeList (this.safeDict (response, 'result'), 'orders');
        return this.parseOrders (rawOrders, market, since, limit);
    }

    parseOrders (orders: object, market: Market = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Order[] {
        //
        // the value of orders is either a dict or a list
        //
        // dict
        //
        //     {
        //         'id1': { ... },
        //         'id2': { ... },
        //         'id3': { ... },
        //         ...
        //     }
        //
        // list
        //
        //     [
        //         { 'id': 'id1', ... },
        //         { 'id': 'id2', ... },
        //         { 'id': 'id3', ... },
        //         ...
        //     ]
        //
        let results = [];
        if (Array.isArray (orders)) {
            for (let i = 0; i < orders.length; i++) {
                const order = this.extend (this.parseOrder ({ 'fetchedOrder': orders[i] }, market), params);
                results.push (order);
            }
        } else {
            const ids = Object.keys (orders);
            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const order = this.extend (this.parseOrder ({ 'fetchedOrder': orders[id] }, market), params);
                results.push (order);
            }
        }
        results = this.sortBy (results, 'timestamp');
        const symbol = (market !== undefined) ? market['symbol'] : undefined;
        return this.filterBySymbolSinceLimit (results, symbol, since, limit);
    }

    parseOrder (order, market: Market = undefined) {
        // let transactionType = '';
        const fetchedOrder = this.safeDict (order, 'fetchedOrder');
        const mainOrderObject = this.safeDict (order, 'cancellationResponse', this.safeDict (order, 'order'));
        let timestampInNanoseconds = this.safeNumber (this.safeDict (this.safeDict (mainOrderObject, 'result'), 'Ack'), 'transactTime');
        if (timestampInNanoseconds === undefined) {
            timestampInNanoseconds = this.safeNumber (mainOrderObject, 'transactTime');
        }
        if (timestampInNanoseconds === undefined) {
            timestampInNanoseconds = this.safeNumber (fetchedOrder, 'restTime');
        }
        if (timestampInNanoseconds === undefined) {
            timestampInNanoseconds = this.safeNumber (order, 'restTime');
        }
        if (timestampInNanoseconds === undefined) {
            timestampInNanoseconds = this.safeNumber (order, 'createdAt');
        }
        const timestampInMilliseconds = timestampInNanoseconds / 1000000;
        // let orderStatus = ''; // TODO fix !!!
        // if (Object.keys (fetchedOrder).'length === 0) {
        //     orderStatus = 'canceled'
        // } else {
        //     orderStatus = 'open'
        // }
        let result = {};
        // TODO Improve this part to reuse the original response from create, cancel as much as possible, instead of relying in the fetched order!!!
        if (fetchedOrder && !(fetchedOrder.length === 0)) {
            const exchangeOrderId = this.safeInteger (fetchedOrder, 'exchangeOrderId');
            const clientOrderId = this.safeInteger (fetchedOrder, 'clientOrderId');
            const orderSide = this.safeInteger (fetchedOrder, 'side') === 0 ? 'buy' : 'sell';
            const price = this.safeInteger (fetchedOrder, 'price') / 100;
            const symbol = this.safeString (market, 'symbol');
            const amount = this.safeInteger (fetchedOrder, 'orderQuantity');
            const remainingAmount = this.safeInteger (fetchedOrder, 'remainingQuantity');
            const filledAmount = amount - remainingAmount;
            let currency = '';
            if (orderSide === 'buy') {
                currency = this.safeString (market, 'base');
            } else {
                currency = this.safeString (market, 'quote');
            }
            let orderType = '';
            const orderTypeRaw = this.safeInteger (fetchedOrder, 'orderType');
            if (orderTypeRaw === 0) {
                orderType = 'limit';
            } else if (orderTypeRaw === 1) {
                orderType = 'market';
            } else if (orderTypeRaw === 2) {
                orderType = 'MARKET_WITH_PROTECTION';
            } else {
                throw new InvalidOrder ('OrderType was not recognized while parsing: ' + orderTypeRaw);
            }
            let timeInForce = '';
            const timeInForceRaw = this.safeInteger (fetchedOrder, 'timeInForce');
            if (timeInForceRaw === 0) {
                timeInForce = 'IOC';
            } else if (timeInForceRaw === 1) {
                timeInForce = 'GTC';
            } else if (timeInForceRaw === 2) {
                timeInForce = 'FOK';
            } else {
                throw new InvalidOrder ('TimeInForce was not recognized while parsing: ' + timeInForceRaw);
            }
            const tradeFeeRatios = this.safeString (this.fees, 'trading');
            const rate = orderSide === 'buy' ? this.safeString (tradeFeeRatios, 'maker') : this.safeString (tradeFeeRatios, 'taker');
            const decimalAmount = amount / 100;
            const decimalFilledAmount = filledAmount / 100;
            const decimalRemainingAmount = remainingAmount / 100;
            const cost = filledAmount * price;
            const feeCost = decimalAmount * parseFloat (rate);
            result = {
                'id': exchangeOrderId,
                'clientOrderId': clientOrderId,
                'datetime': this.iso8601 (timestampInMilliseconds),
                'timestamp': timestampInMilliseconds,
                'lastTradeTimestamp': timestampInMilliseconds,
                'status': 'open',
                'symbol': symbol,
                'type': orderType,
                'timeInForce': timeInForce,
                'side': orderSide,
                'price': price,
                'average': 0.06917684,
                'amount': decimalAmount,
                'filled': decimalFilledAmount,
                'remaining': decimalRemainingAmount,
                'cost': cost,
                'trades': [],  // TODO: Implement trades
                'fee': {
                    'currency': currency, // a deduction from the asset received in this trade
                    'cost': feeCost,
                    'rate': rate,
                },
                'info': {
                    'mainOrderObjetc': mainOrderObject,
                    'fetchedOrder': fetchedOrder,
                },
            };
        }
        return this.safeOrder (result);
    }

    async fetchOpenOrders (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}) {
        /**
         * @method
         * @name cube#fetchOpenOrders
         * @description fetch all unfilled currently open orders
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        const market = this.safeDict (meta, 'market');
        const request = {};
        this.injectSubAccountId (request, params);
        const response = await this.restOsmiumPrivateGetOrders (this.extend (request, params));
        const rawOrders = this.safeList (this.safeDict (response, 'result'), 'orders');
        return this.parseOrders (rawOrders, market as Market, since, limit);
    }

    async fetchOrdersAllMarkets (since = undefined, limit = undefined) {
        /**
         * @method
         * @name cube#fetchOrdersAllMarkets
         * @description fetch all orders from all markets
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        const request = {};
        this.injectSubAccountId (request, {});
        const response = await this.restIridiumPrivateGetUsersSubaccountSubaccountIdOrders (this.extend (request));
        const rawOrders = this.safeList (this.safeDict (response, 'result'), 'orders');
        return rawOrders;
    }

    async fetchTrades (symbol: string, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Trade[]> {
        /**
         * @method
         * @name cube#fetchTrades
         * @description get the list of most recent trades for a particular symbol
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#book-market_id-recent-trades
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-book-market_symbol-recent-trades
         * @param {string} symbol unified symbol of the market to fetch trades for
         * @param {int} [since] timestamp in ms of the earliest trade to fetch
         * @param {int} [limit] the maximum number of trades to fetch
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {int} params.lastId order id
         * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const market = this.safeDict (meta, 'market');
        const rawMarketId = this.safeString (this.safeDict (market, 'info'), 'marketId');
        const rawMarketSymbol = this.safeString (this.safeDict (market, 'info'), 'symbol');
        let request = undefined;
        request = {
            'market_id': rawMarketId,
        };
        const recentTradesResponse = await this.restMendelevPublicGetBookMarketIdRecentTrades (this.extend (request, params));
        //
        // {
        //     "result":{
        //         "trades":[
        //             {
        //                 "tradeId":1192726,
        //                 "price":25730,
        //                 "aggressingSide":1,
        //                 "restingExchangeOrderId":775000423,
        //                 "fillQuantity":2048,
        //                 "transactTime":1710261845127064300,
        //                 "aggressingExchangeOrderId":775000298
        //             },
        //             {
        //                 "tradeId":1192723,
        //                 "price":25730,
        //                 "aggressingSide":0,
        //                 "restingExchangeOrderId":775000298,
        //                 "fillQuantity":5000,
        //                 "transactTime":1710261844303742500,
        //                 "aggressingExchangeOrderId":774996895
        //             }
        //         ]
        //     }
        // }
        //
        request = {
            'market_symbol': rawMarketSymbol,
        };
        const parsedRecentTradesResponse = await this.restMendelevPublicGetParsedBookMarketSymbolRecentTrades (this.extend (request, params));
        //
        // {
        //     "result":{
        //         "ticker_id":"BTCUSDC",
        //         "trades":[
        //             {
        //                 "id":1106939,
        //                 "p":63565.6,
        //                 "q":0.01,
        //                 "side":"Ask",
        //                 "ts":1711153560907
        //             },
        //             {
        //                 "id":1107084,
        //                 "p":63852.9,
        //                 "q":0.01,
        //                 "side":"Bid",
        //                 "ts":1711156552440
        //             }
        //         ]
        //     }
        // }
        //
        const rawTrades = {
            'trades': this.safeList (this.safeDict (recentTradesResponse, 'result'), 'trades'),
            'parsedTrades': this.safeList (this.safeDict (parsedRecentTradesResponse, 'result'), 'trades'),
        };
        return this.parseTrades (rawTrades, market);
    }

    parseTrades (rawTrades, market = undefined) {
        const parsedTradesObject = this.safeDict (rawTrades, 'parsedTrades');
        const finalTrades = [];
        if (parsedTradesObject && typeof parsedTradesObject === 'object') {
            const parsedTrades = Object.values (parsedTradesObject);
            for (let i = 0; i < parsedTrades.length; i++) {
                const trade = parsedTrades[i];
                finalTrades.push (this.parseTrade (trade, market));
            }
        }
        return finalTrades;
    }

    parseTrade (trade, market = undefined) {
        let timestampSeconds = 0;
        if (trade['ts'] !== undefined) {
            timestampSeconds = this.safeInteger (trade, 'ts');
        } else if (trade['transactTime'] !== undefined) {
            const timestampNanoseconds = trade['transactTime'];
            timestampSeconds = timestampNanoseconds / 1000000;
        }
        const datetime = this.iso8601 (timestampSeconds);
        const tradeSide = this.safeString (trade, 'side');
        let side = '';
        if (tradeSide === 'Bid') {
            side = 'buy';
        } else if (tradeSide === 'Ask') {
            side = 'sell';
        }
        const marketSymbol = this.safeString (market, 'symbol');
        const price = parseFloat (this.safeString (trade, 'p'));
        const amount = parseFloat (this.safeString (trade, 'q'));
        return this.safeTrade ({
            'info': trade,
            'timestamp': timestampSeconds,
            'datetime': datetime,
            'symbol': marketSymbol,
            'id': this.safeString (trade, 'id'),
            'order': undefined,
            'type': undefined,
            'takerOrMaker': undefined,
            'side': side,
            'price': price,
            'amount': amount,
            'cost': undefined,
            'fee': undefined,
            'fees': [
                {
                    'cost': undefined,
                    'currency': undefined,
                    'rate': undefined,
                },
            ],
        }, market);
    }

    async fetchTradingFee (symbol: string, params = {}): Promise<TradingFeeInterface> {
        /**
         * @method
         * @name cube#fetchTradingFee
         * @description fetch the trading fees for a market
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#users-fee-estimate-market-id
         * @param {string} symbol unified market symbol
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} a [fee structure]{@link https://docs.ccxt.com/#/?id=fee-structure}
         */
        const meta = await this.fetchMarketMeta (symbol);
        symbol = this.safeString (meta, 'symbol');
        const market = this.safeDict (meta, 'market');
        const rawMarketId = this.safeInteger (this.safeDict (market, 'info'), 'marketId');
        const request = {
            'market_id': rawMarketId,
        };
        const response = await this.restIridiumPrivateGetUsersFeeEstimateMarketId (this.extend (request, params));
        // {
        //     "result": {
        //         "userKey": "123e4567-e89b-12d3-a456-426614174000",
        //         "makerFeeRatio": 0,
        //         "takerFeeRatio": 0
        //     }
        // }
        return {
            'info': response,
            'symbol': symbol,
            'maker': this.safeNumber (this.safeDict (response, 'result'), 'makerFeeRatio'),
            'taker': this.safeNumber (this.safeDict (response, 'result'), 'takerFeeRatio'),
            'percentage': undefined,
            'tierBased': undefined,
        };
    }

    async fetchMyTrades (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Trade[]> {
        throw new NotSupported (this.id + ' fetchMyTrades() is not supported yet');
    }

    async fetchClosedOrders (symbol: Str = undefined, since: Int = undefined, limit: Int = undefined, params = {}): Promise<Order[]> {
        if (this.has['fetchOrders']) {
            const orders = await this.fetchOrders (symbol, since, limit, params);
            return this.filterBy (orders, 'status', 'closed');
        }
        throw new NotSupported (this.id + ' fetchClosedOrders() is not supported yet');
    }

    async fetchStatus (params = {}) {
        throw new NotSupported (this.id + ' fetchStatus() is not supported yet');
    }

    async withdraw (code: string, amount: number, address: string, tag = undefined, params = {}): Promise<Transaction> {
        /**
         * @method
         * @name cube#withdraw
         * @description make a withdrawal
         * @see https://binance-docs.github.io/apidocs/spot/en/#withdraw-user_data
         * @param {string} code unified currency code
         * @param {float} amount the amount to withdraw
         * @param {string} address the address to withdraw to
         * @param {string} tag
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} a [transaction structure]{@link https://docs.ccxt.com/#/?id=transaction-structure}
         */
        throw new NotSupported (this.id + ' withdraw() is not supported yet');
    }

    countWithLoop (items) {
        let count = 0;
        for (let i = 0; i < items.length; i++) {
            count += 1;
        }
        return count;
    }

    countItems (input) {
        let count = 0;
        if (Array.isArray (input)) {
            count = this.countWithLoop (input);
        } else if (typeof input === 'object' && input !== null) {
            const keys = Object.keys (input);
            count = this.countWithLoop (keys);
        }
        return count;
    }

    countDecimalPlaces (number: any) {
        const numberString = number.toString ();
        if (numberString.indexOf ('.') === -1) {
            return 0;
        }
        const parts = numberString.split ('.');
        return parts[1].length;
    }
}
