import { useState, useEffect } from "react";
import { socket } from "./socket";

export default function WebsocketDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    socket.on("count", (count: number) => {
      setCount(count);
    });
  }, []);
  return <div>There are {count} active connections!</div>;
}
