import { default as ccxt } from '../../../../../../js/ccxt.js'

let response = undefined
const exchangeId = 'cube'
const useSandBoxMode = true
const subAccountId = Number(process.env['SUB_ACCOUNT_ID'])
const marketSymbols = ['tsoltusdc','tbtctusdc']
const marketSymbolsMainnet = ['solusdc','btcusdc', 'bonkusdc']
const marketIds = ['200047', '200005']
const marketIdsMainnet = ['100006', '100004', '100007']
const orderSides = ['buy', 'sell']
const orderTypes = ['limit', 'market']
const clientOrderId = 1712612349538
const exchangeOrderId = '5328155590'
const kLineIntervals = ['1s', '1m', '15m', '1h', '4h', '1d']

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

async function fetchMarkets() {
    response = await communityExchange.fetchMarkets()
    log(response)
}

async function fetchCurrencies() {
    response = await communityExchange.fetchCurrencies()
    log(response)
}

async function fetchTicker() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchTicker(symbol)
    log(response)
}

async function fetchTickers() {
    const symbols = useSandBoxMode ? marketSymbols : marketSymbolsMainnet;
    response = await communityExchange.fetchTickers(symbols)
    log(response)
}

async function fetchOrderBook() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchOrderBook(symbol)
    log(response)
}

async function fetchOHLCV() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchOHLCV(symbol, kLineIntervals[2])
    log(response)
}

async function fetchStatus() {
        response = await communityExchange.fetchStatus()
        log(response)
}

async function fetchTrades() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchTrades(symbol)
    log(response)
}

async function fetchBalance() {
    response = await communityExchange.fetchBalance()
    log(response)
}

async function createOrder({side = 'buy', orderType = 'limit'}) {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    let response = undefined
    if (orderType === 'limit') {
        let price = undefined
        if (side === 'buy') {
            price = 130.0
        }  else {
            price = 160.0
        }
        response = await communityExchange.createOrder(
            symbol, orderType, side, 0.1, price,
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
            symbol, orderType, side, 0.1, undefined,
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
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.cancelOrder(exchangeOrderId, symbol, {'requestId': 1})
    log(response)
}

async function cancelAllOrders() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.cancelAllOrders(symbol, {
        'requestId': 1,
    })
    log(response)
}

async function fetchRawOrder() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchRawOrder(exchangeOrderId, symbol, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchOrder() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchOrder(exchangeOrderId, symbol, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchOrders() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchOrders(symbol, undefined, undefined, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchRawOrders() {
    response = await communityExchange.fetchRawOrders(undefined, undefined, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchOpenOrders() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchOpenOrders(symbol, undefined, undefined, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchClosedOrders() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchClosedOrders(symbol, undefined, undefined, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

async function fetchMyTrades() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchMyTrades(symbol, undefined, undefined, {
        'subaccountId': `${subAccountId}`,
    })
    log(response)
}

// BACKLOG
async function deposit() {
}

// TESTING
async function fetchDeposits() {
    response = await communityExchange.fetchWithdrawals(
        "TSOL",
        undefined,
        undefined,
        {
            'subaccountId': subAccountId
        }
    )
    log(response)
}

// DONE
async function fetchWithdrawals() {
    response = await communityExchange.fetchWithdrawals(
        "TSOL",
        undefined,
        undefined,
        {
            'subaccountId': subAccountId
        }
    )
    log(response)
}

// DONE
async function withdraw() {
    response = await communityExchange.withdraw(
        80005,
        1,
        "6khUqefutr3xA6fEUnZfRMRGwER8BBTZZFFgBPhuUyyp",
        undefined,
        {
            'subaccountId': subAccountId
        }
    )
    log(response)
}

async function fetchTradingFee() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await communityExchange.fetchTradingFee(symbol)
    log(response)
}

// DEVELOPMENT (incompleto)
async function watchOrderBook() {
    const symbol = useSandBoxMode ? marketSymbols[0] : marketSymbolsMainnet[0];
    response = await proExchange.watchOrderBook(symbol)
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
    // await fetchOHLCV() // Working on Mainnet only
    // await fetchTrades()
    // await fetchStatus()
    // await fetchWithdrawals()
    // await fetchDeposits()
    // await fetchMyTrades()
    // await fetchClosedOrders()
    // await deposit()   // TODO Not implemented!!!
    // await withdraw()
    // await watchOrderBook()   // TODO Not implemented!!!
}

test()
