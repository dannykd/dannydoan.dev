import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import Footer from  "./components/Footer";
import SongBar from "./components/SongBar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
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
      <div
        className="relative max-h-screen space-y-8 bg-white py-6 px-5 transition-colors dark:bg-[#060606] dark:text-white
      lg:px-0 font-sans"
      >
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
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
