import { default as ccxt } from '../../../../../../js/ccxt.js'

function log(target) {
    console.log(JSON.stringify(target, null, 2))
}

async function test() {
    // log(ccxt.exchanges)
    const cube = new ccxt.cube()
    cube.apiKey = process.env['CUBE_API_KEY']
    cube.secret = process.env['CUBE_API_SECRET']
    const cubePro = new ccxt.pro.cube()
    cubePro.apiKey = process.env['CUBE_API_KEY']
    cubePro.secret = process.env['CUBE_API_SECRET']
    // log(cube)
    // log(cubePro)
    const response = await cube.fetchBalance()
    log(response)
    // const response = await cubePro.watchOrderBook('tbtctusdc')
    // log(response)
}

test()
