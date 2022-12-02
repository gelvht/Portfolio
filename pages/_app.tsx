import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}
