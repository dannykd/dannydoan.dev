import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div className='bg-neutral-900 text-white'>
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
