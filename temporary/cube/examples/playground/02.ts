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

//USERS CHECK
async function getUsersCheck() {
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

//USERS INFO
async function getUsersInfo() {
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

//USERS POSITIONS
async function getUsersPositions() {
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


//USERS TRANSFERS
async function getUsersTransfers() {
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

//USERS DEPOSITS
async function getUsersDeposits() {
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

//USERS WITHDRAWALS
async function getUsersWithdrawals() {
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

//USERS ORDERS
async function getUsersOrders() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/orders";
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

//USERS FILLS
async function getUsersFills() {
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

//USERS SUBACCOUNTS
async function postUsersSubaccounts() {
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
      "name": "text"
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

//USERS SUBACCOUNTS ID
async function postUsersSubaccountsId() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "ir";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/users/subaccounts/{subaccount_id}";
  const url = `${baseUrl}${endpoint}`;

  let request: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "name": "text"
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

//GET ORDERS
async function getOrders() {
  const apiKey = Deno.env.get("CUBE_API_KEY");
  const apiSecret = Deno.env.get("CUBE_API_SECRET");

  const auth = new Auth(apiKey, apiSecret);

  const type = "os";
  const baseUrl = `https://staging.cube.exchange/${type}/v0`;
  const endpoint = "/orders";
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

//DELETE ORDERS
async function deleteOrders() {
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

//POST ORDER
async function postOrder() {
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
    body: JSON.stringify({ "cancelOnDisconnect": false }),
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

//DELETE ORDER
async function deleteOrder() {
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

//PATCH ORDER
async function patchOrder() {
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

await usersPositions();
