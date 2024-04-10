import { default as ccxt } from '../../../../../../ts/ccxt.ts'

function log(target: any) {
    console.log(JSON.stringify(target, null, 2))
}

async function test() {
    log(ccxt.exchanges)
    const binance = new ccxt.binance();
    log(binance)
    const markets = await binance.fetchMarkets()
    log(markets)
}

test()
