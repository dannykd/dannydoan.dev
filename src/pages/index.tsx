import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Project from "./components/Project";
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Danny Doan</title>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/92613890?s=400&u=e0047c360a4ec70d3e487df52452decafbce4351&v=4" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="mx-auto max-w-4xl p-4 mt-8 md:mt-12 text-md md:text-lg min-h-full">
        <div>
            <h1 className='text-3xl md:text-4xl'>hey, i&apos;m <span className='text-blue-600 dark:text-blue-400'>danny</span>.</h1>
            <p className='mt-6'>
              i&apos;m a california-based developer studying computer science @uci. i&apos;m a big fan of all things
              full stack whether it be writing RESTful apis in express.js or designing a responsive front end with <span className='line-through'>react.js</span> next.js.
              i like thrillers, sushi, and the la rams.
            </p>
            
            <div className='flex mt-6 space-x-4 md:space-x-8 underline'>
              <a href="https://www.linkedin.com/in/danny-doan/">linkedin↗️</a>
              <a href="https://github.com/dkdoan">github↗️</a>
              <a href="mailto:dannykdoan@gmail.com">email↗️</a>            
            </div>
         </div>
        
         <h1 className="mt-14 md:mt-16 mb-3 md:mb-4">&lt;projects&gt;</h1>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <Project 
            title="aniwatch"
            description="social media web app that allows users to share and rate what anime they're currently watching.
            uses data from anilist's graphql api."
          ></Project>

          <Project 
            title="skolr"
            description="web app that allows users to create and log study sessions following pomodoro 
            techniques."
          ></Project>
          
        </div>
        <footer className='absolute bottom-0 left-0 right-0 flex justify-center pb-4 text-sm md:text-base'>{"/* built with <3 by me (danny) */"}</footer>     
      </main> 

    </div>
  );
};

export default Home;
