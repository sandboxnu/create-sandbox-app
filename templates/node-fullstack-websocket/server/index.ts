/**
 * Custom Next.js server to add websocket functionality. 
 * Note that all websocket functionality would not work serverlessly!
 * Do NOT write API routes here. Instead, use next.js file-system routing in /pages/api
 */
import { createServer } from "http";
import { parse } from "url";
import next from "next";
import socketIO from "socket.io";
import { bindSocketIO } from "./bind";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = socketIO(server);
  bindSocketIO(io);

  server.listen(3000)
  server.on('error', (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});