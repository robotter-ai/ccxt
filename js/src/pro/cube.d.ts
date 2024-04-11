import cubeRest from '../cube.js';
import { Int, OrderBook } from '../base/types.js';
export default class cube extends cubeRest {
    describe(): any;
    watchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
}
