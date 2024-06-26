import { AnimatePresence, motion } from "framer-motion";
import { useReducer, CSSProperties } from "react";

import { GlobeAltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { SiGithub } from "react-icons/si";

interface Props {
  title: string;
  description: string;
  gh_url?: string;
  proj_url?: string;
}

const Project = ({ title, description, gh_url, proj_url }: Props) => {
  const [open, toggle] = useReducer((prev) => !prev, false);
  const [coords, setCoords] = useReducer(
    (prev: any, next: any) => ({ ...prev, ...next }),
    { x: 0, y: 0 }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCoords({
      x: e.clientX - e.currentTarget.offsetLeft,
      y: e.clientY - e.currentTarget.offsetTop,
    });
  };

  return (
    <motion.div
      animate={{ height: open ? "auto" : "52px" }}
      className="card relative flex flex-col overflow-hidden rounded-md border border-black/20
      bg-white dark:border-white/20 dark:bg-[#0b0b0b]"
      style={
        {
          "--cursor-x": coords.x + "px",
          "--cursor-y": coords.y + "px",
        } as CSSProperties
      }
      onMouseMove={handleMouseMove}
    >
      <button
        onClick={toggle}
        className="z-10 flex select-none items-center p-3 px-4 md:text-base"
      >
        <div className="flex flex-1 dark:text-white">
          <p>{title}</p>
        </div>
        <motion.div animate={{ rotate: open ? 90 : 0 }}>
          <ChevronRightIcon className="h-5 w-5 dark:text-white" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 mx-4 flex h-full border-t border-black/20 dark:border-white/20"
          >
            <div className="flex flex-col space-y-4 px-2 py-4">
              <p className="flex-1 select-none text-neutral-700 dark:text-neutral-300 text-base">
                {description}
              </p>

              {/* links to proj and gh */}
              <div className="flex space-x-2 text-sm">
                {gh_url && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={gh_url}
                    className="flex items-center space-x-2 rounded-full bg-neutral-200 p-2 pr-2 transition-transform hover:scale-95 dark:bg-neutral-900 sm:pr-4"
                  >
                    <SiGithub className="h-5 w-5" />
                    <p>code</p>
                  </a>
                )}
                {proj_url && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={proj_url}
                    className="flex items-center space-x-2 rounded-full bg-neutral-200 p-2 pr-2 transition-transform hover:scale-95 dark:bg-neutral-900 sm:pr-4"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                    <p>project</p>
                  </a>
                )}
              </div>
              {/* links to proj and gh */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Project;
