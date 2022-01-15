import App from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import Script from "next/script";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import firebaseAuth from "../firebase/FirebaseAuth";
import { UserProvider } from "../context";

function MyApp({ Component, pageProps }) {
  const { asPath, push } = useRouter();
  useEffect(() => {
    firebaseAuth.subscribeToAuthChanges(loginHandler);
  }, []);
  let loginHandler = (user) => {
    if (!user) {
      push("/login");
    }
  };
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_ID}`}
      />
      <Script strategy="lazyOnLoad">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.NEXT_PUBLIC_G_ID});
          `}
      </Script>
      <ThemeProvider attribute="class">
        <UserProvider>
          <Layout title={asPath === "/" ? "Home" : asPath.slice(1)} />
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
