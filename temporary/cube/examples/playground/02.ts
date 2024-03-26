import * as crypto from 'node:crypto';
import {Buffer} from 'node:buffer';

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
      'x-api-key': this.apiKey,
      'x-api-signature': signature,
      'x-api-timestamp': timestamp.toString(),
    };
  }

  private generateSignature(): [string, number] {
    const timestamp = Math.floor(Date.now() / 1000);

    const timestampBuffer = Buffer.alloc(8);
    timestampBuffer.writeUInt32LE(timestamp, 0);

    const fixedString = 'cube.xyz';

    const payload = Buffer.concat([
      Buffer.from(fixedString, 'utf-8'),
      timestampBuffer,
    ]);

    const secretKeyBytes = Buffer.from(this.secretKey, 'hex');
    const hmac = crypto
      .createHmac('sha256', secretKeyBytes)
      .update(payload)
      .digest();
    const signatureB64 = hmac.toString('base64');

    return [signatureB64, timestamp];
  }
}

async function usersCheck() {
  const apiKey = Deno.env.get('CUBE_API_KEY');
  const apiSecret = Deno.env.get('CUBE_API_SECRET');

  const auth = new Auth(apiKey, apiSecret);

  const type = 'ir';
  const baseUrl = `https://api.cube.exchange/${type}/v0`
  const endpoint = '/users/check';
  const url = `${baseUrl}${endpoint}`;
  
  let request: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({}),
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

await usersCheck()
