import Head from "next/head";
import React from "react";
import NextHead from "components/Layout/Head/Head";
import Nav from "components/Layout/Nav/Nav";

type Props={
  children:React.ReactNode
}

export default function Layout({children}:Props) {
  return (
    <>
      <NextHead />

      <div className="mx-auto min-h-screen  max-w-screen-2xl">
        <Nav />
        {children}
        {/* CONTENT */}
        {/* FOOTER */}
      </div>
    </>
  );
}
