import { default as ccxt } from '../../../../../../js/ccxt.js'

let response = undefined;
const environment = 'staging';
const exchangeId = 'cube';
const subAccountId = process.env['SUB_ACCOUNT_ID'];
const marketSymbol = 'tsoltusdc';

let communityExchange = undefined;
let proExchange = undefined;

function log(target) {
    console.log(JSON.stringify(target, null, 2))
}

async function getAllExchanges() {
    log(ccxt.exchanges)
}

async function createCommunityExchange() {
    communityExchange = new ccxt[exchangeId]()
    communityExchange.apiKey = process.env['API_KEY']
    communityExchange.secret = process.env['API_SECRET']
    communityExchange.options['environment'] = environment
    communityExchange.options['subaccountId'] = subAccountId

    // log(exchange)
}

async function createProExchange() {
    const proExchange = new ccxt.pro[exchangeId]()
    proExchange.apiKey = process.env['API_KEY']
    proExchange.secret = process.env['API_SECRET']
    proExchange.options['environment'] = environment
    proExchange.options['subaccountId'] = subAccountId

    // log(proExchange)
}

async function fetchMarkets() {
    // Working, but we need the output from the parser.
    response = await communityExchange.fetchMarkets()
    log(response)
}

async function fetchCurrencies() {
    // Working, but we need the output from the parser.
    response = await communityExchange.fetchCurrencies()
    log(response)
}

async function fetchTicker() {

}

async function fetchTickers() {

}

async function fetchOrderBook() {
    // Working, but we need the output from the parser (specially the datetime).
    response = await communityExchange.fetchOrderBook('tSOLtUSDC')
    log(response)
}

async function fetchOHLCV() {
}

async function fetchStatus() {

}

async function fetchTrades() {

}

async function fetchBalance() {
    // ???
    response = await communityExchange.fetchBalance()
    log(response)
}

async function createOrder() {
    // Working, but the parse is not complete.
    response = await communityExchange.createOrder(
        'tSOLtUSDC', 1, 1, 0.1, 180.0,
        {
            "requestId": 1,
            "subaccountId": subAccountId,
            "selfTradePrevention": 0,
            "postOnly": 0,
            "timeInForce": 1,
            "cancelOnDisconnect": false
        }
    )
    log(response)
}

async function cancelOrder() {

}

async function cancelAllOrders() {
    // Not ready, it needs to be revisited.
    response = await communityExchange.cancelAllOrders(marketSymbol, {
        "subaccountId": subAccountId,
        "requestId": 1,
        "side": 1, // 0: buy, 1: sell
    })
    log(response)
}

async function fetchOrder() {
    // ???
    const orderId = ''
    response = await communityExchange.fetchOrder(orderId, marketSymbol, {
        subAccountId
    })
    log(response)
}

async function fetchOrders() {

}

async function fetchOpenOrders() {
    // ???
    response = await communityExchange.fetchOpenOrders(marketSymbol, undefined, undefined, {
        subAccountId
    })
    log(response)
}

async function fetchClosedOrders() {

}

async function fetchMyTrades() {

}

async function deposit() {
}

async function withdraw() {
}

async function fetchTradingFee() {
    // Not ready, it needs to be revisited.
    response = await communityExchange.fetchTradingFee(marketSymbol)
    log(response)
}

async function watchOrderBook() {
    // Not implemented.
    response = await proExchange.watchOrderBook(marketSymbol)
    log(response)
}

async function test() {
    // getAllExchanges()
    // createCommunityExchange()
    // createProExchange()
    // fetchMarkets()
    // fetchCurrencies()
    // fetchTicker()
    // fetchTickers()
    // fetchOrderBook()
    // fetchOHLCV()
    // fetchStatus()
    // fetchTrades()
    // fetchBalance()
    // createOrder()
    // cancelOrder()
    // cancelAllOrders()
    // fetchOrder()
    // fetchOrders()
    // fetchOpenOrders()
    // fetchClosedOrders()
    // fetchMyTrades()
    // deposit()
    // withdraw()
    // fetchTradingFee()
    // watchOrderBook()
}

test()
