import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { withRouter } from "next/router";
import { SiSpotify } from "react-icons/si";
import { useLanyardWs } from "use-lanyard";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const SongBar = () => {
  const { theme, setTheme } = useTheme();
  const data = useLanyardWs("509537385231417385");

  useEffect(() => {
    setTheme("dark");
  }, []);

  if (!data?.spotify) {
    return (
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="top-0 z-50 mx-auto max-w-4xl border-b border-neutral-300 bg-white dark:border-neutral-600 dark:bg-[#060606]
        transition-[background-color]"
      >
        <div className="flex justify-between text-left text-xs font-medium dark:text-neutral-300 md:text-sm">
          <p className="rounded-t-lg py-3 px-2 focus:border-gray-300 focus:text-gray-600">
            Not Playing Anything{" "}
            <span>
              <SiSpotify className="h-4 w-4 flex-shrink-0 md:h-5 md:w-5" />
            </span>
          </p>

          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {/* eventually add a thing to toggle light/dark mode*/}
            {theme === "dark" || !theme ? (
              <SunIcon className="h-12 w-12 rounded-xl border border-neutral-600 bg-[#0F0E0E] p-2 text-white" />
            ) : (
              <MoonIcon className="h-12 w-12 rounded-xl border border-neutral-400 bg-white p-2 text-black" />
            )}
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
    );
  }

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="top-0 z-50 mx-auto max-w-4xl border-b border-neutral-300 bg-white dark:bg-[#060606]
      transition-[background-color] dark:border-neutral-600"
    >
      <div className="flex justify-between text-left text-xs dark:text-neutral-300 md:text-sm">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://open.spotify.com/track/${data.spotify.track_id}`}
          className="overflow-x-clip"
        >
          <p className="rounded-t-lg py-3 px-2 focus:border-gray-300 focus:text-gray-600 truncate">
            Listening To:{" "}
            <span className="underline">{data?.spotify?.song}</span> by{" "}
            {data?.spotify?.artist}
            <span>
              <SiSpotify className="h-4 w-4 flex-shrink-0 text-green-400 md:h-5 md:w-5" />
            </span>
          </p>
        </a>

        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {/* eventually add a thing to toggle light/dark mode*/}
          {theme === "dark" || !theme ? (
            <SunIcon className="h-12 w-12 rounded-xl border border-neutral-600 bg-[#0F0E0E] p-2 text-white" />
          ) : (
            <MoonIcon className="h-12 w-12 rounded-xl border border-neutral-400 bg-white p-2 text-black" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default SongBar;
