import Head from "next/head";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";
export default function Layout({ children, title }) {
  let {theme} = useTheme();
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
      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={2500}
        theme={theme === "light" ? "light" : "dark"}
      />
      {children}
    </div>
  );
}
