import "reflect-metadata";
import { createConnection } from "typeorm";
import path from "path";
import Hapi from '@hapi/hapi';
import io from 'socket.io'
import { clubRoutes } from "./api/clubRoutes";
import websocketManager from "./websocketManager";

const DB_URL = process.env.DB_URL || "postgres://postgres@localhost:5432/dev";

async function main() {
  await createConnection({
    type: "postgres",
    url: DB_URL,
    synchronize: true,
    logging: false,
    entities: [path.resolve(__dirname, "entity/**/*{.js,.ts}")],
    migrations: [path.resolve(__dirname, "migration/**/*{.js,.ts}")],
    subscribers: [path.resolve(__dirname, "subscriber/**/*{.js,.ts}")],
  });

  const server = Hapi.server({
    port: 3002,
    host: 'localhost'
  })

  // Add routes
  server.route(clubRoutes)

  // Bind socketio to http server
  websocketManager.bindSocketIO(io(server.listener))

  await server.start();
  console.log("> Server up");
}

main().catch((e) => console.log(e));
