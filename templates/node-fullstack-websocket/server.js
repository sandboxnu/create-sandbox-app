/**
 * This must be plain JS for node as it is run directly in production
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const socketIO = require("socket.io");
const { bindSocketIO } = require("./websocket/bind");

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

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
