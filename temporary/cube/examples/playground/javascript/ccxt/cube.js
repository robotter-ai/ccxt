import { default as ccxt } from '../../../../../../js/ccxt.js'

let response = undefined
const exchangeId = 'cube'
const useSandBoxMode = true
const subAccountId = Number(process.env['SUB_ACCOUNT_ID'])
const marketSymbols = ['tsoltusdc','tbtctusdc']
const marketIds = ['200047', '200005']
const clientOrderId = 1712612349538
const exchangeOrderId = '5307762315'

let communityExchange = undefined
let proExchange = undefined

function log(target) {
    console.log(JSON.stringify(target, null, 2))
}

// DONE
async function getAllExchanges() {
    const exchanges = ccxt.exchanges

    log(exchanges)
}

// DONE
async function createCommunityExchange() {
    communityExchange = new ccxt[exchangeId]()
    communityExchange.apiKey = process.env['API_KEY']
    communityExchange.secret = process.env['API_SECRET']
    if (useSandBoxMode) {
        communityExchange.setSandboxMode(true)
    }
    communityExchange.options['subaccountId'] = subAccountId

    // log(exchange)
}

// DONE
async function createProExchange() {
    proExchange = new ccxt.pro[exchangeId]()
    proExchange.apiKey = process.env['API_KEY']
    proExchange.secret = process.env['API_SECRET']
    if (useSandBoxMode) {
        communityExchange.setSandboxMode(true)
    }
    proExchange.options['subaccountId'] = subAccountId

    // log(proExchange)
}

// DEVELOPMENT (conferir o objeto)
async function fetchMarkets() {
    response = await communityExchange.fetchMarkets()
    log(response)
}

// DEVELOPMENT (conferir o objeto)
async function fetchCurrencies() {
    response = await communityExchange.fetchCurrencies()
    log(response)
}

// TODO
async function fetchTicker() {
    response = await communityExchange.fetchTicker(marketSymbols[0])
    log(response)
}

// BACKLOG
async function fetchTickers() {
    response = await communityExchange.fetchTickers(marketSymbols)
    log(response)
}

// DEVELOPMENT (conferir o objeto, em especial o datetime)
async function fetchOrderBook() {
    response = await communityExchange.fetchOrderBook('tSOLtUSDC')
    log(response)
}

// TODO
async function fetchOHLCV() {
    response = await communityExchange.fetchOHLCV()
    log(response)
}

// BACKLOG?
async function fetchStatus() {

}

// BACKLOG?
async function fetchTrades() {

}

// DEVELOPMENT (incompleto)
async function fetchBalance() {
    // ???
    response = await communityExchange.fetchBalance()
    log(response)
}

// DEVELOPMENT (incompleto)
async function createOrder() {
    // Working, but the parse is not complete.
    response = await communityExchange.createOrder(
        'tSOLtUSDC', 1, 0, 0.1, 125.0,
        {
            'requestId': 1,
            'subaccountId': subAccountId,
            'selfTradePrevention': 0,
            'postOnly': 0,
            'timeInForce': 1,
            'cancelOnDisconnect': false
        }
    )
    log(response)
}

async function cancelOrder() {
    // ???
    response = await communityExchange.cancelOrder(exchangeOrderId, marketSymbols[0], {'requestId': 1})
    log(response)
}

// DEVELOPMENT (incompleto)
async function cancelAllOrders() {
    // Not ready, it needs to be revisited.
    response = await communityExchange.cancelAllOrders(marketSymbols[0], {
        'subaccountId': subAccountId,
        'requestId': 1,
        'side': 1, // 0: buy, 1: sell
    })
    log(response)
    // TODO response object is correct lasting only parse the answer!!!
}

async function fetchRawOrder() {
    // ???
    response = await communityExchange.fetchRawOrder(exchangeOrderId, marketSymbols[0], {
        subAccountId
    })
    log(response)
}

// DEVELOPMENT (incompleto)
async function fetchOrder() {
    // ???
    response = await communityExchange.fetchOrder(exchangeOrderId, marketSymbols[0], {
        subAccountId
    })
    log(response)
}

async function fetchOrders() {
    // ???
    response = await communityExchange.fetchOrders(marketSymbols[0], undefined, undefined, {
        subAccountId
    })
    log(response)
}

// TODO
async function fetchOpenOrders() {
    // ???
    response = await communityExchange.fetchOpenOrders(marketSymbols[0], undefined, undefined, {
        subAccountId
    })
    log(response)
}

// BACKLOG
async function fetchClosedOrders() {

}

// BACKLOG
async function fetchMyTrades() {

}

// BACKLOG
async function deposit() {
}

// BACKLOG
async function withdraw() {
    response = await communityExchange.withdraw()
    log(response)
}

// DEVELOPMENT (incompleto)
async function fetchTradingFee() {
    response = await communityExchange.fetchTradingFee(marketSymbols[0])
    log(response)
}

// DEVELOPMENT (incompleto)
async function watchOrderBook() {
    response = await proExchange.watchOrderBook(marketSymbols[0])
    log(response)
}

async function parseOrder() {
    const fetchedOrder = {
        'clientOrderId': '1713218283171',
        'exchangeOrderId': '5286416927',
        'marketId': '200047',
        'price': '13000',
        'orderQuantity': '10',
        'side': '0',
        'timeInForce': '1',
        'orderType': '0',
        'remainingQuantity': '10',
        'restTime': '1713218283314283303',
        'subaccountId': '163',
        'cumulativeQuantity': '0',
        'cancelOnDisconnect': false
    }
    const creationResultOrderExample = {
        'msgSeqNum': '3614952',
        'clientOrderId': '1713218738167',
        'requestId': '1',
        'exchangeOrderId': '5286527825',
        'marketId': '200047',
        'price': null,
        'quantity': '10',
        'side': '0',
        'timeInForce': '1',
        'orderType': '1',
        'transactTime': '1713218807472551691',
        'subaccountId': '163',
        'cancelOnDisconnect': false
    }
    const marketExample = {
        'id': 'tsoltusdc',
        'lowercaseId': 'tsoltusdc',
        'symbol': 'TSOL/TUSDC',
        'base': 'TSOL',
        'quote': 'TUSDC',
        'baseId': 'TSOL',
        'quoteId': 'TUSDC',
        'type': 'spot',
        'spot': true,
        'margin': false,
        'swap': false,
        'future': false,
        'option': false,
        'index': false,
        'active': true,
        'contract': false,
        'taker': 0.008,
        'maker': 0.004,
        'precision': {
            'amount': 1,
            'price': 1
        },
        'limits': {
            'leverage': {},
            'amount': {},
            'price': {},
            'cost': {}
        },
        'info': {
            'marketId': '200047',
            'symbol': 'tSOLtUSDC',
            'baseAssetId': '80005',
            'baseLotSize': '100000',
            'quoteAssetId': '80007',
            'quoteLotSize': '1',
            'priceDisplayDecimals': '2',
            'protectionPriceLevels': '1000',
            'priceBandBidPct': '25',
            'priceBandAskPct': '400',
            'priceTickSize': '0.01',
            'quantityTickSize': '0.0001',
            'feeTableId': '2',
            'status': '1',
            'displayRank': '3',
            'listedAt': '2023-10-29T00:00:00Z',
            'isPrimary': true
        }
    }
    const creationResult = {'order': creationResultOrderExample, 'fetchedOrder': fetchedOrder};
    // const cancellationResult = {'order': cancellationResultOrderExample, 'fetchedOrder': fetchedOrder};
    response = await communityExchange.parseOrder(creationResult, marketExample)
    log(response)
}

async function test() {
    // getAllExchanges()
    createCommunityExchange()
    createProExchange()
    // await fetchCurrencies() // TODO check parser output!!!
    // await fetchMarkets() // TODO check parser output!!!
    // await fetchTradingFee() // TODO check parser output!!!
    // await createOrder() // TODO check parser output!!!
    // await cancelOrder() // TODO check parser output!!!
    // await fetchBalance() // TODO fix!!!
    // await fetchRawOrder()
    // await fetchOrder() // TODO improve!!!
    // await fetchOpenOrders()
    // await fetchOrders()
    // await fetchOrderBook()
    // await fetchTicker()
    // await fetchTickers()
    // await cancelAllOrders()
    // await fetchOrders()
     await fetchOHLCV()
    // await fetchTrades()
    // await fetchMyTrades()
    // await fetchClosedOrders()
    // await fetchStatus()
    // await deposit()
    // await withdraw()
    // await watchOrderBook()
    // await parseOrder()
}

test()
