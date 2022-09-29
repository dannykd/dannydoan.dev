import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { withRouter } from 'next/router'
import { SiSpotify } from "react-icons/si";
import { useLanyardWs } from "use-lanyard";


const SongBar = () => {

  const data = useLanyardWs('509537385231417385')

  if (!data?.spotify) {

    return (
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50"
      >

      <div className="text-sm flex justify-between md:text-md font-medium text-left border-b border-neutral-300 text-neutral-300 bg-[#0F0E0E]">   

          <p className="p-4 rounded-t-lg border-b-2 border-transparent focus:text-gray-600 focus:border-gray-300">
              Not Playing Anything <span><SiSpotify className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /></span>
          </p>

          <button>
              {/* eventually add a thing to toggle light/dark mode*/}
          </button>
        
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

    
    <div className="text-sm flex justify-between md:text-md font-medium text-left border-b border-neutral-400 text-neutral-400 bg-[#0F0E0E]">   
      <a target="_blank"
        rel="noreferrer"
        href={`https://open.spotify.com/track/${data.spotify.track_id}`}
      >
        <p className="p-4 rounded-t-lg border-b-2 border-transparent focus:text-gray-600 focus:border-gray-300">
            Currently Listening To: <span className="underline">{data?.spotify?.song}</span> by {data?.spotify?.artist}<span>
              <SiSpotify className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-green-400" /></span>
        </p>
      </a>

      <button>
          {/* eventually add a thing to toggle light/dark mode*/}
      </button>
    </div>





    </motion.div>
  );
};

export default SongBar;