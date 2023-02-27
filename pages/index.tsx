import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>sBlogger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main></main>
    </div>
  );
}
