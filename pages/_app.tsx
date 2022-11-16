import "../styles/globals.css";
import type { AppProps } from "next/app";
import {  Nunito } from "@next/font/google";
import splitbee from "@splitbee/web";

const nunito=Nunito({
  variable:"--font-nunito"
})
function MyApp({ Component, pageProps }: AppProps) {

  
  if(process.env.NODE_ENV == "production"){
    splitbee.init()
  }
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
