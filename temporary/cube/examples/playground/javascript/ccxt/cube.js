import { default as ccxt } from '../../../../../../js/ccxt.js'

let response = undefined
const exchangeId = 'cube'
const useSandBoxMode = true
const subAccountId = Number(process.env['SUB_ACCOUNT_ID'])
const marketSymbols = ['tsoltusdc','tbtctusdc']
const marketIds = ['200047', '200005']
const orderSides = ['buy', 'sell']
const orderTypes = ['limit', 'market']
const clientOrderId = 1712612349538
const exchangeOrderId = '5328155590'

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

async function loadMarkets() {
    response = await communityExchange.loadMarkets()
    log(response)
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

// DONE
async function fetchTicker() {
    response = await communityExchange.fetchTicker(marketSymbols[0])
    log(response)
}

// DONE
async function fetchTickers() {
    response = await communityExchange.fetchTickers(marketSymbols)
    log(response)
}

// DEVELOPMENT (conferir o objeto, em especial o datetime)
async function fetchOrderBook() {
    response = await communityExchange.fetchOrderBook(marketSymbols[0])
    log(response)
}

// TODO
async function fetchOHLCV() {
    response = await communityExchange.fetchOHLCV()
    log(response)
}

async function fetchStatus() {
        response = await communityExchange.fetchStatus()
        log(response)
}

// BACKLOG?
async function fetchTrades() {
    // ???
    response = await communityExchange.fetchTrades(marketSymbols[0])
    log(response)
}

// DEVELOPMENT (incompleto)
async function fetchBalance() {
    // ???
    response = await communityExchange.fetchBalance()
    log(response)
}

// DEVELOPMENT (incompleto)
async function createOrder({side = 'buy', orderType = 'limit'}) {
    let response = undefined
    if (orderType === 'limit') {
        let price = undefined
        if (side === 'buy') {
            price = 130.0
        }  else {
            price = 160.0
        }
        response = await communityExchange.createOrder(
            marketSymbols[0], orderType, side, 0.1, price,
            {
                'requestId': 1,
                'selfTradePrevention': 0,
                'postOnly': 0,
                'timeInForce': 1,
                'cancelOnDisconnect': false
            }
        )
    } else if (orderType === 'market') {
        response = await communityExchange.createOrder(
            marketSymbols[0], orderType, side, 0.1, undefined,
            {
                'requestId': 1,
                'selfTradePrevention': 0,
                'postOnly': 0,
                'timeInForce': 1,
                'cancelOnDisconnect': false
            }
        )
    }
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
        'subaccountId': `${subAccountId}`,
        'requestId': 1,
        // 'side': 1, // 0: buy, 1: sell
    })
    log(response)
    // TODO response object is correct lasting only parse the answer!!!
}

async function fetchRawOrder() {
    // ???
    response = await communityExchange.fetchRawOrder(exchangeOrderId, marketSymbols[0], {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

// DEVELOPMENT (incompleto)
async function fetchOrder() {
    // ???
    response = await communityExchange.fetchOrder(exchangeOrderId, marketSymbols[0], {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchOrders() {
    // ???
    response = await communityExchange.fetchOrders(marketSymbols[0], undefined, undefined, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchRawOrders() {
    // ???
    response = await communityExchange.fetchRawOrders(undefined, undefined, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

// TODO
async function fetchOpenOrders() {
    // ???
    response = await communityExchange.fetchOpenOrders(marketSymbols[0], undefined, undefined, {
        'subaccountId': `${subAccountId}`,
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

async function test() {
    // getAllExchanges()
    createCommunityExchange()
    // createProExchange()
    // await loadMarkets()
    // await fetchCurrencies()
    // await fetchMarkets()
    // await fetchTradingFee()

    // await createOrder({})
    // await createOrder({'side': orderSides[1]})
    // await createOrder({'orderType': orderTypes[1]})
    // await createOrder({'side': orderSides[1], 'orderType':orderTypes[1]})

    // await cancelOrder()
    // await fetchBalance()
    // await fetchRawOrder()
    // await fetchOrder()
    // await fetchOpenOrders()
    // await fetchOrders()
    // await fetchRawOrders()
    // await fetchOrderBook()
    // await fetchTicker()
    // await fetchTickers()
    // await cancelAllOrders()
    // await fetchOHLCV()
    // await fetchTrades()
    // await fetchStatus()
    // await fetchMyTrades()    // TODO Not implemented!!!
    // await fetchClosedOrders()   // TODO Not implemented!!!
    // await deposit()   // TODO Not implemented!!!
    // await withdraw()   // TODO Not implemented!!!
    // await watchOrderBook()   // TODO Not implemented!!!
}

test()
