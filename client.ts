// client.ts

import { createPromiseClient } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";
import { createConnectTransport } from "@bufbuild/connect-node";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
  httpVersion: "1.1"
});

async function main() {
  const client = createPromiseClient(ElizaService, transport);
  const res = await client.say({
    sentence: "I feel happy.",
    doubleValue: 1.23,
    floatValue: 4.56,
    int32Value: 789,
  });
  console.log(res);
}
void main();
