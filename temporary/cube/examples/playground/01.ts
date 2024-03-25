//GET MARKETS
async function getMarkets() {
  const response = await fetch("https://api.cube.exchange/ir/v0/markets", {
    method: "GET",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

//GET SNAPSHOT
async function getSnapshot() {
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
async function getRecentTrades() {
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
async function getTickersSnapshot() {
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
async function getParsedTickers() {
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
async function getMarketSymbolSnapshot() {
  const response = await fetch(
    "https://api.cube.exchange/md/v0/parsed/book/{market_symbol}/snapshot",
    {
      method: "GET",
      headers: {},
    }
  );
  const data = await response.json();
  console.log(data);
}

// GET MARKET SYMBOL RECENT TRADES
async function getMarketSymbolRecentTrades() {
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
async function getOrders() {
  const response = await fetch("https://api.cube.exchange/os/v0/orders", {
    method: "GET",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

// DELETE ORDERS
async function deleteOrders() {
  const response = await fetch("https://api.cube.exchange/os/v0/orders", {
    method: "DELETE",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

// POST ORDERS
async function postOrders() {
  const response = await fetch("https://api.cube.exchange/os/v0/orders", {
    method: "POST",
    headers: {},
  });
  const data = await response.json();
  console.log(data);
}

// DELETE ORDER
async function deleteOrder() {
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
async function patchOrder() {
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
