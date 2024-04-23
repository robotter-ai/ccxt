import * as crypto from "node:crypto";
import { Buffer } from "node:buffer";

interface RESTRequest {
  headers?: Record<string, string>;
}

class Auth {
  private apiKey: string;
  private secretKey: string;

  constructor(apiKey: string, apiSecretKey: string) {
    this.apiKey = apiKey;
    this.secretKey = apiSecretKey;
  }

  authenticateRequest(request: RESTRequest): RESTRequest {
    const headers: Record<string, string> = request.headers ?? {};

    Object.assign(headers, this.generateAuthenticationHeaders());

    request.headers = headers;

    return request;
  }

  private generateAuthenticationHeaders(): Record<string, string> {
    const [signature, timestamp] = this.generateSignature();

    return {
      "x-api-key": this.apiKey,
      "x-api-signature": signature,
      "x-api-timestamp": timestamp.toString(),
    };
  }

  private generateSignature(): [string, number] {
    const timestamp = Math.floor(Date.now() / 1000);

    const timestampBuffer = Buffer.alloc(8);
    timestampBuffer.writeUInt32LE(timestamp, 0);

    const fixedString = "cube.xyz";

    const payload = Buffer.concat([
      Buffer.from(fixedString, "utf-8"),
      timestampBuffer,
    ]);

    const secretKeyBytes = Buffer.from(this.secretKey, "hex");
    const hmac = crypto
      .createHmac("sha256", secretKeyBytes)
      .update(payload)
      .digest();
    const signatureB64 = hmac.toString("base64");

    return [signatureB64, timestamp];
  }
}

// IRIDIUM GET USERS CHECK
async function iridiumGetUsersCheck() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/check";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS INFO
async function iridiumGetUsersInfo() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/info";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS POSITIONS
async function iridiumGetUsersPositions() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/subaccount/161/positions";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS TRANSFERS
async function iridiumGetUsersTransfers() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/transfers";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS DEPOSITS
async function iridiumGetUsersDeposits() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/deposits";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS WITHDRAWALS
async function iridiumGetUsersWithdrawals() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/withdrawals";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS ORDERS
async function iridiumGetUsersOrders() {
  const apiKey = Deno.env.get("API_KEY") || '';
  const apiSecret = Deno.env.get("API_SECRET") || '';
  const subaccountId = Deno.env.get("SUB_ACCOUNT_ID") || '161';

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = `/users/subaccount/${subaccountId}/orders`;
  const params = new URLSearchParams({ subaccountId: subaccountId });
  const url = `${baseUrl}${endpoint}?${params.toString()}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS FILLS
async function iridiumGetUsersFills() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/fills";
  const params = new URLSearchParams({ subaccountId: "161" });
  const url = `${baseUrl}${endpoint}?${params.toString()}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM POST USERS SUBACCOUNTS
async function iridiumPostUsersSubaccounts() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/subaccounts";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "accountType": "spot",
      "name": "teste"
    }),
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS SUBACCOUNTS ID
async function iridiumGetUsersSubaccountId() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/subaccount/161";
  const url = `${baseUrl}${endpoint}`;


  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// OSMIUM GET ORDERS
async function osmiumGetOrders() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/orders";
  const params = new URLSearchParams({ subaccountId: "161" });
  const url = `${baseUrl}${endpoint}?${params.toString()}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// OSMIUM DELETE ORDERS
async function osmiumDeleteOrders() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/orders";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "subaccountId": 161,
      "requestId": 1,
      "marketId": 200047,
      "side": 1,
    }),
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// OSMIUM POST ORDER
async function osmiumPostOrder() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/order";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "clientOrderId": 1712612349538,
      "requestId": 1,
      "marketId": 200047,
      "price": 30600,
      "quantity": 10000,
      "side": 1,
      "timeInForce": 1,
      "orderType": 0,
      "subaccountId": 161,
      "selfTradePrevention": 0,
      "postOnly": 0,
      "cancelOnDisconnect": false,
    }),
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// OSMIUM DELETE ORDER
async function osmiumDeleteOrder() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/order";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      marketId: 200047,
      clientOrderId: 1712612349538,
      requestId: 1,
      subaccountId: 161,
    }),
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// OSMIUM PATCH ORDER
async function osmiumPatchOrder() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/order";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      marketId: 200047,
      clientOrderId: 1712612349538,
      requestId: 1,
      subaccountId: 161,
      newPrice: 30700,
      newQuantity: 11000,
      orderType: 0,
      selfTradePrevention: 0,
      postOnly: 0,
    }),
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
  } catch (exception) {
    console.error(exception);
  }
}

// ----------------------- NEW METHODS (APRIL 2024) ---------------------- //
// IRIDIUM GET USERS SUBACCOUNTS
async function iridiumGetUsersSubaccounts() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/subaccounts";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM PATCH SUBACCOUNT
async function iridiumPatchSubaccount() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/subaccount/164";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": "hudson"
    }),
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS FEE ESTIMATE
async function iridiumGetUsersFeeEstimate() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/fee-estimate/100001";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS ADDRESS
async function iridiumGetUsersAddress() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/address";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS ADDRESS SETTINGS
async function iridiumGetUsersAddressSettings() {
  const apiKey = Deno.env.get("API_KEY");
  const apiSecret = Deno.env.get("API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/address/settings";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "GET",
    headers: {},
  };

  request = auth.authenticateRequest(request);

  try {
    const response = await fetch(url, request);

    const data = await response.json();

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}


await iridiumGetUsersAddressSettings();

async fetchStatus(params = {}) {
  /**
   * @method
   * @name cube#fetchStatus
   * @description the latest known information on the availability of the exchange API
   * @see https://binance-docs.github.io/apidocs/spot/en/#system-status-system
   * @param {object} [params] extra parameters specific to the exchange API endpoint
   * @returns {object} a [status structure]{@link https://docs.ccxt.com/#/?id=exchange-status-structure}
   */
  const response = await this.restIridiumPublicGetMarkets(params);
  const keys = Object.keys(response);
  const keysLength = keys.length;
  const formattedStatus = keysLength ? 'ok' : 'maintenance';
  return {
    'status': formattedStatus,
    'updated': undefined,
    'eta': undefined,
    'url': undefined,
    'info': undefined,
  };
}