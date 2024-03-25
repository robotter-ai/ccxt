//GET MARKETS
async function responseMarkets() {
  const response = await fetch("https://api.cube.exchange/ir/v0/markets", {
    method: "GET",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

//GET SNAPSHOT
async function responseSnapshot() {
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

// GET RECENT TRADES
async function responseRecentTrades() {
  const response = await fetch(
    "https://api.cube.exchange/md/v0/book/{market_id}/recent-trades",
    {
      method: "GET",
      headers: {},
    }
  );
  const data = await response.json();
  console.log(data);
}

// GET TICKERS SNAPSHOT
async function responseTickersSnapshot() {
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

// GET PARSED TICKERS
async function responseParsedTickers() {
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

// GET MARKET SYMBOL SNAPSHOT
const responseMarketSymbolSnapshot = await fetch(
  "https://api.cube.exchange/md/v0/parsed/book/{market_symbol}/snapshot",
  {
    method: "GET",
    headers: {},
  }
);
const dataMarketSymbolSnapshot = await responseMarketSymbolSnapshot.json();
console.log(dataMarketSymbolSnapshot);

// GET MARKET SYMBOL RECENT TRADES
async function responseMarketSymbolRecentTrades() {
  const response = await fetch(
    "https://api.cube.exchange/md/v0/parsed/book/{market_symbol}/recent-trades",
    {
      method: "GET",
      headers: {},
    }
  );
  const data = await response.json();
  console.log(data);
}

// GET ORDERS
async function responseOrders() {
  const response = await fetch("https://api.cube.exchange/os/v0/orders", {
    method: "GET",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

// DELETE ORDERS
async function responseDeleteOrders() {
  const response = await fetch("https://api.cube.exchange/os/v0/orders", {
    method: "DELETE",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

// POST ORDERS
async function responseOrdersPost() {
  const response = await fetch("https://api.cube.exchange/os/v0/orders", {
    method: "POST",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

// DELETE ORDER
async function responseDeleteOrder() {
  const response = await fetch("https://api.cube.exchange/os/v0/order", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const data = await response.json();
  console.log(data);
}

// PATCH ORDER
async function responsePatchOrder() {
  const response = await fetch("https://api.cube.exchange/os/v0/order", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const data = await response.json();
  console.log(data);
}
