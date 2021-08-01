import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { joinClasses } from "../utils";
import { GlobalProvider } from "../context/GlobalContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={joinClasses(
        "grid",
        "grid-rows-3m",
        "min-h-screen",
        "max-w-4xl",
        "mx-auto",
        "text-center"
      )}
    >
      <GlobalProvider>
        <Navbar />
        <Component {...pageProps} />
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default App;
