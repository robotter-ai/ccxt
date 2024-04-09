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
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

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
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

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

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS POSITIONS
async function iridiumGetUsersPositions() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/positions";
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

// IRIDIUM GET USERS TRANSFERS
async function iridiumGetUsersTransfers() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

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

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS DEPOSITS
async function iridiumGetUsersDeposits() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

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

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS WITHDRAWALS
async function iridiumGetUsersWithdrawals() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

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

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM GET USERS ORDERS
async function iridiumGetUsersOrders() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/orders";
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

// IRIDIUM GET USERS FILLS
async function iridiumGetUsersFills() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/fills";
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

// IRIDIUM POST USERS SUBACCOUNTS
async function iridiumPostUsersSubaccounts() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

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

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// IRIDIUM POST USERS SUBACCOUNTS ID
async function iridiumPostUsersSubaccountsId() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/subaccounts/161";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "name": "teste"
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

// OSMIUM GET ORDERS
async function osmiumGetOrders() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

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
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/orders";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
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

// OSMIUM POST ORDER
async function osmiumPostOrder() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/order";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "clientOrderId": 1,
      "requestId": 1,
      "marketId": 200047,
      "price": 1,
      "quantity": 1,
      "side": 0,
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

    console.log(data);
  } catch (exception) {
    console.error(exception);
  }
}

// OSMIUM DELETE ORDER
async function osmiumDeleteOrder() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/order";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
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

// OSMIUM PATCH ORDER
async function osmiumPatchOrder() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/order";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
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

await iridiumGetUsersInfo();
