import Link from "next/link";
import Head from "next/head";


import { Disclosure } from "@headlessui/react";
import ThemeBotton from "./ThemeBotton";
import Navbar from "./Navbar";
export default function Layout({ children, title }) {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0 width=device-width" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
