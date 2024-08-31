
<a name="addMargin" id="addmargin"></a>

## addMargin
add margin

**Kind**: instance   
**Returns**: <code>object</code> - a [margin structure](https://docs.ccxt.com/#/?id=add-margin-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| amount | <code>float</code> | Yes | amount of margin to add |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexaddmargin)
* [binance](/exchanges/binance.md#binanceaddmargin)
* [bitget](/exchanges/bitget.md#bitgetaddmargin)
* [coinex](/exchanges/coinex.md#coinexaddmargin)
* [delta](/exchanges/delta.md#deltaaddmargin)
* [digifinex](/exchanges/digifinex.md#digifinexaddmargin)
* [exmo](/exchanges/exmo.md#exmoaddmargin)
* [gate](/exchanges/gate.md#gateaddmargin)
* [hitbtc](/exchanges/hitbtc.md#hitbtcaddmargin)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidaddmargin)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesaddmargin)
* [mexc](/exchanges/mexc.md#mexcaddmargin)
* [okx](/exchanges/okx.md#okxaddmargin)

---

<a name="borrowCrossMargin" id="borrowcrossmargin"></a>

## borrowCrossMargin
create a loan to borrow margin

**Kind**: instance   
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency to borrow |
| amount | <code>float</code> | Yes | the amount to borrow |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to borrow margin in a portfolio margin account |

##### Supported exchanges
* [binance](/exchanges/binance.md#binanceborrowcrossmargin)
* [bitget](/exchanges/bitget.md#bitgetborrowcrossmargin)
* [bybit](/exchanges/bybit.md#bybitborrowcrossmargin)
* [coinmetro](/exchanges/coinmetro.md#coinmetroborrowcrossmargin)
* [huobi](/exchanges/huobi.md#huobiborrowcrossmargin)
* [kucoin](/exchanges/kucoin.md#kucoinborrowcrossmargin)
* [okx](/exchanges/okx.md#okxborrowcrossmargin)

---

<a name="borrowIsolatedMargin" id="borrowisolatedmargin"></a>

## borrowIsolatedMargin
create a loan to borrow margin

**Kind**: instance   
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol, required for isolated margin |
| code | <code>string</code> | Yes | unified currency code of the currency to borrow |
| amount | <code>float</code> | Yes | the amount to borrow |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binanceborrowisolatedmargin)
* [bitget](/exchanges/bitget.md#bitgetborrowisolatedmargin)
* [bitmart](/exchanges/bitmart.md#bitmartborrowisolatedmargin)
* [coinex](/exchanges/coinex.md#coinexborrowisolatedmargin)
* [huobi](/exchanges/huobi.md#huobiborrowisolatedmargin)
* [kucoin](/exchanges/kucoin.md#kucoinborrowisolatedmargin)

---

<a name="borrowMargin" id="borrowmargin"></a>

## borrowMargin
create a loan to borrow margin

**Kind**: instance   
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency to borrow |
| amount | <code>float</code> | Yes | the amount to borrow |
| symbol | <code>string</code> | Yes | unified market symbol, required for isolated margin |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.rate | <code>string</code> | No | '0.0002' or '0.002' extra parameter required for isolated margin |

##### Supported exchanges
* [gate](/exchanges/gate.md#gateborrowmargin)
* [gate](/exchanges/gate.md#gateborrowmargin)

---

<a name="cancelAllOrders" id="cancelallorders"></a>

## cancelAllOrders
cancel all open orders in a market

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | alpaca cancelAllOrders cannot setting symbol, it will cancel all open orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacacancelallorders)
* [ascendex](/exchanges/ascendex.md#ascendexcancelallorders)
* [bigone](/exchanges/bigone.md#bigonecancelallorders)
* [binance](/exchanges/binance.md#binancecancelallorders)
* [bingx](/exchanges/bingx.md#bingxcancelallorders)
* [bitfinex](/exchanges/bitfinex.md#bitfinexcancelallorders)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2cancelallorders)
* [bitget](/exchanges/bitget.md#bitgetcancelallorders)
* [bitmart](/exchanges/bitmart.md#bitmartcancelallorders)
* [bitmex](/exchanges/bitmex.md#bitmexcancelallorders)
* [bitopro](/exchanges/bitopro.md#bitoprocancelallorders)
* [bitrue](/exchanges/bitrue.md#bitruecancelallorders)
* [bitso](/exchanges/bitso.md#bitsocancelallorders)
* [bitstamp](/exchanges/bitstamp.md#bitstampcancelallorders)
* [bitteam](/exchanges/bitteam.md#bitteamcancelallorders)
* [bitvavo](/exchanges/bitvavo.md#bitvavocancelallorders)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomcancelallorders)
* [bybit](/exchanges/bybit.md#bybitcancelallorders)
* [cex](/exchanges/cex.md#cexcancelallorders)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangecancelallorders)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalcancelallorders)
* [coinex](/exchanges/coinex.md#coinexcancelallorders)
* [coinlist](/exchanges/coinlist.md#coinlistcancelallorders)
* [coinsph](/exchanges/coinsph.md#coinsphcancelallorders)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcancelallorders)
* [cube](/exchanges/cube.md#cubecancelallorders)
* [delta](/exchanges/delta.md#deltacancelallorders)
* [deribit](/exchanges/deribit.md#deribitcancelallorders)
* [gate](/exchanges/gate.md#gatecancelallorders)
* [hitbtc](/exchanges/hitbtc.md#hitbtccancelallorders)
* [hollaex](/exchanges/hollaex.md#hollaexcancelallorders)
* [huobi](/exchanges/huobi.md#huobicancelallorders)
* [huobijp](/exchanges/huobijp.md#huobijpcancelallorders)
* [idex](/exchanges/idex.md#idexcancelallorders)
* [kraken](/exchanges/kraken.md#krakencancelallorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturescancelallorders)
* [kucoin](/exchanges/kucoin.md#kucoincancelallorders)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturescancelallorders)
* [latoken](/exchanges/latoken.md#latokencancelallorders)
* [lbank](/exchanges/lbank.md#lbankcancelallorders)
* [lykke](/exchanges/lykke.md#lykkecancelallorders)
* [mexc](/exchanges/mexc.md#mexccancelallorders)
* [ndax](/exchanges/ndax.md#ndaxcancelallorders)
* [oceanex](/exchanges/oceanex.md#oceanexcancelallorders)
* [onetrading](/exchanges/onetrading.md#onetradingcancelallorders)
* [phemex](/exchanges/phemex.md#phemexcancelallorders)
* [poloniex](/exchanges/poloniex.md#poloniexcancelallorders)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturescancelallorders)
* [tradeogre](/exchanges/tradeogre.md#tradeogrecancelallorders)
* [wazirx](/exchanges/wazirx.md#wazirxcancelallorders)
* [whitebit](/exchanges/whitebit.md#whitebitcancelallorders)
* [woo](/exchanges/woo.md#woocancelallorders)
* [woofipro](/exchanges/woofipro.md#woofiprocancelallorders)

---

<a name="cancelAllOrdersAfter" id="cancelallordersafter"></a>

## cancelAllOrdersAfter
dead man's switch, cancel all orders after the given timeout

**Kind**: instance   
**Returns**: <code>object</code> - the api result


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| timeout | <code>number</code> | Yes | time in milliseconds, 0 represents cancel the timer |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.type | <code>string</code> | No | spot or swap market |

##### Supported exchanges
* [bingx](/exchanges/bingx.md#bingxcancelallordersafter)
* [bitmex](/exchanges/bitmex.md#bitmexcancelallordersafter)
* [huobi](/exchanges/huobi.md#huobicancelallordersafter)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidcancelallordersafter)
* [kraken](/exchanges/kraken.md#krakencancelallordersafter)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturescancelallordersafter)
* [okx](/exchanges/okx.md#okxcancelallordersafter)
* [whitebit](/exchanges/whitebit.md#whitebitcancelallordersafter)
* [woo](/exchanges/woo.md#woocancelallordersafter)

---

<a name="cancelAllOrdersWs" id="cancelallordersws"></a>

## cancelAllOrdersWs
cancel all open orders in a market

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market to cancel orders in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecancelallordersws)
* [bitvavo](/exchanges/bitvavo.md#bitvavocancelallordersws)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcancelallordersws)
* [hitbtc](/exchanges/hitbtc.md#hitbtccancelallordersws)
* [okx](/exchanges/okx.md#okxcancelallordersws)
* [poloniex](/exchanges/poloniex.md#poloniexcancelallordersws)

---

<a name="cancelOrder" id="cancelorder"></a>

## cancelOrder
cancels an open order

**Kind**: instance   
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acecancelorder)
* [alpaca](/exchanges/alpaca.md#alpacacancelorder)
* [ascendex](/exchanges/ascendex.md#ascendexcancelorder)
* [bigone](/exchanges/bigone.md#bigonecancelorder)
* [binance](/exchanges/binance.md#binancecancelorder)
* [bingx](/exchanges/bingx.md#bingxcancelorder)
* [bit2c](/exchanges/bit2c.md#bit2ccancelorder)
* [bitbank](/exchanges/bitbank.md#bitbankcancelorder)
* [bitbns](/exchanges/bitbns.md#bitbnscancelorder)
* [bitfinex](/exchanges/bitfinex.md#bitfinexcancelorder)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2cancelorder)
* [bitflyer](/exchanges/bitflyer.md#bitflyercancelorder)
* [bitget](/exchanges/bitget.md#bitgetcancelorder)
* [bithumb](/exchanges/bithumb.md#bithumbcancelorder)
* [bitmart](/exchanges/bitmart.md#bitmartcancelorder)
* [bitmex](/exchanges/bitmex.md#bitmexcancelorder)
* [bitopro](/exchanges/bitopro.md#bitoprocancelorder)
* [bitrue](/exchanges/bitrue.md#bitruecancelorder)
* [bitso](/exchanges/bitso.md#bitsocancelorder)
* [bitstamp](/exchanges/bitstamp.md#bitstampcancelorder)
* [bitteam](/exchanges/bitteam.md#bitteamcancelorder)
* [bitvavo](/exchanges/bitvavo.md#bitvavocancelorder)
* [bl3p](/exchanges/bl3p.md#bl3pcancelorder)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomcancelorder)
* [blofin](/exchanges/blofin.md#blofincancelorder)
* [btcalpha](/exchanges/btcalpha.md#btcalphacancelorder)
* [btcbox](/exchanges/btcbox.md#btcboxcancelorder)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketscancelorder)
* [btcturk](/exchanges/btcturk.md#btcturkcancelorder)
* [bybit](/exchanges/bybit.md#bybitcancelorder)
* [cex](/exchanges/cex.md#cexcancelorder)
* [coinbase](/exchanges/coinbase.md#coinbasecancelorder)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangecancelorder)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalcancelorder)
* [coincheck](/exchanges/coincheck.md#coincheckcancelorder)
* [coinex](/exchanges/coinex.md#coinexcancelorder)
* [coinlist](/exchanges/coinlist.md#coinlistcancelorder)
* [coinmate](/exchanges/coinmate.md#coinmatecancelorder)
* [coinmetro](/exchanges/coinmetro.md#coinmetrocancelorder)
* [coinmetro](/exchanges/coinmetro.md#coinmetrocancelorder)
* [coinone](/exchanges/coinone.md#coinonecancelorder)
* [coinsph](/exchanges/coinsph.md#coinsphcancelorder)
* [coinspot](/exchanges/coinspot.md#coinspotcancelorder)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcancelorder)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcancelorder)
* [cube](/exchanges/cube.md#cubecancelorder)
* [currencycom](/exchanges/currencycom.md#currencycomcancelorder)
* [delta](/exchanges/delta.md#deltacancelorder)
* [deribit](/exchanges/deribit.md#deribitcancelorder)
* [digifinex](/exchanges/digifinex.md#digifinexcancelorder)
* [exmo](/exchanges/exmo.md#exmocancelorder)
* [gate](/exchanges/gate.md#gatecancelorder)
* [gemini](/exchanges/gemini.md#geminicancelorder)
* [hitbtc](/exchanges/hitbtc.md#hitbtccancelorder)
* [hollaex](/exchanges/hollaex.md#hollaexcancelorder)
* [huobi](/exchanges/huobi.md#huobicancelorder)
* [huobijp](/exchanges/huobijp.md#huobijpcancelorder)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidcancelorder)
* [idex](/exchanges/idex.md#idexcancelorder)
* [independentreserve](/exchanges/independentreserve.md#independentreservecancelorder)
* [indodax](/exchanges/indodax.md#indodaxcancelorder)
* [kraken](/exchanges/kraken.md#krakencancelorder)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturescancelorder)
* [kucoin](/exchanges/kucoin.md#kucoincancelorder)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturescancelorder)
* [kuna](/exchanges/kuna.md#kunacancelorder)
* [kuna](/exchanges/kuna.md#kunacancelorder)
* [latoken](/exchanges/latoken.md#latokencancelorder)
* [lbank](/exchanges/lbank.md#lbankcancelorder)
* [luno](/exchanges/luno.md#lunocancelorder)
* [lykke](/exchanges/lykke.md#lykkecancelorder)
* [mercado](/exchanges/mercado.md#mercadocancelorder)
* [mexc](/exchanges/mexc.md#mexccancelorder)
* [ndax](/exchanges/ndax.md#ndaxcancelorder)
* [novadax](/exchanges/novadax.md#novadaxcancelorder)
* [oceanex](/exchanges/oceanex.md#oceanexcancelorder)
* [okcoin](/exchanges/okcoin.md#okcoincancelorder)
* [okx](/exchanges/okx.md#okxcancelorder)
* [onetrading](/exchanges/onetrading.md#onetradingcancelorder)
* [p2b](/exchanges/p2b.md#p2bcancelorder)
* [paymium](/exchanges/paymium.md#paymiumcancelorder)
* [phemex](/exchanges/phemex.md#phemexcancelorder)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturescancelorder)
* [probit](/exchanges/probit.md#probitcancelorder)
* [timex](/exchanges/timex.md#timexcancelorder)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptocancelorder)
* [tradeogre](/exchanges/tradeogre.md#tradeogrecancelorder)
* [upbit](/exchanges/upbit.md#upbitcancelorder)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangecancelorder)
* [wazirx](/exchanges/wazirx.md#wazirxcancelorder)
* [whitebit](/exchanges/whitebit.md#whitebitcancelorder)
* [woo](/exchanges/woo.md#woocancelorder)
* [woofipro](/exchanges/woofipro.md#woofiprocancelorder)
* [yobit](/exchanges/yobit.md#yobitcancelorder)
* [zaif](/exchanges/zaif.md#zaifcancelorder)
* [zonda](/exchanges/zonda.md#zondacancelorder)

---

<a name="cancelOrderWs" id="cancelorderws"></a>

## cancelOrderWs
cancel multiple orders

**Kind**: instance   
**Returns**: <code>object</code> - an list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.cancelRestrictions | <code>string</code>, <code>undefined</code> | No | Supported values: ONLY_NEW - Cancel will succeed if the order status is NEW. ONLY_PARTIALLY_FILLED - Cancel will succeed if order status is PARTIALLY_FILLED. |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecancelorderws)
* [bitvavo](/exchanges/bitvavo.md#bitvavocancelorderws)
* [bybit](/exchanges/bybit.md#bybitcancelorderws)
* [cex](/exchanges/cex.md#cexcancelorderws)
* [hitbtc](/exchanges/hitbtc.md#hitbtccancelorderws)
* [okx](/exchanges/okx.md#okxcancelorderws)
* [poloniex](/exchanges/poloniex.md#poloniexcancelorderws)

---

<a name="cancelOrders" id="cancelorders"></a>

## cancelOrders
cancel multiple orders

**Kind**: instance   
**Returns**: <code>object</code> - an list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| ids | <code>Array&lt;string&gt;</code> | Yes | order ids |
| symbol | <code>string</code> | No | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint EXCHANGE SPECIFIC PARAMETERS |
| params.origClientOrderIdList | <code>Array&lt;string&gt;</code> | No | max length 10 e.g. ["my_id_1","my_id_2"], encode the double quotes. No space after comma |
| params.recvWindow | <code>Array&lt;int&gt;</code> | No |  |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecancelorders)
* [bingx](/exchanges/bingx.md#bingxcancelorders)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2cancelorders)
* [bitget](/exchanges/bitget.md#bitgetcancelorders)
* [bitmart](/exchanges/bitmart.md#bitmartcancelorders)
* [bitmex](/exchanges/bitmex.md#bitmexcancelorders)
* [bitopro](/exchanges/bitopro.md#bitoprocancelorders)
* [bitso](/exchanges/bitso.md#bitsocancelorders)
* [blofin](/exchanges/blofin.md#blofincancelorders)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketscancelorders)
* [bybit](/exchanges/bybit.md#bybitcancelorders)
* [coinbase](/exchanges/coinbase.md#coinbasecancelorders)
* [coinex](/exchanges/coinex.md#coinexcancelorders)
* [coinlist](/exchanges/coinlist.md#coinlistcancelorders)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcancelorders)
* [digifinex](/exchanges/digifinex.md#digifinexcancelorders)
* [huobi](/exchanges/huobi.md#huobicancelorders)
* [huobijp](/exchanges/huobijp.md#huobijpcancelorders)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidcancelorders)
* [kraken](/exchanges/kraken.md#krakencancelorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturescancelorders)
* [mexc](/exchanges/mexc.md#mexccancelorders)
* [oceanex](/exchanges/oceanex.md#oceanexcancelorders)
* [okcoin](/exchanges/okcoin.md#okcoincancelorders)
* [okx](/exchanges/okx.md#okxcancelorders)
* [onetrading](/exchanges/onetrading.md#onetradingcancelorders)
* [timex](/exchanges/timex.md#timexcancelorders)
* [woofipro](/exchanges/woofipro.md#woofiprocancelorders)

---

<a name="cancelOrdersForSymbols" id="cancelordersforsymbols"></a>

## cancelOrdersForSymbols
cancel multiple orders for multiple symbols

**Kind**: instance   
**Returns**: <code>object</code> - an list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| ids | <code>Array&lt;string&gt;</code> | Yes | order ids |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.clientOrderIds | <code>Array&lt;string&gt;</code> | No | client order ids |

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitcancelordersforsymbols)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcancelordersforsymbols)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidcancelordersforsymbols)
* [okx](/exchanges/okx.md#okxcancelordersforsymbols)

---

<a name="cancelOrdersWs" id="cancelordersws"></a>

## cancelOrdersWs
cancel multiple orders

**Kind**: instance   
**Returns**: <code>object</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| ids | <code>Array&lt;string&gt;</code> | Yes | order ids |
| symbol | <code>string</code> | Yes | not used by cex cancelOrders() |
| params | <code>object</code> | No | extra parameters specific to the cex api endpoint |

##### Supported exchanges
* [cex](/exchanges/cex.md#cexcancelordersws)
* [okx](/exchanges/okx.md#okxcancelordersws)
* [poloniex](/exchanges/poloniex.md#poloniexcancelordersws)

---

<a name="closeAllPositions" id="closeallpositions"></a>

## closeAllPositions
closes all open positions for a market type

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - A list of [position structures](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.productType | <code>string</code> | No | 'USDT-FUTURES', 'USDC-FUTURES', 'COIN-FUTURES', 'SUSDT-FUTURES', 'SUSDC-FUTURES' or 'SCOIN-FUTURES' |

##### Supported exchanges
* [bitget](/exchanges/bitget.md#bitgetcloseallpositions)
* [delta](/exchanges/delta.md#deltacloseallpositions)

---

<a name="closePosition" id="closeposition"></a>

## closePosition
closes open positions for a market

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | Unified CCXT market symbol |
| side | <code>string</code> | No | not used by bingx |
| params | <code>object</code> | No | extra parameters specific to the bingx api endpoint |
| params.positionId | <code>string</code>, <code>undefined</code> | No | it is recommended to fill in this parameter when closing a position |

##### Supported exchanges
* [bingx](/exchanges/bingx.md#bingxcloseposition)
* [bitget](/exchanges/bitget.md#bitgetcloseposition)
* [blofin](/exchanges/blofin.md#blofincloseposition)
* [coinbase](/exchanges/coinbase.md#coinbasecloseposition)
* [gate](/exchanges/gate.md#gatecloseposition)
* [hitbtc](/exchanges/hitbtc.md#hitbtccloseposition)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturescloseposition)
* [okx](/exchanges/okx.md#okxcloseposition)

---

<a name="closePositions" id="closepositions"></a>

## closePositions
closes open positions for a market

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - [A list of position structures](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the okx api endpoint |
| params.recvWindow | <code>string</code> | No | request valid time window value |

##### Supported exchanges
* [bitget](/exchanges/bitget.md#bitgetclosepositions)
* [cryptocom](/exchanges/cryptocom.md#cryptocomclosepositions)

---

<a name="createConvertTrade" id="createconverttrade"></a>

## createConvertTrade
convert from one currency to another

**Kind**: instance   
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | the id of the trade that you want to make |
| fromCode | <code>string</code> | Yes | the currency that you want to sell and convert from |
| toCode | <code>string</code> | Yes | the currency that you want to buy and convert into |
| amount | <code>float</code> | No | how much you want to trade in units of the from currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecreateconverttrade)
* [bitget](/exchanges/bitget.md#bitgetcreateconverttrade)
* [coinbase](/exchanges/coinbase.md#coinbasecreateconverttrade)
* [okx](/exchanges/okx.md#okxcreateconverttrade)
* [woo](/exchanges/woo.md#woocreateconverttrade)

---

<a name="createDepositAddress" id="createdepositaddress"></a>

## createDepositAddress
create a currency deposit address

**Kind**: instance   
**Returns**: <code>object</code> - an [address structure](https://docs.ccxt.com/#/?id=address-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency for the deposit address |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bitfinex](/exchanges/bitfinex.md#bitfinexcreatedepositaddress)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2createdepositaddress)
* [bl3p](/exchanges/bl3p.md#bl3pcreatedepositaddress)
* [coinbase](/exchanges/coinbase.md#coinbasecreatedepositaddress)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangecreatedepositaddress)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalcreatedepositaddress)
* [coinex](/exchanges/coinex.md#coinexcreatedepositaddress)
* [deribit](/exchanges/deribit.md#deribitcreatedepositaddress)
* [gemini](/exchanges/gemini.md#geminicreatedepositaddress)
* [hitbtc](/exchanges/hitbtc.md#hitbtccreatedepositaddress)
* [kraken](/exchanges/kraken.md#krakencreatedepositaddress)
* [kucoin](/exchanges/kucoin.md#kucoincreatedepositaddress)
* [kuna](/exchanges/kuna.md#kunacreatedepositaddress)
* [mexc](/exchanges/mexc.md#mexccreatedepositaddress)
* [ndax](/exchanges/ndax.md#ndaxcreatedepositaddress)
* [onetrading](/exchanges/onetrading.md#onetradingcreatedepositaddress)
* [paymium](/exchanges/paymium.md#paymiumcreatedepositaddress)
* [poloniex](/exchanges/poloniex.md#poloniexcreatedepositaddress)
* [upbit](/exchanges/upbit.md#upbitcreatedepositaddress)
* [yobit](/exchanges/yobit.md#yobitcreatedepositaddress)

---

<a name="createGiftCode" id="creategiftcode"></a>

## createGiftCode
create gift code

**Kind**: instance   
**Returns**: <code>object</code> - The gift code id, code, currency and amount


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | gift code |
| amount | <code>float</code> | Yes | amount of currency for the gift |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecreategiftcode)

---

<a name="createMarkeSellOrderWithCost" id="createmarkesellorderwithcost"></a>

## createMarkeSellOrderWithCost
create a market sell order by providing the symbol and cost

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitcreatemarkesellorderwithcost)

---

<a name="createMarketBuyOrderWithCost" id="createmarketbuyorderwithcost"></a>

## createMarketBuyOrderWithCost
create a market buy order by providing the symbol and cost

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bigone](/exchanges/bigone.md#bigonecreatemarketbuyorderwithcost)
* [binance](/exchanges/binance.md#binancecreatemarketbuyorderwithcost)
* [bingx](/exchanges/bingx.md#bingxcreatemarketbuyorderwithcost)
* [bitget](/exchanges/bitget.md#bitgetcreatemarketbuyorderwithcost)
* [bitmart](/exchanges/bitmart.md#bitmartcreatemarketbuyorderwithcost)
* [bitrue](/exchanges/bitrue.md#bitruecreatemarketbuyorderwithcost)
* [bybit](/exchanges/bybit.md#bybitcreatemarketbuyorderwithcost)
* [coinbase](/exchanges/coinbase.md#coinbasecreatemarketbuyorderwithcost)
* [coinex](/exchanges/coinex.md#coinexcreatemarketbuyorderwithcost)
* [digifinex](/exchanges/digifinex.md#digifinexcreatemarketbuyorderwithcost)
* [gate](/exchanges/gate.md#gatecreatemarketbuyorderwithcost)
* [htx](/exchanges/htx.md#htxcreatemarketbuyorderwithcost)
* [huobijp](/exchanges/huobijp.md#huobijpcreatemarketbuyorderwithcost)
* [kraken](/exchanges/kraken.md#krakencreatemarketbuyorderwithcost)
* [kucoin](/exchanges/kucoin.md#kucoincreatemarketbuyorderwithcost)
* [lbank](/exchanges/lbank.md#lbankcreatemarketbuyorderwithcost)
* [mexc](/exchanges/mexc.md#mexccreatemarketbuyorderwithcost)
* [okcoin](/exchanges/okcoin.md#okcoincreatemarketbuyorderwithcost)
* [okx](/exchanges/okx.md#okxcreatemarketbuyorderwithcost)
* [whitebit](/exchanges/whitebit.md#whitebitcreatemarketbuyorderwithcost)
* [woo](/exchanges/woo.md#woocreatemarketbuyorderwithcost)

---

<a name="createMarketOrderWithCost" id="createmarketorderwithcost"></a>

## createMarketOrderWithCost
create a market order by providing the symbol, side and cost

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecreatemarketorderwithcost)
* [bingx](/exchanges/bingx.md#bingxcreatemarketorderwithcost)
* [kraken](/exchanges/kraken.md#krakencreatemarketorderwithcost)
* [kucoin](/exchanges/kucoin.md#kucoincreatemarketorderwithcost)
* [whitebit](/exchanges/whitebit.md#whitebitcreatemarketorderwithcost)

---

<a name="createMarketSellOrderWithCost" id="createmarketsellorderwithcost"></a>

## createMarketSellOrderWithCost
create a market sell order by providing the symbol and cost

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| cost | <code>float</code> | Yes | how much you want to trade in units of the quote currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecreatemarketsellorderwithcost)
* [bingx](/exchanges/bingx.md#bingxcreatemarketsellorderwithcost)
* [kucoin](/exchanges/kucoin.md#kucoincreatemarketsellorderwithcost)
* [okx](/exchanges/okx.md#okxcreatemarketsellorderwithcost)

---

<a name="createOrder" id="createorder"></a>

## createOrder
create a trade order

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code> | No | the price at which the order is to be fullfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acecreateorder)
* [alpaca](/exchanges/alpaca.md#alpacacreateorder)
* [ascendex](/exchanges/ascendex.md#ascendexcreateorder)
* [bigone](/exchanges/bigone.md#bigonecreateorder)
* [binance](/exchanges/binance.md#binancecreateorder)
* [bingx](/exchanges/bingx.md#bingxcreateorder)
* [bit2c](/exchanges/bit2c.md#bit2ccreateorder)
* [bitbank](/exchanges/bitbank.md#bitbankcreateorder)
* [bitbns](/exchanges/bitbns.md#bitbnscreateorder)
* [bitfinex](/exchanges/bitfinex.md#bitfinexcreateorder)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2createorder)
* [bitflyer](/exchanges/bitflyer.md#bitflyercreateorder)
* [bitget](/exchanges/bitget.md#bitgetcreateorder)
* [bithumb](/exchanges/bithumb.md#bithumbcreateorder)
* [bitmart](/exchanges/bitmart.md#bitmartcreateorder)
* [bitmex](/exchanges/bitmex.md#bitmexcreateorder)
* [bitopro](/exchanges/bitopro.md#bitoprocreateorder)
* [bitrue](/exchanges/bitrue.md#bitruecreateorder)
* [bitso](/exchanges/bitso.md#bitsocreateorder)
* [bitstamp](/exchanges/bitstamp.md#bitstampcreateorder)
* [bitteam](/exchanges/bitteam.md#bitteamcreateorder)
* [bitvavo](/exchanges/bitvavo.md#bitvavocreateorder)
* [bl3p](/exchanges/bl3p.md#bl3pcreateorder)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomcreateorder)
* [blofin](/exchanges/blofin.md#blofincreateorder)
* [btcalpha](/exchanges/btcalpha.md#btcalphacreateorder)
* [btcbox](/exchanges/btcbox.md#btcboxcreateorder)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketscreateorder)
* [btcturk](/exchanges/btcturk.md#btcturkcreateorder)
* [bybit](/exchanges/bybit.md#bybitcreateorder)
* [cex](/exchanges/cex.md#cexcreateorder)
* [coinbase](/exchanges/coinbase.md#coinbasecreateorder)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangecreateorder)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalcreateorder)
* [coincheck](/exchanges/coincheck.md#coincheckcreateorder)
* [coinex](/exchanges/coinex.md#coinexcreateorder)
* [coinlist](/exchanges/coinlist.md#coinlistcreateorder)
* [coinmate](/exchanges/coinmate.md#coinmatecreateorder)
* [coinmetro](/exchanges/coinmetro.md#coinmetrocreateorder)
* [coinone](/exchanges/coinone.md#coinonecreateorder)
* [coinsph](/exchanges/coinsph.md#coinsphcreateorder)
* [coinspot](/exchanges/coinspot.md#coinspotcreateorder)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcreateorder)
* [cube](/exchanges/cube.md#cubecreateorder)
* [currencycom](/exchanges/currencycom.md#currencycomcreateorder)
* [delta](/exchanges/delta.md#deltacreateorder)
* [deribit](/exchanges/deribit.md#deribitcreateorder)
* [digifinex](/exchanges/digifinex.md#digifinexcreateorder)
* [exmo](/exchanges/exmo.md#exmocreateorder)
* [gate](/exchanges/gate.md#gatecreateorder)
* [gemini](/exchanges/gemini.md#geminicreateorder)
* [hitbtc](/exchanges/hitbtc.md#hitbtccreateorder)
* [hitbtc](/exchanges/hitbtc.md#hitbtccreateorder)
* [hollaex](/exchanges/hollaex.md#hollaexcreateorder)
* [huobi](/exchanges/huobi.md#huobicreateorder)
* [huobijp](/exchanges/huobijp.md#huobijpcreateorder)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidcreateorder)
* [idex](/exchanges/idex.md#idexcreateorder)
* [independentreserve](/exchanges/independentreserve.md#independentreservecreateorder)
* [indodax](/exchanges/indodax.md#indodaxcreateorder)
* [kraken](/exchanges/kraken.md#krakencreateorder)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturescreateorder)
* [kucoin](/exchanges/kucoin.md#kucoincreateorder)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturescreateorder)
* [kuna](/exchanges/kuna.md#kunacreateorder)
* [latoken](/exchanges/latoken.md#latokencreateorder)
* [lbank](/exchanges/lbank.md#lbankcreateorder)
* [luno](/exchanges/luno.md#lunocreateorder)
* [lykke](/exchanges/lykke.md#lykkecreateorder)
* [mercado](/exchanges/mercado.md#mercadocreateorder)
* [mexc](/exchanges/mexc.md#mexccreateorder)
* [ndax](/exchanges/ndax.md#ndaxcreateorder)
* [novadax](/exchanges/novadax.md#novadaxcreateorder)
* [oceanex](/exchanges/oceanex.md#oceanexcreateorder)
* [okcoin](/exchanges/okcoin.md#okcoincreateorder)
* [okx](/exchanges/okx.md#okxcreateorder)
* [onetrading](/exchanges/onetrading.md#onetradingcreateorder)
* [p2b](/exchanges/p2b.md#p2bcreateorder)
* [paymium](/exchanges/paymium.md#paymiumcreateorder)
* [phemex](/exchanges/phemex.md#phemexcreateorder)
* [poloniex](/exchanges/poloniex.md#poloniexcreateorder)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturescreateorder)
* [probit](/exchanges/probit.md#probitcreateorder)
* [timex](/exchanges/timex.md#timexcreateorder)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptocreateorder)
* [tradeogre](/exchanges/tradeogre.md#tradeogrecreateorder)
* [upbit](/exchanges/upbit.md#upbitcreateorder)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangecreateorder)
* [wazirx](/exchanges/wazirx.md#wazirxcreateorder)
* [whitebit](/exchanges/whitebit.md#whitebitcreateorder)
* [woo](/exchanges/woo.md#woocreateorder)
* [woofipro](/exchanges/woofipro.md#woofiprocreateorder)
* [yobit](/exchanges/yobit.md#yobitcreateorder)
* [zaif](/exchanges/zaif.md#zaifcreateorder)
* [zonda](/exchanges/zonda.md#zondacreateorder)

---

<a name="createOrderWs" id="createorderws"></a>

## createOrderWs
create a trade order

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code>, <code>undefined</code> | No | the price at which the order is to be fullfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.test | <code>boolean</code> | Yes | test order, default false |
| params.returnRateLimits | <code>boolean</code> | Yes | set to true to return rate limit information, default false |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancecreateorderws)
* [bitvavo](/exchanges/bitvavo.md#bitvavocreateorderws)
* [bybit](/exchanges/bybit.md#bybitcreateorderws)
* [cex](/exchanges/cex.md#cexcreateorderws)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcreateorderws)
* [okx](/exchanges/okx.md#okxcreateorderws)
* [poloniex](/exchanges/poloniex.md#poloniexcreateorderws)

---

<a name="createOrders" id="createorders"></a>

## createOrders
create a list of trade orders

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| orders | <code>Array</code> | Yes | list of orders to create, each object should contain the parameters required by createOrder, namely symbol, type, side, amount, price and params |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.timeInForce | <code>string</code> | No | "GTC", "IOC", "FOK", or "PO" |
| params.postOnly | <code>bool</code> | No | true or false |
| params.stopPrice | <code>float</code> | No | the price at which a trigger order is triggered at |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexcreateorders)
* [binance](/exchanges/binance.md#binancecreateorders)
* [bingx](/exchanges/bingx.md#bingxcreateorders)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2createorders)
* [bitget](/exchanges/bitget.md#bitgetcreateorders)
* [bitmart](/exchanges/bitmart.md#bitmartcreateorders)
* [blofin](/exchanges/blofin.md#blofincreateorders)
* [bybit](/exchanges/bybit.md#bybitcreateorders)
* [coinex](/exchanges/coinex.md#coinexcreateorders)
* [cryptocom](/exchanges/cryptocom.md#cryptocomcreateorders)
* [digifinex](/exchanges/digifinex.md#digifinexcreateorders)
* [gate](/exchanges/gate.md#gatecreateorders)
* [htx](/exchanges/htx.md#htxcreateorders)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidcreateorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturescreateorders)
* [kucoin](/exchanges/kucoin.md#kucoincreateorders)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturescreateorders)
* [mexc](/exchanges/mexc.md#mexccreateorders)
* [okx](/exchanges/okx.md#okxcreateorders)
* [woofipro](/exchanges/woofipro.md#woofiprocreateorders)

---

<a name="createTrailingAmountOrder" id="createtrailingamountorder"></a>

## createTrailingAmountOrder
create a trailing order by providing the symbol, type, side, amount, price and trailingAmount

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much you want to trade in units of the base currency, or number of contracts |
| price | <code>float</code> | No | the price for the order to be filled at, in units of the quote currency, ignored in market orders |
| trailingAmount | <code>float</code> | Yes | the quote amount to trail away from the current market price |
| trailingTriggerPrice | <code>float</code> | Yes | the price to activate a trailing order, default uses the price argument |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [woo](/exchanges/woo.md#woocreatetrailingamountorder)

---

<a name="createTrailingPercentOrder" id="createtrailingpercentorder"></a>

## createTrailingPercentOrder
create a trailing order by providing the symbol, type, side, amount, price and trailingPercent

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much you want to trade in units of the base currency, or number of contracts |
| price | <code>float</code> | No | the price for the order to be filled at, in units of the quote currency, ignored in market orders |
| trailingPercent | <code>float</code> | Yes | the percent to trail away from the current market price |
| trailingTriggerPrice | <code>float</code> | Yes | the price to activate a trailing order, default uses the price argument |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [htx](/exchanges/htx.md#htxcreatetrailingpercentorder)
* [woo](/exchanges/woo.md#woocreatetrailingpercentorder)

---

<a name="deposit" id="deposit"></a>

## deposit
make a deposit

**Kind**: instance   
**Returns**: <code>object</code> - a [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| amount | <code>float</code> | Yes | the amount to deposit |
| id | <code>string</code> | Yes | the payment method id to be used for the deposit, can be retrieved from v2PrivateGetPaymentMethods |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.accountId | <code>string</code> | No | the id of the account to deposit into |

##### Supported exchanges
* [coinbase](/exchanges/coinbase.md#coinbasedeposit)

---

<a name="editContractOrder" id="editcontractorder"></a>

## editContractOrder
edit a trade order

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | cancel order id |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code> | No | the price at which the order is to be fullfilled, in units of the base currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binanceeditcontractorder)

---

<a name="editOrder" id="editorder"></a>

## editOrder
edit a trade order

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | cancel order id |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of currency you want to trade in units of base currency |
| price | <code>float</code> | No | the price at which the order is to be fullfilled, in units of the base currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binanceeditorder)
* [bingx](/exchanges/bingx.md#bingxeditorder)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2editorder)
* [bitget](/exchanges/bitget.md#bitgeteditorder)
* [bitvavo](/exchanges/bitvavo.md#bitvavoeditorder)
* [bybit](/exchanges/bybit.md#bybiteditorder)
* [coinbase](/exchanges/coinbase.md#coinbaseeditorder)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationaleditorder)
* [coinex](/exchanges/coinex.md#coinexeditorder)
* [coinlist](/exchanges/coinlist.md#coinlisteditorder)
* [delta](/exchanges/delta.md#deltaeditorder)
* [deribit](/exchanges/deribit.md#deribiteditorder)
* [exmo](/exchanges/exmo.md#exmoeditorder)
* [gate](/exchanges/gate.md#gateeditorder)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquideditorder)
* [kraken](/exchanges/kraken.md#krakeneditorder)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureseditorder)
* [kucoin](/exchanges/kucoin.md#kucoineditorder)
* [okx](/exchanges/okx.md#okxeditorder)
* [phemex](/exchanges/phemex.md#phemexeditorder)
* [poloniex](/exchanges/poloniex.md#poloniexeditorder)
* [whitebit](/exchanges/whitebit.md#whitebiteditorder)
* [woo](/exchanges/woo.md#wooeditorder)
* [woofipro](/exchanges/woofipro.md#woofiproeditorder)

---

<a name="editOrderWs" id="editorderws"></a>

## editOrderWs
edit a trade order

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified symbol of the market to create an order in |
| type | <code>string</code> | Yes | 'market' or 'limit' |
| side | <code>string</code> | Yes | 'buy' or 'sell' |
| amount | <code>float</code> | Yes | how much of the currency you want to trade in units of the base currency |
| price | <code>float</code>, <code>undefined</code> | No | the price at which the order is to be fullfilled, in units of the quote currency, ignored in market orders |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binanceeditorderws)
* [bitvavo](/exchanges/bitvavo.md#bitvavoeditorderws)
* [bybit](/exchanges/bybit.md#bybiteditorderws)
* [cex](/exchanges/cex.md#cexeditorderws)
* [cex](/exchanges/cex.md#cexeditorderws)
* [okx](/exchanges/okx.md#okxeditorderws)

---

<a name="enableDemoTrading" id="enabledemotrading"></a>

## enableDemoTrading
enables or disables demo trading mode

**Kind**: instance   


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| enable | <code>boolean</code> | No | true if demo trading should be enabled, false otherwise |

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitenabledemotrading)

---

<a name="fetchAccounts" id="fetchaccounts"></a>

## fetchAccounts
fetch all the accounts associated with a profile

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [account structures](https://docs.ccxt.com/#/?id=account-structure) indexed by the account type


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchaccounts)
* [coinbase](/exchanges/coinbase.md#coinbasefetchaccounts)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchaccounts)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchaccounts)
* [coinlist](/exchanges/coinlist.md#coinlistfetchaccounts)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchaccounts)
* [currencycom](/exchanges/currencycom.md#currencycomfetchaccounts)
* [deribit](/exchanges/deribit.md#deribitfetchaccounts)
* [huobi](/exchanges/huobi.md#huobifetchaccounts)
* [huobijp](/exchanges/huobijp.md#huobijpfetchaccounts)
* [kucoin](/exchanges/kucoin.md#kucoinfetchaccounts)
* [luno](/exchanges/luno.md#lunofetchaccounts)
* [mexc](/exchanges/mexc.md#mexcfetchaccounts)
* [ndax](/exchanges/ndax.md#ndaxfetchaccounts)
* [novadax](/exchanges/novadax.md#novadaxfetchaccounts)
* [okx](/exchanges/okx.md#okxfetchaccounts)
* [woo](/exchanges/woo.md#woofetchaccounts)

---

<a name="fetchBalance" id="fetchbalance"></a>

## fetchBalance
query for balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance   
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchbalance)
* [ascendex](/exchanges/ascendex.md#ascendexfetchbalance)
* [bigone](/exchanges/bigone.md#bigonefetchbalance)
* [binance](/exchanges/binance.md#binancefetchbalance)
* [bingx](/exchanges/bingx.md#bingxfetchbalance)
* [bit2c](/exchanges/bit2c.md#bit2cfetchbalance)
* [bitbank](/exchanges/bitbank.md#bitbankfetchbalance)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchbalance)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchbalance)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchbalance)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchbalance)
* [bitget](/exchanges/bitget.md#bitgetfetchbalance)
* [bithumb](/exchanges/bithumb.md#bithumbfetchbalance)
* [bitmart](/exchanges/bitmart.md#bitmartfetchbalance)
* [bitmex](/exchanges/bitmex.md#bitmexfetchbalance)
* [bitopro](/exchanges/bitopro.md#bitoprofetchbalance)
* [bitrue](/exchanges/bitrue.md#bitruefetchbalance)
* [bitso](/exchanges/bitso.md#bitsofetchbalance)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchbalance)
* [betteam](/exchanges/betteam.md#betteamfetchbalance)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchbalance)
* [bl3p](/exchanges/bl3p.md#bl3pfetchbalance)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchbalance)
* [blofin](/exchanges/blofin.md#blofinfetchbalance)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchbalance)
* [btcbox](/exchanges/btcbox.md#btcboxfetchbalance)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchbalance)
* [btcturk](/exchanges/btcturk.md#btcturkfetchbalance)
* [bybit](/exchanges/bybit.md#bybitfetchbalance)
* [cex](/exchanges/cex.md#cexfetchbalance)
* [coinbase](/exchanges/coinbase.md#coinbasefetchbalance)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchbalance)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchbalance)
* [coincheck](/exchanges/coincheck.md#coincheckfetchbalance)
* [coinex](/exchanges/coinex.md#coinexfetchbalance)
* [coinlist](/exchanges/coinlist.md#coinlistfetchbalance)
* [coinmate](/exchanges/coinmate.md#coinmatefetchbalance)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchbalance)
* [coinone](/exchanges/coinone.md#coinonefetchbalance)
* [coinsph](/exchanges/coinsph.md#coinsphfetchbalance)
* [coinspot](/exchanges/coinspot.md#coinspotfetchbalance)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchbalance)
* [cube](/exchanges/cube.md#cubefetchbalance)
* [currencycom](/exchanges/currencycom.md#currencycomfetchbalance)
* [delta](/exchanges/delta.md#deltafetchbalance)
* [deribit](/exchanges/deribit.md#deribitfetchbalance)
* [digifinex](/exchanges/digifinex.md#digifinexfetchbalance)
* [exmo](/exchanges/exmo.md#exmofetchbalance)
* [gemini](/exchanges/gemini.md#geminifetchbalance)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchbalance)
* [hollaex](/exchanges/hollaex.md#hollaexfetchbalance)
* [huobi](/exchanges/huobi.md#huobifetchbalance)
* [huobijp](/exchanges/huobijp.md#huobijpfetchbalance)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchbalance)
* [idex](/exchanges/idex.md#idexfetchbalance)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchbalance)
* [indodax](/exchanges/indodax.md#indodaxfetchbalance)
* [kraken](/exchanges/kraken.md#krakenfetchbalance)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchbalance)
* [kucoin](/exchanges/kucoin.md#kucoinfetchbalance)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchbalance)
* [kuna](/exchanges/kuna.md#kunafetchbalance)
* [latoken](/exchanges/latoken.md#latokenfetchbalance)
* [lbank](/exchanges/lbank.md#lbankfetchbalance)
* [luno](/exchanges/luno.md#lunofetchbalance)
* [lykke](/exchanges/lykke.md#lykkefetchbalance)
* [mercado](/exchanges/mercado.md#mercadofetchbalance)
* [mexc](/exchanges/mexc.md#mexcfetchbalance)
* [ndax](/exchanges/ndax.md#ndaxfetchbalance)
* [novadax](/exchanges/novadax.md#novadaxfetchbalance)
* [oceanex](/exchanges/oceanex.md#oceanexfetchbalance)
* [okcoin](/exchanges/okcoin.md#okcoinfetchbalance)
* [okx](/exchanges/okx.md#okxfetchbalance)
* [onetrading](/exchanges/onetrading.md#onetradingfetchbalance)
* [p2b](/exchanges/p2b.md#p2bfetchbalance)
* [paymium](/exchanges/paymium.md#paymiumfetchbalance)
* [phemex](/exchanges/phemex.md#phemexfetchbalance)
* [poloniex](/exchanges/poloniex.md#poloniexfetchbalance)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchbalance)
* [probit](/exchanges/probit.md#probitfetchbalance)
* [timex](/exchanges/timex.md#timexfetchbalance)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchbalance)
* [tradeogre](/exchanges/tradeogre.md#tradeogrefetchbalance)
* [upbit](/exchanges/upbit.md#upbitfetchbalance)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchbalance)
* [wazirx](/exchanges/wazirx.md#wazirxfetchbalance)
* [whitebit](/exchanges/whitebit.md#whitebitfetchbalance)
* [woo](/exchanges/woo.md#woofetchbalance)
* [woofipro](/exchanges/woofipro.md#woofiprofetchbalance)
* [yobit](/exchanges/yobit.md#yobitfetchbalance)
* [zaif](/exchanges/zaif.md#zaiffetchbalance)
* [zonda](/exchanges/zonda.md#zondafetchbalance)

---

<a name="fetchBalanceWs" id="fetchbalancews"></a>

## fetchBalanceWs
fetch balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance   
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.type | <code>string</code>, <code>undefined</code> | No | 'future', 'delivery', 'savings', 'funding', or 'spot' |
| params.marginMode | <code>string</code>, <code>undefined</code> | No | 'cross' or 'isolated', for margin trading, uses this.options.defaultMarginMode if not passed, defaults to undefined/None/null |
| params.symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | No | unified market symbols, only used in isolated margin mode |
| params.method | <code>string</code>, <code>undefined</code> | No | method to use. Can be account.balance or account.status |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchbalancews)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchbalancews)
* [cex](/exchanges/cex.md#cexfetchbalancews)

---

<a name="fetchBidsAsks" id="fetchbidsasks"></a>

## fetchBidsAsks
fetches the bid and ask price and volume for multiple markets

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [ticker structures](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | unified symbols of the markets to fetch the bids and asks for, all markets are returned if not assigned |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchbidsasks)
* [bitrue](/exchanges/bitrue.md#bitruefetchbidsasks)
* [coinbase](/exchanges/coinbase.md#coinbasefetchbidsasks)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchbidsasks)
* [mexc](/exchanges/mexc.md#mexcfetchbidsasks)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchbidsasks)

---

<a name="fetchBorrowInterest" id="fetchborrowinterest"></a>

## fetchBorrowInterest
fetch the interest owed by the user for borrowing currency for margin trading

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [borrow interest structures](https://docs.ccxt.com/#/?id=borrow-interest-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | No | unified currency code |
| symbol | <code>string</code> | No | unified market symbol when fetch interest in isolated markets |
| since | <code>int</code> | No | the earliest time in ms to fetch borrrow interest for |
| limit | <code>int</code> | No | the maximum number of structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch the borrow interest in a portfolio margin account |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchborrowinterest)
* [bitget](/exchanges/bitget.md#bitgetfetchborrowinterest)
* [bitmart](/exchanges/bitmart.md#bitmartfetchborrowinterest)
* [bybit](/exchanges/bybit.md#bybitfetchborrowinterest)
* [coinex](/exchanges/coinex.md#coinexfetchborrowinterest)
* [huobi](/exchanges/huobi.md#huobifetchborrowinterest)
* [kucoin](/exchanges/kucoin.md#kucoinfetchborrowinterest)
* [okx](/exchanges/okx.md#okxfetchborrowinterest)
* [whitebit](/exchanges/whitebit.md#whitebitfetchborrowinterest)

---

<a name="fetchBorrowRateHistories" id="fetchborrowratehistories"></a>

## fetchBorrowRateHistories
retrieves a history of a multiple currencies borrow interest rate at specific time slots, returns all currencies if no symbols passed, default is undefined

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [borrow rate structures](https://docs.ccxt.com/#/?id=borrow-rate-structure) indexed by the market symbol


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| codes | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified currency codes, default is undefined |
| since | <code>int</code> | No | timestamp in ms of the earliest borrowRate, default is undefined |
| limit | <code>int</code> | No | max number of borrow rate prices to return, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated' default is 'cross' |
| params.until | <code>int</code> | No | the latest time in ms to fetch entries for |

##### Supported exchanges
* [kucoin](/exchanges/kucoin.md#kucoinfetchborrowratehistories)
* [okx](/exchanges/okx.md#okxfetchborrowratehistories)

---

<a name="fetchBorrowRateHistory" id="fetchborrowratehistory"></a>

## fetchBorrowRateHistory
retrieves a history of a currencies borrow interest rate at specific time slots

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - an array of [borrow rate structures](https://docs.ccxt.com/#/?id=borrow-rate-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | timestamp for the earliest borrow rate |
| limit | <code>int</code> | No | the maximum number of [borrow rate structures](https://docs.ccxt.com/#/?id=borrow-rate-structure) to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchborrowratehistory)
* [kucoin](/exchanges/kucoin.md#kucoinfetchborrowratehistory)
* [okx](/exchanges/okx.md#okxfetchborrowratehistory)

---

<a name="fetchCanceledAndClosedOrders" id="fetchcanceledandclosedorders"></a>

## fetchCanceledAndClosedOrders
fetches information on multiple canceled orders made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch orders in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchcanceledandclosedorders)
* [bitget](/exchanges/bitget.md#bitgetfetchcanceledandclosedorders)
* [bybit](/exchanges/bybit.md#bybitfetchcanceledandclosedorders)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchcanceledandclosedorders)

---

<a name="fetchCanceledOrders" id="fetchcanceledorders"></a>

## fetchCanceledOrders
fetches information on multiple canceled orders made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch orders in a portfolio margin account |
| params.stop | <code>boolean</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchcanceledorders)
* [bitget](/exchanges/bitget.md#bitgetfetchcanceledorders)
* [bitmart](/exchanges/bitmart.md#bitmartfetchcanceledorders)
* [bitteam](/exchanges/bitteam.md#bitteamfetchcanceledorders)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchcanceledorders)
* [bybit](/exchanges/bybit.md#bybitfetchcanceledorders)
* [coinbase](/exchanges/coinbase.md#coinbasefetchcanceledorders)
* [coinlist](/exchanges/coinlist.md#coinlistfetchcanceledorders)
* [exmo](/exchanges/exmo.md#exmofetchcanceledorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchcanceledorders)
* [mexc](/exchanges/mexc.md#mexcfetchcanceledorders)
* [okx](/exchanges/okx.md#okxfetchcanceledorders)
* [upbit](/exchanges/upbit.md#upbitfetchcanceledorders)

---

<a name="fetchClosedOrder" id="fetchclosedorder"></a>

## fetchClosedOrder
fetch an open order by it's id

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchclosedorder)
* [bybit](/exchanges/bybit.md#bybitfetchclosedorder)

---

<a name="fetchClosedOrders" id="fetchclosedorders"></a>

## fetchClosedOrders
fetches information on multiple closed orders made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | the latest time in ms to fetch orders for |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacafetchclosedorders)
* [ascendex](/exchanges/ascendex.md#ascendexfetchclosedorders)
* [bigone](/exchanges/bigone.md#bigonefetchclosedorders)
* [binance](/exchanges/binance.md#binancefetchclosedorders)
* [bingx](/exchanges/bingx.md#bingxfetchclosedorders)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchclosedorders)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchclosedorders)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchclosedorders)
* [bitget](/exchanges/bitget.md#bitgetfetchclosedorders)
* [bitmart](/exchanges/bitmart.md#bitmartfetchclosedorders)
* [bitmex](/exchanges/bitmex.md#bitmexfetchclosedorders)
* [bitopro](/exchanges/bitopro.md#bitoprofetchclosedorders)
* [bitrue](/exchanges/bitrue.md#bitruefetchclosedorders)
* [bitteam](/exchanges/bitteam.md#bitteamfetchclosedorders)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchclosedorders)
* [blofin](/exchanges/blofin.md#blofinfetchclosedorders)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchclosedorders)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchclosedorders)
* [bybit](/exchanges/bybit.md#bybitfetchclosedorders)
* [cex](/exchanges/cex.md#cexfetchclosedorders)
* [coinbase](/exchanges/coinbase.md#coinbasefetchclosedorders)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchclosedorders)
* [coinex](/exchanges/coinex.md#coinexfetchclosedorders)
* [coinlist](/exchanges/coinlist.md#coinlistfetchclosedorders)
* [coinsph](/exchanges/coinsph.md#coinsphfetchclosedorders)
* [cube](/exchanges/cube.md#cubefetchclosedorders)
* [delta](/exchanges/delta.md#deltafetchclosedorders)
* [deribit](/exchanges/deribit.md#deribitfetchclosedorders)
* [gate](/exchanges/gate.md#gatefetchclosedorders)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchclosedorders)
* [hollaex](/exchanges/hollaex.md#hollaexfetchclosedorders)
* [huobi](/exchanges/huobi.md#huobifetchclosedorders)
* [huobijp](/exchanges/huobijp.md#huobijpfetchclosedorders)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchclosedorders)
* [idex](/exchanges/idex.md#idexfetchclosedorders)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchclosedorders)
* [indodax](/exchanges/indodax.md#indodaxfetchclosedorders)
* [kraken](/exchanges/kraken.md#krakenfetchclosedorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchclosedorders)
* [kucoin](/exchanges/kucoin.md#kucoinfetchclosedorders)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchclosedorders)
* [kuna](/exchanges/kuna.md#kunafetchclosedorders)
* [luno](/exchanges/luno.md#lunofetchclosedorders)
* [lykke](/exchanges/lykke.md#lykkefetchclosedorders)
* [mexc](/exchanges/mexc.md#mexcfetchclosedorders)
* [novadax](/exchanges/novadax.md#novadaxfetchclosedorders)
* [oceanex](/exchanges/oceanex.md#oceanexfetchclosedorders)
* [okcoin](/exchanges/okcoin.md#okcoinfetchclosedorders)
* [okx](/exchanges/okx.md#okxfetchclosedorders)
* [onetrading](/exchanges/onetrading.md#onetradingfetchclosedorders)
* [p2b](/exchanges/p2b.md#p2bfetchclosedorders)
* [phemex](/exchanges/phemex.md#phemexfetchclosedorders)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchclosedorders)
* [probit](/exchanges/probit.md#probitfetchclosedorders)
* [timex](/exchanges/timex.md#timexfetchclosedorders)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchclosedorders)
* [upbit](/exchanges/upbit.md#upbitfetchclosedorders)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchclosedorders)
* [whitebit](/exchanges/whitebit.md#whitebitfetchclosedorders)
* [woo](/exchanges/woo.md#woofetchclosedorders)
* [woofipro](/exchanges/woofipro.md#woofiprofetchclosedorders)
* [zaif](/exchanges/zaif.md#zaiffetchclosedorders)

---

<a name="fetchClosedOrdersWs" id="fetchclosedordersws"></a>

## fetchClosedOrdersWs
fetch closed orders

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch open orders for |
| limit | <code>int</code> | No | the maximum number of open orders structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchclosedordersws)

---

<a name="fetchConvertCurrencies" id="fetchconvertcurrencies"></a>

## fetchConvertCurrencies
fetches all available currencies that can be converted

**Kind**: instance   
**Returns**: <code>object</code> - an associative dictionary of currencies


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchconvertcurrencies)
* [bitget](/exchanges/bitget.md#bitgetfetchconvertcurrencies)
* [okx](/exchanges/okx.md#okxfetchconvertcurrencies)
* [woo](/exchanges/woo.md#woofetchconvertcurrencies)

---

<a name="fetchConvertQuote" id="fetchconvertquote"></a>

## fetchConvertQuote
fetch a quote for converting from one currency to another

**Kind**: instance   
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| fromCode | <code>string</code> | Yes | the currency that you want to sell and convert from |
| toCode | <code>string</code> | Yes | the currency that you want to buy and convert into |
| amount | <code>float</code> | Yes | how much you want to trade in units of the from currency |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.walletType | <code>string</code> | No | either 'SPOT' or 'FUNDING', the default is 'SPOT' |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchconvertquote)
* [bitget](/exchanges/bitget.md#bitgetfetchconvertquote)
* [coinbase](/exchanges/coinbase.md#coinbasefetchconvertquote)
* [okx](/exchanges/okx.md#okxfetchconvertquote)
* [woo](/exchanges/woo.md#woofetchconvertquote)

---

<a name="fetchConvertTrade" id="fetchconverttrade"></a>

## fetchConvertTrade
fetch the data for a conversion trade

**Kind**: instance   
**Returns**: <code>object</code> - a [conversion structure](https://docs.ccxt.com/#/?id=conversion-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | the id of the trade that you want to fetch |
| code | <code>string</code> | No | the unified currency code of the conversion trade |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchconverttrade)
* [coinbase](/exchanges/coinbase.md#coinbasefetchconverttrade)
* [okx](/exchanges/okx.md#okxfetchconverttrade)
* [woo](/exchanges/woo.md#woofetchconverttrade)

---

<a name="fetchConvertTradeHistory" id="fetchconverttradehistory"></a>

## fetchConvertTradeHistory
fetch the users history of conversion trades

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [conversion structures](https://docs.ccxt.com/#/?id=conversion-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | No | the unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch conversions for |
| limit | <code>int</code> | No | the maximum number of conversion structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest conversion to fetch |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchconverttradehistory)
* [bitget](/exchanges/bitget.md#bitgetfetchconverttradehistory)
* [okx](/exchanges/okx.md#okxfetchconverttradehistory)
* [woo](/exchanges/woo.md#woofetchconverttradehistory)

---

<a name="fetchCrossBorrowRate" id="fetchcrossborrowrate"></a>

## fetchCrossBorrowRate
fetch the rate of interest to borrow a currency for margin trading

**Kind**: instance   
**Returns**: <code>object</code> - a [borrow rate structure](https://docs.ccxt.com/#/?id=borrow-rate-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchcrossborrowrate)
* [bitget](/exchanges/bitget.md#bitgetfetchcrossborrowrate)
* [bybit](/exchanges/bybit.md#bybitfetchcrossborrowrate)
* [digifinex](/exchanges/digifinex.md#digifinexfetchcrossborrowrate)
* [okx](/exchanges/okx.md#okxfetchcrossborrowrate)

---

<a name="fetchCrossBorrowRates" id="fetchcrossborrowrates"></a>

## fetchCrossBorrowRates
fetch the borrow interest rates of all currencies

**Kind**: instance   
**Returns**: <code>object</code> - a list of [borrow rate structures](https://docs.ccxt.com/#/?id=borrow-rate-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [digifinex](/exchanges/digifinex.md#digifinexfetchcrossborrowrates)
* [okx](/exchanges/okx.md#okxfetchcrossborrowrates)

---

<a name="fetchCurrencies" id="fetchcurrencies"></a>

## fetchCurrencies
fetches all available currencies on an exchange

**Kind**: instance   
**Returns**: <code>object</code> - an associative dictionary of currencies


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchcurrencies)
* [bigone](/exchanges/bigone.md#bigonefetchcurrencies)
* [binance](/exchanges/binance.md#binancefetchcurrencies)
* [bingx](/exchanges/bingx.md#bingxfetchcurrencies)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchcurrencies)
* [bitget](/exchanges/bitget.md#bitgetfetchcurrencies)
* [bitmart](/exchanges/bitmart.md#bitmartfetchcurrencies)
* [bitmex](/exchanges/bitmex.md#bitmexfetchcurrencies)
* [bitopro](/exchanges/bitopro.md#bitoprofetchcurrencies)
* [bitrue](/exchanges/bitrue.md#bitruefetchcurrencies)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchcurrencies)
* [bitteam](/exchanges/bitteam.md#bitteamfetchcurrencies)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchcurrencies)
* [bybit](/exchanges/bybit.md#bybitfetchcurrencies)
* [cex](/exchanges/cex.md#cexfetchcurrencies)
* [coinbase](/exchanges/coinbase.md#coinbasefetchcurrencies)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchcurrencies)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchcurrencies)
* [coinlist](/exchanges/coinlist.md#coinlistfetchcurrencies)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchcurrencies)
* [coinone](/exchanges/coinone.md#coinonefetchcurrencies)
* [cube](/exchanges/cube.md#cubefetchcurrencies)
* [currencycom](/exchanges/currencycom.md#currencycomfetchcurrencies)
* [delta](/exchanges/delta.md#deltafetchcurrencies)
* [deribit](/exchanges/deribit.md#deribitfetchcurrencies)
* [digifinex](/exchanges/digifinex.md#digifinexfetchcurrencies)
* [exmo](/exchanges/exmo.md#exmofetchcurrencies)
* [gate](/exchanges/gate.md#gatefetchcurrencies)
* [gemini](/exchanges/gemini.md#geminifetchcurrencies)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchcurrencies)
* [hollaex](/exchanges/hollaex.md#hollaexfetchcurrencies)
* [huobi](/exchanges/huobi.md#huobifetchcurrencies)
* [huobijp](/exchanges/huobijp.md#huobijpfetchcurrencies)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchcurrencies)
* [idex](/exchanges/idex.md#idexfetchcurrencies)
* [kraken](/exchanges/kraken.md#krakenfetchcurrencies)
* [kucoin](/exchanges/kucoin.md#kucoinfetchcurrencies)
* [kuna](/exchanges/kuna.md#kunafetchcurrencies)
* [latoken](/exchanges/latoken.md#latokenfetchcurrencies)
* [lykke](/exchanges/lykke.md#lykkefetchcurrencies)
* [mexc](/exchanges/mexc.md#mexcfetchcurrencies)
* [ndax](/exchanges/ndax.md#ndaxfetchcurrencies)
* [okcoin](/exchanges/okcoin.md#okcoinfetchcurrencies)
* [okx](/exchanges/okx.md#okxfetchcurrencies)
* [onetrading](/exchanges/onetrading.md#onetradingfetchcurrencies)
* [phemex](/exchanges/phemex.md#phemexfetchcurrencies)
* [poloniex](/exchanges/poloniex.md#poloniexfetchcurrencies)
* [probit](/exchanges/probit.md#probitfetchcurrencies)
* [timex](/exchanges/timex.md#timexfetchcurrencies)
* [wazirx](/exchanges/wazirx.md#wazirxfetchcurrencies)
* [whitebit](/exchanges/whitebit.md#whitebitfetchcurrencies)
* [woo](/exchanges/woo.md#woofetchcurrencies)
* [woofipro](/exchanges/woofipro.md#woofiprofetchcurrencies)

---

<a name="fetchCurrenciesWs" id="fetchcurrenciesws"></a>

## fetchCurrenciesWs
fetches all available currencies on an exchange

**Kind**: instance   
**Returns**: <code>object</code> - an associative dictionary of currencies


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the bitvavo api endpoint |

##### Supported exchanges
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchcurrenciesws)

---

<a name="fetchDeposit" id="fetchdeposit"></a>

## fetchDeposit
fetch information on a deposit

**Kind**: instance   
**Returns**: <code>object</code> - a [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | deposit id |
| code | <code>string</code> | Yes | not used by bitmart fetchDeposit () |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bitmart](/exchanges/bitmart.md#bitmartfetchdeposit)
* [bitso](/exchanges/bitso.md#bitsofetchdeposit)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchdeposit)
* [coinbase](/exchanges/coinbase.md#coinbasefetchdeposit)
* [exmo](/exchanges/exmo.md#exmofetchdeposit)
* [idex](/exchanges/idex.md#idexfetchdeposit)
* [kuna](/exchanges/kuna.md#kunafetchdeposit)
* [okx](/exchanges/okx.md#okxfetchdeposit)
* [upbit](/exchanges/upbit.md#upbitfetchdeposit)
* [whitebit](/exchanges/whitebit.md#whitebitfetchdeposit)

---

<a name="fetchDepositAddress" id="fetchdepositaddress"></a>

## fetchDepositAddress
fetch the deposit address for a currency associated with this account

**Kind**: instance   
**Returns**: <code>object</code> - an [address structure](https://docs.ccxt.com/#/?id=address-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.network | <code>string</code> | No | unified network code for deposit chain |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchdepositaddress)
* [bigone](/exchanges/bigone.md#bigonefetchdepositaddress)
* [binance](/exchanges/binance.md#binancefetchdepositaddress)
* [bingx](/exchanges/bingx.md#bingxfetchdepositaddress)
* [bit2c](/exchanges/bit2c.md#bit2cfetchdepositaddress)
* [bitbank](/exchanges/bitbank.md#bitbankfetchdepositaddress)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchdepositaddress)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchdepositaddress)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchdepositaddress)
* [bitget](/exchanges/bitget.md#bitgetfetchdepositaddress)
* [bitmart](/exchanges/bitmart.md#bitmartfetchdepositaddress)
* [bitmex](/exchanges/bitmex.md#bitmexfetchdepositaddress)
* [bitso](/exchanges/bitso.md#bitsofetchdepositaddress)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchdepositaddress)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchdepositaddress)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchdepositaddress)
* [bybit](/exchanges/bybit.md#bybitfetchdepositaddress)
* [cex](/exchanges/cex.md#cexfetchdepositaddress)
* [coinbase](/exchanges/coinbase.md#coinbasefetchdepositaddress)
* [coinex](/exchanges/coinex.md#coinexfetchdepositaddress)
* [coinsph](/exchanges/coinsph.md#coinsphfetchdepositaddress)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchdepositaddress)
* [currencycom](/exchanges/currencycom.md#currencycomfetchdepositaddress)
* [delta](/exchanges/delta.md#deltafetchdepositaddress)
* [deribit](/exchanges/deribit.md#deribitfetchdepositaddress)
* [digifinex](/exchanges/digifinex.md#digifinexfetchdepositaddress)
* [exmo](/exchanges/exmo.md#exmofetchdepositaddress)
* [gate](/exchanges/gate.md#gatefetchdepositaddress)
* [gemini](/exchanges/gemini.md#geminifetchdepositaddress)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchdepositaddress)
* [huobi](/exchanges/huobi.md#huobifetchdepositaddress)
* [idex](/exchanges/idex.md#idexfetchdepositaddress)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchdepositaddress)
* [kraken](/exchanges/kraken.md#krakenfetchdepositaddress)
* [kucoin](/exchanges/kucoin.md#kucoinfetchdepositaddress)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchdepositaddress)
* [kuna](/exchanges/kuna.md#kunafetchdepositaddress)
* [lbank](/exchanges/lbank.md#lbankfetchdepositaddress)
* [lykke](/exchanges/lykke.md#lykkefetchdepositaddress)
* [mexc](/exchanges/mexc.md#mexcfetchdepositaddress)
* [ndax](/exchanges/ndax.md#ndaxfetchdepositaddress)
* [okx](/exchanges/okx.md#okxfetchdepositaddress)
* [okx](/exchanges/okx.md#okxfetchdepositaddress)
* [onetrading](/exchanges/onetrading.md#onetradingfetchdepositaddress)
* [paymium](/exchanges/paymium.md#paymiumfetchdepositaddress)
* [phemex](/exchanges/phemex.md#phemexfetchdepositaddress)
* [poloniex](/exchanges/poloniex.md#poloniexfetchdepositaddress)
* [probit](/exchanges/probit.md#probitfetchdepositaddress)
* [timex](/exchanges/timex.md#timexfetchdepositaddress)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchdepositaddress)
* [upbit](/exchanges/upbit.md#upbitfetchdepositaddress)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchdepositaddress)
* [wazirx](/exchanges/wazirx.md#wazirxfetchdepositaddress)
* [whitebit](/exchanges/whitebit.md#whitebitfetchdepositaddress)
* [woo](/exchanges/woo.md#woofetchdepositaddress)
* [yobit](/exchanges/yobit.md#yobitfetchdepositaddress)
* [zonda](/exchanges/zonda.md#zondafetchdepositaddress)

---

<a name="fetchDepositAddresses" id="fetchdepositaddresses"></a>

## fetchDepositAddresses
fetch deposit addresses for multiple currencies and chain types

**Kind**: instance   
**Returns**: <code>object</code> - a list of [address structures](https://docs.ccxt.com/#/?id=address-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| codes | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified currency codes, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [coinone](/exchanges/coinone.md#coinonefetchdepositaddresses)
* [cube](/exchanges/cube.md#cubefetchdepositaddresses)
* [hollaex](/exchanges/hollaex.md#hollaexfetchdepositaddresses)
* [indodax](/exchanges/indodax.md#indodaxfetchdepositaddresses)
* [paymium](/exchanges/paymium.md#paymiumfetchdepositaddresses)
* [probit](/exchanges/probit.md#probitfetchdepositaddresses)
* [upbit](/exchanges/upbit.md#upbitfetchdepositaddresses)
* [zonda](/exchanges/zonda.md#zondafetchdepositaddresses)

---

<a name="fetchDepositAddressesByNetwork" id="fetchdepositaddressesbynetwork"></a>

## fetchDepositAddressesByNetwork
fetch the deposit addresses for a currency associated with this account

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary [address structures](https://docs.ccxt.com/#/?id=address-structure), indexed by the network


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bingx](/exchanges/bingx.md#bingxfetchdepositaddressesbynetwork)
* [bybit](/exchanges/bybit.md#bybitfetchdepositaddressesbynetwork)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchdepositaddressesbynetwork)
* [gemini](/exchanges/gemini.md#geminifetchdepositaddressesbynetwork)
* [huobi](/exchanges/huobi.md#huobifetchdepositaddressesbynetwork)
* [kucoin](/exchanges/kucoin.md#kucoinfetchdepositaddressesbynetwork)
* [mexc](/exchanges/mexc.md#mexcfetchdepositaddressesbynetwork)
* [okx](/exchanges/okx.md#okxfetchdepositaddressesbynetwork)
* [okx](/exchanges/okx.md#okxfetchdepositaddressesbynetwork)

---

<a name="fetchDepositMethods" id="fetchdepositmethods"></a>

## fetchDepositMethods
fetch deposit methods for a currency associated with this account

**Kind**: instance   
**Returns**: <code>object</code> - of deposit methods


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the kraken api endpoint |

##### Supported exchanges
* [kraken](/exchanges/kraken.md#krakenfetchdepositmethods)

---

<a name="fetchDepositWithdrawFee" id="fetchdepositwithdrawfee"></a>

## fetchDepositWithdrawFee
fetch the fee for deposits and withdrawals

**Kind**: instance   
**Returns**: <code>object</code> - a [fee structure](https://docs.ccxt.com/#/?id=fee-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bitmart](/exchanges/bitmart.md#bitmartfetchdepositwithdrawfee)
* [coinex](/exchanges/coinex.md#coinexfetchdepositwithdrawfee)
* [kucoin](/exchanges/kucoin.md#kucoinfetchdepositwithdrawfee)

---

<a name="fetchDepositWithdrawFees" id="fetchdepositwithdrawfees"></a>

## fetchDepositWithdrawFees
fetch deposit and withdraw fees

**Kind**: instance   
**Returns**: <code>object</code> - a list of [fee structures](https://docs.ccxt.com/#/?id=fee-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| codes | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified currency codes |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchdepositwithdrawfees)
* [binance](/exchanges/binance.md#binancefetchdepositwithdrawfees)
* [bingx](/exchanges/bingx.md#bingxfetchdepositwithdrawfees)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchdepositwithdrawfees)
* [bitget](/exchanges/bitget.md#bitgetfetchdepositwithdrawfees)
* [bitmex](/exchanges/bitmex.md#bitmexfetchdepositwithdrawfees)
* [bitopro](/exchanges/bitopro.md#bitoprofetchdepositwithdrawfees)
* [bitrue](/exchanges/bitrue.md#bitruefetchdepositwithdrawfees)
* [bitso](/exchanges/bitso.md#bitsofetchdepositwithdrawfees)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchdepositwithdrawfees)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchdepositwithdrawfees)
* [bybit](/exchanges/bybit.md#bybitfetchdepositwithdrawfees)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchdepositwithdrawfees)
* [deribit](/exchanges/deribit.md#deribitfetchdepositwithdrawfees)
* [digifinex](/exchanges/digifinex.md#digifinexfetchdepositwithdrawfees)
* [exmo](/exchanges/exmo.md#exmofetchdepositwithdrawfees)
* [gate](/exchanges/gate.md#gatefetchdepositwithdrawfees)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchdepositwithdrawfees)
* [hollaex](/exchanges/hollaex.md#hollaexfetchdepositwithdrawfees)
* [huobi](/exchanges/huobi.md#huobifetchdepositwithdrawfees)
* [kucoin](/exchanges/kucoin.md#kucoinfetchdepositwithdrawfees)
* [lbank](/exchanges/lbank.md#lbankfetchdepositwithdrawfees)
* [mexc](/exchanges/mexc.md#mexcfetchdepositwithdrawfees)
* [okx](/exchanges/okx.md#okxfetchdepositwithdrawfees)
* [poloniex](/exchanges/poloniex.md#poloniexfetchdepositwithdrawfees)
* [probit](/exchanges/probit.md#probitfetchdepositwithdrawfees)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchdepositwithdrawfees)
* [whitebit](/exchanges/whitebit.md#whitebitfetchdepositwithdrawfees)

---

<a name="fetchDeposits" id="fetchdeposits"></a>

## fetchDeposits
fetch all deposits made to an account

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch deposits for |
| limit | <code>int</code> | No | the maximum number of deposits structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchdeposits)
* [bigone](/exchanges/bigone.md#bigonefetchdeposits)
* [binance](/exchanges/binance.md#binancefetchdeposits)
* [bingx](/exchanges/bingx.md#bingxfetchdeposits)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchdeposits)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchdeposits)
* [bitget](/exchanges/bitget.md#bitgetfetchdeposits)
* [bitmart](/exchanges/bitmart.md#bitmartfetchdeposits)
* [bitopro](/exchanges/bitopro.md#bitoprofetchdeposits)
* [bitrue](/exchanges/bitrue.md#bitruefetchdeposits)
* [bitso](/exchanges/bitso.md#bitsofetchdeposits)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchdeposits)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchdeposits)
* [blofin](/exchanges/blofin.md#blofinfetchdeposits)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchdeposits)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchdeposits)
* [bybit](/exchanges/bybit.md#bybitfetchdeposits)
* [coinbase](/exchanges/coinbase.md#coinbasefetchdeposits)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchdeposits)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchdeposits)
* [coincheck](/exchanges/coincheck.md#coincheckfetchdeposits)
* [coinex](/exchanges/coinex.md#coinexfetchdeposits)
* [coinsph](/exchanges/coinsph.md#coinsphfetchdeposits)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchdeposits)
* [cube](/exchanges/cube.md#cubefetchdeposits)
* [currencycom](/exchanges/currencycom.md#currencycomfetchdeposits)
* [deribit](/exchanges/deribit.md#deribitfetchdeposits)
* [digifinex](/exchanges/digifinex.md#digifinexfetchdeposits)
* [exmo](/exchanges/exmo.md#exmofetchdeposits)
* [gate](/exchanges/gate.md#gatefetchdeposits)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchdeposits)
* [hollaex](/exchanges/hollaex.md#hollaexfetchdeposits)
* [huobi](/exchanges/huobi.md#huobifetchdeposits)
* [huobijp](/exchanges/huobijp.md#huobijpfetchdeposits)
* [idex](/exchanges/idex.md#idexfetchdeposits)
* [kraken](/exchanges/kraken.md#krakenfetchdeposits)
* [kucoin](/exchanges/kucoin.md#kucoinfetchdeposits)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchdeposits)
* [kuna](/exchanges/kuna.md#kunafetchdeposits)
* [lbank](/exchanges/lbank.md#lbankfetchdeposits)
* [mexc](/exchanges/mexc.md#mexcfetchdeposits)
* [ndax](/exchanges/ndax.md#ndaxfetchdeposits)
* [novadax](/exchanges/novadax.md#novadaxfetchdeposits)
* [okcoin](/exchanges/okcoin.md#okcoinfetchdeposits)
* [okx](/exchanges/okx.md#okxfetchdeposits)
* [onetrading](/exchanges/onetrading.md#onetradingfetchdeposits)
* [phemex](/exchanges/phemex.md#phemexfetchdeposits)
* [poloniex](/exchanges/poloniex.md#poloniexfetchdeposits)
* [probit](/exchanges/probit.md#probitfetchdeposits)
* [timex](/exchanges/timex.md#timexfetchdeposits)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchdeposits)
* [upbit](/exchanges/upbit.md#upbitfetchdeposits)
* [whitebit](/exchanges/whitebit.md#whitebitfetchdeposits)
* [woo](/exchanges/woo.md#woofetchdeposits)
* [woofipro](/exchanges/woofipro.md#woofiprofetchdeposits)

---

<a name="fetchDepositsWithdrawals" id="fetchdepositswithdrawals"></a>

## fetchDepositsWithdrawals
fetch history of deposits and withdrawals

**Kind**: instance   
**Returns**: <code>object</code> - a list of [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | No | unified currency code for the currency of the deposit/withdrawals, default is undefined |
| since | <code>int</code> | No | timestamp in ms of the earliest deposit/withdrawal, default is undefined |
| limit | <code>int</code> | No | max number of deposit/withdrawals to return, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchdepositswithdrawals)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchdepositswithdrawals)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchdepositswithdrawals)
* [bitmex](/exchanges/bitmex.md#bitmexfetchdepositswithdrawals)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchdepositswithdrawals)
* [bitteam](/exchanges/bitteam.md#bitteamfetchdepositswithdrawals)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchdepositswithdrawals)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchdepositswithdrawals)
* [exchange](/exchanges/exchange.md#exchangefetchdepositswithdrawals)
* [coinlist](/exchanges/coinlist.md#coinlistfetchdepositswithdrawals)
* [coinmate](/exchanges/coinmate.md#coinmatefetchdepositswithdrawals)
* [currencycom](/exchanges/currencycom.md#currencycomfetchdepositswithdrawals)
* [exmo](/exchanges/exmo.md#exmofetchdepositswithdrawals)
* [gemini](/exchanges/gemini.md#geminifetchdepositswithdrawals)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchdepositswithdrawals)
* [indodax](/exchanges/indodax.md#indodaxfetchdepositswithdrawals)
* [lykke](/exchanges/lykke.md#lykkefetchdepositswithdrawals)
* [novadax](/exchanges/novadax.md#novadaxfetchdepositswithdrawals)
* [poloniex](/exchanges/poloniex.md#poloniexfetchdepositswithdrawals)
* [probit](/exchanges/probit.md#probitfetchdepositswithdrawals)
* [whitebit](/exchanges/whitebit.md#whitebitfetchdepositswithdrawals)
* [woo](/exchanges/woo.md#woofetchdepositswithdrawals)
* [woofipro](/exchanges/woofipro.md#woofiprofetchdepositswithdrawals)

---

<a name="fetchDepositsWs" id="fetchdepositsws"></a>

## fetchDepositsWs
fetch all deposits made to an account

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch deposits for |
| limit | <code>int</code> | No | the maximum number of deposits structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the bitvavo api endpoint |

##### Supported exchanges
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchdepositsws)

---

<a name="fetchFundingHistory" id="fetchfundinghistory"></a>

## fetchFundingHistory
fetch the history of funding payments paid and received on this account

**Kind**: instance   
**Returns**: <code>object</code> - a [funding history structure](https://docs.ccxt.com/#/?id=funding-history-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | No | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch funding history for |
| limit | <code>int</code> | No | the maximum number of funding history structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchfundinghistory)
* [binance](/exchanges/binance.md#binancefetchfundinghistory)
* [bitget](/exchanges/bitget.md#bitgetfetchfundinghistory)
* [bybit](/exchanges/bybit.md#bybitfetchfundinghistory)
* [coinex](/exchanges/coinex.md#coinexfetchfundinghistory)
* [digifinex](/exchanges/digifinex.md#digifinexfetchfundinghistory)
* [gate](/exchanges/gate.md#gatefetchfundinghistory)
* [huobi](/exchanges/huobi.md#huobifetchfundinghistory)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchfundinghistory)
* [mexc](/exchanges/mexc.md#mexcfetchfundinghistory)
* [okx](/exchanges/okx.md#okxfetchfundinghistory)
* [phemex](/exchanges/phemex.md#phemexfetchfundinghistory)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchfundinghistory)

---

<a name="fetchFundingRate" id="fetchfundingrate"></a>

## fetchFundingRate
fetch the current funding rate

**Kind**: instance   
**Returns**: <code>object</code> - a [funding rate structure](https://docs.ccxt.com/#/?id=funding-rate-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchfundingrate)
* [bingx](/exchanges/bingx.md#bingxfetchfundingrate)
* [bingx](/exchanges/bingx.md#bingxfetchfundingrate)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchfundingrate)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchfundingrate)
* [bitget](/exchanges/bitget.md#bitgetfetchfundingrate)
* [bitmart](/exchanges/bitmart.md#bitmartfetchfundingrate)
* [blofin](/exchanges/blofin.md#blofinfetchfundingrate)
* [coinex](/exchanges/coinex.md#coinexfetchfundingrate)
* [delta](/exchanges/delta.md#deltafetchfundingrate)
* [deribit](/exchanges/deribit.md#deribitfetchfundingrate)
* [digifinex](/exchanges/digifinex.md#digifinexfetchfundingrate)
* [gate](/exchanges/gate.md#gatefetchfundingrate)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchfundingrate)
* [huobi](/exchanges/huobi.md#huobifetchfundingrate)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchfundingrate)
* [mexc](/exchanges/mexc.md#mexcfetchfundingrate)
* [okx](/exchanges/okx.md#okxfetchfundingrate)
* [phemex](/exchanges/phemex.md#phemexfetchfundingrate)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchfundingrate)
* [whitebit](/exchanges/whitebit.md#whitebitfetchfundingrate)
* [woofipro](/exchanges/woofipro.md#woofiprofetchfundingrate)

---

<a name="fetchFundingRateHistory" id="fetchfundingratehistory"></a>

## fetchFundingRateHistory
fetches historical funding rate prices

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [funding rate structures](https://docs.ccxt.com/#/?id=funding-rate-history-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the funding rate history for |
| since | <code>int</code> | No | timestamp in ms of the earliest funding rate to fetch |
| limit | <code>int</code> | No | the maximum amount of [funding rate structures](https://docs.ccxt.com/#/?id=funding-rate-history-structure) to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest funding rate |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [availble parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchfundingratehistory)
* [bingx](/exchanges/bingx.md#bingxfetchfundingratehistory)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchfundingratehistory)
* [bitget](/exchanges/bitget.md#bitgetfetchfundingratehistory)
* [bitmex](/exchanges/bitmex.md#bitmexfetchfundingratehistory)
* [blofin](/exchanges/blofin.md#blofinfetchfundingratehistory)
* [bybit](/exchanges/bybit.md#bybitfetchfundingratehistory)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchfundingratehistory)
* [coinex](/exchanges/coinex.md#coinexfetchfundingratehistory)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchfundingratehistory)
* [deribit](/exchanges/deribit.md#deribitfetchfundingratehistory)
* [digifinex](/exchanges/digifinex.md#digifinexfetchfundingratehistory)
* [gate](/exchanges/gate.md#gatefetchfundingratehistory)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchfundingratehistory)
* [huobi](/exchanges/huobi.md#huobifetchfundingratehistory)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchfundingratehistory)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchfundingratehistory)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchfundingratehistory)
* [mexc](/exchanges/mexc.md#mexcfetchfundingratehistory)
* [okx](/exchanges/okx.md#okxfetchfundingratehistory)
* [phemex](/exchanges/phemex.md#phemexfetchfundingratehistory)
* [woo](/exchanges/woo.md#woofetchfundingratehistory)
* [woofipro](/exchanges/woofipro.md#woofiprofetchfundingratehistory)

---

<a name="fetchFundingRates" id="fetchfundingrates"></a>

## fetchFundingRates
fetch the funding rate for multiple markets

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [funding rates structures](https://docs.ccxt.com/#/?id=funding-rates-structure), indexe by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchfundingrates)
* [binance](/exchanges/binance.md#binancefetchfundingrates)
* [bitmex](/exchanges/bitmex.md#bitmexfetchfundingrates)
* [bybit](/exchanges/bybit.md#bybitfetchfundingrates)
* [coinex](/exchanges/coinex.md#coinexfetchfundingrates)
* [delta](/exchanges/delta.md#deltafetchfundingrates)
* [gate](/exchanges/gate.md#gatefetchfundingrates)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchfundingrates)
* [huobi](/exchanges/huobi.md#huobifetchfundingrates)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchfundingrates)
* [whitebit](/exchanges/whitebit.md#whitebitfetchfundingrates)
* [woofipro](/exchanges/woofipro.md#woofiprofetchfundingrates)

---

<a name="fetchGreeks" id="fetchgreeks"></a>

## fetchGreeks
fetches an option contracts greeks, financial metrics used to measure the factors that affect the price of an options contract

**Kind**: instance   
**Returns**: <code>object</code> - a [greeks structure](https://docs.ccxt.com/#/?id=greeks-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch greeks for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchgreeks)
* [bybit](/exchanges/bybit.md#bybitfetchgreeks)
* [delta](/exchanges/delta.md#deltafetchgreeks)
* [deribit](/exchanges/deribit.md#deribitfetchgreeks)
* [gate](/exchanges/gate.md#gatefetchgreeks)
* [okx](/exchanges/okx.md#okxfetchgreeks)

---

<a name="fetchIsolatedBorrowRate" id="fetchisolatedborrowrate"></a>

## fetchIsolatedBorrowRate
fetch the rate of interest to borrow a currency for margin trading

**Kind**: instance   
**Returns**: <code>object</code> - an [isolated borrow rate structure](https://docs.ccxt.com/#/?id=isolated-borrow-rate-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint EXCHANGE SPECIFIC PARAMETERS |
| params.vipLevel | <code>object</code> | No | user's current specific margin data will be returned if viplevel is omitted |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchisolatedborrowrate)
* [bitget](/exchanges/bitget.md#bitgetfetchisolatedborrowrate)
* [bitmart](/exchanges/bitmart.md#bitmartfetchisolatedborrowrate)
* [coinex](/exchanges/coinex.md#coinexfetchisolatedborrowrate)

---

<a name="fetchIsolatedBorrowRates" id="fetchisolatedborrowrates"></a>

## fetchIsolatedBorrowRates
fetch the borrow interest rates of all currencies

**Kind**: instance   
**Returns**: <code>object</code> - a [borrow rate structure](https://docs.ccxt.com/#/?id=borrow-rate-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.symbol | <code>object</code> | No | unified market symbol EXCHANGE SPECIFIC PARAMETERS |
| params.vipLevel | <code>object</code> | No | user's current specific margin data will be returned if viplevel is omitted |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchisolatedborrowrates)
* [bitmart](/exchanges/bitmart.md#bitmartfetchisolatedborrowrates)
* [htx](/exchanges/htx.md#htxfetchisolatedborrowrates)

---

<a name="fetchL3OrderBook" id="fetchl3orderbook"></a>

## fetchL3OrderBook
fetches level 3 information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance   
**Returns**: <code>object</code> - an [order book structure](https://docs.ccxt.com/#/?id=order-book-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| limit | <code>int</code> | No | max number of orders to return, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchl3orderbook)
* [kuna](/exchanges/kuna.md#kunafetchl3orderbook)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchl3orderbook)

---

<a name="fetchLastPrices" id="fetchlastprices"></a>

## fetchLastPrices
fetches the last price for multiple markets

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of lastprices structures


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | unified symbols of the markets to fetch the last prices |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchlastprices)
* [binance](/exchanges/binance.md#binancefetchlastprices)

---

<a name="fetchLedger" id="fetchledger"></a>

## fetchLedger
fetch the history of changes, actions done by the user or operations that altered the balance of the user

**Kind**: instance   
**Returns**: <code>object</code> - a [ledger structure](https://docs.ccxt.com/#/?id=ledger-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | timestamp in ms of the earliest ledger entry |
| limit | <code>int</code> | No | max number of ledger entrys to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest ledger entry |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch the ledger for a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchledger)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchledger)
* [bitget](/exchanges/bitget.md#bitgetfetchledger)
* [bitmex](/exchanges/bitmex.md#bitmexfetchledger)
* [bitso](/exchanges/bitso.md#bitsofetchledger)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchledger)
* [blofin](/exchanges/blofin.md#blofinfetchledger)
* [bybit](/exchanges/bybit.md#bybitfetchledger)
* [coinbase](/exchanges/coinbase.md#coinbasefetchledger)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchledger)
* [coinlist](/exchanges/coinlist.md#coinlistfetchledger)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchledger)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchledger)
* [currencycom](/exchanges/currencycom.md#currencycomfetchledger)
* [delta](/exchanges/delta.md#deltafetchledger)
* [digifinex](/exchanges/digifinex.md#digifinexfetchledger)
* [gate](/exchanges/gate.md#gatefetchledger)
* [huobi](/exchanges/huobi.md#huobifetchledger)
* [kraken](/exchanges/kraken.md#krakenfetchledger)
* [kucoin](/exchanges/kucoin.md#kucoinfetchledger)
* [luno](/exchanges/luno.md#lunofetchledger)
* [ndax](/exchanges/ndax.md#ndaxfetchledger)
* [okcoin](/exchanges/okcoin.md#okcoinfetchledger)
* [okx](/exchanges/okx.md#okxfetchledger)
* [woo](/exchanges/woo.md#woofetchledger)
* [woofipro](/exchanges/woofipro.md#woofiprofetchledger)
* [zonda](/exchanges/zonda.md#zondafetchledger)

---

<a name="fetchLeverage" id="fetchleverage"></a>

## fetchLeverage
fetch the set leverage for a market

**Kind**: instance   
**Returns**: <code>object</code> - a [leverage structure](https://docs.ccxt.com/#/?id=leverage-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bingx](/exchanges/bingx.md#bingxfetchleverage)
* [bitget](/exchanges/bitget.md#bitgetfetchleverage)
* [blofin](/exchanges/blofin.md#blofinfetchleverage)
* [bybit](/exchanges/bybit.md#bybitfetchleverage)
* [coinex](/exchanges/coinex.md#coinexfetchleverage)
* [currencycom](/exchanges/currencycom.md#currencycomfetchleverage)
* [delta](/exchanges/delta.md#deltafetchleverage)
* [gate](/exchanges/gate.md#gatefetchleverage)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchleverage)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchleverage)
* [mexc](/exchanges/mexc.md#mexcfetchleverage)
* [okx](/exchanges/okx.md#okxfetchleverage)
* [woo](/exchanges/woo.md#woofetchleverage)
* [woofipro](/exchanges/woofipro.md#woofiprofetchleverage)

---

<a name="fetchLeverageTiers" id="fetchleveragetiers"></a>

## fetchLeverageTiers
retrieve information on the maximum leverage, and maintenance margin for trades of varying trade sizes

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [leverage tiers structures](https://docs.ccxt.com/#/?id=leverage-tiers-structure), indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchleveragetiers)
* [binance](/exchanges/binance.md#binancefetchleveragetiers)
* [bybit](/exchanges/bybit.md#bybitfetchleveragetiers)
* [coinex](/exchanges/coinex.md#coinexfetchleveragetiers)
* [digifinex](/exchanges/digifinex.md#digifinexfetchleveragetiers)
* [gate](/exchanges/gate.md#gatefetchleveragetiers)
* [huobi](/exchanges/huobi.md#huobifetchleveragetiers)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchleveragetiers)
* [mexc](/exchanges/mexc.md#mexcfetchleveragetiers)
* [phemex](/exchanges/phemex.md#phemexfetchleveragetiers)

---

<a name="fetchLeverages" id="fetchleverages"></a>

## fetchLeverages
fetch the set leverage for all contract markets

**Kind**: instance   
**Returns**: <code>object</code> - a list of [leverage structures](https://docs.ccxt.com/#/?id=leverage-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | a list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchleverages)
* [binance](/exchanges/binance.md#binancefetchleverages)
* [bitmex](/exchanges/bitmex.md#bitmexfetchleverages)
* [blofin](/exchanges/blofin.md#blofinfetchleverages)
* [gate](/exchanges/gate.md#gatefetchleverages)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchleverages)

---

<a name="fetchLiquidations" id="fetchliquidations"></a>

## fetchLiquidations
retrieves the public liquidations of a trading pair

**Kind**: instance   
**Returns**: <code>object</code> - an array of [liquidation structures](https://docs.ccxt.com/#/?id=liquidation-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters |
| params.until | <code>int</code> | No | timestamp in ms of the latest liquidation |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |

##### Supported exchanges
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchliquidations)
* [bitmex](/exchanges/bitmex.md#bitmexfetchliquidations)
* [deribit](/exchanges/deribit.md#deribitfetchliquidations)
* [gate](/exchanges/gate.md#gatefetchliquidations)
* [huobi](/exchanges/huobi.md#huobifetchliquidations)

---

<a name="fetchMarginAdjustmentHistory" id="fetchmarginadjustmenthistory"></a>

## fetchMarginAdjustmentHistory
fetches the history of margin added or reduced from contract isolated positions

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [margin structures](https://docs.ccxt.com/#/?id=margin-loan-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| type | <code>string</code> | No | not used by coinex fetchMarginAdjustmentHistory |
| since | <code>int</code> | No | timestamp in ms of the earliest change to fetch |
| limit | <code>int</code> | No | the maximum amount of changes to fetch, default is 10 |
| params | <code>object</code> | Yes | extra parameters specific to the exchange api endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest change to fetch |
| params.positionId | <code>int</code> | No | the id of the position that you want to retrieve margin adjustment history for |

##### Supported exchanges
* [coinex](/exchanges/coinex.md#coinexfetchmarginadjustmenthistory)
* [okx](/exchanges/okx.md#okxfetchmarginadjustmenthistory)

---

<a name="fetchMarginMode" id="fetchmarginmode"></a>

## fetchMarginMode
fetches the set margin mode of the user

**Kind**: instance   
**Returns**: <code>object</code> - a list of [margin mode structures](https://docs.ccxt.com/#/?id=margin-mode-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | a list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchmarginmode)
* [binance](/exchanges/binance.md#binancefetchmarginmode)
* [bingx](/exchanges/bingx.md#bingxfetchmarginmode)
* [bitget](/exchanges/bitget.md#bitgetfetchmarginmode)
* [blofin](/exchanges/blofin.md#blofinfetchmarginmode)
* [delta](/exchanges/delta.md#deltafetchmarginmode)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchmarginmode)

---

<a name="fetchMarketLeverageTiers" id="fetchmarketleveragetiers"></a>

## fetchMarketLeverageTiers
retrieve information on the maximum leverage, and maintenance margin for trades of varying trade sizes for a single market

**Kind**: instance   
**Returns**: <code>object</code> - a [leverage tiers structure](https://docs.ccxt.com/#/?id=leverage-tiers-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.marginMode | <code>string</code> | No | for spot margin 'cross' or 'isolated', default is 'isolated' |
| params.code | <code>string</code> | No | required for cross spot margin |
| params.productType | <code>string</code> | No | *contract only* 'USDT-FUTURES', 'USDC-FUTURES', 'COIN-FUTURES', 'SUSDT-FUTURES', 'SUSDC-FUTURES' or 'SCOIN-FUTURES' |

##### Supported exchanges
* [bitget](/exchanges/bitget.md#bitgetfetchmarketleveragetiers)
* [bybit](/exchanges/bybit.md#bybitfetchmarketleveragetiers)
* [digifinex](/exchanges/digifinex.md#digifinexfetchmarketleveragetiers)
* [gate](/exchanges/gate.md#gatefetchmarketleveragetiers)
* [huobi](/exchanges/huobi.md#huobifetchmarketleveragetiers)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchmarketleveragetiers)
* [okx](/exchanges/okx.md#okxfetchmarketleveragetiers)

---

<a name="fetchMarkets" id="fetchmarkets"></a>

## fetchMarkets
retrieves data on all markets for ace

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - an array of objects representing market data


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchmarkets)
* [alpaca](/exchanges/alpaca.md#alpacafetchmarkets)
* [ascendex](/exchanges/ascendex.md#ascendexfetchmarkets)
* [bigone](/exchanges/bigone.md#bigonefetchmarkets)
* [binance](/exchanges/binance.md#binancefetchmarkets)
* [bingx](/exchanges/bingx.md#bingxfetchmarkets)
* [bitbank](/exchanges/bitbank.md#bitbankfetchmarkets)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchmarkets)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchmarkets)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchmarkets)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchmarkets)
* [bitget](/exchanges/bitget.md#bitgetfetchmarkets)
* [bithumb](/exchanges/bithumb.md#bithumbfetchmarkets)
* [bitmart](/exchanges/bitmart.md#bitmartfetchmarkets)
* [bitmex](/exchanges/bitmex.md#bitmexfetchmarkets)
* [bitopro](/exchanges/bitopro.md#bitoprofetchmarkets)
* [bitrue](/exchanges/bitrue.md#bitruefetchmarkets)
* [bitso](/exchanges/bitso.md#bitsofetchmarkets)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchmarkets)
* [bitteam](/exchanges/bitteam.md#bitteamfetchmarkets)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchmarkets)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchmarkets)
* [blofin](/exchanges/blofin.md#blofinfetchmarkets)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchmarkets)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchmarkets)
* [btcturk](/exchanges/btcturk.md#btcturkfetchmarkets)
* [bybit](/exchanges/bybit.md#bybitfetchmarkets)
* [cex](/exchanges/cex.md#cexfetchmarkets)
* [coinbase](/exchanges/coinbase.md#coinbasefetchmarkets)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchmarkets)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchmarkets)
* [coinex](/exchanges/coinex.md#coinexfetchmarkets)
* [coinlist](/exchanges/coinlist.md#coinlistfetchmarkets)
* [coinmate](/exchanges/coinmate.md#coinmatefetchmarkets)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchmarkets)
* [coinone](/exchanges/coinone.md#coinonefetchmarkets)
* [coinsph](/exchanges/coinsph.md#coinsphfetchmarkets)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchmarkets)
* [cube](/exchanges/cube.md#cubefetchmarkets)
* [currencycom](/exchanges/currencycom.md#currencycomfetchmarkets)
* [delta](/exchanges/delta.md#deltafetchmarkets)
* [deribit](/exchanges/deribit.md#deribitfetchmarkets)
* [digifinex](/exchanges/digifinex.md#digifinexfetchmarkets)
* [exmo](/exchanges/exmo.md#exmofetchmarkets)
* [gate](/exchanges/gate.md#gatefetchmarkets)
* [gemini](/exchanges/gemini.md#geminifetchmarkets)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchmarkets)
* [hollaex](/exchanges/hollaex.md#hollaexfetchmarkets)
* [huobi](/exchanges/huobi.md#huobifetchmarkets)
* [huobijp](/exchanges/huobijp.md#huobijpfetchmarkets)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchmarkets)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchmarkets)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchmarkets)
* [idex](/exchanges/idex.md#idexfetchmarkets)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchmarkets)
* [indodax](/exchanges/indodax.md#indodaxfetchmarkets)
* [kraken](/exchanges/kraken.md#krakenfetchmarkets)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchmarkets)
* [kucoin](/exchanges/kucoin.md#kucoinfetchmarkets)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchmarkets)
* [kuna](/exchanges/kuna.md#kunafetchmarkets)
* [latoken](/exchanges/latoken.md#latokenfetchmarkets)
* [lbank](/exchanges/lbank.md#lbankfetchmarkets)
* [luno](/exchanges/luno.md#lunofetchmarkets)
* [lykke](/exchanges/lykke.md#lykkefetchmarkets)
* [mercado](/exchanges/mercado.md#mercadofetchmarkets)
* [mexc](/exchanges/mexc.md#mexcfetchmarkets)
* [ndax](/exchanges/ndax.md#ndaxfetchmarkets)
* [novadax](/exchanges/novadax.md#novadaxfetchmarkets)
* [oceanex](/exchanges/oceanex.md#oceanexfetchmarkets)
* [okcoin](/exchanges/okcoin.md#okcoinfetchmarkets)
* [okx](/exchanges/okx.md#okxfetchmarkets)
* [onetrading](/exchanges/onetrading.md#onetradingfetchmarkets)
* [p2b](/exchanges/p2b.md#p2bfetchmarkets)
* [phemex](/exchanges/phemex.md#phemexfetchmarkets)
* [poloniex](/exchanges/poloniex.md#poloniexfetchmarkets)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchmarkets)
* [probit](/exchanges/probit.md#probitfetchmarkets)
* [timex](/exchanges/timex.md#timexfetchmarkets)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchmarkets)
* [tradeogre](/exchanges/tradeogre.md#tradeogrefetchmarkets)
* [upbit](/exchanges/upbit.md#upbitfetchmarkets)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchmarkets)
* [wazirx](/exchanges/wazirx.md#wazirxfetchmarkets)
* [whitebit](/exchanges/whitebit.md#whitebitfetchmarkets)
* [woo](/exchanges/woo.md#woofetchmarkets)
* [woofipro](/exchanges/woofipro.md#woofiprofetchmarkets)
* [yobit](/exchanges/yobit.md#yobitfetchmarkets)
* [zaif](/exchanges/zaif.md#zaiffetchmarkets)
* [zonda](/exchanges/zonda.md#zondafetchmarkets)

---

<a name="fetchMarketsWs" id="fetchmarketsws"></a>

## fetchMarketsWs
retrieves data on all markets for bitvavo

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - an array of objects representing market data


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange api endpoint |

##### Supported exchanges
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchmarketsws)

---

<a name="fetchMyDustTrades" id="fetchmydusttrades"></a>

## fetchMyDustTrades
fetch all dust trades made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | not used by binance fetchMyDustTrades () |
| since | <code>int</code> | No | the earliest time in ms to fetch my dust trades for |
| limit | <code>int</code> | No | the maximum number of dust trades to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.type | <code>string</code> | No | 'spot' or 'margin', default spot |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchmydusttrades)

---

<a name="fetchMyLiquidations" id="fetchmyliquidations"></a>

## fetchMyLiquidations
retrieves the users liquidated positions

**Kind**: instance   
**Returns**: <code>object</code> - an array of [liquidation structures](https://docs.ccxt.com/#/?id=liquidation-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | No | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the binance api endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest liquidation |
| params.paginate | <code>boolean</code> | No | *spot only* default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [available parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch liquidations in a portfolio margin account |
| params.type | <code>string</code> | No | "spot" |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchmyliquidations)
* [bingx](/exchanges/bingx.md#bingxfetchmyliquidations)
* [bitget](/exchanges/bitget.md#bitgetfetchmyliquidations)
* [bitmart](/exchanges/bitmart.md#bitmartfetchmyliquidations)
* [bybit](/exchanges/bybit.md#bybitfetchmyliquidations)
* [deribit](/exchanges/deribit.md#deribitfetchmyliquidations)
* [gate](/exchanges/gate.md#gatefetchmyliquidations)

---

<a name="fetchMySettlementHistory" id="fetchmysettlementhistory"></a>

## fetchMySettlementHistory
fetches historical settlement records of the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [settlement history objects]


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the settlement history |
| since | <code>int</code> | No | timestamp in ms |
| limit | <code>int</code> | No | number of records |
| params | <code>object</code> | No | exchange specific params |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchmysettlementhistory)
* [bybit](/exchanges/bybit.md#bybitfetchmysettlementhistory)
* [gate](/exchanges/gate.md#gatefetchmysettlementhistory)

---

<a name="fetchMyTrades" id="fetchmytrades"></a>

## fetchMyTrades
fetch all trades made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;Trade&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | timestamp in ms of the earliest trade to fetch |
| limit | <code>int</code> | No | the maximum amount of trades to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchmytrades)
* [bigone](/exchanges/bigone.md#bigonefetchmytrades)
* [binance](/exchanges/binance.md#binancefetchmytrades)
* [bingx](/exchanges/bingx.md#bingxfetchmytrades)
* [bit2c](/exchanges/bit2c.md#bit2cfetchmytrades)
* [bitbank](/exchanges/bitbank.md#bitbankfetchmytrades)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchmytrades)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchmytrades)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchmytrades)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchmytrades)
* [bitget](/exchanges/bitget.md#bitgetfetchmytrades)
* [bitmart](/exchanges/bitmart.md#bitmartfetchmytrades)
* [bitmex](/exchanges/bitmex.md#bitmexfetchmytrades)
* [bitopro](/exchanges/bitopro.md#bitoprofetchmytrades)
* [bitrue](/exchanges/bitrue.md#bitruefetchmytrades)
* [bitso](/exchanges/bitso.md#bitsofetchmytrades)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchmytrades)
* [bitteam](/exchanges/bitteam.md#bitteamfetchmytrades)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchmytrades)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchmytrades)
* [blofin](/exchanges/blofin.md#blofinfetchmytrades)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchmytrades)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchmytrades)
* [btcturk](/exchanges/btcturk.md#btcturkfetchmytrades)
* [bybit](/exchanges/bybit.md#bybitfetchmytrades)
* [coinbase](/exchanges/coinbase.md#coinbasefetchmytrades)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchmytrades)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchmytrades)
* [coincheck](/exchanges/coincheck.md#coincheckfetchmytrades)
* [coinex](/exchanges/coinex.md#coinexfetchmytrades)
* [coinlist](/exchanges/coinlist.md#coinlistfetchmytrades)
* [coinmate](/exchanges/coinmate.md#coinmatefetchmytrades)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchmytrades)
* [coinone](/exchanges/coinone.md#coinonefetchmytrades)
* [coinsph](/exchanges/coinsph.md#coinsphfetchmytrades)
* [coinspot](/exchanges/coinspot.md#coinspotfetchmytrades)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchmytrades)
* [cube](/exchanges/cube.md#cubefetchmytrades)
* [currencycom](/exchanges/currencycom.md#currencycomfetchmytrades)
* [delta](/exchanges/delta.md#deltafetchmytrades)
* [deribit](/exchanges/deribit.md#deribitfetchmytrades)
* [digifinex](/exchanges/digifinex.md#digifinexfetchmytrades)
* [exmo](/exchanges/exmo.md#exmofetchmytrades)
* [gate](/exchanges/gate.md#gatefetchmytrades)
* [gemini](/exchanges/gemini.md#geminifetchmytrades)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchmytrades)
* [hollaex](/exchanges/hollaex.md#hollaexfetchmytrades)
* [huobi](/exchanges/huobi.md#huobifetchmytrades)
* [huobijp](/exchanges/huobijp.md#huobijpfetchmytrades)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchmytrades)
* [idex](/exchanges/idex.md#idexfetchmytrades)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchmytrades)
* [kraken](/exchanges/kraken.md#krakenfetchmytrades)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchmytrades)
* [kucoin](/exchanges/kucoin.md#kucoinfetchmytrades)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchmytrades)
* [kuna](/exchanges/kuna.md#kunafetchmytrades)
* [latoken](/exchanges/latoken.md#latokenfetchmytrades)
* [lbank](/exchanges/lbank.md#lbankfetchmytrades)
* [luno](/exchanges/luno.md#lunofetchmytrades)
* [lykke](/exchanges/lykke.md#lykkefetchmytrades)
* [mercado](/exchanges/mercado.md#mercadofetchmytrades)
* [mexc](/exchanges/mexc.md#mexcfetchmytrades)
* [ndax](/exchanges/ndax.md#ndaxfetchmytrades)
* [novadax](/exchanges/novadax.md#novadaxfetchmytrades)
* [okcoin](/exchanges/okcoin.md#okcoinfetchmytrades)
* [okx](/exchanges/okx.md#okxfetchmytrades)
* [onetrading](/exchanges/onetrading.md#onetradingfetchmytrades)
* [p2b](/exchanges/p2b.md#p2bfetchmytrades)
* [phemex](/exchanges/phemex.md#phemexfetchmytrades)
* [poloniex](/exchanges/poloniex.md#poloniexfetchmytrades)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchmytrades)
* [probit](/exchanges/probit.md#probitfetchmytrades)
* [timex](/exchanges/timex.md#timexfetchmytrades)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchmytrades)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchmytrades)
* [whitebit](/exchanges/whitebit.md#whitebitfetchmytrades)
* [woo](/exchanges/woo.md#woofetchmytrades)
* [woofipro](/exchanges/woofipro.md#woofiprofetchmytrades)
* [yobit](/exchanges/yobit.md#yobitfetchmytrades)
* [zonda](/exchanges/zonda.md#zondafetchmytrades)

---

<a name="fetchMyTradesWs" id="fetchmytradesws"></a>

## fetchMyTradesWs
fetch all trades made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code>, <code>undefined</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code>, <code>undefined</code> | No | the maximum number of trades structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.endTime | <code>int</code> | No | the latest time in ms to fetch trades for |
| params.fromId | <code>int</code> | No | first trade Id to fetch |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchmytradesws)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchmytradesws)

---

<a name="fetchOHLCV" id="fetchohlcv"></a>

## fetchOHLCV
fetches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance   
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch OHLCV data for |
| timeframe | <code>string</code> | Yes | the length of time each candle represents |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | the maximum amount of candles to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchohlcv)
* [alpaca](/exchanges/alpaca.md#alpacafetchohlcv)
* [ascendex](/exchanges/ascendex.md#ascendexfetchohlcv)
* [bigone](/exchanges/bigone.md#bigonefetchohlcv)
* [binance](/exchanges/binance.md#binancefetchohlcv)
* [bingx](/exchanges/bingx.md#bingxfetchohlcv)
* [bitbank](/exchanges/bitbank.md#bitbankfetchohlcv)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchohlcv)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchohlcv)
* [bitget](/exchanges/bitget.md#bitgetfetchohlcv)
* [bithumb](/exchanges/bithumb.md#bithumbfetchohlcv)
* [bitmart](/exchanges/bitmart.md#bitmartfetchohlcv)
* [bitmex](/exchanges/bitmex.md#bitmexfetchohlcv)
* [bitopro](/exchanges/bitopro.md#bitoprofetchohlcv)
* [bitrue](/exchanges/bitrue.md#bitruefetchohlcv)
* [bitso](/exchanges/bitso.md#bitsofetchohlcv)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchohlcv)
* [bitteam](/exchanges/bitteam.md#bitteamfetchohlcv)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchohlcv)
* [blofin](/exchanges/blofin.md#blofinfetchohlcv)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchohlcv)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchohlcv)
* [btcturk](/exchanges/btcturk.md#btcturkfetchohlcv)
* [bybit](/exchanges/bybit.md#bybitfetchohlcv)
* [cex](/exchanges/cex.md#cexfetchohlcv)
* [coinbase](/exchanges/coinbase.md#coinbasefetchohlcv)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchohlcv)
* [coinex](/exchanges/coinex.md#coinexfetchohlcv)
* [coinex](/exchanges/coinex.md#coinexfetchohlcv)
* [coinlist](/exchanges/coinlist.md#coinlistfetchohlcv)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchohlcv)
* [coinsph](/exchanges/coinsph.md#coinsphfetchohlcv)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchohlcv)
* [cube](/exchanges/cube.md#cubefetchohlcv)
* [currencycom](/exchanges/currencycom.md#currencycomfetchohlcv)
* [delta](/exchanges/delta.md#deltafetchohlcv)
* [deribit](/exchanges/deribit.md#deribitfetchohlcv)
* [digifinex](/exchanges/digifinex.md#digifinexfetchohlcv)
* [exmo](/exchanges/exmo.md#exmofetchohlcv)
* [gateio](/exchanges/gateio.md#gateiofetchohlcv)
* [gemini](/exchanges/gemini.md#geminifetchohlcv)
* [gemini](/exchanges/gemini.md#geminifetchohlcv)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchohlcv)
* [hollaex](/exchanges/hollaex.md#hollaexfetchohlcv)
* [huobi](/exchanges/huobi.md#huobifetchohlcv)
* [huobijp](/exchanges/huobijp.md#huobijpfetchohlcv)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchohlcv)
* [idex](/exchanges/idex.md#idexfetchohlcv)
* [indodax](/exchanges/indodax.md#indodaxfetchohlcv)
* [kraken](/exchanges/kraken.md#krakenfetchohlcv)
* [kraken](/exchanges/kraken.md#krakenfetchohlcv)
* [kucoin](/exchanges/kucoin.md#kucoinfetchohlcv)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchohlcv)
* [lbank](/exchanges/lbank.md#lbankfetchohlcv)
* [luno](/exchanges/luno.md#lunofetchohlcv)
* [mercado](/exchanges/mercado.md#mercadofetchohlcv)
* [mexc](/exchanges/mexc.md#mexcfetchohlcv)
* [ndax](/exchanges/ndax.md#ndaxfetchohlcv)
* [novadax](/exchanges/novadax.md#novadaxfetchohlcv)
* [oceanex](/exchanges/oceanex.md#oceanexfetchohlcv)
* [okcoin](/exchanges/okcoin.md#okcoinfetchohlcv)
* [okx](/exchanges/okx.md#okxfetchohlcv)
* [onetrading](/exchanges/onetrading.md#onetradingfetchohlcv)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchohlcv)
* [phemex](/exchanges/phemex.md#phemexfetchohlcv)
* [poloniex](/exchanges/poloniex.md#poloniexfetchohlcv)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchohlcv)
* [probit](/exchanges/probit.md#probitfetchohlcv)
* [timex](/exchanges/timex.md#timexfetchohlcv)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchohlcv)
* [upbit](/exchanges/upbit.md#upbitfetchohlcv)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchohlcv)
* [wazirx](/exchanges/wazirx.md#wazirxfetchohlcv)
* [whitebit](/exchanges/whitebit.md#whitebitfetchohlcv)
* [woo](/exchanges/woo.md#woofetchohlcv)
* [woofipro](/exchanges/woofipro.md#woofiprofetchohlcv)
* [zonda](/exchanges/zonda.md#zondafetchohlcv)

---

<a name="fetchOHLCVWs" id="fetchohlcvws"></a>

## fetchOHLCVWs
query historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance   
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume


| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | unified symbol of the market to query OHLCV data for |
| timeframe | <code>string</code> | the length of time each candle represents |
| since | <code>int</code> | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | the maximum amount of candles to fetch |
| params | <code>object</code> | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | timestamp in ms of the earliest candle to fetch EXCHANGE SPECIFIC PARAMETERS |
| params.timeZone | <code>string</code> | default=0 (UTC) |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchohlcvws)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchohlcvws)
* [lbank](/exchanges/lbank.md#lbankfetchohlcvws)

---

<a name="fetchOpenInterest" id="fetchopeninterest"></a>

## fetchOpenInterest
retrieves the open interest of a contract trading pair

**Kind**: instance   
**Returns**: <code>object</code> - an open interest structure[https://docs.ccxt.com/#/?id=open-interest-structure](https://docs.ccxt.com/#/?id=open-interest-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| params | <code>object</code> | No | exchange specific parameters |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchopeninterest)
* [bingx](/exchanges/bingx.md#bingxfetchopeninterest)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchopeninterest)
* [bitget](/exchanges/bitget.md#bitgetfetchopeninterest)
* [bitmart](/exchanges/bitmart.md#bitmartfetchopeninterest)
* [bybit](/exchanges/bybit.md#bybitfetchopeninterest)
* [delta](/exchanges/delta.md#deltafetchopeninterest)
* [gate](/exchanges/gate.md#gatefetchopeninterest)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchopeninterest)
* [huobi](/exchanges/huobi.md#huobifetchopeninterest)
* [okx](/exchanges/okx.md#okxfetchopeninterest)

---

<a name="fetchOpenInterestHistory" id="fetchopeninteresthistory"></a>

## fetchOpenInterestHistory
Retrieves the open interest history of a currency

**Kind**: instance   
**Returns**: <code>object</code> - an array of [open interest structure](https://docs.ccxt.com/#/?id=open-interest-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | Unified CCXT market symbol |
| timeframe | <code>string</code> | Yes | "5m","15m","30m","1h","2h","4h","6h","12h", or "1d" |
| since | <code>int</code> | No | the time(ms) of the earliest record to retrieve as a unix timestamp |
| limit | <code>int</code> | No | default 30, max 500 |
| params | <code>object</code> | No | exchange specific parameters |
| params.until | <code>int</code> | No | the time(ms) of the latest record to retrieve as a unix timestamp |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [availble parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchopeninteresthistory)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchopeninteresthistory)
* [bybit](/exchanges/bybit.md#bybitfetchopeninteresthistory)
* [huobi](/exchanges/huobi.md#huobifetchopeninteresthistory)
* [okx](/exchanges/okx.md#okxfetchopeninteresthistory)

---

<a name="fetchOpenOrder" id="fetchopenorder"></a>

## fetchOpenOrder
fetch an open order by the id

**Kind**: instance   
**Returns**: <code>object</code> - an [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.trigger | <code>string</code> | No | set to true if you would like to fetch portfolio margin account stop or conditional orders |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchopenorder)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchopenorder)
* [bybit](/exchanges/bybit.md#bybitfetchopenorder)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchopenorder)
* [hollaex](/exchanges/hollaex.md#hollaexfetchopenorder)

---

<a name="fetchOpenOrders" id="fetchopenorders"></a>

## fetchOpenOrders
fetch all unfilled currently open orders

**Kind**: instance   
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchopenorders)
* [alpaca](/exchanges/alpaca.md#alpacafetchopenorders)
* [ascendex](/exchanges/ascendex.md#ascendexfetchopenorders)
* [bigone](/exchanges/bigone.md#bigonefetchopenorders)
* [binance](/exchanges/binance.md#binancefetchopenorders)
* [bingx](/exchanges/bingx.md#bingxfetchopenorders)
* [bit2c](/exchanges/bit2c.md#bit2cfetchopenorders)
* [bitbank](/exchanges/bitbank.md#bitbankfetchopenorders)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchopenorders)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchopenorders)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchopenorders)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchopenorders)
* [bitget](/exchanges/bitget.md#bitgetfetchopenorders)
* [bithumb](/exchanges/bithumb.md#bithumbfetchopenorders)
* [bitmart](/exchanges/bitmart.md#bitmartfetchopenorders)
* [bitmex](/exchanges/bitmex.md#bitmexfetchopenorders)
* [bitrue](/exchanges/bitrue.md#bitruefetchopenorders)
* [bitso](/exchanges/bitso.md#bitsofetchopenorders)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchopenorders)
* [bitteam](/exchanges/bitteam.md#bitteamfetchopenorders)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchopenorders)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchopenorders)
* [blofin](/exchanges/blofin.md#blofinfetchopenorders)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchopenorders)
* [btcbox](/exchanges/btcbox.md#btcboxfetchopenorders)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchopenorders)
* [btcturk](/exchanges/btcturk.md#btcturkfetchopenorders)
* [bybit](/exchanges/bybit.md#bybitfetchopenorders)
* [cex](/exchanges/cex.md#cexfetchopenorders)
* [coinbase](/exchanges/coinbase.md#coinbasefetchopenorders)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchopenorders)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchopenorders)
* [coincheck](/exchanges/coincheck.md#coincheckfetchopenorders)
* [coinex](/exchanges/coinex.md#coinexfetchopenorders)
* [coinlist](/exchanges/coinlist.md#coinlistfetchopenorders)
* [coinmate](/exchanges/coinmate.md#coinmatefetchopenorders)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchopenorders)
* [coinone](/exchanges/coinone.md#coinonefetchopenorders)
* [coinsph](/exchanges/coinsph.md#coinsphfetchopenorders)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchopenorders)
* [cube](/exchanges/cube.md#cubefetchopenorders)
* [currencycom](/exchanges/currencycom.md#currencycomfetchopenorders)
* [delta](/exchanges/delta.md#deltafetchopenorders)
* [deribit](/exchanges/deribit.md#deribitfetchopenorders)
* [digifinex](/exchanges/digifinex.md#digifinexfetchopenorders)
* [exmo](/exchanges/exmo.md#exmofetchopenorders)
* [gate](/exchanges/gate.md#gatefetchopenorders)
* [gemini](/exchanges/gemini.md#geminifetchopenorders)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchopenorders)
* [hollaex](/exchanges/hollaex.md#hollaexfetchopenorders)
* [huobi](/exchanges/huobi.md#huobifetchopenorders)
* [huobijp](/exchanges/huobijp.md#huobijpfetchopenorders)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchopenorders)
* [idex](/exchanges/idex.md#idexfetchopenorders)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchopenorders)
* [indodax](/exchanges/indodax.md#indodaxfetchopenorders)
* [kraken](/exchanges/kraken.md#krakenfetchopenorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchopenorders)
* [kucoin](/exchanges/kucoin.md#kucoinfetchopenorders)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchopenorders)
* [kuna](/exchanges/kuna.md#kunafetchopenorders)
* [latoken](/exchanges/latoken.md#latokenfetchopenorders)
* [lbank](/exchanges/lbank.md#lbankfetchopenorders)
* [luno](/exchanges/luno.md#lunofetchopenorders)
* [lykke](/exchanges/lykke.md#lykkefetchopenorders)
* [mercado](/exchanges/mercado.md#mercadofetchopenorders)
* [mexc](/exchanges/mexc.md#mexcfetchopenorders)
* [ndax](/exchanges/ndax.md#ndaxfetchopenorders)
* [novadax](/exchanges/novadax.md#novadaxfetchopenorders)
* [oceanex](/exchanges/oceanex.md#oceanexfetchopenorders)
* [okcoin](/exchanges/okcoin.md#okcoinfetchopenorders)
* [okx](/exchanges/okx.md#okxfetchopenorders)
* [onetrading](/exchanges/onetrading.md#onetradingfetchopenorders)
* [p2b](/exchanges/p2b.md#p2bfetchopenorders)
* [phemex](/exchanges/phemex.md#phemexfetchopenorders)
* [poloniex](/exchanges/poloniex.md#poloniexfetchopenorders)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchopenorders)
* [probit](/exchanges/probit.md#probitfetchopenorders)
* [timex](/exchanges/timex.md#timexfetchopenorders)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchopenorders)
* [tradeogre](/exchanges/tradeogre.md#tradeogrefetchopenorders)
* [upbit](/exchanges/upbit.md#upbitfetchopenorders)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchopenorders)
* [wazirx](/exchanges/wazirx.md#wazirxfetchopenorders)
* [whitebit](/exchanges/whitebit.md#whitebitfetchopenorders)
* [woo](/exchanges/woo.md#woofetchopenorders)
* [woofipro](/exchanges/woofipro.md#woofiprofetchopenorders)
* [yobit](/exchanges/yobit.md#yobitfetchopenorders)
* [zaif](/exchanges/zaif.md#zaiffetchopenorders)
* [zonda](/exchanges/zonda.md#zondafetchopenorders)

---

<a name="fetchOpenOrdersWs" id="fetchopenordersws"></a>

## fetchOpenOrdersWs
fetch all unfilled currently open orders

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code>, <code>undefined</code> | No | the earliest time in ms to fetch open orders for |
| limit | <code>int</code>, <code>undefined</code> | No | the maximum number of open orders structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchopenordersws)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchopenordersws)
* [cex](/exchanges/cex.md#cexfetchopenordersws)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchopenordersws)

---

<a name="fetchOption" id="fetchoption"></a>

## fetchOption
fetches option data that is commonly found in an option chain

**Kind**: instance   
**Returns**: <code>object</code> - an [option chain structure](https://docs.ccxt.com/#/?id=option-chain-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchoption)
* [bybit](/exchanges/bybit.md#bybitfetchoption)
* [delta](/exchanges/delta.md#deltafetchoption)
* [deribit](/exchanges/deribit.md#deribitfetchoption)
* [gate](/exchanges/gate.md#gatefetchoption)
* [okx](/exchanges/okx.md#okxfetchoption)

---

<a name="fetchOptionChain" id="fetchoptionchain"></a>

## fetchOptionChain
fetches data for an underlying asset that is commonly found in an option chain

**Kind**: instance   
**Returns**: <code>object</code> - a list of [option chain structures](https://docs.ccxt.com/#/?id=option-chain-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| currency | <code>string</code> | Yes | base currency to fetch an option chain for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitfetchoptionchain)
* [deribit](/exchanges/deribit.md#deribitfetchoptionchain)
* [gate](/exchanges/gate.md#gatefetchoptionchain)
* [okx](/exchanges/okx.md#okxfetchoptionchain)

---

<a name="fetchOptionPositions" id="fetchoptionpositions"></a>

## fetchOptionPositions
fetch data on open options positions

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structures](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchoptionpositions)

---

<a name="fetchOrder" id="fetchorder"></a>

## fetchOrder
fetches information on an order made by the user

**Kind**: instance   
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchorder)
* [alpaca](/exchanges/alpaca.md#alpacafetchorder)
* [ascendex](/exchanges/ascendex.md#ascendexfetchorder)
* [bigone](/exchanges/bigone.md#bigonefetchorder)
* [binance](/exchanges/binance.md#binancefetchorder)
* [bingx](/exchanges/bingx.md#bingxfetchorder)
* [bit2c](/exchanges/bit2c.md#bit2cfetchorder)
* [bitbank](/exchanges/bitbank.md#bitbankfetchorder)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchorder)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchorder)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchorder)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchorder)
* [bitget](/exchanges/bitget.md#bitgetfetchorder)
* [bithumb](/exchanges/bithumb.md#bithumbfetchorder)
* [bitmart](/exchanges/bitmart.md#bitmartfetchorder)
* [bitmex](/exchanges/bitmex.md#bitmexfetchorder)
* [bitopro](/exchanges/bitopro.md#bitoprofetchorder)
* [bitrue](/exchanges/bitrue.md#bitruefetchorder)
* [bitso](/exchanges/bitso.md#bitsofetchorder)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchorder)
* [bitteam](/exchanges/bitteam.md#bitteamfetchorder)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchorder)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchorder)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchorder)
* [btcbox](/exchanges/btcbox.md#btcboxfetchorder)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchorder)
* [cex](/exchanges/cex.md#cexfetchorder)
* [coinbase](/exchanges/coinbase.md#coinbasefetchorder)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchorder)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchorder)
* [coinex](/exchanges/coinex.md#coinexfetchorder)
* [coinlist](/exchanges/coinlist.md#coinlistfetchorder)
* [coinmate](/exchanges/coinmate.md#coinmatefetchorder)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchorder)
* [coinone](/exchanges/coinone.md#coinonefetchorder)
* [coinsph](/exchanges/coinsph.md#coinsphfetchorder)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchorder)
* [cube](/exchanges/cube.md#cubefetchorder)
* [currencycom](/exchanges/currencycom.md#currencycomfetchorder)
* [deribit](/exchanges/deribit.md#deribitfetchorder)
* [digifinex](/exchanges/digifinex.md#digifinexfetchorder)
* [exmo](/exchanges/exmo.md#exmofetchorder)
* [gate](/exchanges/gate.md#gatefetchorder)
* [gemini](/exchanges/gemini.md#geminifetchorder)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchorder)
* [hollaex](/exchanges/hollaex.md#hollaexfetchorder)
* [huobi](/exchanges/huobi.md#huobifetchorder)
* [huobijp](/exchanges/huobijp.md#huobijpfetchorder)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchorder)
* [idex](/exchanges/idex.md#idexfetchorder)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchorder)
* [indodax](/exchanges/indodax.md#indodaxfetchorder)
* [kraken](/exchanges/kraken.md#krakenfetchorder)
* [kucoin](/exchanges/kucoin.md#kucoinfetchorder)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchorder)
* [kuna](/exchanges/kuna.md#kunafetchorder)
* [latoken](/exchanges/latoken.md#latokenfetchorder)
* [lbank](/exchanges/lbank.md#lbankfetchorder)
* [luno](/exchanges/luno.md#lunofetchorder)
* [lykke](/exchanges/lykke.md#lykkefetchorder)
* [mercado](/exchanges/mercado.md#mercadofetchorder)
* [mexc](/exchanges/mexc.md#mexcfetchorder)
* [ndax](/exchanges/ndax.md#ndaxfetchorder)
* [novadax](/exchanges/novadax.md#novadaxfetchorder)
* [oceanex](/exchanges/oceanex.md#oceanexfetchorder)
* [okcoin](/exchanges/okcoin.md#okcoinfetchorder)
* [okx](/exchanges/okx.md#okxfetchorder)
* [onetrading](/exchanges/onetrading.md#onetradingfetchorder)
* [phemex](/exchanges/phemex.md#phemexfetchorder)
* [poloniex](/exchanges/poloniex.md#poloniexfetchorder)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchorder)
* [probit](/exchanges/probit.md#probitfetchorder)
* [timex](/exchanges/timex.md#timexfetchorder)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchorder)
* [ace](/exchanges/ace.md#acefetchorder)
* [upbit](/exchanges/upbit.md#upbitfetchorder)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchorder)
* [woo](/exchanges/woo.md#woofetchorder)
* [woofipro](/exchanges/woofipro.md#woofiprofetchorder)
* [yobit](/exchanges/yobit.md#yobitfetchorder)

---

<a name="fetchOrderBook" id="fetchorderbook"></a>

## fetchOrderBook
fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance   
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchorderbook)
* [alpaca](/exchanges/alpaca.md#alpacafetchorderbook)
* [ascendex](/exchanges/ascendex.md#ascendexfetchorderbook)
* [bigone](/exchanges/bigone.md#bigonefetchorderbook)
* [binance](/exchanges/binance.md#binancefetchorderbook)
* [bingx](/exchanges/bingx.md#bingxfetchorderbook)
* [bit2c](/exchanges/bit2c.md#bit2cfetchorderbook)
* [bitbank](/exchanges/bitbank.md#bitbankfetchorderbook)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchorderbook)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchorderbook)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchorderbook)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchorderbook)
* [bitget](/exchanges/bitget.md#bitgetfetchorderbook)
* [bithumb](/exchanges/bithumb.md#bithumbfetchorderbook)
* [bitmart](/exchanges/bitmart.md#bitmartfetchorderbook)
* [bitmex](/exchanges/bitmex.md#bitmexfetchorderbook)
* [bitopro](/exchanges/bitopro.md#bitoprofetchorderbook)
* [bitrue](/exchanges/bitrue.md#bitruefetchorderbook)
* [bitso](/exchanges/bitso.md#bitsofetchorderbook)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchorderbook)
* [bitteam](/exchanges/bitteam.md#bitteamfetchorderbook)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchorderbook)
* [bl3p](/exchanges/bl3p.md#bl3pfetchorderbook)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchorderbook)
* [blofin](/exchanges/blofin.md#blofinfetchorderbook)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchorderbook)
* [btcbox](/exchanges/btcbox.md#btcboxfetchorderbook)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchorderbook)
* [btcturk](/exchanges/btcturk.md#btcturkfetchorderbook)
* [bybit](/exchanges/bybit.md#bybitfetchorderbook)
* [cex](/exchanges/cex.md#cexfetchorderbook)
* [coinbase](/exchanges/coinbase.md#coinbasefetchorderbook)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchorderbook)
* [coincheck](/exchanges/coincheck.md#coincheckfetchorderbook)
* [coinex](/exchanges/coinex.md#coinexfetchorderbook)
* [coinlist](/exchanges/coinlist.md#coinlistfetchorderbook)
* [coinmate](/exchanges/coinmate.md#coinmatefetchorderbook)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchorderbook)
* [coinone](/exchanges/coinone.md#coinonefetchorderbook)
* [coinsph](/exchanges/coinsph.md#coinsphfetchorderbook)
* [coinspot](/exchanges/coinspot.md#coinspotfetchorderbook)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchorderbook)
* [cube](/exchanges/cube.md#cubefetchorderbook)
* [currencycom](/exchanges/currencycom.md#currencycomfetchorderbook)
* [delta](/exchanges/delta.md#deltafetchorderbook)
* [deribit](/exchanges/deribit.md#deribitfetchorderbook)
* [digifinex](/exchanges/digifinex.md#digifinexfetchorderbook)
* [exmo](/exchanges/exmo.md#exmofetchorderbook)
* [gate](/exchanges/gate.md#gatefetchorderbook)
* [gemini](/exchanges/gemini.md#geminifetchorderbook)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchorderbook)
* [hollaex](/exchanges/hollaex.md#hollaexfetchorderbook)
* [huobi](/exchanges/huobi.md#huobifetchorderbook)
* [huobijp](/exchanges/huobijp.md#huobijpfetchorderbook)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchorderbook)
* [idex](/exchanges/idex.md#idexfetchorderbook)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchorderbook)
* [indodax](/exchanges/indodax.md#indodaxfetchorderbook)
* [kraken](/exchanges/kraken.md#krakenfetchorderbook)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchorderbook)
* [kucoin](/exchanges/kucoin.md#kucoinfetchorderbook)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchorderbook)
* [kuna](/exchanges/kuna.md#kunafetchorderbook)
* [latoken](/exchanges/latoken.md#latokenfetchorderbook)
* [lbank](/exchanges/lbank.md#lbankfetchorderbook)
* [luno](/exchanges/luno.md#lunofetchorderbook)
* [lykke](/exchanges/lykke.md#lykkefetchorderbook)
* [mercado](/exchanges/mercado.md#mercadofetchorderbook)
* [mexc](/exchanges/mexc.md#mexcfetchorderbook)
* [ndax](/exchanges/ndax.md#ndaxfetchorderbook)
* [novadax](/exchanges/novadax.md#novadaxfetchorderbook)
* [oceanex](/exchanges/oceanex.md#oceanexfetchorderbook)
* [okcoin](/exchanges/okcoin.md#okcoinfetchorderbook)
* [okx](/exchanges/okx.md#okxfetchorderbook)
* [onetrading](/exchanges/onetrading.md#onetradingfetchorderbook)
* [p2bfutures](/exchanges/p2bfutures.md#p2bfuturesfetchorderbook)
* [paymium](/exchanges/paymium.md#paymiumfetchorderbook)
* [phemex](/exchanges/phemex.md#phemexfetchorderbook)
* [poloniex](/exchanges/poloniex.md#poloniexfetchorderbook)
* [poloniexfuturesfutures](/exchanges/poloniexfuturesfutures.md#poloniexfuturesfuturesfetchorderbook)
* [probit](/exchanges/probit.md#probitfetchorderbook)
* [timex](/exchanges/timex.md#timexfetchorderbook)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchorderbook)
* [tradeogre](/exchanges/tradeogre.md#tradeogrefetchorderbook)
* [upbit](/exchanges/upbit.md#upbitfetchorderbook)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchorderbook)
* [wazirx](/exchanges/wazirx.md#wazirxfetchorderbook)
* [whitebit](/exchanges/whitebit.md#whitebitfetchorderbook)
* [woo](/exchanges/woo.md#woofetchorderbook)
* [woofipro](/exchanges/woofipro.md#woofiprofetchorderbook)
* [yobit](/exchanges/yobit.md#yobitfetchorderbook)
* [zaif](/exchanges/zaif.md#zaiffetchorderbook)
* [zonda](/exchanges/zonda.md#zondafetchorderbook)

---

<a name="fetchOrderBookWs" id="fetchorderbookws"></a>

## fetchOrderBookWs
fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance   
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchorderbookws)

---

<a name="fetchOrderBooks" id="fetchorderbooks"></a>

## fetchOrderBooks
fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data for multiple markets

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbol


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols, all symbols fetched if undefined, default is undefined |
| limit | <code>int</code> | No | max number of entries per orderbook to return, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [exmo](/exchanges/exmo.md#exmofetchorderbooks)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchorderbooks)
* [hollaex](/exchanges/hollaex.md#hollaexfetchorderbooks)
* [oceanex](/exchanges/oceanex.md#oceanexfetchorderbooks)
* [upbit](/exchanges/upbit.md#upbitfetchorderbooks)
* [yobit](/exchanges/yobit.md#yobitfetchorderbooks)

---

<a name="fetchOrderClassic" id="fetchorderclassic"></a>

## fetchOrderClassic
fetches information on an order made by the user *classic accounts only*

**Kind**: instance   
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitfetchorderclassic)
* [bybit](/exchanges/bybit.md#bybitfetchorderclassic)

---

<a name="fetchOrderTrades" id="fetchordertrades"></a>

## fetchOrderTrades
fetch all the trades made from a single order

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | order id |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trades to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchordertrades)
* [binance](/exchanges/binance.md#binancefetchordertrades)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchordertrades)
* [bitmart](/exchanges/bitmart.md#bitmartfetchordertrades)
* [bitso](/exchanges/bitso.md#bitsofetchordertrades)
* [bybit](/exchanges/bybit.md#bybitfetchordertrades)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchordertrades)
* [coinlist](/exchanges/coinlist.md#coinlistfetchordertrades)
* [coinsph](/exchanges/coinsph.md#coinsphfetchordertrades)
* [deribit](/exchanges/deribit.md#deribitfetchordertrades)
* [exmo](/exchanges/exmo.md#exmofetchordertrades)
* [gate](/exchanges/gate.md#gatefetchordertrades)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchordertrades)
* [huobi](/exchanges/huobi.md#huobifetchordertrades)
* [huobijp](/exchanges/huobijp.md#huobijpfetchordertrades)
* [kraken](/exchanges/kraken.md#krakenfetchordertrades)
* [kucoin](/exchanges/kucoin.md#kucoinfetchordertrades)
* [mexc](/exchanges/mexc.md#mexcfetchordertrades)
* [ndax](/exchanges/ndax.md#ndaxfetchordertrades)
* [novadax](/exchanges/novadax.md#novadaxfetchordertrades)
* [okcoin](/exchanges/okcoin.md#okcoinfetchordertrades)
* [okx](/exchanges/okx.md#okxfetchordertrades)
* [onetrading](/exchanges/onetrading.md#onetradingfetchordertrades)
* [p2b](/exchanges/p2b.md#p2bfetchordertrades)
* [poloniex](/exchanges/poloniex.md#poloniexfetchordertrades)
* [whitebit](/exchanges/whitebit.md#whitebitfetchordertrades)
* [woo](/exchanges/woo.md#woofetchordertrades)
* [woofipro](/exchanges/woofipro.md#woofiprofetchordertrades)

---

<a name="fetchOrderWs" id="fetchorderws"></a>

## fetchOrderWs
fetches information on an order made by the user

**Kind**: instance   
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | unified symbol of the market the order was made in |
| params | <code>object</code> | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchorderws)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchorderws)
* [cex](/exchanges/cex.md#cexfetchorderws)

---

<a name="fetchOrders" id="fetchorders"></a>

## fetchOrders
fetches information on multiple orders made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | the latest time in ms to fetch orders for |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacafetchorders)
* [bigone](/exchanges/bigone.md#bigonefetchorders)
* [binance](/exchanges/binance.md#binancefetchorders)
* [bingx](/exchanges/bingx.md#bingxfetchorders)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchorders)
* [bitmex](/exchanges/bitmex.md#bitmexfetchorders)
* [bitopro](/exchanges/bitopro.md#bitoprofetchorders)
* [bitteam](/exchanges/bitteam.md#bitteamfetchorders)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchorders)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchorders)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchorders)
* [btcbox](/exchanges/btcbox.md#btcboxfetchorders)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchorders)
* [btcturk](/exchanges/btcturk.md#btcturkfetchorders)
* [bybit](/exchanges/bybit.md#bybitfetchorders)
* [bybit](/exchanges/bybit.md#bybitfetchorders)
* [cex](/exchanges/cex.md#cexfetchorders)
* [coinbase](/exchanges/coinbase.md#coinbasefetchorders)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchorders)
* [coinlist](/exchanges/coinlist.md#coinlistfetchorders)
* [coinmate](/exchanges/coinmate.md#coinmatefetchorders)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchorders)
* [cube](/exchanges/cube.md#cubefetchorders)
* [digifinex](/exchanges/digifinex.md#digifinexfetchorders)
* [gemini](/exchanges/gemini.md#geminifetchorders)
* [hollaex](/exchanges/hollaex.md#hollaexfetchorders)
* [huobi](/exchanges/huobi.md#huobifetchorders)
* [huobijp](/exchanges/huobijp.md#huobijpfetchorders)
* [latoken](/exchanges/latoken.md#latokenfetchorders)
* [lbank](/exchanges/lbank.md#lbankfetchorders)
* [luno](/exchanges/luno.md#lunofetchorders)
* [mercado](/exchanges/mercado.md#mercadofetchorders)
* [mexc](/exchanges/mexc.md#mexcfetchorders)
* [ndax](/exchanges/ndax.md#ndaxfetchorders)
* [novadax](/exchanges/novadax.md#novadaxfetchorders)
* [oceanex](/exchanges/oceanex.md#oceanexfetchorders)
* [phemex](/exchanges/phemex.md#phemexfetchorders)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchorders)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchorders)
* [wazirx](/exchanges/wazirx.md#wazirxfetchorders)
* [woo](/exchanges/woo.md#woofetchorders)
* [woofipro](/exchanges/woofipro.md#woofiprofetchorders)

---

<a name="fetchOrdersByIds" id="fetchordersbyids"></a>

## fetchOrdersByIds
fetch orders by the list of order id

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| ids | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of order id |
| params | <code>object</code> | No | extra parameters specific to the kraken api endpoint |

##### Supported exchanges
* [kraken](/exchanges/kraken.md#krakenfetchordersbyids)

---

<a name="fetchOrdersByStatus" id="fetchordersbystatus"></a>

## fetchOrdersByStatus
fetch a list of orders

**Kind**: instance   
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params.trigger | <code>boolean</code> | No | set to true for fetching trigger orders |
| params.marginMode | <code>string</code> | No | 'cross' or 'isolated' for fetching spot margin orders |

##### Supported exchanges
* [coinex](/exchanges/coinex.md#coinexfetchordersbystatus)
* [kucoin](/exchanges/kucoin.md#kucoinfetchordersbystatus)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchordersbystatus)
* [kuna](/exchanges/kuna.md#kunafetchordersbystatus)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchordersbystatus)

---

<a name="fetchOrdersWs" id="fetchordersws"></a>

## fetchOrdersWs
fetches information on multiple orders made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code>, <code>undefined</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code>, <code>undefined</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.orderId | <code>int</code> | No | order id to begin at |
| params.startTime | <code>int</code> | No | earliest time in ms to retrieve orders for |
| params.endTime | <code>int</code> | No | latest time in ms to retrieve orders for |
| params.limit | <code>int</code> | No | the maximum number of order structures to retrieve |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchordersws)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchordersws)

---

<a name="fetchPortfolios" id="fetchportfolios"></a>

## fetchPortfolios
fetch all the portfolios

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [account structures](https://docs.ccxt.com/#/?id=account-structure) indexed by the account type


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [coinbase](/exchanges/coinbase.md#coinbasefetchportfolios)

---

<a name="fetchPosition" id="fetchposition"></a>

## fetchPosition
fetch data on an open position

**Kind**: instance   
**Returns**: <code>object</code> - a [position structure](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the position is held in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchposition)
* [bitget](/exchanges/bitget.md#bitgetfetchposition)
* [bitmart](/exchanges/bitmart.md#bitmartfetchposition)
* [blofin](/exchanges/blofin.md#blofinfetchposition)
* [blofin](/exchanges/blofin.md#blofinfetchposition)
* [bybit](/exchanges/bybit.md#bybitfetchposition)
* [coinbase](/exchanges/coinbase.md#coinbasefetchposition)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchposition)
* [coinex](/exchanges/coinex.md#coinexfetchposition)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchposition)
* [delta](/exchanges/delta.md#deltafetchposition)
* [deribit](/exchanges/deribit.md#deribitfetchposition)
* [digifinex](/exchanges/digifinex.md#digifinexfetchposition)
* [gate](/exchanges/gate.md#gatefetchposition)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchposition)
* [huobi](/exchanges/huobi.md#huobifetchposition)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchposition)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchposition)
* [mexc](/exchanges/mexc.md#mexcfetchposition)
* [okx](/exchanges/okx.md#okxfetchposition)
* [woofipro](/exchanges/woofipro.md#woofiprofetchposition)

---

<a name="fetchPositionHistory" id="fetchpositionhistory"></a>

## fetchPositionHistory
fetches historical positions

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structures](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified contract symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch positions for |
| limit | <code>int</code> | No | the maximum amount of records to fetch, default is 10 |
| params | <code>object</code> | No | extra parameters specific to the exchange api endpoint |
| params.until | <code>int</code> | No | the latest time in ms to fetch positions for |

##### Supported exchanges
* [coinex](/exchanges/coinex.md#coinexfetchpositionhistory)

---

<a name="fetchPositionMode" id="fetchpositionmode"></a>

## fetchPositionMode
fetchs the position mode, hedged or one way, hedged for binance is set identically for all linear markets or all inverse markets

**Kind**: instance   
**Returns**: <code>object</code> - an object detailing whether the market is in hedged or one-way mode


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchpositionmode)
* [bingx](/exchanges/bingx.md#bingxfetchpositionmode)
* [okx](/exchanges/okx.md#okxfetchpositionmode)

---

<a name="fetchPositionWs" id="fetchpositionws"></a>

## fetchPositionWs
fetch data on an open position

**Kind**: instance   
**Returns**: <code>object</code> - a [position structure](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market the position is held in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchpositionws)

---

<a name="fetchPositions" id="fetchpositions"></a>

## fetchPositions
fetch all open positions

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchpositions)
* [binance](/exchanges/binance.md#binancefetchpositions)
* [bingx](/exchanges/bingx.md#bingxfetchpositions)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchpositions)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchpositions)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchpositions)
* [bitget](/exchanges/bitget.md#bitgetfetchpositions)
* [bitmart](/exchanges/bitmart.md#bitmartfetchpositions)
* [bitmex](/exchanges/bitmex.md#bitmexfetchpositions)
* [bybit](/exchanges/bybit.md#bybitfetchpositions)
* [coinbase](/exchanges/coinbase.md#coinbasefetchpositions)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchpositions)
* [coinex](/exchanges/coinex.md#coinexfetchpositions)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchpositions)
* [currencycom](/exchanges/currencycom.md#currencycomfetchpositions)
* [delta](/exchanges/delta.md#deltafetchpositions)
* [deribit](/exchanges/deribit.md#deribitfetchpositions)
* [digifinex](/exchanges/digifinex.md#digifinexfetchpositions)
* [gate](/exchanges/gate.md#gatefetchpositions)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchpositions)
* [huobi](/exchanges/huobi.md#huobifetchpositions)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchpositions)
* [kraken](/exchanges/kraken.md#krakenfetchpositions)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchpositions)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchpositions)
* [mexc](/exchanges/mexc.md#mexcfetchpositions)
* [okx](/exchanges/okx.md#okxfetchpositions)
* [okx](/exchanges/okx.md#okxfetchpositions)
* [phemex](/exchanges/phemex.md#phemexfetchpositions)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchpositions)
* [woofipro](/exchanges/woofipro.md#woofiprofetchpositions)

---

<a name="fetchPositionsHistory" id="fetchpositionshistory"></a>

## fetchPositionsHistory
fetches historical positions

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structures](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | unified contract symbols |
| since | <code>int</code> | No | timestamp in ms of the earliest position to fetch, default=3 months ago, max range for params["until"] - since is 3 months |
| limit | <code>int</code> | No | the maximum amount of records to fetch, default=20, max=100 |
| params | <code>object</code> | Yes | extra parameters specific to the exchange api endpoint |
| params.until | <code>int</code> | No | timestamp in ms of the latest position to fetch, max range for params["until"] - since is 3 months EXCHANGE SPECIFIC PARAMETERS |
| params.productType | <code>string</code> | No | USDT-FUTURES (default), COIN-FUTURES, USDC-FUTURES, SUSDT-FUTURES, SCOIN-FUTURES, or SUSDC-FUTURES |

##### Supported exchanges
* [bitget](/exchanges/bitget.md#bitgetfetchpositionshistory)
* [bybit](/exchanges/bybit.md#bybitfetchpositionshistory)
* [gate](/exchanges/gate.md#gatefetchpositionshistory)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchpositionshistory)
* [mexc](/exchanges/mexc.md#mexcfetchpositionshistory)
* [okx](/exchanges/okx.md#okxfetchpositionshistory)

---

<a name="fetchPositionsWs" id="fetchpositionsws"></a>

## fetchPositionsWs
fetch all open positions

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/#/?id=position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | No | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.returnRateLimits | <code>boolean</code> | No | set to true to return rate limit informations, defaults to false. |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchpositionsws)

---

<a name="fetchRawOrder" id="fetchraworder"></a>

## fetchRawOrder
fetches information on an order made by the user

**Kind**: instance   
**Returns**: <code>object</code> - An [order structure](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market the order was made in |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [cube](/exchanges/cube.md#cubefetchraworder)

---

<a name="fetchRawOrders" id="fetchraworders"></a>

## fetchRawOrders
fetch all orders from all markets

**Kind**: instance   
**Returns**: <code>Array&lt;Order&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [cube](/exchanges/cube.md#cubefetchraworders)

---

<a name="fetchSettlementHistory" id="fetchsettlementhistory"></a>

## fetchSettlementHistory
fetches historical settlement records

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [settlement history objects](https://docs.ccxt.com/#/?id=settlement-history-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the settlement history |
| since | <code>int</code> | No | timestamp in ms |
| limit | <code>int</code> | No | number of records, default 100, max 100 |
| params | <code>object</code> | No | exchange specific params |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchsettlementhistory)
* [bybit](/exchanges/bybit.md#bybitfetchsettlementhistory)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchsettlementhistory)
* [delta](/exchanges/delta.md#deltafetchsettlementhistory)
* [gate](/exchanges/gate.md#gatefetchsettlementhistory)
* [huobi](/exchanges/huobi.md#huobifetchsettlementhistory)
* [okx](/exchanges/okx.md#okxfetchsettlementhistory)

---

<a name="fetchStatus" id="fetchstatus"></a>

## fetchStatus
the latest known information on the availability of the exchange API

**Kind**: instance   
**Returns**: <code>object</code> - a [status structure](https://docs.ccxt.com/#/?id=exchange-status-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchstatus)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchstatus)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchstatus)
* [bitmart](/exchanges/bitmart.md#bitmartfetchstatus)
* [bitrue](/exchanges/bitrue.md#bitruefetchstatus)
* [coinsph](/exchanges/coinsph.md#coinsphfetchstatus)
* [cube](/exchanges/cube.md#cubefetchstatus)
* [delta](/exchanges/delta.md#deltafetchstatus)
* [deribit](/exchanges/deribit.md#deribitfetchstatus)
* [digifinex](/exchanges/digifinex.md#digifinexfetchstatus)
* [idex](/exchanges/idex.md#idexfetchstatus)
* [kucoin](/exchanges/kucoin.md#kucoinfetchstatus)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchstatus)
* [mexc](/exchanges/mexc.md#mexcfetchstatus)
* [okx](/exchanges/okx.md#okxfetchstatus)
* [wazirx](/exchanges/wazirx.md#wazirxfetchstatus)
* [whitebit](/exchanges/whitebit.md#whitebitfetchstatus)
* [woo](/exchanges/woo.md#woofetchstatus)
* [woofipro](/exchanges/woofipro.md#woofiprofetchstatus)

---

<a name="fetchTicker" id="fetchticker"></a>

## fetchTicker
fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance   
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchticker)
* [ascendex](/exchanges/ascendex.md#ascendexfetchticker)
* [bigone](/exchanges/bigone.md#bigonefetchticker)
* [binance](/exchanges/binance.md#binancefetchticker)
* [bingx](/exchanges/bingx.md#bingxfetchticker)
* [bit2c](/exchanges/bit2c.md#bit2cfetchticker)
* [bitbank](/exchanges/bitbank.md#bitbankfetchticker)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchticker)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchticker)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchticker)
* [bitget](/exchanges/bitget.md#bitgetfetchticker)
* [bithumb](/exchanges/bithumb.md#bithumbfetchticker)
* [bitmart](/exchanges/bitmart.md#bitmartfetchticker)
* [bitmex](/exchanges/bitmex.md#bitmexfetchticker)
* [bitopro](/exchanges/bitopro.md#bitoprofetchticker)
* [bitrue](/exchanges/bitrue.md#bitruefetchticker)
* [bitso](/exchanges/bitso.md#bitsofetchticker)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchticker)
* [bitteam](/exchanges/bitteam.md#bitteamfetchticker)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchticker)
* [bl3p](/exchanges/bl3p.md#bl3pfetchticker)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchticker)
* [blofin](/exchanges/blofin.md#blofinfetchticker)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchticker)
* [btcbox](/exchanges/btcbox.md#btcboxfetchticker)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchticker)
* [btcturk](/exchanges/btcturk.md#btcturkfetchticker)
* [bybit](/exchanges/bybit.md#bybitfetchticker)
* [cex](/exchanges/cex.md#cexfetchticker)
* [coinbase](/exchanges/coinbase.md#coinbasefetchticker)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchticker)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchticker)
* [coincheck](/exchanges/coincheck.md#coincheckfetchticker)
* [coinex](/exchanges/coinex.md#coinexfetchticker)
* [coinlist](/exchanges/coinlist.md#coinlistfetchticker)
* [coinmate](/exchanges/coinmate.md#coinmatefetchticker)
* [coinone](/exchanges/coinone.md#coinonefetchticker)
* [coinsph](/exchanges/coinsph.md#coinsphfetchticker)
* [coinspot](/exchanges/coinspot.md#coinspotfetchticker)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchticker)
* [cube](/exchanges/cube.md#cubefetchticker)
* [currencycom](/exchanges/currencycom.md#currencycomfetchticker)
* [delta](/exchanges/delta.md#deltafetchticker)
* [deribit](/exchanges/deribit.md#deribitfetchticker)
* [digifinex](/exchanges/digifinex.md#digifinexfetchticker)
* [exmo](/exchanges/exmo.md#exmofetchticker)
* [gate](/exchanges/gate.md#gatefetchticker)
* [gemini](/exchanges/gemini.md#geminifetchticker)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchticker)
* [hollaex](/exchanges/hollaex.md#hollaexfetchticker)
* [huobi](/exchanges/huobi.md#huobifetchticker)
* [huobijp](/exchanges/huobijp.md#huobijpfetchticker)
* [idex](/exchanges/idex.md#idexfetchticker)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchticker)
* [indodax](/exchanges/indodax.md#indodaxfetchticker)
* [kraken](/exchanges/kraken.md#krakenfetchticker)
* [kucoin](/exchanges/kucoin.md#kucoinfetchticker)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchticker)
* [kuna](/exchanges/kuna.md#kunafetchticker)
* [latoken](/exchanges/latoken.md#latokenfetchticker)
* [lbank](/exchanges/lbank.md#lbankfetchticker)
* [luno](/exchanges/luno.md#lunofetchticker)
* [lykke](/exchanges/lykke.md#lykkefetchticker)
* [mercado](/exchanges/mercado.md#mercadofetchticker)
* [mexc](/exchanges/mexc.md#mexcfetchticker)
* [ndax](/exchanges/ndax.md#ndaxfetchticker)
* [novadax](/exchanges/novadax.md#novadaxfetchticker)
* [oceanex](/exchanges/oceanex.md#oceanexfetchticker)
* [okcoin](/exchanges/okcoin.md#okcoinfetchticker)
* [okx](/exchanges/okx.md#okxfetchticker)
* [onetrading](/exchanges/onetrading.md#onetradingfetchticker)
* [p2b](/exchanges/p2b.md#p2bfetchticker)
* [paymium](/exchanges/paymium.md#paymiumfetchticker)
* [phemex](/exchanges/phemex.md#phemexfetchticker)
* [poloniex](/exchanges/poloniex.md#poloniexfetchticker)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchticker)
* [probit](/exchanges/probit.md#probitfetchticker)
* [timex](/exchanges/timex.md#timexfetchticker)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchticker)
* [tradeogre](/exchanges/tradeogre.md#tradeogrefetchticker)
* [upbit](/exchanges/upbit.md#upbitfetchticker)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchticker)
* [wazirx](/exchanges/wazirx.md#wazirxfetchticker)
* [whitebit](/exchanges/whitebit.md#whitebitfetchticker)
* [yobit](/exchanges/yobit.md#yobitfetchticker)
* [zaif](/exchanges/zaif.md#zaiffetchticker)
* [zonda](/exchanges/zonda.md#zondafetchticker)

---

<a name="fetchTickerWs" id="fetchtickerws"></a>

## fetchTickerWs
fetches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance   
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.method | <code>string</code> | No | method to use can be ticker.price or ticker.book |
| params.returnRateLimits | <code>boolean</code> | No | return the rate limits for the exchange |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchtickerws)
* [cex](/exchanges/cex.md#cexfetchtickerws)
* [lbank](/exchanges/lbank.md#lbankfetchtickerws)

---

<a name="fetchTickers" id="fetchtickers"></a>

## fetchTickers
fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each market

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [ticker structures](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | unified symbols of the markets to fetch the ticker for, all market tickers are returned if not assigned |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ace](/exchanges/ace.md#acefetchtickers)
* [ascendex](/exchanges/ascendex.md#ascendexfetchtickers)
* [bigone](/exchanges/bigone.md#bigonefetchtickers)
* [binance](/exchanges/binance.md#binancefetchtickers)
* [bingx](/exchanges/bingx.md#bingxfetchtickers)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchtickers)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchtickers)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchtickers)
* [bitget](/exchanges/bitget.md#bitgetfetchtickers)
* [bithumb](/exchanges/bithumb.md#bithumbfetchtickers)
* [bitmart](/exchanges/bitmart.md#bitmartfetchtickers)
* [bitmex](/exchanges/bitmex.md#bitmexfetchtickers)
* [bitopro](/exchanges/bitopro.md#bitoprofetchtickers)
* [bitrue](/exchanges/bitrue.md#bitruefetchtickers)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchtickers)
* [bitteam](/exchanges/bitteam.md#bitteamfetchtickers)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchtickers)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchtickers)
* [blofin](/exchanges/blofin.md#blofinfetchtickers)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchtickers)
* [btcturk](/exchanges/btcturk.md#btcturkfetchtickers)
* [bybit](/exchanges/bybit.md#bybitfetchtickers)
* [cex](/exchanges/cex.md#cexfetchtickers)
* [coinbase](/exchanges/coinbase.md#coinbasefetchtickers)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchtickers)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchtickers)
* [coinex](/exchanges/coinex.md#coinexfetchtickers)
* [coinlist](/exchanges/coinlist.md#coinlistfetchtickers)
* [coinmate](/exchanges/coinmate.md#coinmatefetchtickers)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchtickers)
* [coinone](/exchanges/coinone.md#coinonefetchtickers)
* [coinsph](/exchanges/coinsph.md#coinsphfetchtickers)
* [coinspot](/exchanges/coinspot.md#coinspotfetchtickers)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchtickers)
* [cube](/exchanges/cube.md#cubefetchtickers)
* [currencycom](/exchanges/currencycom.md#currencycomfetchtickers)
* [delta](/exchanges/delta.md#deltafetchtickers)
* [deribit](/exchanges/deribit.md#deribitfetchtickers)
* [digifinex](/exchanges/digifinex.md#digifinexfetchtickers)
* [exmo](/exchanges/exmo.md#exmofetchtickers)
* [gate](/exchanges/gate.md#gatefetchtickers)
* [gemini](/exchanges/gemini.md#geminifetchtickers)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchtickers)
* [hollaex](/exchanges/hollaex.md#hollaexfetchtickers)
* [huobi](/exchanges/huobi.md#huobifetchtickers)
* [huobijp](/exchanges/huobijp.md#huobijpfetchtickers)
* [idex](/exchanges/idex.md#idexfetchtickers)
* [indodax](/exchanges/indodax.md#indodaxfetchtickers)
* [kraken](/exchanges/kraken.md#krakenfetchtickers)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchtickers)
* [kucoin](/exchanges/kucoin.md#kucoinfetchtickers)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchtickers)
* [kuna](/exchanges/kuna.md#kunafetchtickers)
* [latoken](/exchanges/latoken.md#latokenfetchtickers)
* [lbank](/exchanges/lbank.md#lbankfetchtickers)
* [luno](/exchanges/luno.md#lunofetchtickers)
* [lykke](/exchanges/lykke.md#lykkefetchtickers)
* [mexc](/exchanges/mexc.md#mexcfetchtickers)
* [novadax](/exchanges/novadax.md#novadaxfetchtickers)
* [oceanex](/exchanges/oceanex.md#oceanexfetchtickers)
* [okcoin](/exchanges/okcoin.md#okcoinfetchtickers)
* [okx](/exchanges/okx.md#okxfetchtickers)
* [onetrading](/exchanges/onetrading.md#onetradingfetchtickers)
* [p2b](/exchanges/p2b.md#p2bfetchtickers)
* [phemex](/exchanges/phemex.md#phemexfetchtickers)
* [poloniex](/exchanges/poloniex.md#poloniexfetchtickers)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchtickers)
* [probit](/exchanges/probit.md#probitfetchtickers)
* [timex](/exchanges/timex.md#timexfetchtickers)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchtickers)
* [upbit](/exchanges/upbit.md#upbitfetchtickers)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchtickers)
* [wazirx](/exchanges/wazirx.md#wazirxfetchtickers)
* [whitebit](/exchanges/whitebit.md#whitebitfetchtickers)
* [yobit](/exchanges/yobit.md#yobitfetchtickers)

---

<a name="fetchTime" id="fetchtime"></a>

## fetchTime
fetches the current integer timestamp in milliseconds from the exchange server

**Kind**: instance   
**Returns**: <code>int</code> - the current integer timestamp in milliseconds from the exchange server


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacafetchtime)
* [ascendex](/exchanges/ascendex.md#ascendexfetchtime)
* [bigone](/exchanges/bigone.md#bigonefetchtime)
* [binance](/exchanges/binance.md#binancefetchtime)
* [bingx](/exchanges/bingx.md#bingxfetchtime)
* [bitget](/exchanges/bitget.md#bitgetfetchtime)
* [bitmart](/exchanges/bitmart.md#bitmartfetchtime)
* [bitrue](/exchanges/bitrue.md#bitruefetchtime)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchtime)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchtime)
* [bybit](/exchanges/bybit.md#bybitfetchtime)
* [coinbase](/exchanges/coinbase.md#coinbasefetchtime)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchtime)
* [coinex](/exchanges/coinex.md#coinexfetchtime)
* [coinlist](/exchanges/coinlist.md#coinlistfetchtime)
* [coinsph](/exchanges/coinsph.md#coinsphfetchtime)
* [currencycom](/exchanges/currencycom.md#currencycomfetchtime)
* [delta](/exchanges/delta.md#deltafetchtime)
* [deribit](/exchanges/deribit.md#deribitfetchtime)
* [digifinex](/exchanges/digifinex.md#digifinexfetchtime)
* [huobi](/exchanges/huobi.md#huobifetchtime)
* [huobijp](/exchanges/huobijp.md#huobijpfetchtime)
* [idex](/exchanges/idex.md#idexfetchtime)
* [indodax](/exchanges/indodax.md#indodaxfetchtime)
* [kraken](/exchanges/kraken.md#krakenfetchtime)
* [kucoin](/exchanges/kucoin.md#kucoinfetchtime)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchtime)
* [kuna](/exchanges/kuna.md#kunafetchtime)
* [latoken](/exchanges/latoken.md#latokenfetchtime)
* [lbank](/exchanges/lbank.md#lbankfetchtime)
* [mexc](/exchanges/mexc.md#mexcfetchtime)
* [novadax](/exchanges/novadax.md#novadaxfetchtime)
* [oceanex](/exchanges/oceanex.md#oceanexfetchtime)
* [okcoin](/exchanges/okcoin.md#okcoinfetchtime)
* [okx](/exchanges/okx.md#okxfetchtime)
* [onetrading](/exchanges/onetrading.md#onetradingfetchtime)
* [poloniex](/exchanges/poloniex.md#poloniexfetchtime)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchtime)
* [probit](/exchanges/probit.md#probitfetchtime)
* [timex](/exchanges/timex.md#timexfetchtime)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchtime)
* [wazirx](/exchanges/wazirx.md#wazirxfetchtime)
* [whitebit](/exchanges/whitebit.md#whitebitfetchtime)
* [woo](/exchanges/woo.md#woofetchtime)
* [woofipro](/exchanges/woofipro.md#woofiprofetchtime)

---

<a name="fetchTrades" id="fetchtrades"></a>

## fetchTrades
get the list of most recent trades for a particular symbol

**Kind**: instance   
**Returns**: <code>Array&lt;Trade&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | timestamp in ms of the earliest trade to fetch |
| limit | <code>int</code> | No | the maximum amount of trades to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.loc | <code>string</code> | No | crypto location, default: us |
| params.method | <code>string</code> | No | method, default: marketPublicGetV1beta3CryptoLocTrades |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacafetchtrades)
* [ascendex](/exchanges/ascendex.md#ascendexfetchtrades)
* [bigone](/exchanges/bigone.md#bigonefetchtrades)
* [binance](/exchanges/binance.md#binancefetchtrades)
* [bingx](/exchanges/bingx.md#bingxfetchtrades)
* [bit2c](/exchanges/bit2c.md#bit2cfetchtrades)
* [bitbank](/exchanges/bitbank.md#bitbankfetchtrades)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchtrades)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchtrades)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchtrades)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchtrades)
* [bitget](/exchanges/bitget.md#bitgetfetchtrades)
* [bithumb](/exchanges/bithumb.md#bithumbfetchtrades)
* [bitmart](/exchanges/bitmart.md#bitmartfetchtrades)
* [bitmex](/exchanges/bitmex.md#bitmexfetchtrades)
* [bitopro](/exchanges/bitopro.md#bitoprofetchtrades)
* [bitrue](/exchanges/bitrue.md#bitruefetchtrades)
* [bitso](/exchanges/bitso.md#bitsofetchtrades)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchtrades)
* [bitteam](/exchanges/bitteam.md#bitteamfetchtrades)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchtrades)
* [bl3p](/exchanges/bl3p.md#bl3pfetchtrades)
* [blofin](/exchanges/blofin.md#blofinfetchtrades)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchtrades)
* [btcbox](/exchanges/btcbox.md#btcboxfetchtrades)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchtrades)
* [btcturk](/exchanges/btcturk.md#btcturkfetchtrades)
* [bybit](/exchanges/bybit.md#bybitfetchtrades)
* [cex](/exchanges/cex.md#cexfetchtrades)
* [coinbase](/exchanges/coinbase.md#coinbasefetchtrades)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchtrades)
* [coincheck](/exchanges/coincheck.md#coincheckfetchtrades)
* [coinex](/exchanges/coinex.md#coinexfetchtrades)
* [coinlist](/exchanges/coinlist.md#coinlistfetchtrades)
* [coinmate](/exchanges/coinmate.md#coinmatefetchtrades)
* [coinmetro](/exchanges/coinmetro.md#coinmetrofetchtrades)
* [coinone](/exchanges/coinone.md#coinonefetchtrades)
* [coinsph](/exchanges/coinsph.md#coinsphfetchtrades)
* [coinspot](/exchanges/coinspot.md#coinspotfetchtrades)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchtrades)
* [cube](/exchanges/cube.md#cubefetchtrades)
* [currencycom](/exchanges/currencycom.md#currencycomfetchtrades)
* [delta](/exchanges/delta.md#deltafetchtrades)
* [deribit](/exchanges/deribit.md#deribitfetchtrades)
* [digifinex](/exchanges/digifinex.md#digifinexfetchtrades)
* [exmo](/exchanges/exmo.md#exmofetchtrades)
* [gate](/exchanges/gate.md#gatefetchtrades)
* [gemini](/exchanges/gemini.md#geminifetchtrades)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchtrades)
* [hollaex](/exchanges/hollaex.md#hollaexfetchtrades)
* [huobi](/exchanges/huobi.md#huobifetchtrades)
* [huobijp](/exchanges/huobijp.md#huobijpfetchtrades)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidfetchtrades)
* [idex](/exchanges/idex.md#idexfetchtrades)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchtrades)
* [indodax](/exchanges/indodax.md#indodaxfetchtrades)
* [kraken](/exchanges/kraken.md#krakenfetchtrades)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturesfetchtrades)
* [kucoin](/exchanges/kucoin.md#kucoinfetchtrades)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchtrades)
* [kuna](/exchanges/kuna.md#kunafetchtrades)
* [latoken](/exchanges/latoken.md#latokenfetchtrades)
* [lbank](/exchanges/lbank.md#lbankfetchtrades)
* [luno](/exchanges/luno.md#lunofetchtrades)
* [lykke](/exchanges/lykke.md#lykkefetchtrades)
* [mercado](/exchanges/mercado.md#mercadofetchtrades)
* [mexc](/exchanges/mexc.md#mexcfetchtrades)
* [ndax](/exchanges/ndax.md#ndaxfetchtrades)
* [novadax](/exchanges/novadax.md#novadaxfetchtrades)
* [oceanex](/exchanges/oceanex.md#oceanexfetchtrades)
* [okcoin](/exchanges/okcoin.md#okcoinfetchtrades)
* [okx](/exchanges/okx.md#okxfetchtrades)
* [onetrading](/exchanges/onetrading.md#onetradingfetchtrades)
* [p2b](/exchanges/p2b.md#p2bfetchtrades)
* [paymium](/exchanges/paymium.md#paymiumfetchtrades)
* [phemex](/exchanges/phemex.md#phemexfetchtrades)
* [poloniex](/exchanges/poloniex.md#poloniexfetchtrades)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturesfetchtrades)
* [probit](/exchanges/probit.md#probitfetchtrades)
* [timex](/exchanges/timex.md#timexfetchtrades)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchtrades)
* [tradeogre](/exchanges/tradeogre.md#tradeogrefetchtrades)
* [upbit](/exchanges/upbit.md#upbitfetchtrades)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangefetchtrades)
* [wazirx](/exchanges/wazirx.md#wazirxfetchtrades)
* [whitebit](/exchanges/whitebit.md#whitebitfetchtrades)
* [woo](/exchanges/woo.md#woofetchtrades)
* [woofipro](/exchanges/woofipro.md#woofiprofetchtrades)
* [yobit](/exchanges/yobit.md#yobitfetchtrades)
* [zaif](/exchanges/zaif.md#zaiffetchtrades)
* [zonda](/exchanges/zonda.md#zondafetchtrades)

---

<a name="fetchTradesWs" id="fetchtradesws"></a>

## fetchTradesWs
fetch all trades made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trades structures to retrieve, default=500, max=1000 |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint EXCHANGE SPECIFIC PARAMETERS |
| params.fromId | <code>int</code> | No | trade ID to begin at |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchtradesws)
* [lbank](/exchanges/lbank.md#lbankfetchtradesws)

---

<a name="fetchTradingFee" id="fetchtradingfee"></a>

## fetchTradingFee
fetch the trading fees for a market

**Kind**: instance   
**Returns**: <code>object</code> - a [fee structure](https://docs.ccxt.com/#/?id=fee-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to fetch trading fees in a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchtradingfee)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchtradingfee)
* [bitget](/exchanges/bitget.md#bitgetfetchtradingfee)
* [bitmart](/exchanges/bitmart.md#bitmartfetchtradingfee)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchtradingfee)
* [bybit](/exchanges/bybit.md#bybitfetchtradingfee)
* [coinex](/exchanges/coinex.md#coinexfetchtradingfee)
* [coinmate](/exchanges/coinmate.md#coinmatefetchtradingfee)
* [coinsph](/exchanges/coinsph.md#coinsphfetchtradingfee)
* [cube](/exchanges/cube.md#cubefetchtradingfee)
* [digifinex](/exchanges/digifinex.md#digifinexfetchtradingfee)
* [gate](/exchanges/gate.md#gatefetchtradingfee)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchtradingfee)
* [huobi](/exchanges/huobi.md#huobifetchtradingfee)
* [kraken](/exchanges/kraken.md#krakenfetchtradingfee)
* [kucoin](/exchanges/kucoin.md#kucoinfetchtradingfee)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchtradingfee)
* [latoken](/exchanges/latoken.md#latokenfetchtradingfee)
* [lbank](/exchanges/lbank.md#lbankfetchtradingfee)
* [luno](/exchanges/luno.md#lunofetchtradingfee)
* [okx](/exchanges/okx.md#okxfetchtradingfee)
* [timex](/exchanges/timex.md#timexfetchtradingfee)
* [upbit](/exchanges/upbit.md#upbitfetchtradingfee)

---

<a name="fetchTradingFees" id="fetchtradingfees"></a>

## fetchTradingFees
fetch the trading fees for multiple markets

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [fee structures](https://docs.ccxt.com/#/?id=fee-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchtradingfees)
* [binance](/exchanges/binance.md#binancefetchtradingfees)
* [bit2c](/exchanges/bit2c.md#bit2cfetchtradingfees)
* [bitbank](/exchanges/bitbank.md#bitbankfetchtradingfees)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchtradingfees)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2fetchtradingfees)
* [bitget](/exchanges/bitget.md#bitgetfetchtradingfees)
* [bitopro](/exchanges/bitopro.md#bitoprofetchtradingfees)
* [bitso](/exchanges/bitso.md#bitsofetchtradingfees)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchtradingfees)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchtradingfees)
* [bl3p](/exchanges/bl3p.md#bl3pfetchtradingfees)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchtradingfees)
* [bybit](/exchanges/bybit.md#bybitfetchtradingfees)
* [cex](/exchanges/cex.md#cexfetchtradingfees)
* [coinbase](/exchanges/coinbase.md#coinbasefetchtradingfees)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchtradingfees)
* [coincheck](/exchanges/coincheck.md#coincheckfetchtradingfees)
* [coinex](/exchanges/coinex.md#coinexfetchtradingfees)
* [coinlist](/exchanges/coinlist.md#coinlistfetchtradingfees)
* [coinsph](/exchanges/coinsph.md#coinsphfetchtradingfees)
* [currencycom](/exchanges/currencycom.md#currencycomfetchtradingfees)
* [deribit](/exchanges/deribit.md#deribitfetchtradingfees)
* [exmo](/exchanges/exmo.md#exmofetchtradingfees)
* [gate](/exchanges/gate.md#gatefetchtradingfees)
* [gemini](/exchanges/gemini.md#geminifetchtradingfees)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchtradingfees)
* [hollaex](/exchanges/hollaex.md#hollaexfetchtradingfees)
* [idex](/exchanges/idex.md#idexfetchtradingfees)
* [independentreserve](/exchanges/independentreserve.md#independentreservefetchtradingfees)
* [lbank](/exchanges/lbank.md#lbankfetchtradingfees)
* [mexc](/exchanges/mexc.md#mexcfetchtradingfees)
* [oceanex](/exchanges/oceanex.md#oceanexfetchtradingfees)
* [onetrading](/exchanges/onetrading.md#onetradingfetchtradingfees)
* [poloniex](/exchanges/poloniex.md#poloniexfetchtradingfees)
* [whitebit](/exchanges/whitebit.md#whitebitfetchtradingfees)
* [woo](/exchanges/woo.md#woofetchtradingfees)
* [woofipro](/exchanges/woofipro.md#woofiprofetchtradingfees)
* [yobit](/exchanges/yobit.md#yobitfetchtradingfees)

---

<a name="fetchTradingFeesWs" id="fetchtradingfeesws"></a>

## fetchTradingFeesWs
fetch the trading fees for multiple markets

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [fee structures](https://docs.ccxt.com/#/?id=fee-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the bitvavo api endpoint |

##### Supported exchanges
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchtradingfeesws)

---

<a name="fetchTransactionFee" id="fetchtransactionfee"></a>

## fetchTransactionFee
please use fetchDepositWithdrawFee instead

**Kind**: instance   
**Returns**: <code>object</code> - a [fee structure](https://docs.ccxt.com/#/?id=fee-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bitmart](/exchanges/bitmart.md#bitmartfetchtransactionfee)
* [indodax](/exchanges/indodax.md#indodaxfetchtransactionfee)
* [kucoin](/exchanges/kucoin.md#kucoinfetchtransactionfee)

---

<a name="fetchTransactionFees" id="fetchtransactionfees"></a>

## fetchTransactionFees
please use fetchDepositWithdrawFees instead

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [fee structures](https://docs.ccxt.com/#/?id=fee-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| codes | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | not used by binance fetchTransactionFees () |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchtransactionfees)
* [bitfinex](/exchanges/bitfinex.md#bitfinexfetchtransactionfees)
* [bitso](/exchanges/bitso.md#bitsofetchtransactionfees)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchtransactionfees)
* [exmo](/exchanges/exmo.md#exmofetchtransactionfees)
* [gate](/exchanges/gate.md#gatefetchtransactionfees)
* [lbank](/exchanges/lbank.md#lbankfetchtransactionfees)
* [mexc](/exchanges/mexc.md#mexcfetchtransactionfees)
* [whitebit](/exchanges/whitebit.md#whitebitfetchtransactionfees)

---

<a name="fetchTransactions" id="fetchtransactions"></a>

## fetchTransactions
use fetchDepositsWithdrawals instead

**Kind**: instance   
**Returns**: <code>object</code> - a list of [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code for the currency of the transactions, default is undefined |
| since | <code>int</code> | No | timestamp in ms of the earliest transaction, default is undefined |
| limit | <code>int</code> | No | max number of transactions to return, default is undefined |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [latoken](/exchanges/latoken.md#latokenfetchtransactions)

---

<a name="fetchTransfers" id="fetchtransfers"></a>

## fetchTransfers
fetch a history of internal transfers made on an account

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transfer structures](https://docs.ccxt.com/#/?id=transfer-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency transferred |
| since | <code>int</code> | No | the earliest time in ms to fetch transfers for |
| limit | <code>int</code> | No | the maximum number of transfers structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.until | <code>int</code> | No | the latest time in ms to fetch transfers for |
| params.paginate | <code>boolean</code> | No | default false, when true will automatically paginate by calling this endpoint multiple times. See in the docs all the [availble parameters](https://github.com/ccxt/ccxt/wiki/Manual#pagination-params) |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancefetchtransfers)
* [bingx](/exchanges/bingx.md#bingxfetchtransfers)
* [bitget](/exchanges/bitget.md#bitgetfetchtransfers)
* [bitmart](/exchanges/bitmart.md#bitmartfetchtransfers)
* [bitrue](/exchanges/bitrue.md#bitruefetchtransfers)
* [bybit](/exchanges/bybit.md#bybitfetchtransfers)
* [coinex](/exchanges/coinex.md#coinexfetchtransfers)
* [coinlist](/exchanges/coinlist.md#coinlistfetchtransfers)
* [deribit](/exchanges/deribit.md#deribitfetchtransfers)
* [digifinex](/exchanges/digifinex.md#digifinexfetchtransfers)
* [latoken](/exchanges/latoken.md#latokenfetchtransfers)
* [mexc](/exchanges/mexc.md#mexcfetchtransfers)
* [okx](/exchanges/okx.md#okxfetchtransfers)
* [phemex](/exchanges/phemex.md#phemexfetchtransfers)
* [woo](/exchanges/woo.md#woofetchtransfers)

---

<a name="fetchUnderlyingAssets" id="fetchunderlyingassets"></a>

## fetchUnderlyingAssets
fetches the market ids of underlying assets for a specific contract market type

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [underlying assets](https://docs.ccxt.com/#/?id=underlying-assets-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | exchange specific params |
| params.type | <code>string</code> | No | the contract market type, 'option', 'swap' or 'future', the default is 'option' |

##### Supported exchanges
* [gate](/exchanges/gate.md#gatefetchunderlyingassets)
* [okx](/exchanges/okx.md#okxfetchunderlyingassets)

---

<a name="fetchVolatilityHistory" id="fetchvolatilityhistory"></a>

## fetchVolatilityHistory
fetch the historical volatility of an option market based on an underlying asset

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [volatility history objects](https://docs.ccxt.com/#/?id=volatility-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.period | <code>int</code> | No | the period in days to fetch the volatility for: 7,14,21,30,60,90,180,270 |

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitfetchvolatilityhistory)
* [deribit](/exchanges/deribit.md#deribitfetchvolatilityhistory)

---

<a name="fetchWithdrawal" id="fetchwithdrawal"></a>

## fetchWithdrawal
fetch data on a currency withdrawal via the withdrawal id

**Kind**: instance   
**Returns**: <code>object</code> - a [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | withdrawal id |
| code | <code>string</code> | Yes | not used by bitmart.fetchWithdrawal |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bitmart](/exchanges/bitmart.md#bitmartfetchwithdrawal)
* [bitopro](/exchanges/bitopro.md#bitoprofetchwithdrawal)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchwithdrawal)
* [exmo](/exchanges/exmo.md#exmofetchwithdrawal)
* [hollaex](/exchanges/hollaex.md#hollaexfetchwithdrawal)
* [idex](/exchanges/idex.md#idexfetchwithdrawal)
* [kuna](/exchanges/kuna.md#kunafetchwithdrawal)
* [okx](/exchanges/okx.md#okxfetchwithdrawal)
* [upbit](/exchanges/upbit.md#upbitfetchwithdrawal)

---

<a name="fetchWithdrawals" id="fetchwithdrawals"></a>

## fetchWithdrawals
fetch all withdrawals made from an account

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch withdrawals for |
| limit | <code>int</code> | No | the maximum number of withdrawals structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexfetchwithdrawals)
* [bigone](/exchanges/bigone.md#bigonefetchwithdrawals)
* [binance](/exchanges/binance.md#binancefetchwithdrawals)
* [bingx](/exchanges/bingx.md#bingxfetchwithdrawals)
* [bitbns](/exchanges/bitbns.md#bitbnsfetchwithdrawals)
* [bitflyer](/exchanges/bitflyer.md#bitflyerfetchwithdrawals)
* [bitget](/exchanges/bitget.md#bitgetfetchwithdrawals)
* [bitmart](/exchanges/bitmart.md#bitmartfetchwithdrawals)
* [bitopro](/exchanges/bitopro.md#bitoprofetchwithdrawals)
* [bitrue](/exchanges/bitrue.md#bitruefetchwithdrawals)
* [bitstamp](/exchanges/bitstamp.md#bitstampfetchwithdrawals)
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchwithdrawals)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomfetchwithdrawals)
* [blofin](/exchanges/blofin.md#blofinfetchwithdrawals)
* [btcalpha](/exchanges/btcalpha.md#btcalphafetchwithdrawals)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketsfetchwithdrawals)
* [bybit](/exchanges/bybit.md#bybitfetchwithdrawals)
* [coinbase](/exchanges/coinbase.md#coinbasefetchwithdrawals)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangefetchwithdrawals)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalfetchwithdrawals)
* [coincheck](/exchanges/coincheck.md#coincheckfetchwithdrawals)
* [coinex](/exchanges/coinex.md#coinexfetchwithdrawals)
* [coinsph](/exchanges/coinsph.md#coinsphfetchwithdrawals)
* [cryptocom](/exchanges/cryptocom.md#cryptocomfetchwithdrawals)
* [cube](/exchanges/cube.md#cubefetchwithdrawals)
* [currencycom](/exchanges/currencycom.md#currencycomfetchwithdrawals)
* [deribit](/exchanges/deribit.md#deribitfetchwithdrawals)
* [digifinex](/exchanges/digifinex.md#digifinexfetchwithdrawals)
* [exmo](/exchanges/exmo.md#exmofetchwithdrawals)
* [gate](/exchanges/gate.md#gatefetchwithdrawals)
* [hitbtc](/exchanges/hitbtc.md#hitbtcfetchwithdrawals)
* [hollaex](/exchanges/hollaex.md#hollaexfetchwithdrawals)
* [huobi](/exchanges/huobi.md#huobifetchwithdrawals)
* [huobijp](/exchanges/huobijp.md#huobijpfetchwithdrawals)
* [idex](/exchanges/idex.md#idexfetchwithdrawals)
* [kraken](/exchanges/kraken.md#krakenfetchwithdrawals)
* [kucoin](/exchanges/kucoin.md#kucoinfetchwithdrawals)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturesfetchwithdrawals)
* [kuna](/exchanges/kuna.md#kunafetchwithdrawals)
* [lbank](/exchanges/lbank.md#lbankfetchwithdrawals)
* [mexc](/exchanges/mexc.md#mexcfetchwithdrawals)
* [ndax](/exchanges/ndax.md#ndaxfetchwithdrawals)
* [novadax](/exchanges/novadax.md#novadaxfetchwithdrawals)
* [okcoin](/exchanges/okcoin.md#okcoinfetchwithdrawals)
* [okx](/exchanges/okx.md#okxfetchwithdrawals)
* [onetrading](/exchanges/onetrading.md#onetradingfetchwithdrawals)
* [phemex](/exchanges/phemex.md#phemexfetchwithdrawals)
* [poloniex](/exchanges/poloniex.md#poloniexfetchwithdrawals)
* [probit](/exchanges/probit.md#probitfetchwithdrawals)
* [timex](/exchanges/timex.md#timexfetchwithdrawals)
* [tokocrypto](/exchanges/tokocrypto.md#tokocryptofetchwithdrawals)
* [upbit](/exchanges/upbit.md#upbitfetchwithdrawals)
* [wazirx](/exchanges/wazirx.md#wazirxfetchwithdrawals)
* [woo](/exchanges/woo.md#woofetchwithdrawals)
* [woofipro](/exchanges/woofipro.md#woofiprofetchwithdrawals)

---

<a name="fetchWithdrawalsWs" id="fetchwithdrawalsws"></a>

## fetchWithdrawalsWs
fetch all withdrawals made from an account

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [transaction structures](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| since | <code>int</code> | No | the earliest time in ms to fetch withdrawals for |
| limit | <code>int</code> | No | the maximum number of withdrawals structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the bitvavo api endpoint |

##### Supported exchanges
* [bitvavo](/exchanges/bitvavo.md#bitvavofetchwithdrawalsws)

---

<a name="isUnifiedEnabled" id="isunifiedenabled"></a>

## isUnifiedEnabled
returns [enableUnifiedMargin, enableUnifiedAccount] so the user can check if unified account is enabled

**Kind**: instance   

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitisunifiedenabled)

---

<a name="market" id="market"></a>

## market
calculates the presumptive fee that would be charged for an order

**Kind**: instance   
**Returns**: <code>object</code> - contains the rate, the percentage multiplied to the order amount to obtain the fee amount, and cost, the total value of the fee in units of the quote currency, for the order


| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code> | unified market symbol |
| type | <code>string</code> | not used by btcmarkets.calculateFee |
| side | <code>string</code> | not used by btcmarkets.calculateFee |
| amount | <code>float</code> | how much you want to trade, in units of the base currency on most exchanges, or number of contracts |
| price | <code>float</code> | the price for the order to be filled at, in units of the quote currency |
| takerOrMaker | <code>string</code> | 'taker' or 'maker' |
| params | <code>object</code> |  |

##### Supported exchanges
* [&lt;anonymous&gt;](/exchanges/&lt;anonymous&gt;.md#&lt;anonymous&gt;market)

---

<a name="redeemGiftCode" id="redeemgiftcode"></a>

## redeemGiftCode
redeem gift code

**Kind**: instance   
**Returns**: <code>object</code> - response from the exchange


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| giftcardCode | <code>string</code> | Yes |  |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binanceredeemgiftcode)

---

<a name="reduceMargin" id="reducemargin"></a>

## reduceMargin
remove margin from a position

**Kind**: instance   
**Returns**: <code>object</code> - a [margin structure](https://docs.ccxt.com/#/?id=reduce-margin-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| amount | <code>float</code> | Yes | the amount of margin to remove |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexreducemargin)
* [binance](/exchanges/binance.md#binancereducemargin)
* [bitget](/exchanges/bitget.md#bitgetreducemargin)
* [coinex](/exchanges/coinex.md#coinexreducemargin)
* [delta](/exchanges/delta.md#deltareducemargin)
* [digifinex](/exchanges/digifinex.md#digifinexreducemargin)
* [exmo](/exchanges/exmo.md#exmoreducemargin)
* [gate](/exchanges/gate.md#gatereducemargin)
* [hitbtc](/exchanges/hitbtc.md#hitbtcreducemargin)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidreducemargin)
* [mexc](/exchanges/mexc.md#mexcreducemargin)
* [okx](/exchanges/okx.md#okxreducemargin)

---

<a name="repayCrossMargin" id="repaycrossmargin"></a>

## repayCrossMargin
repay borrowed margin and interest

**Kind**: instance   
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code of the currency to repay |
| amount | <code>float</code> | Yes | the amount to repay |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to repay margin in a portfolio margin account |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancerepaycrossmargin)
* [bitget](/exchanges/bitget.md#bitgetrepaycrossmargin)
* [bybit](/exchanges/bybit.md#bybitrepaycrossmargin)
* [gate](/exchanges/gate.md#gaterepaycrossmargin)
* [huobi](/exchanges/huobi.md#huobirepaycrossmargin)
* [kucoin](/exchanges/kucoin.md#kucoinrepaycrossmargin)
* [okx](/exchanges/okx.md#okxrepaycrossmargin)

---

<a name="repayIsolatedMargin" id="repayisolatedmargin"></a>

## repayIsolatedMargin
repay borrowed margin and interest

**Kind**: instance   
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol, required for isolated margin |
| code | <code>string</code> | Yes | unified currency code of the currency to repay |
| amount | <code>float</code> | Yes | the amount to repay |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancerepayisolatedmargin)
* [bitget](/exchanges/bitget.md#bitgetrepayisolatedmargin)
* [bitmart](/exchanges/bitmart.md#bitmartrepayisolatedmargin)
* [coinex](/exchanges/coinex.md#coinexrepayisolatedmargin)
* [huobi](/exchanges/huobi.md#huobirepayisolatedmargin)
* [kucoin](/exchanges/kucoin.md#kucoinrepayisolatedmargin)

---

<a name="repayMargin" id="repaymargin"></a>

## repayMargin
repay borrowed margin and interest

**Kind**: instance   
**Returns**: <code>object</code> - a [margin loan structure](https://docs.ccxt.com/#/?id=margin-loan-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| code | <code>string</code> | Yes | unified currency code of the currency to repay |
| amount | <code>float</code> | Yes | the amount to repay |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.mode | <code>string</code> | No | 'all' or 'partial' payment mode, extra parameter required for isolated margin |
| params.id | <code>string</code> | No | '34267567' loan id, extra parameter required for isolated margin |

##### Supported exchanges
* [gate](/exchanges/gate.md#gaterepaymargin)
* [woo](/exchanges/woo.md#woorepaymargin)

---

<a name="setLeverage" id="setleverage"></a>

## setLeverage
set the level of leverage for a market

**Kind**: instance   
**Returns**: <code>object</code> - response from the exchange


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| leverage | <code>float</code> | Yes | the rate of leverage |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexsetleverage)
* [binance](/exchanges/binance.md#binancesetleverage)
* [bingx](/exchanges/bingx.md#bingxsetleverage)
* [bitget](/exchanges/bitget.md#bitgetsetleverage)
* [bitmart](/exchanges/bitmart.md#bitmartsetleverage)
* [bitmex](/exchanges/bitmex.md#bitmexsetleverage)
* [bitrue](/exchanges/bitrue.md#bitruesetleverage)
* [blofin](/exchanges/blofin.md#blofinsetleverage)
* [bybit](/exchanges/bybit.md#bybitsetleverage)
* [coinex](/exchanges/coinex.md#coinexsetleverage)
* [delta](/exchanges/delta.md#deltasetleverage)
* [digifinex](/exchanges/digifinex.md#digifinexsetleverage)
* [gate](/exchanges/gate.md#gatesetleverage)
* [hitbtc](/exchanges/hitbtc.md#hitbtcsetleverage)
* [huobi](/exchanges/huobi.md#huobisetleverage)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidsetleverage)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturessetleverage)
* [mexc](/exchanges/mexc.md#mexcsetleverage)
* [okx](/exchanges/okx.md#okxsetleverage)
* [phemex](/exchanges/phemex.md#phemexsetleverage)
* [whitebit](/exchanges/whitebit.md#whitebitsetleverage)
* [woofipro](/exchanges/woofipro.md#woofiprosetleverage)

---

<a name="setMargin" id="setmargin"></a>

## setMargin
Either adds or reduces margin in an isolated position in order to set the margin to a specific value

**Kind**: instance   
**Returns**: <code>object</code> - A [margin structure](https://docs.ccxt.com/#/?id=add-margin-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market to set margin in |
| amount | <code>float</code> | Yes | the amount to set the margin to |
| params | <code>object</code> | No | parameters specific to the bingx api endpoint |

##### Supported exchanges
* [bingx](/exchanges/bingx.md#bingxsetmargin)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2setmargin)
* [bitrue](/exchanges/bitrue.md#bitruesetmargin)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalsetmargin)
* [phemex](/exchanges/phemex.md#phemexsetmargin)

---

<a name="setMarginMode" id="setmarginmode"></a>

## setMarginMode
set margin mode to 'cross' or 'isolated'

**Kind**: instance   
**Returns**: <code>object</code> - response from the exchange


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| marginMode | <code>string</code> | Yes | 'cross' or 'isolated' |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexsetmarginmode)
* [binance](/exchanges/binance.md#binancesetmarginmode)
* [bingx](/exchanges/bingx.md#bingxsetmarginmode)
* [bitget](/exchanges/bitget.md#bitgetsetmarginmode)
* [bitmex](/exchanges/bitmex.md#bitmexsetmarginmode)
* [bybit](/exchanges/bybit.md#bybitsetmarginmode)
* [coinex](/exchanges/coinex.md#coinexsetmarginmode)
* [digifinex](/exchanges/digifinex.md#digifinexsetmarginmode)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidsetmarginmode)
* [okx](/exchanges/okx.md#okxsetmarginmode)
* [phemex](/exchanges/phemex.md#phemexsetmarginmode)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfuturessetmarginmode)

---

<a name="setPositionMode" id="setpositionmode"></a>

## setPositionMode
set hedged to true or false for a market

**Kind**: instance   
**Returns**: <code>object</code> - response from the exchange


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| hedged | <code>bool</code> | Yes | set to true to use dualSidePosition |
| symbol | <code>string</code> | Yes | not used by binance setPositionMode () |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to set the position mode for a portfolio margin account |
| params.subType | <code>string</code> | No | "linear" or "inverse" |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancesetpositionmode)
* [bingx](/exchanges/bingx.md#bingxsetpositionmode)
* [bitget](/exchanges/bitget.md#bitgetsetpositionmode)
* [bybit](/exchanges/bybit.md#bybitsetpositionmode)
* [gate](/exchanges/gate.md#gatesetpositionmode)
* [htx](/exchanges/htx.md#htxsetpositionmode)
* [okx](/exchanges/okx.md#okxsetpositionmode)
* [phemex](/exchanges/phemex.md#phemexsetpositionmode)
* [woo](/exchanges/woo.md#woosetpositionmode)

---

<a name="setSandboxMode" id="setsandboxmode"></a>

## setSandboxMode
enables or disables sandbox mode

**Kind**: instance   


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| enable | <code>boolean</code> | No | true if demo trading should be enabled, false otherwise |

##### Supported exchanges
* [bybit](/exchanges/bybit.md#bybitsetsandboxmode)

---

<a name="signIn" id="signin"></a>

## signIn
sign in, must be called prior to using other authenticated methods

**Kind**: instance   
**Returns**: response from exchange


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ndax](/exchanges/ndax.md#ndaxsignin)
* [probit](/exchanges/probit.md#probitsignin)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangesignin)

---

<a name="transfer" id="transfer"></a>

## transfer
transfer currency internally between wallets on the same account

**Kind**: instance   
**Returns**: <code>object</code> - a [transfer structure](https://docs.ccxt.com/#/?id=transfer-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency codeåå |
| amount | <code>float</code> | Yes | amount to transfer |
| fromAccount | <code>string</code> | Yes | account to transfer from |
| toAccount | <code>string</code> | Yes | account to transfer to |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendextransfer)
* [bigone](/exchanges/bigone.md#bigonetransfer)
* [binance](/exchanges/binance.md#binancetransfer)
* [bingx](/exchanges/bingx.md#bingxtransfer)
* [bitfinex](/exchanges/bitfinex.md#bitfinextransfer)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2transfer)
* [bitget](/exchanges/bitget.md#bitgettransfer)
* [bitmart](/exchanges/bitmart.md#bitmarttransfer)
* [bitrue](/exchanges/bitrue.md#bitruetransfer)
* [bitstamp](/exchanges/bitstamp.md#bitstamptransfer)
* [blofin](/exchanges/blofin.md#blofintransfer)
* [bybit](/exchanges/bybit.md#bybittransfer)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationaltransfer)
* [coinex](/exchanges/coinex.md#coinextransfer)
* [coinlist](/exchanges/coinlist.md#coinlisttransfer)
* [deribit](/exchanges/deribit.md#deribittransfer)
* [digifinex](/exchanges/digifinex.md#digifinextransfer)
* [gate](/exchanges/gate.md#gatetransfer)
* [hitbtc](/exchanges/hitbtc.md#hitbtctransfer)
* [huobi](/exchanges/huobi.md#huobitransfer)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidtransfer)
* [kraken](/exchanges/kraken.md#krakentransfer)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfuturestransfer)
* [kucoin](/exchanges/kucoin.md#kucointransfer)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfuturestransfer)
* [latoken](/exchanges/latoken.md#latokentransfer)
* [mexc](/exchanges/mexc.md#mexctransfer)
* [novadax](/exchanges/novadax.md#novadaxtransfer)
* [okcoin](/exchanges/okcoin.md#okcointransfer)
* [okx](/exchanges/okx.md#okxtransfer)
* [paymium](/exchanges/paymium.md#paymiumtransfer)
* [phemex](/exchanges/phemex.md#phemextransfer)
* [poloniex](/exchanges/poloniex.md#poloniextransfer)
* [whitebit](/exchanges/whitebit.md#whitebittransfer)
* [woo](/exchanges/woo.md#wootransfer)
* [zonda](/exchanges/zonda.md#zondatransfer)

---

<a name="verifyGiftCode" id="verifygiftcode"></a>

## verifyGiftCode
verify gift code

**Kind**: instance   
**Returns**: <code>object</code> - response from the exchange


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| id | <code>string</code> | Yes | reference number id |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binanceverifygiftcode)

---

<a name="watchBalance" id="watchbalance"></a>

## watchBalance
watch balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance   
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [ascendex](/exchanges/ascendex.md#ascendexwatchbalance)
* [binance](/exchanges/binance.md#binancewatchbalance)
* [bingx](/exchanges/bingx.md#bingxwatchbalance)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2watchbalance)
* [bitget](/exchanges/bitget.md#bitgetwatchbalance)
* [bitmart](/exchanges/bitmart.md#bitmartwatchbalance)
* [bitmex](/exchanges/bitmex.md#bitmexwatchbalance)
* [bitopro](/exchanges/bitopro.md#bitoprowatchbalance)
* [bitrue](/exchanges/bitrue.md#bitruewatchbalance)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomwatchbalance)
* [bybit](/exchanges/bybit.md#bybitwatchbalance)
* [cex](/exchanges/cex.md#cexwatchbalance)
* [coinex](/exchanges/coinex.md#coinexwatchbalance)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchbalance)
* [cube](/exchanges/cube.md#cubewatchbalance)
* [currencycom](/exchanges/currencycom.md#currencycomwatchbalance)
* [deribit](/exchanges/deribit.md#deribitwatchbalance)
* [exmo](/exchanges/exmo.md#exmowatchbalance)
* [gate](/exchanges/gate.md#gatewatchbalance)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwatchbalance)
* [hollaex](/exchanges/hollaex.md#hollaexwatchbalance)
* [huobi](/exchanges/huobi.md#huobiwatchbalance)
* [kucoin](/exchanges/kucoin.md#kucoinwatchbalance)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchbalance)
* [mexc](/exchanges/mexc.md#mexcwatchbalance)
* [okcoin](/exchanges/okcoin.md#okcoinwatchbalance)
* [okx](/exchanges/okx.md#okxwatchbalance)
* [phemex](/exchanges/phemex.md#phemexwatchbalance)
* [poloniex](/exchanges/poloniex.md#poloniexwatchbalance)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfutureswatchbalance)
* [probit](/exchanges/probit.md#probitwatchbalance)
* [wazirx](/exchanges/wazirx.md#wazirxwatchbalance)
* [whitebit](/exchanges/whitebit.md#whitebitwatchbalance)
* [woo](/exchanges/woo.md#woowatchbalance)
* [woofipro](/exchanges/woofipro.md#woofiprowatchbalance)

---

<a name="watchBidsAsks" id="watchbidsasks"></a>

## watchBidsAsks
watches best bid & ask for symbols

**Kind**: instance   
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchbidsasks)
* [gate](/exchanges/gate.md#gatewatchbidsasks)
* [gemini](/exchanges/gemini.md#geminiwatchbidsasks)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchbidsasks)
* [kucoin](/exchanges/kucoin.md#kucoinwatchbidsasks)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchbidsasks)

---

<a name="watchFundingRate" id="watchfundingrate"></a>

## watchFundingRate
watch the current funding rate

**Kind**: instance   
**Returns**: <code>object</code> - a [funding rate structure](https://docs.ccxt.com/#/?id=funding-rate-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchfundingrate)
* [okx](/exchanges/okx.md#okxwatchfundingrate)

---

<a name="watchFundingRates" id="watchfundingrates"></a>

## watchFundingRates
watch the funding rate for multiple markets

**Kind**: instance   
**Returns**: <code>object</code> - a dictionary of [funding rates structures](https://docs.ccxt.com/#/?id=funding-rates-structure), indexe by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchfundingrates)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchfundingrates)

---

<a name="watchLiquidations" id="watchliquidations"></a>

## watchLiquidations
watch the public liquidations of a trading pair

**Kind**: instance   
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchliquidations)
* [bitmex](/exchanges/bitmex.md#bitmexwatchliquidations)
* [bybit](/exchanges/bybit.md#bybitwatchliquidations)

---

<a name="watchLiquidationsForSymbols" id="watchliquidationsforsymbols"></a>

## watchLiquidationsForSymbols
watch the public liquidations of a trading pair

**Kind**: instance   
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchliquidationsforsymbols)
* [bitmex](/exchanges/bitmex.md#bitmexwatchliquidationsforsymbols)
* [okx](/exchanges/okx.md#okxwatchliquidationsforsymbols)

---

<a name="watchMyLiquidations" id="watchmyliquidations"></a>

## watchMyLiquidations
watch the private liquidations of a trading pair

**Kind**: instance   
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchmyliquidations)
* [gate](/exchanges/gate.md#gatewatchmyliquidations)

---

<a name="watchMyLiquidationsForSymbols" id="watchmyliquidationsforsymbols"></a>

## watchMyLiquidationsForSymbols
watch the private liquidations of a trading pair

**Kind**: instance   
**Returns**: <code>object</code> - an array of [liquidation structures](https://github.com/ccxt/ccxt/wiki/Manual#liquidation-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified CCXT market symbol |
| since | <code>int</code> | No | the earliest time in ms to fetch liquidations for |
| limit | <code>int</code> | No | the maximum number of liquidation structures to retrieve |
| params | <code>object</code> | No | exchange specific parameters for the bitmex api endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchmyliquidationsforsymbols)
* [gate](/exchanges/gate.md#gatewatchmyliquidationsforsymbols)
* [okx](/exchanges/okx.md#okxwatchmyliquidationsforsymbols)

---

<a name="watchMyTrades" id="watchmytrades"></a>

## watchMyTrades
watches information on multiple trades made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market trades were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trade structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |
| params.unifiedMargin | <code>boolean</code> | No | use unified margin account |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacawatchmytrades)
* [binance](/exchanges/binance.md#binancewatchmytrades)
* [bingx](/exchanges/bingx.md#bingxwatchmytrades)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2watchmytrades)
* [bitget](/exchanges/bitget.md#bitgetwatchmytrades)
* [bitmex](/exchanges/bitmex.md#bitmexwatchmytrades)
* [bitopro](/exchanges/bitopro.md#bitoprowatchmytrades)
* [bitvavo](/exchanges/bitvavo.md#bitvavowatchmytrades)
* [bybit](/exchanges/bybit.md#bybitwatchmytrades)
* [cex](/exchanges/cex.md#cexwatchmytrades)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchmytrades)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchmytrades)
* [cube](/exchanges/cube.md#cubewatchmytrades)
* [deribit](/exchanges/deribit.md#deribitwatchmytrades)
* [gate](/exchanges/gate.md#gatewatchmytrades)
* [hollaex](/exchanges/hollaex.md#hollaexwatchmytrades)
* [huobi](/exchanges/huobi.md#huobiwatchmytrades)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidwatchmytrades)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchmytrades)
* [kucoin](/exchanges/kucoin.md#kucoinwatchmytrades)
* [mexc](/exchanges/mexc.md#mexcwatchmytrades)
* [okx](/exchanges/okx.md#okxwatchmytrades)
* [phemex](/exchanges/phemex.md#phemexwatchmytrades)
* [poloniex](/exchanges/poloniex.md#poloniexwatchmytrades)
* [probit](/exchanges/probit.md#probitwatchmytrades)
* [wazirx](/exchanges/wazirx.md#wazirxwatchmytrades)
* [whitebit](/exchanges/whitebit.md#whitebitwatchmytrades)
* [woofipro](/exchanges/woofipro.md#woofiprowatchmytrades)

---

<a name="watchMyTradesForSymbols" id="watchmytradesforsymbols"></a>

## watchMyTradesForSymbols
watches information on multiple trades made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trade structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchmytradesforsymbols)

---

<a name="watchOHLCV" id="watchohlcv"></a>

## watchOHLCV
watches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance   
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch OHLCV data for |
| timeframe | <code>string</code> | Yes | the length of time each candle represents |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | the maximum amount of candles to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacawatchohlcv)
* [ascendex](/exchanges/ascendex.md#ascendexwatchohlcv)
* [binance](/exchanges/binance.md#binancewatchohlcv)
* [bingx](/exchanges/bingx.md#bingxwatchohlcv)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2watchohlcv)
* [bitget](/exchanges/bitget.md#bitgetwatchohlcv)
* [bitmart](/exchanges/bitmart.md#bitmartwatchohlcv)
* [bitmex](/exchanges/bitmex.md#bitmexwatchohlcv)
* [bitvavo](/exchanges/bitvavo.md#bitvavowatchohlcv)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomwatchohlcv)
* [bybit](/exchanges/bybit.md#bybitwatchohlcv)
* [cex](/exchanges/cex.md#cexwatchohlcv)
* [coinex](/exchanges/coinex.md#coinexwatchohlcv)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchohlcv)
* [cube](/exchanges/cube.md#cubewatchohlcv)
* [currencycom](/exchanges/currencycom.md#currencycomwatchohlcv)
* [deribit](/exchanges/deribit.md#deribitwatchohlcv)
* [gate](/exchanges/gate.md#gatewatchohlcv)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwatchohlcv)
* [huobi](/exchanges/huobi.md#huobiwatchohlcv)
* [huobijp](/exchanges/huobijp.md#huobijpwatchohlcv)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidwatchohlcv)
* [idex](/exchanges/idex.md#idexwatchohlcv)
* [kucoin](/exchanges/kucoin.md#kucoinwatchohlcv)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchohlcv)
* [lbank](/exchanges/lbank.md#lbankwatchohlcv)
* [mexc](/exchanges/mexc.md#mexcwatchohlcv)
* [ndax](/exchanges/ndax.md#ndaxwatchohlcv)
* [okcoin](/exchanges/okcoin.md#okcoinwatchohlcv)
* [okx](/exchanges/okx.md#okxwatchohlcv)
* [p2b](/exchanges/p2b.md#p2bwatchohlcv)
* [phemex](/exchanges/phemex.md#phemexwatchohlcv)
* [poloniex](/exchanges/poloniex.md#poloniexwatchohlcv)
* [wazirx](/exchanges/wazirx.md#wazirxwatchohlcv)
* [whitebit](/exchanges/whitebit.md#whitebitwatchohlcv)
* [woo](/exchanges/woo.md#woowatchohlcv)
* [woofipro](/exchanges/woofipro.md#woofiprowatchohlcv)

---

<a name="watchOHLCVForSymbols" id="watchohlcvforsymbols"></a>

## watchOHLCVForSymbols
watches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance   
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbolsAndTimeframes | <code>Array&lt;Array&lt;string&gt;&gt;</code> | Yes | array of arrays containing unified symbols and timeframes to fetch OHLCV data for, example [['BTC/USDT', '1m'], ['LTC/USDT', '5m']] |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | the maximum amount of candles to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [deribit](/exchanges/deribit.md#deribitwatchohlcvforsymbols)
* [okx](/exchanges/okx.md#okxwatchohlcvforsymbols)

---

<a name="watchOrderBook" id="watchorderbook"></a>

## watchOrderBook
watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance   
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return. |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacawatchorderbook)
* [ascendex](/exchanges/ascendex.md#ascendexwatchorderbook)
* [binance](/exchanges/binance.md#binancewatchorderbook)
* [bingx](/exchanges/bingx.md#bingxwatchorderbook)
* [bitfinex](/exchanges/bitfinex.md#bitfinexwatchorderbook)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2watchorderbook)
* [bitget](/exchanges/bitget.md#bitgetwatchorderbook)
* [bithumb](/exchanges/bithumb.md#bithumbwatchorderbook)
* [bitmart](/exchanges/bitmart.md#bitmartwatchorderbook)
* [bitmex](/exchanges/bitmex.md#bitmexwatchorderbook)
* [bitopro](/exchanges/bitopro.md#bitoprowatchorderbook)
* [bitstamp](/exchanges/bitstamp.md#bitstampwatchorderbook)
* [bitvavo](/exchanges/bitvavo.md#bitvavowatchorderbook)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomwatchorderbook)
* [bybit](/exchanges/bybit.md#bybitwatchorderbook)
* [bybit](/exchanges/bybit.md#bybitwatchorderbook)
* [cex](/exchanges/cex.md#cexwatchorderbook)
* [coinbase](/exchanges/coinbase.md#coinbasewatchorderbook)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchorderbook)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchorderbook)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchorderbook)
* [coincheck](/exchanges/coincheck.md#coincheckwatchorderbook)
* [coinex](/exchanges/coinex.md#coinexwatchorderbook)
* [coinone](/exchanges/coinone.md#coinonewatchorderbook)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchorderbook)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchorderbook)
* [cube](/exchanges/cube.md#cubewatchorderbook)
* [currencycom](/exchanges/currencycom.md#currencycomwatchorderbook)
* [deribit](/exchanges/deribit.md#deribitwatchorderbook)
* [exmo](/exchanges/exmo.md#exmowatchorderbook)
* [gate](/exchanges/gate.md#gatewatchorderbook)
* [gemini](/exchanges/gemini.md#geminiwatchorderbook)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwatchorderbook)
* [hollaex](/exchanges/hollaex.md#hollaexwatchorderbook)
* [huobi](/exchanges/huobi.md#huobiwatchorderbook)
* [huobijp](/exchanges/huobijp.md#huobijpwatchorderbook)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidwatchorderbook)
* [idex](/exchanges/idex.md#idexwatchorderbook)
* [independentreserve](/exchanges/independentreserve.md#independentreservewatchorderbook)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchorderbook)
* [kucoin](/exchanges/kucoin.md#kucoinwatchorderbook)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchorderbook)
* [lbank](/exchanges/lbank.md#lbankwatchorderbook)
* [lbank](/exchanges/lbank.md#lbankwatchorderbook)
* [luno](/exchanges/luno.md#lunowatchorderbook)
* [mexc](/exchanges/mexc.md#mexcwatchorderbook)
* [ndax](/exchanges/ndax.md#ndaxwatchorderbook)
* [okcoin](/exchanges/okcoin.md#okcoinwatchorderbook)
* [okx](/exchanges/okx.md#okxwatchorderbook)
* [p2b](/exchanges/p2b.md#p2bwatchorderbook)
* [phemex](/exchanges/phemex.md#phemexwatchorderbook)
* [poloniex](/exchanges/poloniex.md#poloniexwatchorderbook)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfutureswatchorderbook)
* [probit](/exchanges/probit.md#probitwatchorderbook)
* [upbit](/exchanges/upbit.md#upbitwatchorderbook)
* [wazirx](/exchanges/wazirx.md#wazirxwatchorderbook)
* [whitebit](/exchanges/whitebit.md#whitebitwatchorderbook)
* [woo](/exchanges/woo.md#woowatchorderbook)
* [woofipro](/exchanges/woofipro.md#woofiprowatchorderbook)

---

<a name="watchOrderBookForSymbols" id="watchorderbookforsymbols"></a>

## watchOrderBookForSymbols
watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance   
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified array of symbols |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchorderbookforsymbols)
* [bitget](/exchanges/bitget.md#bitgetwatchorderbookforsymbols)
* [bitmart](/exchanges/bitmart.md#bitmartwatchorderbookforsymbols)
* [bitmex](/exchanges/bitmex.md#bitmexwatchorderbookforsymbols)
* [coinbase](/exchanges/coinbase.md#coinbasewatchorderbookforsymbols)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchorderbookforsymbols)
* [deribit](/exchanges/deribit.md#deribitwatchorderbookforsymbols)
* [gemini](/exchanges/gemini.md#geminiwatchorderbookforsymbols)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchorderbookforsymbols)
* [kucoin](/exchanges/kucoin.md#kucoinwatchorderbookforsymbols)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchorderbookforsymbols)
* [okx](/exchanges/okx.md#okxwatchorderbookforsymbols)

---

<a name="watchOrders" id="watchorders"></a>

## watchOrders
watches information on multiple orders made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacawatchorders)
* [ascendex](/exchanges/ascendex.md#ascendexwatchorders)
* [binance](/exchanges/binance.md#binancewatchorders)
* [bingx](/exchanges/bingx.md#bingxwatchorders)
* [bitfinex](/exchanges/bitfinex.md#bitfinexwatchorders)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2watchorders)
* [bitget](/exchanges/bitget.md#bitgetwatchorders)
* [bitmart](/exchanges/bitmart.md#bitmartwatchorders)
* [bitmex](/exchanges/bitmex.md#bitmexwatchorders)
* [bitrue](/exchanges/bitrue.md#bitruewatchorders)
* [bitstamp](/exchanges/bitstamp.md#bitstampwatchorders)
* [bitvavo](/exchanges/bitvavo.md#bitvavowatchorders)
* [bybit](/exchanges/bybit.md#bybitwatchorders)
* [cex](/exchanges/cex.md#cexwatchorders)
* [coinbase](/exchanges/coinbase.md#coinbasewatchorders)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchorders)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchorders)
* [cube](/exchanges/cube.md#cubewatchorders)
* [deribit](/exchanges/deribit.md#deribitwatchorders)
* [gate](/exchanges/gate.md#gatewatchorders)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwatchorders)
* [hollaex](/exchanges/hollaex.md#hollaexwatchorders)
* [huobi](/exchanges/huobi.md#huobiwatchorders)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidwatchorders)
* [idex](/exchanges/idex.md#idexwatchorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchorders)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchorders)
* [kucoin](/exchanges/kucoin.md#kucoinwatchorders)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchorders)
* [lbank](/exchanges/lbank.md#lbankwatchorders)
* [mexc](/exchanges/mexc.md#mexcwatchorders)
* [okcoin](/exchanges/okcoin.md#okcoinwatchorders)
* [okx](/exchanges/okx.md#okxwatchorders)
* [phemex](/exchanges/phemex.md#phemexwatchorders)
* [poloniex](/exchanges/poloniex.md#poloniexwatchorders)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfutureswatchorders)
* [probit](/exchanges/probit.md#probitwatchorders)
* [whitebit](/exchanges/whitebit.md#whitebitwatchorders)
* [woo](/exchanges/woo.md#woowatchorders)
* [woo](/exchanges/woo.md#woowatchorders)
* [woofipro](/exchanges/woofipro.md#woofiprowatchorders)

---

<a name="watchOrdersForSymbols" id="watchordersforsymbols"></a>

## watchOrdersForSymbols
watches information on multiple orders made by the user

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch orders for |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of trade structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchordersforsymbols)

---

<a name="watchPosition" id="watchposition"></a>

## watchPosition
watch open positions for a specific symbol

**Kind**: instance   
**Returns**: <code>object</code> - a [position structure](https://docs.ccxt.com/en/latest/manual.html#position-structure)


| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>string</code>, <code>undefined</code> | unified market symbol |
| params | <code>object</code> | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchposition)

---

<a name="watchPositions" id="watchpositions"></a>

## watchPositions
watch all open positions

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/en/latest/manual.html#position-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | Yes | list of unified market symbols |
| params | <code>object</code> | Yes | extra parameters specific to the exchange API endpoint |
| params.portfolioMargin | <code>boolean</code> | No | set to true if you would like to watch positions in a portfolio margin account |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchpositions)
* [bitget](/exchanges/bitget.md#bitgetwatchpositions)
* [bitmart](/exchanges/bitmart.md#bitmartwatchpositions)
* [bitmex](/exchanges/bitmex.md#bitmexwatchpositions)
* [bybit](/exchanges/bybit.md#bybitwatchpositions)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchpositions)
* [gate](/exchanges/gate.md#gatewatchpositions)
* [huobi](/exchanges/huobi.md#huobiwatchpositions)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchpositions)
* [okx](/exchanges/okx.md#okxwatchpositions)
* [woo](/exchanges/woo.md#woowatchpositions)
* [woofipro](/exchanges/woofipro.md#woofiprowatchpositions)

---

<a name="watchTicker" id="watchticker"></a>

## watchTicker
watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance   
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacawatchticker)
* [binance](/exchanges/binance.md#binancewatchticker)
* [bingx](/exchanges/bingx.md#bingxwatchticker)
* [bitfinex](/exchanges/bitfinex.md#bitfinexwatchticker)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2watchticker)
* [bitget](/exchanges/bitget.md#bitgetwatchticker)
* [bithumb](/exchanges/bithumb.md#bithumbwatchticker)
* [bitmart](/exchanges/bitmart.md#bitmartwatchticker)
* [bitmex](/exchanges/bitmex.md#bitmexwatchticker)
* [bitopro](/exchanges/bitopro.md#bitoprowatchticker)
* [bitvavo](/exchanges/bitvavo.md#bitvavowatchticker)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomwatchticker)
* [bybit](/exchanges/bybit.md#bybitwatchticker)
* [cex](/exchanges/cex.md#cexwatchticker)
* [coinbase](/exchanges/coinbase.md#coinbasewatchticker)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchticker)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchticker)
* [coinex](/exchanges/coinex.md#coinexwatchticker)
* [coinone](/exchanges/coinone.md#coinonewatchticker)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchticker)
* [cube](/exchanges/cube.md#cubewatchticker)
* [currencycom](/exchanges/currencycom.md#currencycomwatchticker)
* [deribit](/exchanges/deribit.md#deribitwatchticker)
* [exmo](/exchanges/exmo.md#exmowatchticker)
* [gate](/exchanges/gate.md#gatewatchticker)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwatchticker)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwatchticker)
* [huobi](/exchanges/huobi.md#huobiwatchticker)
* [huobijp](/exchanges/huobijp.md#huobijpwatchticker)
* [idex](/exchanges/idex.md#idexwatchticker)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchticker)
* [kucoin](/exchanges/kucoin.md#kucoinwatchticker)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchticker)
* [lbank](/exchanges/lbank.md#lbankwatchticker)
* [mexc](/exchanges/mexc.md#mexcwatchticker)
* [ndax](/exchanges/ndax.md#ndaxwatchticker)
* [okcoin](/exchanges/okcoin.md#okcoinwatchticker)
* [okx](/exchanges/okx.md#okxwatchticker)
* [p2b](/exchanges/p2b.md#p2bwatchticker)
* [phemex](/exchanges/phemex.md#phemexwatchticker)
* [poloniex](/exchanges/poloniex.md#poloniexwatchticker)
* [poloniex](/exchanges/poloniex.md#poloniexwatchticker)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfutureswatchticker)
* [probit](/exchanges/probit.md#probitwatchticker)
* [upbit](/exchanges/upbit.md#upbitwatchticker)
* [wazirx](/exchanges/wazirx.md#wazirxwatchticker)
* [whitebit](/exchanges/whitebit.md#whitebitwatchticker)
* [woo](/exchanges/woo.md#woowatchticker)
* [woofipro](/exchanges/woofipro.md#woofiprowatchticker)

---

<a name="watchTickers" id="watchtickers"></a>

## watchTickers
watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for all markets of a specific list

**Kind**: instance   
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchtickers)
* [bitget](/exchanges/bitget.md#bitgetwatchtickers)
* [binance](/exchanges/binance.md#binancewatchtickers)
* [bitmart](/exchanges/bitmart.md#bitmartwatchtickers)
* [bitmex](/exchanges/bitmex.md#bitmexwatchtickers)
* [bybit](/exchanges/bybit.md#bybitwatchtickers)
* [cex](/exchanges/cex.md#cexwatchtickers)
* [coinbase](/exchanges/coinbase.md#coinbasewatchtickers)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchtickers)
* [coinex](/exchanges/coinex.md#coinexwatchtickers)
* [gate](/exchanges/gate.md#gatewatchtickers)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchtickers)
* [kucoin](/exchanges/kucoin.md#kucoinwatchtickers)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchtickers)
* [okx](/exchanges/okx.md#okxwatchtickers)
* [wazirx](/exchanges/wazirx.md#wazirxwatchtickers)
* [woo](/exchanges/woo.md#woowatchtickers)
* [woofipro](/exchanges/woofipro.md#woofiprowatchtickers)

---

<a name="watchTrades" id="watchtrades"></a>

## watchTrades
watches information on multiple trades made in a market

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures]{@link https://docs.ccxt.com/#/?id=trade-structure


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market trades were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of trade structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [alpaca](/exchanges/alpaca.md#alpacawatchtrades)
* [ascendex](/exchanges/ascendex.md#ascendexwatchtrades)
* [binance](/exchanges/binance.md#binancewatchtrades)
* [bingx](/exchanges/bingx.md#bingxwatchtrades)
* [bitfinex](/exchanges/bitfinex.md#bitfinexwatchtrades)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2watchtrades)
* [bitget](/exchanges/bitget.md#bitgetwatchtrades)
* [bithumb](/exchanges/bithumb.md#bithumbwatchtrades)
* [bitmart](/exchanges/bitmart.md#bitmartwatchtrades)
* [bitmex](/exchanges/bitmex.md#bitmexwatchtrades)
* [bitopro](/exchanges/bitopro.md#bitoprowatchtrades)
* [bitstamp](/exchanges/bitstamp.md#bitstampwatchtrades)
* [bitvavo](/exchanges/bitvavo.md#bitvavowatchtrades)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomwatchtrades)
* [bybit](/exchanges/bybit.md#bybitwatchtrades)
* [cex](/exchanges/cex.md#cexwatchtrades)
* [coinbase](/exchanges/coinbase.md#coinbasewatchtrades)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewatchtrades)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchtrades)
* [coincheck](/exchanges/coincheck.md#coincheckwatchtrades)
* [coinex](/exchanges/coinex.md#coinexwatchtrades)
* [coinone](/exchanges/coinone.md#coinonewatchtrades)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchtrades)
* [cube](/exchanges/cube.md#cubewatchtrades)
* [currencycom](/exchanges/currencycom.md#currencycomwatchtrades)
* [deribit](/exchanges/deribit.md#deribitwatchtrades)
* [exmo](/exchanges/exmo.md#exmowatchtrades)
* [exmo](/exchanges/exmo.md#exmowatchtrades)
* [gate](/exchanges/gate.md#gatewatchtrades)
* [gemini](/exchanges/gemini.md#geminiwatchtrades)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwatchtrades)
* [hollaex](/exchanges/hollaex.md#hollaexwatchtrades)
* [huobi](/exchanges/huobi.md#huobiwatchtrades)
* [huobijp](/exchanges/huobijp.md#huobijpwatchtrades)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidwatchtrades)
* [idex](/exchanges/idex.md#idexwatchtrades)
* [independentreserve](/exchanges/independentreserve.md#independentreservewatchtrades)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchtrades)
* [kucoin](/exchanges/kucoin.md#kucoinwatchtrades)
* [kucoin](/exchanges/kucoin.md#kucoinwatchtrades)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchtrades)
* [kucoinfutures](/exchanges/kucoinfutures.md#kucoinfutureswatchtrades)
* [lbank](/exchanges/lbank.md#lbankwatchtrades)
* [luno](/exchanges/luno.md#lunowatchtrades)
* [mexc](/exchanges/mexc.md#mexcwatchtrades)
* [ndax](/exchanges/ndax.md#ndaxwatchtrades)
* [okcoin](/exchanges/okcoin.md#okcoinwatchtrades)
* [okx](/exchanges/okx.md#okxwatchtrades)
* [p2b](/exchanges/p2b.md#p2bwatchtrades)
* [phemex](/exchanges/phemex.md#phemexwatchtrades)
* [poloniex](/exchanges/poloniex.md#poloniexwatchtrades)
* [poloniexfutures](/exchanges/poloniexfutures.md#poloniexfutureswatchtrades)
* [probit](/exchanges/probit.md#probitwatchtrades)
* [upbit](/exchanges/upbit.md#upbitwatchtrades)
* [wazirx](/exchanges/wazirx.md#wazirxwatchtrades)
* [whitebit](/exchanges/whitebit.md#whitebitwatchtrades)
* [woo](/exchanges/woo.md#woowatchtrades)
* [woofipro](/exchanges/woofipro.md#woofiprowatchtrades)

---

<a name="watchTradesForSymbols" id="watchtradesforsymbols"></a>

## watchTradesForSymbols
get the list of most recent trades for a list of symbols

**Kind**: instance   
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | timestamp in ms of the earliest trade to fetch |
| limit | <code>int</code> | No | the maximum amount of trades to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [binance](/exchanges/binance.md#binancewatchtradesforsymbols)
* [bitget](/exchanges/bitget.md#bitgetwatchtradesforsymbols)
* [bitmart](/exchanges/bitmart.md#bitmartwatchtradesforsymbols)
* [bitmex](/exchanges/bitmex.md#bitmexwatchtradesforsymbols)
* [bybit](/exchanges/bybit.md#bybitwatchtradesforsymbols)
* [coinbase](/exchanges/coinbase.md#coinbasewatchtradesforsymbols)
* [coinbase](/exchanges/coinbase.md#coinbasewatchtradesforsymbols)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwatchtradesforsymbols)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwatchtradesforsymbols)
* [deribit](/exchanges/deribit.md#deribitwatchtradesforsymbols)
* [gate](/exchanges/gate.md#gatewatchtradesforsymbols)
* [gemini](/exchanges/gemini.md#geminiwatchtradesforsymbols)
* [krakenfutures](/exchanges/krakenfutures.md#krakenfutureswatchtradesforsymbols)
* [okx](/exchanges/okx.md#okxwatchtradesforsymbols)

---

<a name="withdraw" id="withdraw"></a>

## withdraw
make a withdrawal

**Kind**: instance   
**Returns**: <code>object</code> - a [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| amount | <code>float</code> | Yes | the amount to withdraw |
| address | <code>string</code> | Yes | the address to withdraw to |
| tag | <code>string</code> | Yes |  |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |

##### Supported exchanges
* [bigone](/exchanges/bigone.md#bigonewithdraw)
* [binance](/exchanges/binance.md#binancewithdraw)
* [bingx](/exchanges/bingx.md#bingxwithdraw)
* [bitbank](/exchanges/bitbank.md#bitbankwithdraw)
* [bitfinex](/exchanges/bitfinex.md#bitfinexwithdraw)
* [bitfinex2](/exchanges/bitfinex2.md#bitfinex2withdraw)
* [bitflyer](/exchanges/bitflyer.md#bitflyerwithdraw)
* [bitget](/exchanges/bitget.md#bitgetwithdraw)
* [bithumb](/exchanges/bithumb.md#bithumbwithdraw)
* [bitmart](/exchanges/bitmart.md#bitmartwithdraw)
* [bitmex](/exchanges/bitmex.md#bitmexwithdraw)
* [bitopro](/exchanges/bitopro.md#bitoprowithdraw)
* [bitrue](/exchanges/bitrue.md#bitruewithdraw)
* [bitso](/exchanges/bitso.md#bitsowithdraw)
* [bitstamp](/exchanges/bitstamp.md#bitstampwithdraw)
* [bitvavo](/exchanges/bitvavo.md#bitvavowithdraw)
* [blockchaincom](/exchanges/blockchaincom.md#blockchaincomwithdraw)
* [btcmarkets](/exchanges/btcmarkets.md#btcmarketswithdraw)
* [bybit](/exchanges/bybit.md#bybitwithdraw)
* [coinbase](/exchanges/coinbase.md#coinbasewithdraw)
* [coinbaseexchange](/exchanges/coinbaseexchange.md#coinbaseexchangewithdraw)
* [coinbaseinternational](/exchanges/coinbaseinternational.md#coinbaseinternationalwithdraw)
* [coinex](/exchanges/coinex.md#coinexwithdraw)
* [coinlist](/exchanges/coinlist.md#coinlistwithdraw)
* [coinmate](/exchanges/coinmate.md#coinmatewithdraw)
* [coinsph](/exchanges/coinsph.md#coinsphwithdraw)
* [cryptocom](/exchanges/cryptocom.md#cryptocomwithdraw)
* [cube](/exchanges/cube.md#cubewithdraw)
* [deribit](/exchanges/deribit.md#deribitwithdraw)
* [digifinex](/exchanges/digifinex.md#digifinexwithdraw)
* [exmo](/exchanges/exmo.md#exmowithdraw)
* [gate](/exchanges/gate.md#gatewithdraw)
* [gemini](/exchanges/gemini.md#geminiwithdraw)
* [hitbtc](/exchanges/hitbtc.md#hitbtcwithdraw)
* [hollaex](/exchanges/hollaex.md#hollaexwithdraw)
* [huobi](/exchanges/huobi.md#huobiwithdraw)
* [huobijp](/exchanges/huobijp.md#huobijpwithdraw)
* [hyperliquid](/exchanges/hyperliquid.md#hyperliquidwithdraw)
* [idex](/exchanges/idex.md#idexwithdraw)
* [indodax](/exchanges/indodax.md#indodaxwithdraw)
* [kraken](/exchanges/kraken.md#krakenwithdraw)
* [kucoin](/exchanges/kucoin.md#kucoinwithdraw)
* [kuna](/exchanges/kuna.md#kunawithdraw)
* [lbank](/exchanges/lbank.md#lbankwithdraw)
* [lykke](/exchanges/lykke.md#lykkewithdraw)
* [mercado](/exchanges/mercado.md#mercadowithdraw)
* [mexc](/exchanges/mexc.md#mexcwithdraw)
* [ndax](/exchanges/ndax.md#ndaxwithdraw)
* [novadax](/exchanges/novadax.md#novadaxwithdraw)
* [okcoin](/exchanges/okcoin.md#okcoinwithdraw)
* [okx](/exchanges/okx.md#okxwithdraw)
* [onetrading](/exchanges/onetrading.md#onetradingwithdraw)
* [phemex](/exchanges/phemex.md#phemexwithdraw)
* [poloniex](/exchanges/poloniex.md#poloniexwithdraw)
* [probit](/exchanges/probit.md#probitwithdraw)
* [bybit](/exchanges/bybit.md#bybitwithdraw)
* [upbit](/exchanges/upbit.md#upbitwithdraw)
* [wavesexchange](/exchanges/wavesexchange.md#wavesexchangewithdraw)
* [whitebit](/exchanges/whitebit.md#whitebitwithdraw)
* [woo](/exchanges/woo.md#woowithdraw)
* [woofipro](/exchanges/woofipro.md#woofiprowithdraw)
* [yobit](/exchanges/yobit.md#yobitwithdraw)
* [zaif](/exchanges/zaif.md#zaifwithdraw)
* [zonda](/exchanges/zonda.md#zondawithdraw)

---

<a name="withdrawWs" id="withdrawws"></a>

## withdrawWs
make a withdrawal

**Kind**: instance   
**Returns**: <code>object</code> - a [transaction structure](https://docs.ccxt.com/#/?id=transaction-structure)


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| code | <code>string</code> | Yes | unified currency code |
| amount | <code>float</code> | Yes | the amount to withdraw |
| address | <code>string</code> | Yes | the address to withdraw to |
| tag | <code>string</code> | Yes |  |
| params | <code>object</code> | No | extra parameters specific to the bitvavo api endpoint |

##### Supported exchanges
* [bitvavo](/exchanges/bitvavo.md#bitvavowithdrawws)
