/**
 * Handle all socket io here
 */
export function bindSocketIO(io: SocketIO.Server) {
  let connected = 0;
  io.on("connection", (client) => {
    console.log(client.id, "connected");
    connected++;

    io.emit('count', connected);

    client.on("disconnect", () => {
      console.log(client.id, "disconnected");
      connected--;
      io.emit('count', connected);
    });
  });
}