import { default as ccxt } from '../../../../../../js/ccxt.js'

function log(target) {
    console.log(JSON.stringify(target, null, 2))
}

async function test() {
    log(ccxt.exchanges)
    const cube = new ccxt.cube();
    log(cube)
    const markets = await cube.fetchMarkets()
    log(markets)
}

test()
