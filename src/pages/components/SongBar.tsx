import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { withRouter } from 'next/router'
import { SiSpotify } from "react-icons/si";
import { useLanyardWs } from "use-lanyard";
import {useTheme } from 'next-themes'
import { useEffect } from 'react'



const SongBar = () => {
  
  const {theme, setTheme} = useTheme()
  const data = useLanyardWs('509537385231417385')

  useEffect(() => {
    setTheme('dark')
  }, [])



  if (!data?.spotify) {
    return (
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50"
      >

      <div className="mx-auto max-w-4xl text-xs md:text-sm flex justify-between font-medium text-left border-b
       border-neutral-300 dark:text-neutral-300 bg-neutral-100 dark:bg-[#060606]">   
          <p className="py-3 px-2 rounded-t-lg border-b-2 border-transparent focus:text-gray-600 focus:border-gray-300">
              Not Playing Anything <span><SiSpotify className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /></span>
          </p>

     
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {/* eventually add a thing to toggle light/dark mode*/}
                { theme === 'dark' || !theme
                  ? <SunIcon className="h-12 w-12 bg-[#0F0E0E] border border-white text-white p-2 rounded-xl"/>
                  : <MoonIcon className="h-12 w-12 bg-neutral-100 border border-black text-black p-2 rounded-xl"/>
                }
          </button>
            {/*<button>
              <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="inline-flex rounded-md py-2 text-sm font-medium text-white hover:bg-opacity-30
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <Bars3Icon className="h-11 w-11 outline outline-1 dark:outline-white dark:text-white text-black outline-black p-2 rounded-xl"/>
                  </Menu.Button>
              
                  <Menu.Items className="absolute right-0 mt-2 w-56 md:w-72 origin-top-right divide-y divide-gray-100 rounded-md 
                  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-white">
                      <div className="px-1 py-1 ">
                          <MenuLink pageName="/experience" link="../index" ></MenuLink>
                          <MenuLink pageName="/contact" link="../index" ></MenuLink>
                      </div>
                  </Menu.Items>
              </Menu>
              </button>*/}
     
        
      </div>
      </motion.div>
    )
  }

  return (
    <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="sticky top-0 z-50"
    >

    <div className="mx-auto max-w-4xl text-xs md:text-sm flex justify-between text-left border-b border-neutral-300
       dark:text-neutral-300 bg-neutral-100 dark:bg-[#000000]">
      <a target="_blank"
        rel="noreferrer"
        href={`https://open.spotify.com/track/${data.spotify.track_id}`}
      >
        <p className="py-3 px-2 rounded-t-lg border-b-2 border-transparent focus:text-gray-600 focus:border-gray-300">
            Currently Listening To: <span className="underline">{data?.spotify?.song}</span> by {data?.spotify?.artist}<span>
              <SiSpotify className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-green-400" /></span>
        </p>
      </a>
     
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {/* eventually add a thing to toggle light/dark mode*/}
          { theme === 'dark' || !theme
            ? <SunIcon className="h-12 w-12 bg-[#0F0E0E] border border-white text-white p-2 rounded-xl"/>
            : <MoonIcon className="h-12 w-12 bg-neutral-100 border border-black text-black p-2 rounded-xl"/>
          }
      </button>
      {/* <button>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex rounded-md py-2 text-sm font-medium text-white hover:bg-opacity-30
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <Bars3Icon className="h-11 w-11 outline outline-1 dark:outline-white dark:text-white text-black outline-black p-2 rounded-xl"/>
            </Menu.Button>
        
            <Menu.Items className="absolute right-0 mt-2 w-56 md:w-72 origin-top-right divide-y divide-gray-100 rounded-md 
            shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-white">
                <div className="px-1 py-1 ">
                    <MenuLink pageName="/experience" link="../index" ></MenuLink>
                    <MenuLink pageName="/contact" link="../index" ></MenuLink>
                </div>
            </Menu.Items>
        </Menu>
      </button> */}
      
    </div>

    </motion.div>
  );
};

export default SongBar;