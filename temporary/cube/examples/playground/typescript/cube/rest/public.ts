//IRIDIUM GET MARKETS
async function iridiumGetMarkets() {
    const response = await fetch("https://api.cube.exchange/ir/v0/markets", {
        method: "GET",
        headers: {},
    });
    const data = await response.json();
    console.log(data);
}

// MENDELEV GET SNAPSHOT
async function mendelevGetSnapshot() {
    const response = await fetch(
        "https://api.cube.exchange/md/v0/book/100036/snapshot",
        {
            method: "GET",
            headers: {},
        }
    );
    const data = await response.json();
    console.log(data);
}

// MENDELEV GET RECENT TRADES
async function mendelevGetRecentTrades() {
    const response = await fetch(
        "https://api.cube.exchange/md/v0/book/100036/recent-trades",
        {
            method: "GET",
            headers: {},
        }
    );
    const data = await response.json();
    console.log(data);
}

// MENDELEV GET TICKERS SNAPSHOT
async function mendelevGetTickersSnapshot() {
    const response = await fetch(
        "https://api.cube.exchange/md/v0/tickers/snapshot",
        {
            method: "GET",
            headers: {},
        }
    );
    const data = await response.json();
    console.log(data);
}

// MENDELEV GET PARSED TICKERS
async function mendelevGetParsedTickers() {
    const response = await fetch(
        "https://api.cube.exchange/md/v0/parsed/tickers",
        {
            method: "GET",
            headers: {},
        }
    );
    const data = await response.json();
    console.log(data);
}

// MENDELEV GET MARKET SYMBOL SNAPSHOT
async function mendelevGetMarketSymbolSnapshot() {
    const response = await fetch(
        "https://api.cube.exchange/md/v0/parsed/book/BTCUSDC/snapshot",
        {
            method: "GET",
            headers: {},
        }
    );
    const data = await response.json();
    console.log(data);
}

// MENDELEV GET MARKET SYMBOL RECENT TRADES
async function mendelevGetMarketSymbolRecentTrades() {
    const response = await fetch(
        "https://api.cube.exchange/md/v0/parsed/book/BTCUSDC/recent-trades",
        {
            method: "GET",
            headers: {},
        }
    );
    const data = await response.json();
    console.log(data);
}

// -------------------- NEW METHODS (APRIL 2024) --------------------- //
// IRIDIUM GET HISTORY KLINES
async function iridiumGetHistoryKlines() {
    const response = await fetch("https://staging.cube.exchange/ir/v0/history/klines?marketId=200047&interval=1m", {
        method: "GET",
        headers: {},
    });
    const data = await response.json();
    console.log(data);
}

await iridiumGetHistoryKlines()