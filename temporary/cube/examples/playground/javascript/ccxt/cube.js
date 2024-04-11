import { default as ccxt } from '../../../../../../js/ccxt.js'

function log(target) {
    console.log(JSON.stringify(target, null, 2))
}

async function test() {
    let response: any = undefined;

    // log(ccxt.exchanges)

    const exchangeId = 'cube';

    const exchange = new ccxt[exchangeId]()
    exchange.apiKey = process.env['API_KEY']
    exchange.secret = process.env['API_SECRET']
    exchange.options['environment'] = 'staging';
    // log(exchange)

    const exchangePro = new ccxt.pro[exchangeId]()
    exchangePro.apiKey = process.env['API_KEY']
    exchangePro.secret = process.env['API_SECRET']
    // log(exchangePro)

    // response = await exchange.fetchCurrencies()
    // log(response)
    //
    // response = await exchange.fetchMarkets()
    // log(response)
    //
    // response = await exchange.fetchOrderBook()
    // log(response)
    //
    // response = await exchange.fetchBalance()
    // log(response)
    //
    // response = await cubePro.watchOrderBook('tbtctusdc')
    // log(response)
}

test()
