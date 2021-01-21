import React from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter !</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Navbar />
      <main>
        <Header title="crazy4bonus" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
