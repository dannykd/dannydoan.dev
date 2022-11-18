import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Script from "next/script";
import { SiGithub, SiLinkedin, SiGmail, SiTwitter } from "react-icons/si";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Danny Doan</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/92613890?s=400&u=e0047c360a4ec70d3e487df52452decafbce4351&v=4"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="text-md mx-auto mt-8 min-h-full max-w-4xl p-2 md:mt-12 md:text-lg">
        <div>
          <h1 className="text-3xl md:text-4xl">
            hey, i&apos;m <span className="">danny</span>.
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            i&apos;m a california-based developer studying computer science
            @uci. i&apos;m a big fan of all things full stack whether it be
            writing RESTful apis in express.js or designing a responsive front
            end with <span className="line-through">react.js</span> next.js. i
            like thrillers, sushi, and the la rams.
          </p>

          <div className="mt-6 flex space-x-6 text-2xl underline md:space-x-10 md:text-3xl">
            <a
              href="https://www.linkedin.com/in/danny-doan/"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <SiLinkedin></SiLinkedin>
            </a>
            <a
              href="https://github.com/dannykd"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <SiGithub></SiGithub>
            </a>
            <a
              href="mailto:hello@dannydoan.dev"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <SiGmail></SiGmail>
            </a>
            <a
              href="https://mobile.twitter.com/dannydoanut"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <SiTwitter></SiTwitter>
            </a>
          </div>
        </div>

        <h1 className="mt-14 mb-3 text-lg md:mt-16 md:mb-4 md:text-xl">
          &lt;projects&gt;
        </h1>
        <div className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2">
          <Project
            title="📺 aniwatch"
            description="social media web app that allows users to share and rate what anime they're currently watching.
            uses data from anilist's graphql api."
          ></Project>

          <Project
            title="📚 skolr"
            description="web app that allows users to create and log study sessions following pomodoro 
            techniques."
          ></Project>

          <Project
            title="🌐 dannydoan.dev"
            description="this website!"
            gh_url="https://github.com/dkdoan/dannydoan.dev"
            proj_url="https://www.dannydoan.dev/"
          ></Project>
        </div>

        <h1 className="mt-14 mb-3 text-lg md:mt-16 md:mb-4 md:text-xl">
          &lt;experience&gt;
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Experience
            role="software engineer intern"
            img="https://pbs.twimg.com/profile_images/1473756532827246593/KRgw2UkV_400x400.jpg"
            description="worked on the RDS platform team. built a dashboard for
            engine teams to track engine updates"
            timespan="june 2022 - sep 2022"
          ></Experience>
        </div>
      </main>
    </div>
  );
};

export default Home;
