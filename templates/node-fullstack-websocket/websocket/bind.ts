/**
 * Handle all socket io here
 */
export function bindSocketIO(io: SocketIO.Server) {
  io.on("connection", (client) => {
    console.log(client.id, "connected");
    client.on("disconnect", () => {
      console.log(client.id, "disconnected");
    });
  });
}