import * as crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import WebSocket from 'ws';
import * as fs from 'node:fs';
import * as path from 'node:path';
// @ts-ignore
import { default as protobuf } from 'protobufjs';
import { mod } from '../../../../../../../js/src/static_dependencies/noble-curves/abstract/modular.js';

// const root = protobuf.loadSync(
//     path.resolve('temporary', 'cube', 'examples', 'playground', 'typescript', 'cube', 'websocket', 'schema', 'trade.proto')
// );

const tradeProtoDefinitions = {
    "options": {
        "csharp_namespace": "Cube.Trade",
        "go_package": "go/"
    },
    "nested": {
        "Side": {
            "values": {
                "BID": 0,
                "ASK": 1
            }
        },
        "TimeInForce": {
            "values": {
                "IMMEDIATE_OR_CANCEL": 0,
                "GOOD_FOR_SESSION": 1,
                "FILL_OR_KILL": 2
            }
        },
        "OrderType": {
            "values": {
                "LIMIT": 0,
                "MARKET_LIMIT": 1,
                "MARKET_WITH_PROTECTION": 2
            }
        },
        "SelfTradePrevention": {
            "values": {
                "CANCEL_RESTING": 0,
                "CANCEL_AGGRESSING": 1,
                "ALLOW_SELF_TRADE": 2
            }
        },
        "PostOnly": {
            "values": {
                "DISABLED": 0,
                "ENABLED": 1
            }
        },
        "ConnectionStatus": {
            "values": {
                "READ_ONLY": 0,
                "READ_WRITE": 1
            }
        },
        "Credentials": {
            "fields": {
                "accessKeyId": {
                    "type": "string",
                    "id": 1
                },
                "signature": {
                    "type": "string",
                    "id": 2
                },
                "timestamp": {
                    "type": "uint64",
                    "id": 3
                }
            }
        },
        "OrderRequest": {
            "oneofs": {
                "inner": {
                    "oneof": [
                        "new",
                        "cancel",
                        "modify",
                        "heartbeat",
                        "mc"
                    ]
                }
            },
            "fields": {
                "new": {
                    "type": "NewOrder",
                    "id": 1
                },
                "cancel": {
                    "type": "CancelOrder",
                    "id": 2
                },
                "modify": {
                    "type": "ModifyOrder",
                    "id": 3
                },
                "heartbeat": {
                    "type": "Heartbeat",
                    "id": 4
                },
                "mc": {
                    "type": "MassCancel",
                    "id": 5
                }
            }
        },
        "NewOrder": {
            "oneofs": {
                "_price": {
                    "oneof": [
                        "price"
                    ]
                },
                "_selfTradePrevention": {
                    "oneof": [
                        "selfTradePrevention"
                    ]
                }
            },
            "fields": {
                "clientOrderId": {
                    "type": "uint64",
                    "id": 1
                },
                "requestId": {
                    "type": "uint64",
                    "id": 2
                },
                "marketId": {
                    "type": "uint64",
                    "id": 3
                },
                "price": {
                    "type": "uint64",
                    "id": 4,
                    "options": {
                        "proto3_optional": true
                    }
                },
                "quantity": {
                    "type": "uint64",
                    "id": 5
                },
                "side": {
                    "type": "Side",
                    "id": 6
                },
                "timeInForce": {
                    "type": "TimeInForce",
                    "id": 7
                },
                "orderType": {
                    "type": "OrderType",
                    "id": 8
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 9
                },
                "selfTradePrevention": {
                    "type": "SelfTradePrevention",
                    "id": 10,
                    "options": {
                        "proto3_optional": true
                    }
                },
                "postOnly": {
                    "type": "PostOnly",
                    "id": 11
                },
                "cancelOnDisconnect": {
                    "type": "bool",
                    "id": 12
                }
            }
        },
        "CancelOrder": {
            "fields": {
                "marketId": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 4
                }
            }
        },
        "ModifyOrder": {
            "oneofs": {
                "_selfTradePrevention": {
                    "oneof": [
                        "selfTradePrevention"
                    ]
                }
            },
            "fields": {
                "marketId": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "newPrice": {
                    "type": "uint64",
                    "id": 4
                },
                "newQuantity": {
                    "type": "uint64",
                    "id": 5
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 6
                },
                "selfTradePrevention": {
                    "type": "SelfTradePrevention",
                    "id": 7,
                    "options": {
                        "proto3_optional": true
                    }
                },
                "postOnly": {
                    "type": "PostOnly",
                    "id": 8
                }
            }
        },
        "MassCancel": {
            "oneofs": {
                "_marketId": {
                    "oneof": [
                        "marketId"
                    ]
                },
                "_side": {
                    "oneof": [
                        "side"
                    ]
                }
            },
            "fields": {
                "subaccountId": {
                    "type": "uint64",
                    "id": 1
                },
                "requestId": {
                    "type": "uint64",
                    "id": 2
                },
                "marketId": {
                    "type": "uint64",
                    "id": 3,
                    "options": {
                        "proto3_optional": true
                    }
                },
                "side": {
                    "type": "Side",
                    "id": 4,
                    "options": {
                        "proto3_optional": true
                    }
                }
            }
        },
        "Heartbeat": {
            "fields": {
                "requestId": {
                    "type": "uint64",
                    "id": 1
                },
                "timestamp": {
                    "type": "uint64",
                    "id": 2
                }
            }
        },
        "OrderResponse": {
            "oneofs": {
                "inner": {
                    "oneof": [
                        "newAck",
                        "cancelAck",
                        "modifyAck",
                        "newReject",
                        "cancelReject",
                        "modifyReject",
                        "fill",
                        "heartbeat",
                        "position",
                        "massCancelAck",
                        "tradingStatus"
                    ]
                }
            },
            "fields": {
                "newAck": {
                    "type": "NewOrderAck",
                    "id": 1
                },
                "cancelAck": {
                    "type": "CancelOrderAck",
                    "id": 2
                },
                "modifyAck": {
                    "type": "ModifyOrderAck",
                    "id": 3
                },
                "newReject": {
                    "type": "NewOrderReject",
                    "id": 4
                },
                "cancelReject": {
                    "type": "CancelOrderReject",
                    "id": 5
                },
                "modifyReject": {
                    "type": "ModifyOrderReject",
                    "id": 6
                },
                "fill": {
                    "type": "Fill",
                    "id": 7
                },
                "heartbeat": {
                    "type": "Heartbeat",
                    "id": 8
                },
                "position": {
                    "type": "AssetPosition",
                    "id": 9
                },
                "massCancelAck": {
                    "type": "MassCancelAck",
                    "id": 10
                },
                "tradingStatus": {
                    "type": "TradingStatus",
                    "id": 11
                }
            }
        },
        "NewOrderAck": {
            "oneofs": {
                "_price": {
                    "oneof": [
                        "price"
                    ]
                }
            },
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "exchangeOrderId": {
                    "type": "uint64",
                    "id": 4
                },
                "marketId": {
                    "type": "uint64",
                    "id": 5
                },
                "price": {
                    "type": "uint64",
                    "id": 6,
                    "options": {
                        "proto3_optional": true
                    }
                },
                "quantity": {
                    "type": "uint64",
                    "id": 7
                },
                "side": {
                    "type": "Side",
                    "id": 8
                },
                "timeInForce": {
                    "type": "TimeInForce",
                    "id": 9
                },
                "orderType": {
                    "type": "OrderType",
                    "id": 10
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 11
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 12
                },
                "cancelOnDisconnect": {
                    "type": "bool",
                    "id": 13
                }
            }
        },
        "CancelOrderAck": {
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 4
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 5
                },
                "reason": {
                    "type": "Reason",
                    "id": 6
                },
                "marketId": {
                    "type": "uint64",
                    "id": 7
                },
                "exchangeOrderId": {
                    "type": "uint64",
                    "id": 8
                }
            },
            "nested": {
                "Reason": {
                    "values": {
                        "UNCLASSIFIED": 0,
                        "DISCONNECT": 1,
                        "REQUESTED": 2,
                        "IOC": 3,
                        "STP_RESTING": 4,
                        "STP_AGGRESSING": 5,
                        "MASS_CANCEL": 6,
                        "POSITION_LIMIT": 7
                    }
                }
            }
        },
        "ModifyOrderAck": {
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 4
                },
                "remainingQuantity": {
                    "type": "uint64",
                    "id": 5
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 6
                },
                "marketId": {
                    "type": "uint64",
                    "id": 7
                },
                "price": {
                    "type": "uint64",
                    "id": 8
                },
                "quantity": {
                    "type": "uint64",
                    "id": 9
                },
                "cumulativeQuantity": {
                    "type": "uint64",
                    "id": 10
                },
                "exchangeOrderId": {
                    "type": "uint64",
                    "id": 11
                }
            }
        },
        "MassCancelAck": {
            "oneofs": {
                "_reason": {
                    "oneof": [
                        "reason"
                    ]
                }
            },
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 4
                },
                "reason": {
                    "type": "Reason",
                    "id": 6,
                    "options": {
                        "proto3_optional": true
                    }
                },
                "totalAffectedOrders": {
                    "type": "uint32",
                    "id": 7
                }
            },
            "nested": {
                "Reason": {
                    "values": {
                        "UNCLASSIFIED": 0,
                        "INVALID_MARKET_ID": 1,
                        "INVALID_SIDE": 2
                    }
                }
            }
        },
        "NewOrderReject": {
            "oneofs": {
                "_price": {
                    "oneof": [
                        "price"
                    ]
                }
            },
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 4
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 5
                },
                "reason": {
                    "type": "Reason",
                    "id": 6
                },
                "marketId": {
                    "type": "uint64",
                    "id": 7
                },
                "price": {
                    "type": "uint64",
                    "id": 8,
                    "options": {
                        "proto3_optional": true
                    }
                },
                "quantity": {
                    "type": "uint64",
                    "id": 9
                },
                "side": {
                    "type": "Side",
                    "id": 10
                },
                "timeInForce": {
                    "type": "TimeInForce",
                    "id": 11
                },
                "orderType": {
                    "type": "OrderType",
                    "id": 12
                }
            },
            "nested": {
                "Reason": {
                    "values": {
                        "UNCLASSIFIED": 0,
                        "INVALID_QUANTITY": 1,
                        "INVALID_MARKET_ID": 2,
                        "DUPLICATE_ORDER_ID": 3,
                        "INVALID_SIDE": 4,
                        "INVALID_TIME_IN_FORCE": 5,
                        "INVALID_ORDER_TYPE": 6,
                        "INVALID_POST_ONLY": 7,
                        "INVALID_SELF_TRADE_PREVENTION": 8,
                        "UNKNOWN_TRADER": 9,
                        "PRICE_WITH_MARKET_LIMIT_ORDER": 10,
                        "POST_ONLY_WITH_MARKET_ORDER": 11,
                        "POST_ONLY_WITH_INVALID_TIF": 12,
                        "EXCEEDED_SPOT_POSITION": 13,
                        "NO_OPPOSING_RESTING_ORDER": 14,
                        "POST_ONLY_WOULD_TRADE": 15,
                        "DID_NOT_FULLY_FILL": 16,
                        "ONLY_ORDER_CANCEL_ACCEPTED": 17,
                        "PROTECTION_PRICE_WOULD_NOT_TRADE": 18,
                        "NO_REFERENCE_PRICE": 19,
                        "SLIPPAGE_TOO_HIGH": 20,
                        "OUTSIDE_PRICE_BAND": 21
                    }
                }
            }
        },
        "CancelOrderReject": {
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 4
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 5
                },
                "reason": {
                    "type": "Reason",
                    "id": 6
                },
                "marketId": {
                    "type": "uint64",
                    "id": 7
                }
            },
            "nested": {
                "Reason": {
                    "values": {
                        "UNCLASSIFIED": 0,
                        "INVALID_MARKET_ID": 1,
                        "ORDER_NOT_FOUND": 2
                    }
                }
            }
        },
        "ModifyOrderReject": {
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "requestId": {
                    "type": "uint64",
                    "id": 3
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 4
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 5
                },
                "reason": {
                    "type": "Reason",
                    "id": 6
                },
                "marketId": {
                    "type": "uint64",
                    "id": 7
                }
            },
            "nested": {
                "Reason": {
                    "values": {
                        "UNCLASSIFIED": 0,
                        "INVALID_QUANTITY": 1,
                        "INVALID_MARKET_ID": 2,
                        "ORDER_NOT_FOUND": 3,
                        "INVALID_IFM": 4,
                        "INVALID_POST_ONLY": 5,
                        "INVALID_SELF_TRADE_PREVENTION": 6,
                        "UNKNOWN_TRADER": 7,
                        "EXCEEDED_SPOT_POSITION": 8,
                        "POST_ONLY_WOULD_TRADE": 9,
                        "ONLY_ORDER_CANCEL_ACCEPTED": 17,
                        "OUTSIDE_PRICE_BAND": 11
                    }
                }
            }
        },
        "Fill": {
            "fields": {
                "msgSeqNum": {
                    "type": "uint64",
                    "id": 1
                },
                "marketId": {
                    "type": "uint64",
                    "id": 2
                },
                "clientOrderId": {
                    "type": "uint64",
                    "id": 3
                },
                "exchangeOrderId": {
                    "type": "uint64",
                    "id": 4
                },
                "fillPrice": {
                    "type": "uint64",
                    "id": 5
                },
                "fillQuantity": {
                    "type": "uint64",
                    "id": 6
                },
                "leavesQuantity": {
                    "type": "uint64",
                    "id": 7
                },
                "fillQuoteQuantity": {
                    "type": "uint64",
                    "id": 15
                },
                "transactTime": {
                    "type": "uint64",
                    "id": 8
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 9
                },
                "cumulativeQuantity": {
                    "type": "uint64",
                    "id": 10
                },
                "side": {
                    "type": "Side",
                    "id": 11
                },
                "aggressorIndicator": {
                    "type": "bool",
                    "id": 12
                },
                "feeRatio": {
                    "type": "FixedPointDecimal",
                    "id": 13
                },
                "tradeId": {
                    "type": "uint64",
                    "id": 14
                }
            }
        },
        "FixedPointDecimal": {
            "fields": {
                "mantissa": {
                    "type": "int64",
                    "id": 1
                },
                "exponent": {
                    "type": "int32",
                    "id": 2
                }
            }
        },
        "AssetPosition": {
            "fields": {
                "subaccountId": {
                    "type": "uint64",
                    "id": 1
                },
                "assetId": {
                    "type": "uint64",
                    "id": 2
                },
                "total": {
                    "type": "RawUnits",
                    "id": 3
                },
                "available": {
                    "type": "RawUnits",
                    "id": 4
                }
            }
        },
        "RawUnits": {
            "fields": {
                "word0": {
                    "type": "uint64",
                    "id": 1
                },
                "word1": {
                    "type": "uint64",
                    "id": 2
                },
                "word2": {
                    "type": "uint64",
                    "id": 3
                },
                "word3": {
                    "type": "uint64",
                    "id": 4
                }
            }
        },
        "Bootstrap": {
            "oneofs": {
                "inner": {
                    "oneof": [
                        "done",
                        "resting",
                        "position",
                        "tradingStatus"
                    ]
                }
            },
            "fields": {
                "done": {
                    "type": "Done",
                    "id": 1
                },
                "resting": {
                    "type": "RestingOrders",
                    "id": 2
                },
                "position": {
                    "type": "AssetPositions",
                    "id": 3
                },
                "tradingStatus": {
                    "type": "TradingStatus",
                    "id": 4
                }
            }
        },
        "RestingOrders": {
            "fields": {
                "orders": {
                    "rule": "repeated",
                    "type": "RestingOrder",
                    "id": 1
                }
            }
        },
        "AssetPositions": {
            "fields": {
                "positions": {
                    "rule": "repeated",
                    "type": "AssetPosition",
                    "id": 1
                }
            }
        },
        "Done": {
            "fields": {
                "latestTransactTime": {
                    "type": "uint64",
                    "id": 1
                },
                "readOnly": {
                    "type": "bool",
                    "id": 2
                }
            }
        },
        "TradingStatus": {
            "fields": {
                "connectionStatus": {
                    "type": "ConnectionStatus",
                    "id": 1
                }
            }
        },
        "RestingOrder": {
            "fields": {
                "clientOrderId": {
                    "type": "uint64",
                    "id": 1
                },
                "exchangeOrderId": {
                    "type": "uint64",
                    "id": 2
                },
                "marketId": {
                    "type": "uint64",
                    "id": 3
                },
                "price": {
                    "type": "uint64",
                    "id": 4
                },
                "orderQuantity": {
                    "type": "uint64",
                    "id": 5
                },
                "side": {
                    "type": "Side",
                    "id": 6
                },
                "timeInForce": {
                    "type": "TimeInForce",
                    "id": 7
                },
                "orderType": {
                    "type": "OrderType",
                    "id": 8
                },
                "remainingQuantity": {
                    "type": "uint64",
                    "id": 9
                },
                "restTime": {
                    "type": "uint64",
                    "id": 10
                },
                "subaccountId": {
                    "type": "uint64",
                    "id": 11
                },
                "cumulativeQuantity": {
                    "type": "uint64",
                    "id": 12
                },
                "cancelOnDisconnect": {
                    "type": "bool",
                    "id": 13
                }
            }
        }
    }
}

const root  = protobuf.Root.fromJSON(tradeProtoDefinitions)

const AssetPosition = root.lookupType('AssetPosition');
const AssetPositions = root.lookupType('AssetPositions');
const Bootstrap = root.lookupType('Bootstrap');
const CancelOrder = root.lookupType('CancelOrder');
const CancelOrderAck = root.lookupType('CancelOrderAck');
const CancelOrderReject = root.lookupType('CancelOrderReject');
const Credentials = root.lookupType('Credentials');
const Done = root.lookupType('Done');
const Fill = root.lookupType('Fill');
const FixedPointDecimal = root.lookupType('FixedPointDecimal');
const Heartbeat = root.lookupType('Heartbeat');
const MassCancel = root.lookupType('MassCancel');
const MassCancelAck = root.lookupType('MassCancelAck');
const ModifyOrder = root.lookupType('ModifyOrder');
const ModifyOrderAck = root.lookupType('ModifyOrderAck');
const ModifyOrderReject = root.lookupType('ModifyOrderReject');
const NewOrder = root.lookupType('NewOrder');
const NewOrderAck = root.lookupType('NewOrderAck');
const NewOrderReject = root.lookupType('NewOrderReject');
const OrderRequest = root.lookupType('OrderRequest');
const OrderResponse = root.lookupType('OrderResponse');
const RawUnits = root.lookupType('RawUnits');
const RestingOrder = root.lookupType('RestingOrder');
const RestingOrders = root.lookupType('RestingOrders');
const TradingStatus = root.lookupType('TradingStatus');

const apiKey = Deno.env.get("API_KEY");
const secretKey = Deno.env.get("API_SECRET");
const subAccountId = Deno.env.get("SUB_ACCOUNT_ID");

const wsUrl = `wss://staging.cube.exchange/os`;
const ws = new WebSocket(wsUrl);
let heartbeatInterval;

function uint8ArrayToHex(array: Uint8Array): string {
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

function uint8ArrayToBase64(array: Uint8Array): string {
    const binaryString = array.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binaryString);
}

enum TSOLTUDSC {
    marketId = 200047,
    quantityTickSize = 0.0001,
    priceTickSize = 0.01
}

enum TBTCTUDSC {
    marketId = 200005,
    quantityTickSize = 1e-05,
    priceTickSize = 0.1,
}

const MarketConstants = {
    "tsoltusdc": TSOLTUDSC,
    "tbtctusdc": TBTCTUDSC
}

ws.on('open', () => {
    console.log('WebSocket connection opened.');

    const timestampSecs = Math.floor(Date.now() / 1000);
    const timestampBytes = Buffer.alloc(8);
    timestampBytes.writeBigInt64LE(BigInt(timestampSecs));
    const secretKeyBytes = Buffer.from(secretKey, 'hex');
    const signature = crypto.createHmac('sha256', secretKeyBytes)
        .update('cube.xyz')
        .update(timestampBytes)
        .digest('base64');

    const credentialsMessage = Credentials.create({
        accessKeyId: apiKey,
        signature: signature,
        timestamp: timestampSecs
    });
    const credentialsBuffer = Credentials.encode(credentialsMessage).finish();
    ws.send(credentialsBuffer);

    // Set up heartbeat interval
    heartbeatInterval = setInterval(sendHeartbeat, 10000);

    // Send a limit order example
    sendLimitOrder();
});

ws.on('message', (payload: any) => {
    console.log('message - begin');

    const uint8Array = new Uint8Array(payload);
    const uint8ArrayHex = uint8ArrayToHex(uint8Array);
    const uint8ArrayBase64 = uint8ArrayToBase64(uint8Array);

     // try { console.log('AssetPosition:', JSON.stringify(AssetPosition.decode(uint8Array)));} catch(error) {}
     // try { console.log('AssetPositions:', JSON.stringify(AssetPositions.decode(uint8Array)));} catch(error) {}
     try { console.log('Bootstrap:', JSON.stringify(Bootstrap.decode(uint8Array)));} catch(error) {}
     // try { console.log('CancelOrder:', JSON.stringify(CancelOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('CancelOrderAck:', JSON.stringify(CancelOrderAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('CancelOrderReject:', JSON.stringify(CancelOrderReject.decode(uint8Array)));} catch(error) {}
     // try { console.log('ConnectionStatus:', JSON.stringify(ConnectionStatus.decode(uint8Array)));} catch(error) {}
     // try { console.log('Credentials:', JSON.stringify(Credentials.decode(uint8Array)));} catch(error) {}
     // try { console.log('Done:', JSON.stringify(Done.decode(uint8Array)));} catch(error) {}
     // try { console.log('Fill:', JSON.stringify(Fill.decode(uint8Array)));} catch(error) {}
     // try { console.log('FixedPointDecimal:', JSON.stringify(FixedPointDecimal.decode(uint8Array)));} catch(error) {}
     try { console.log('Heartbeat:', JSON.stringify(Heartbeat.decode(uint8Array)));} catch(error) {}
     // try { console.log('MassCancel:', JSON.stringify(MassCancel.decode(uint8Array)));} catch(error) {}
     // try { console.log('MassCancelAck:', JSON.stringify(MassCancelAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('ModifyOrder:', JSON.stringify(ModifyOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('ModifyOrderAck:', JSON.stringify(ModifyOrderAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('ModifyOrderReject:', JSON.stringify(ModifyOrderReject.decode(uint8Array)));} catch(error) {}
     // try { console.log('NewOrder:', JSON.stringify(NewOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('NewOrderAck:', JSON.stringify(NewOrderAck.decode(uint8Array)));} catch(error) {}
     // try { console.log('NewOrderReject:', JSON.stringify(NewOrderReject.decode(uint8Array)));} catch(error) {}
     // try { console.log('OrderRequest:', JSON.stringify(OrderRequest.decode(uint8Array)));} catch(error) {}
     try { console.log('OrderResponse:', JSON.stringify(OrderResponse.decode(uint8Array)));} catch(error) {}
     // try { console.log('OrderType:', JSON.stringify(OrderType.decode(uint8Array)));} catch(error) {}
     // try { console.log('PostOnly:', JSON.stringify(PostOnly.decode(uint8Array)));} catch(error) {}
     // try { console.log('RawUnits:', JSON.stringify(RawUnits.decode(uint8Array)));} catch(error) {}
     // try { console.log('RestingOrder:', JSON.stringify(RestingOrder.decode(uint8Array)));} catch(error) {}
     // try { console.log('RestingOrders:', JSON.stringify(RestingOrders.decode(uint8Array)));} catch(error) {}
     // try { console.log('SelfTradePrevention:', JSON.stringify(SelfTradePrevention.decode(uint8Array)));} catch(error) {}
     // try { console.log('Side:', JSON.stringify(Side.decode(uint8Array)));} catch(error) {}
     // try { console.log('TimeInForce:', JSON.stringify(TimeInForce.decode(uint8Array)));} catch(error) {}
     // try { console.log('TradingStatus:', JSON.stringify(TradingStatus.decode(uint8Array)));} catch(error) {}

    console.log('message - end');
});

ws.on('close', (code, reason) => {
    console.log('WebSocket closed:', code, Buffer.from(reason).toString());
    clearInterval(heartbeatInterval);
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

function sendHeartbeat() {
    const timestamp = Date.now();
    const heartbeat = Heartbeat.create({
        request_id: timestamp,
        timestamp: timestamp
    });
    const message = OrderRequest.create({
        heartbeat: heartbeat
    });
    const buffer = OrderRequest.encode(message).finish();
    ws.send(buffer);
    console.log('Heartbeat sent.');
}

function sendLimitOrder() {
    const marketSymbol = 'tsoltusdc';
    const marketConstants = MarketConstants[marketSymbol];
    const marketId = marketConstants['marketId'];
    const orderType = 'LIMIT'
    const orderSide = 'BUY'
    const decimalAmount = 0.001;
    const decimalPrice = orderSide == 'BUY' ? 130 : 160;
    const quantityTickSize = marketConstants['quantityTickSize'];
    const priceTickSize = marketConstants['priceTickSize'];

    const exchangeOrderType = orderType == 'LIMIT' ? 0 : 1;
    const exchangeOrderSide = orderSide == 'BUY' ? 0 : 1;
    const exchangeAmount = Math.floor(decimalAmount * (1 / quantityTickSize))
    const exchangePrice = Math.floor(decimalPrice * (1 / priceTickSize))

    const newOrder = NewOrder.create({
        clientOrderId: Date.now(),
        requestId: 1,
        marketId: marketId,
        price: exchangePrice, // price in the smallest unit
        quantity: exchangeAmount, // quantity in lots
        side: exchangeOrderSide,
        timeInForce: 1, // GOOD_FOR_SESSION
        orderType: exchangeOrderType,
        subaccountId: parseInt(subAccountId),
        postOnly: 1, // Enabled,
        cancelOnDisconnect: false
    });

    const cancelOrder = CancelOrder.create({
        marketId: marketId,
        clientOrderId: Date.now(),
        requestId: 1,
        subaccountId: parseInt(subAccountId),
    });

    const modifyOrder = ModifyOrder.create({
        marketId: marketId,
        clientOrderId: Date.now(),
        requestId: 1,
        newPrice: 1,
        newQuantity: 1,
        subAccountId: parseInt(subAccountId),
        selfTradePrevention: 1,  //optional
        postOnly: 1,
    });

    const heartbeat = Heartbeat.create({
        requestId: 1,
        timestamp: Date.now(),
    });

    const massCancel = MassCancel.create({
        subAccountId: parseInt(subAccountId),
        requestId: 1,
        marketId: marketId,   // optional (If specified, only orders on the corresponding market will be canceled.)
        side: 0,   // optional (If specified, only orders with this side will be canceled.)
    });

    const orderRequest = OrderRequest.create({
        new: newOrder
    });

    const buffer = OrderRequest.encode(orderRequest).finish();
    ws.send(buffer);
    console.log('Limit order sent.');
}
