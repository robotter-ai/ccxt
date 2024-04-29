import { default as ccxt } from '../../../../../../../js/ccxt.js'

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
async function createProExchange() {
    proExchange = new ccxt.pro[exchangeId]()
    proExchange.apiKey = process.env['API_KEY']
    proExchange.secret = process.env['API_SECRET']
    if (useSandBoxMode) {
        proExchange.setSandboxMode(true)
    }
    proExchange.options['subaccountId'] = subAccountId
}

async function watchOrderBook() {
    response = await proExchange.watchOrderBook(marketSymbols[0])
    log(response)
}

async function createOrderWs({side = 'buy', orderType = 'limit'}) {
    let response = undefined
    if (orderType === 'limit') {
        let price = undefined
        if (side === 'buy') {
            price = 130.0
        }  else {
            price = 160.0
        }
        response = await proExchange.createOrderWs(
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
        response = await proExchange.createOrderWs(
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

async function test() {
    createProExchange()
    // await watchOrderBook()

    await createOrderWs({})
    // await createOrderWs({'side': orderSides[1]})
    // await createOrderWs({'orderType': orderTypes[1]})
    // await createOrderWs({'side': orderSides[1], 'orderType':orderTypes[1]})
}

test()
