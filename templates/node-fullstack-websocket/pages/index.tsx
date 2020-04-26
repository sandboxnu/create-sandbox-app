import Head from "next/head";
import { GetServerSideProps } from "next";
import { Club } from "./api/club";
import fetch from "node-fetch";
import { useEffect, useState } from "react";

interface HomeProps {
  club: Club;
}
export default function Home({ club }: HomeProps) {
  const [other, setOther] = useState<Club | false>(false);
  useEffect(() => {
    fetch("http://localhost:3000/api/club")
      .then((r) => r.json())
      .then((o) => {
        setOther(o);
      });
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Server side rendered:</div>
      <div>
        The club {club.name} has a {club.rating} rating
      </div>
      <div>Client side fetch:</div>
      {other && (
        <div>
          The club {other.name} has a {other.rating} rating
        </div>
      )}
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
