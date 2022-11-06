import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import SongBar from './components/SongBar'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
      <div className='bg-neutral-100 dark:bg-[#060606] dark:text-white space-y-8 py-6 px-5 lg:px-0 min-h-screen'>
        <SongBar></SongBar>
          <AnimatePresence>
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ y: 10, opacity: 0 }}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
      </div>
      <footer className="flex justify-center dark:text-white text-black bg-neutral-100 dark:bg-[#060606]
       text-xs md:text-sm p-4">{"/* built with <3 by me (danny) */"} </footer>
    </ThemeProvider>
  )
}

export default MyApp
