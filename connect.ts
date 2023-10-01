// touch connect.ts

import { ConnectRouter } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";

export default (router: ConnectRouter) =>
  // registers buf.connect.demo.eliza.v1.ElizaService
  router.service(ElizaService, {
    // protoで定義したsay関数の実装
    // protoではSayと大文字だったが、こちらは小文字になっていてもいいようだ。
    async say(req) {
      return {
        sentence: `You said: ${req.sentence}`,
        doubleValue: req.doubleValue,
        floatValue: req.floatValue,
        int32Value: req.int32Value,
      }
    },
  });
