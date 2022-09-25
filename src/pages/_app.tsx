import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className='bg-[#0F0E0E] text-white mx-auto max-w-4xl space-y-8 py-10 px-5 lg:px-0'>
       <Navbar></Navbar>
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
  )
}

export default MyApp
