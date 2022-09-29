import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { withRouter } from 'next/router'
import { SiSpotify } from "react-icons/si";
import { useLanyardWs } from "use-lanyard";
import {useTheme} from 'next-themes'


const SongBar = () => {
  
  
  const {theme, setTheme} = useTheme()
  const data = useLanyardWs('509537385231417385')


  return (
    <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="sticky top-0 z-50"
    >
      <div className="mx-auto max-w-4xl text-xs md:text-sm flex justify-between text-left border-b border-neutral-300
        dark:text-neutral-300 bg-neutral-100 dark:bg-[#0F0E0E]">

        { data?.spotify
          ? <a target="_blank"
              rel="noreferrer"
              href={`https://open.spotify.com/track/${data.spotify.track_id}`}
            >
              <p className="py-3 md:px-4 px-4 rounded-t-lg border-b-2 border-transparent focus:text-gray-600 focus:border-gray-300">
                  Currently Listening To: <span className="underline">{data?.spotify?.song}</span> by {data?.spotify?.artist}<span>
                    <SiSpotify className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-green-400" /></span>
              </p>
            </a>
          : <p className="py-3 md:px-4 px-4 rounded-t-lg border-b-2 border-transparent focus:text-gray-600 focus:border-gray-300">
              Not Playing Anything <span><SiSpotify className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /></span>
            </p>
        }

        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {/* eventually add a thing to toggle light/dark mode*/}
                { theme === 'dark'
                  ? <p className="bg-blue-400 rounded-xl p-2 mb-2 text-2xl">☀️</p>
                  : <p className="bg-blue-600 rounded-xl p-2 mb-2 text-lg">🌙</p>
                }
            </button>
      </div>
    </motion.div>
  );
};

export default SongBar;