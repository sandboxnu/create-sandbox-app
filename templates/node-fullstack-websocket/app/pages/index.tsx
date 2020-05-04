import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import WebsocketDemo from "../components/WebsocketDemo";
import { Club } from "@prisma/client";
import axios from "axios";
import ClubList from "../components/ClubList";
import { socket } from "../components/socket";
import { WSMessageType } from "shared";

interface HomeProps {
  clubs: Club[];
}

async function getClubs(): Promise<Club[]> {
  return (await axios.get("http://localhost:3000/api/club")).data;
}
// Plain old React functional component.
export default function Home({ clubs }: HomeProps) {
  const [other, setOther] = useState<Club[]>([]);
  function refreshData() {
    // Runs on client side
    getClubs().then((c) => {
      setOther(c);
    });
  }

  socket.on(WSMessageType.Refresh, refreshData);
  useEffect(refreshData, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Server side rendered:</div>
      <ClubList clubs={clubs} />
      <br />
      <div>Client side fetch:</div>
      <ClubList clubs={other} />
      <button
        onClick={() =>
          axios.post("/api/club", {
            name: "Sandbox",
            rating: 10,
          })
        }
      >
        Add a club
      </button>
      <br />
      Websocket Demo:
      <br />
      <WebsocketDemo />
      Try opening this page in another tab
      <br />
      Click Add a Club and watch it update on both tabs.
    </div>
  );
}

// This gets called on every request and runs on the server
// https://nextjs.org/docs/basic-features/data-fetching
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const clubs: Club[] = await getClubs();
  // Pass data to the page via props
  return { props: { clubs } };
};
