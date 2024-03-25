//GET MARKETS
const responseMarkets = await fetch("https://api.cube.exchange/ir/v0/markets", {
  method: "GET",
  headers: {},
});
const dataMarkets = await responseMarkets.json();
console.log(dataMarkets);

//GET SNAPSHOT
/* const responseSnapshot = await fetch(
  "https://api.cube.exchange/md/v0/book/{market_id}/snapshot",
  {
    method: "GET",
    headers: {},
  }
);
const dataSnapshot = await responseSnapshot.json();
console.log(dataSnapshot);

// GET RECENT TRADES
const responseRecentTrades = await fetch(
  "https://api.cube.exchange/md/v0/book/{market_id}/recent-trades",
  {
    method: "GET",
    headers: {},
  }
);
const datarecentTrades = await responseRecentTrades.json();
console.log(datarecentTrades);

// GET TICKERS SNAPSHOT
const responseTickersSnapshot = await fetch(
  "https://api.cube.exchange/md/v0/tickers/snapshot",
  {
    method: "GET",
    headers: {},
  }
);
const dataTickersSnapshot = await responseTickersSnapshot.json();
console.log(dataTickersSnapshot);

// GET PARSED TICKERS
const responseParsedTickers = await fetch(
  "https://api.cube.exchange/md/v0/parsed/tickers",
  {
    method: "GET",
    headers: {},
  }
);
const dataParsedTickers = await responseParsedTickers.json();

// GET MARKET SYMBOL SNAPSHOT
const responseMarketSymbolSnapshot = await fetch(
  "https://api.cube.exchange/md/v0/parsed/book/{market_symbol}/snapshot",
  {
    method: "GET",
    headers: {},
  }
);
const dataMarketSymbolSnapshot = await responseMarketSymbolSnapshot.json();

// GET MARKET SYMBOL RECENT TRADES
const responseMarketSymbolRecentTrades = await fetch(
  "https://api.cube.exchange/md/v0/parsed/book/{market_symbol}/recent-trades",
  {
    method: "GET",
    headers: {},
  }
);
const dataMarketSymbolRecentTrades =
  await responseMarketSymbolRecentTrades.json();

// GET ORDERS
const responseOrders = await fetch("https://api.cube.exchange/os/v0/orders", {
  method: "GET",
  headers: {},
});
const dataOrders = await responseOrders.json();
console.log(dataOrders);

// DELETE ORDERS
const responseDeleteOrders = await fetch(
  "https://api.cube.exchange/os/v0/orders",
  {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }
);
const dataDeleteOrders = await responseDeleteOrders.json();
console.log(dataDeleteOrders);

// POST ORDERS
const responseOrdersPost = await fetch(
  "https://api.cube.exchange/os/v0/orders",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cancelOnDisconnect: false }),
  }
);
const dataOrdersPost = await responseOrdersPost.json();
console.log(dataOrdersPost);

// DELETE ORDERS
const responseDeleteOrder = await fetch(
  "https://api.cube.exchange/os/v0/order",
  {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }
);
const dataDeleteOrder = await responseDeleteOrder.json();
console.log(dataDeleteOrder);

// PATCH ORDER
const responsePatchOrder = await fetch(
  "https://api.cube.exchange/os/v0/order",
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }
);
const dataPatchOrder = await responsePatchOrder.json();
console.log(dataPatchOrder); */
export {};
