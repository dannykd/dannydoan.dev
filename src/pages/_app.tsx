import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import SongBar from "./components/SongBar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div
        className="relative min-h-screen space-y-8 bg-neutral-100 py-6 px-5 transition-colors dark:bg-[#060606] dark:text-white
      lg:px-0"
      >
      <Head>
          <title>Danny Doan</title>
          <link
            rel="icon"
            href="https://avatars.githubusercontent.com/u/92613890?s=400&u=e0047c360a4ec70d3e487df52452decafbce4351&v=4"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
            rel="stylesheet"
          ></link>
      </Head>
        <SongBar></SongBar>
        <AnimatePresence>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ y: 10, opacity: 0 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <footer
          className="flex justify-center bg-neutral-100 p-4 text-xs text-black
        transition-colors dark:bg-[#060606] dark:text-white md:text-sm bottom-0 left-0 right-0 absolute"
        >
          {"built with ♥ by danny"}{" "}
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
