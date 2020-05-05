import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import socketIO from "socket.io";
import websocketManager from "./websocketManager";
import { createServer } from "http";
import { createProxyMiddleware } from "http-proxy-middleware";
import api from "./api";
import { createConnection } from "typeorm";

async function main() {
  await createConnection();

  const expressApp = express();
  const server = createServer(expressApp);

  const io = socketIO(server);
  websocketManager.bindSocketIO(io);

  expressApp.use(bodyParser.json());
  expressApp.use("/api", api);

  // Proxy next frontend in dev
  if (process.env.NODE_ENV !== "production") {
    expressApp.use(
      "/",
      createProxyMiddleware({ target: "http://localhost:3001" })
    );
  }

  server.listen(3000);
  server.on("listening", () => {
    console.log("> Ready on http://localhost:3000");
  });
  server.on("error", (err) => {
    if (err) throw err;
  });
}

main().catch((e) => console.log(e));
