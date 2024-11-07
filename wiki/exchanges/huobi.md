
<a name="huobi" id="huobi"></a>

## huobi{docsify-ignore}
**Kind**: global class  
**Extends**: <code>Exchange</code>  

* [watchTicker](#watchticker)
* [watchTrades](#watchtrades)
* [watchOHLCV](#watchohlcv)
* [watchOrderBook](#watchorderbook)
* [watchMyTrades](#watchmytrades)
* [watchOrders](#watchorders)
* [watchPositions](#watchpositions)
* [watchBalance](#watchbalance)

<a name="watchTicker" id="watchticker"></a>

### watchTicker{docsify-ignore}
watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>object</code> - a [ticker structure](https://docs.ccxt.com/#/?id=ticker-structure)

**See**

- https://www.htx.com/en-us/opend/newApiPages/?id=7ec53561-7773-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=28c33ab2-77ae-11ed-9966-0242ac110003


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the ticker for |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchTicker (symbol[, params])
```


<a name="watchTrades" id="watchtrades"></a>

### watchTrades{docsify-ignore}
get the list of most recent trades for a particular symbol

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=public-trades)

**See**

- https://www.htx.com/en-us/opend/newApiPages/?id=7ec53b69-7773-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=28c33c21-77ae-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=28c33cfe-77ae-11ed-9966-0242ac110003


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch trades for |
| since | <code>int</code> | No | timestamp in ms of the earliest trade to fetch |
| limit | <code>int</code> | No | the maximum amount of trades to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchTrades (symbol[, since, limit, params])
```


<a name="watchOHLCV" id="watchohlcv"></a>

### watchOHLCV{docsify-ignore}
watches historical candlestick data containing the open, high, low, and close price, and the volume of a market

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>Array&lt;Array&lt;int&gt;&gt;</code> - A list of candles ordered as timestamp, open, high, low, close, volume

**See**

- https://www.htx.com/en-us/opend/newApiPages/?id=7ec53241-7773-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=28c3346a-77ae-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=28c33563-77ae-11ed-9966-0242ac110003


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch OHLCV data for |
| timeframe | <code>string</code> | Yes | the length of time each candle represents |
| since | <code>int</code> | No | timestamp in ms of the earliest candle to fetch |
| limit | <code>int</code> | No | the maximum amount of candles to fetch |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchOHLCV (symbol, timeframe[, since, limit, params])
```


<a name="watchOrderBook" id="watchorderbook"></a>

### watchOrderBook{docsify-ignore}
watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>object</code> - A dictionary of [order book structures](https://docs.ccxt.com/#/?id=order-book-structure) indexed by market symbols

**See**

- https://huobiapi.github.io/docs/dm/v1/en/#subscribe-market-depth-data
- https://huobiapi.github.io/docs/coin_margined_swap/v1/en/#subscribe-incremental-market-depth-data
- https://huobiapi.github.io/docs/usdt_swap/v1/en/#general-subscribe-incremental-market-depth-data


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified symbol of the market to fetch the order book for |
| limit | <code>int</code> | No | the maximum amount of order book entries to return |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchOrderBook (symbol[, limit, params])
```


<a name="watchMyTrades" id="watchmytrades"></a>

### watchMyTrades{docsify-ignore}
watches information on multiple trades made by the user

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [trade structures](https://docs.ccxt.com/#/?id=trade-structure)

**See**: https://www.htx.com/en-us/opend/newApiPages/?id=7ec53dd5-7773-11ed-9966-0242ac110003  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market trades were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch trades for |
| limit | <code>int</code> | No | the maximum number of trade structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchMyTrades (symbol[, since, limit, params])
```


<a name="watchOrders" id="watchorders"></a>

### watchOrders{docsify-ignore}
watches information on multiple orders made by the user

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [order structures](https://docs.ccxt.com/#/?id=order-structure)

**See**: https://www.htx.com/en-us/opend/newApiPages/?id=7ec53c8f-7773-11ed-9966-0242ac110003  

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| symbol | <code>string</code> | Yes | unified market symbol of the market orders were made in |
| since | <code>int</code> | No | the earliest time in ms to fetch orders for |
| limit | <code>int</code> | No | the maximum number of order structures to retrieve |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchOrders (symbol[, since, limit, params])
```


<a name="watchPositions" id="watchpositions"></a>

### watchPositions{docsify-ignore}
watch all open positions. Note: huobi has one channel for each marginMode and type

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>Array&lt;object&gt;</code> - a list of [position structure](https://docs.ccxt.com/en/latest/manual.html#position-structure)

**See**

- https://www.huobi.com/en-in/opend/newApiPages/?id=8cb7de1c-77b5-11ed-9966-0242ac110003
- https://www.huobi.com/en-in/opend/newApiPages/?id=8cb7df0f-77b5-11ed-9966-0242ac110003
- https://www.huobi.com/en-in/opend/newApiPages/?id=28c34a7d-77ae-11ed-9966-0242ac110003
- https://www.huobi.com/en-in/opend/newApiPages/?id=5d5156b5-77b6-11ed-9966-0242ac110003


| Param | Type | Description |
| --- | --- | --- |
| symbols | <code>Array&lt;string&gt;</code>, <code>undefined</code> | list of unified market symbols |
| params | <code>object</code> | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchPositions (symbols, params[])
```


<a name="watchBalance" id="watchbalance"></a>

### watchBalance{docsify-ignore}
watch balance and get the amount of funds available for trading or funds locked in orders

**Kind**: instance method of [<code>huobi</code>](#huobi)  
**Returns**: <code>object</code> - a [balance structure](https://docs.ccxt.com/#/?id=balance-structure)

**See**

- https://www.htx.com/en-us/opend/newApiPages/?id=7ec52e28-7773-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=10000084-77b7-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=8cb7dcca-77b5-11ed-9966-0242ac110003
- https://www.htx.com/en-us/opend/newApiPages/?id=28c34995-77ae-11ed-9966-0242ac110003


| Param | Type | Required | Description |
| --- | --- | --- | --- |
| params | <code>object</code> | No | extra parameters specific to the exchange API endpoint |


```javascript
huobi.watchBalance ([params])
```

