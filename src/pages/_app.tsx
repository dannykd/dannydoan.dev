import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import SongBar from "./components/SongBar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div
        className="min-h-screen space-y-8 bg-neutral-100 py-6 px-5 transition-colors dark:bg-[#060606] dark:text-white
      lg:px-0"
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
      </div>
      <footer
        className="flex justify-center bg-neutral-100 p-4 text-xs text-black
       transition-colors dark:bg-[#060606] dark:text-white md:text-sm"
      >
        {"/* built with <3 by me (danny) */"}{" "}
      </footer>
    </ThemeProvider>
  );
}

export default MyApp;
