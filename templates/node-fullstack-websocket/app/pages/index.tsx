import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import WebsocketDemo from "../components/WebsocketDemo";
import ClubList from "../components/ClubList";
import { socket } from "../components/socket";
import { API } from "api-client";
import { Club, WSMessageType } from "common";

interface HomeProps {
  clubs: Club[];
}

// Plain old React functional component.
export default function Home({ clubs }: HomeProps) {
  const api = new API();
  const [other, setOther] = useState<Club[]>([]);
  function refreshData() {
    // Runs on client side
    api.club.index().then((c) => {
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
          api.club.create({
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
  const api = new API("http://localhost:3000");
  const clubs: Club[] = await api.club.index();
  // Pass data to the page via props
  return { props: { clubs } };
};
