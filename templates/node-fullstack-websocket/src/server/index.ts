/**
 * Custom Next.js server on express
 * Note that all websocket functionality would not work serverlessly!
 * Do NOT write API routes here. Instead, use next.js file-system routing in /pages/api
 */
import express from 'express';
import next from "next";
import socketIO from "socket.io";
import { bindSocketIO } from "./bindSocketIO";
import "reflect-metadata";
import { createServer } from 'http';
import { db } from './db';
import api from './api';

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: 'src/app' });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const connection = await db.connect();
  const expressApp = express();
  const server = createServer(expressApp);

  const io = socketIO(server);
  bindSocketIO(io);

  expressApp.use('/api', api);

  // Defer to next.js
  expressApp.all('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(3000)
  server.on('listening', () => {
    console.log("> Ready on http://localhost:3000");
  })
  server.on('error', (err) => {
    if (err) throw err;
  });
});