import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { withRouter } from 'next/router'
import { SiSpotify } from "react-icons/si";


const Navbar = () => {

  

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50"
    >

    <div className="text-sm flex justify-between md:text-md font-medium text-left text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-[#0F0E0E] backdrop-blur-xl">   
        <p className="pb-4 px-4 md:pt-4 rounded-t-lg border-b-2 border-transparent focus:text-gray-600 focus:border-gray-300">
            Not Playing Anything <span><SiSpotify className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /></span>
        </p>

        <button>
            {/* eventually add a thing to toggle light/dark mode*/}
        </button>
            
     
       
    </div>


    
    
      
    </motion.div>
  );
};

export default Navbar;