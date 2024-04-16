import type { NextPage } from "next";
import Project from "./components/Project";
import { SiGithub, SiLinkedin, SiGmail, SiTwitter } from "react-icons/si";
import React from "react";

const Home: NextPage = () => {
  return (
      <main className="text-base mx-auto mt-8 max-w-4xl p-2 md:mt-12">
        <div>
          <h1 className="text-xl md:text-xl">
            hey, i&apos;m <span className="">danny</span>
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base">
            i&apos;m a seattle-based developer with a BS in computer science
            from uci. i&apos;m a big fan of all things full stack whether it be
            writing APIs in python or designing a responsive front
            end with react.js. i like movies, sushi, and the la rams.
          </p>

          <div className="mt-6 flex space-x-6 text-xl underline md:space-x-10 md:text-2xl">
            <a
              href="https://www.linkedin.com/in/danny-doan/"
              target="_blank"
              className="hover:scale-110 transition ease-in-out duration-150"
            >
              <SiLinkedin></SiLinkedin>
            </a>
            <a
              href="https://github.com/dannykd"
              target="_blank"
              className="hover:scale-110 transition ease-in-out duration-150"
            >
              <SiGithub></SiGithub>
            </a>
            <a
              href="mailto:hello@dannydoan.dev"
              className="hover:scale-110 transition ease-in-out duration-150"
            >
              <SiGmail></SiGmail>
            </a>
            <a
              href="https://mobile.twitter.com/dannydoanut"
              className="hover:scale-110 transition ease-in-out duration-150"
            >
              <SiTwitter></SiTwitter>
            </a>
          </div>
        </div>
       
      
        <h1 className="mt-14 mb-3 text-base md:mt-16 md:mb-4 md:text-lg">
          projects ~
        </h1>
        <div className="grid grid-cols-1 gap-2 mb-12 sm:gap-3 sm:grid-cols-2">
          <Project
            title="🔎 zotsearch"
            description="uci course discovery platform allowing students to search for classes using natural language"
            gh_url="https://github.com/dannykd/zotsearch"
            proj_url="https://www.zotsearch.com/"
          ></Project>
          <Project
            title="🍻 drunkies"
            description="a web-based drinking card game with niche decks for coders, weebs, and more"
            proj_url="https://www.drunkies.co/"
          ></Project>
          <Project
            title="🌐 dannydoan.dev"
            description="this website!"
            gh_url="https://github.com/dannykd/dannydoan.dev"
            proj_url="https://www.dannydoan.dev/"
          ></Project>

        </div>
      
        
      </main>
  );
};

export default Home;
