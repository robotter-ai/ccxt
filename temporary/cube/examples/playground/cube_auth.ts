import * as crypto from "crypto";

// Assuming trade_pb2.Credentials is converted to TypeScript using Protobuf tools and available as TradeCredentials
import { TradeCredentials } from "./path_to_your_protobuf_definitions";

interface RESTRequest {
  headers?: Record<string, string>;
  // Other properties as needed
}

interface WSRequest {
  // Define the structure as needed
}

class CubeAuth {
  private apiKey: string;
  private secretKey: string;

  constructor(apiKey: string, secretKey: string) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
  }

  async restAuthenticate(request: RESTRequest): Promise<RESTRequest> {
    const headers: Record<string, string> = request.headers ?? {};
    Object.assign(headers, this.headerForAuthentication());
    request.headers = headers;

    return request;
  }

  async wsAuthenticate(request: WSRequest): Promise<WSRequest> {
    // Currently a pass-through. Implement as needed.
    return request;
  }

  private headerForAuthentication(): Record<string, string> {
    const [signature, timestamp] = this.generateSignature();
    return {
      "x-api-key": this.apiKey,
      "x-api-signature": signature,
      "x-api-timestamp": timestamp.toString(),
    };
  }

  private credentialMessageForAuthentication(): Buffer {
    const [signature, timestamp] = this.generateSignature();

    // Assuming TradeCredentials is correctly defined and can be used like this
    const message = new TradeCredentials({
      accessKeyId: this.apiKey,
      signature: signature,
      timestamp: timestamp,
    });

    // Serialize message to Buffer
    // This step depends on how your protobuf messages are handled in TypeScript
    const serializedMessage = TradeCredentials.encode(message).finish();

    return serializedMessage;
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
