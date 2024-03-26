import { default as ccxt } from '../../../../ts/ccxt.ts'

async function test01() {
    console.log(ccxt.exchanges)
}

await test01()
