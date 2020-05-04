import { useState, useEffect } from "react";
import { socket } from "./socket";
import { WSMessageType } from "shared";

export default function WebsocketDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    socket.on(WSMessageType.Count, (count:number) => {
      setCount(count);
    });
  }, []);
  return (
    <div>
      There are {count} active connections!
    </div>
  )
}