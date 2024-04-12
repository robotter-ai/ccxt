import { default as ccxt } from '../../../../../../js/ccxt.js'

function log(target) {
    console.log(JSON.stringify(target, null, 2))
}

async function test() {
    let response = undefined;

    // log(ccxt.exchanges)

    const environment = 'staging';
    const exchangeId = 'cube';
    const subAccountId = process.env['SUB_ACCOUNT_ID'];
    const marketSymbol = 'tsoltusdc';

    const exchange = new ccxt[exchangeId]()
    exchange.apiKey = process.env['API_KEY']
    exchange.secret = process.env['API_SECRET']
    exchange.options['environment'] = environment
    exchange.options['subaccountId'] = subAccountId
    // log(exchange)

    // const exchangePro = new ccxt.pro[exchangeId]()
    // exchangePro.apiKey = process.env['API_KEY']
    // exchangePro.secret = process.env['API_SECRET']
    // exchange.options['environment'] = environment
    // log(exchangePro)

    // response = await exchange.fetchCurrencies()
    // log(response)
    //
    // response = await exchange.fetchMarkets()
    // log(response)
    //
    // response = await exchange.fetchOrderBook('tSOLtUSDC')
    // log(response)
    //
    // response = await exchange.fetchBalance()
    // log(response)
    // response = await exchange.fetchOpenOrders(marketSymbol, undefined, undefined, {
    //     subAccountId
    // })
    // log(response)
    // const orderId = ''
    // response = await exchange.fetchOrder(orderId, marketSymbol, {
    //     subAccountId
    // })
    // log(response)

    // response = await exchange.createOrder(
    //     'tSOLtUSDC', 1, 1, 0.1, 180.0,
    //     {
    //         "requestId": 1,
    //         "subaccountId": subAccountId,
    //         "selfTradePrevention": 0,
    //         "postOnly": 0,
    //         "timeInForce": 1,
    //         "cancelOnDisconnect": false
    //     }
    // )
    // log(response)

    response = await exchange.cancelAllOrders(marketSymbol, {
        "subaccountId": subAccountId,
        "requestId": 1,
        "side": 1, // 0: buy, 1: sell
    })
    log(response)

    //
    // response = await cubePro.watchOrderBook('tbtctusdc')
    // log(response)
}

test()
