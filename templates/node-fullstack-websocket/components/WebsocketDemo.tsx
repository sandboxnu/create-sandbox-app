import { useState, useEffect } from "react";
import socketIOClient from 'socket.io-client';

export default function WebsocketDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const socket = socketIOClient();
    socket.on('count', (count:number) => {
      setCount(count);
    });
  }, []);
  return (
    <div>
      There are {count} active connections!
    </div>
  )
}