import Head from "next/head";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        
        <link
          rel="icon"
          href="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/2x/external-focus-ads-icongeek26-outline-gradient-icongeek26.png"
        />
        <meta name="viewport" content="initial-scale=1.0 width=device-width" />
      </Head>
      <Navbar />
      <ToastContainer position="top-center" />
      {children}
    </div>
  );
}
