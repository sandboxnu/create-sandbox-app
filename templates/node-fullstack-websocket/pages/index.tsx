import Head from "next/head";
import { GetServerSideProps } from "next";
import fetch from "node-fetch";
import { useEffect, useState } from "react";
import WebsocketDemo from "../components/WebsocketDemo";
import { Club } from "../types/api";

interface HomeProps {
  club: Club;
}
// Plain old React functional component.
export default function Home({ club }: HomeProps) {
  const [other, setOther] = useState<Club | false>(false);
  useEffect(() => {
    // Runs on client sid
    fetch("http://localhost:3000/api/club")
      .then((r) => r.json())
      .then((o: Club) => {
        setOther(o);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Server side rendered:</div>
      <div>
        The club {club.name} has a {club.rating} rating
      </div>
      <br />
      <div>Client side fetch:</div>
      <div>
        {other
          ? `The club ${other.name} has a ${other.rating} rating`
          : "loading..."}
      </div>
      <br />
      Websocket Demo:
      <br />
      <WebsocketDemo />
      Try opening and closing this page in more tabs.
    </div>
  );
}

// This gets called on every request and runs on the server
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/club`);
  const club: Club = await res.json();

  // Pass data to the page via props
  return { props: { club } };
};
