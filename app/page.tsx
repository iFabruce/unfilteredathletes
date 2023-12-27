'use client'
import Image from 'next/image'
import {Button} from "@nextui-org/react";

import { initFlowbite } from 'flowbite'
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
      initFlowbite();
    }, []);
  return (
    <main className=''>
      {/*************************BEGIN HERO SECTION************************/}
      <div className='md:bg-gradient-to-r sm:bg-gradient-to-b from-black from-10%  to-[#1e1e1e] to-90% h-screen  md:px-24 sm:px-12' >
        <nav className=" border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src="/images/logo.png" className="" width={128} height={128} alt="Unfiltered Athletes Logo" />
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-start p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto " id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 md:space-y-0 sm:space-y-4 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className='text-white rounded-md hover:text-prim duration-400 ease-out '>
                  <a href="#" className="block py-3 px-6" aria-current="page">Home</a>
                </li>
                <li className='text-white rounded-md hover:text-prim duration-400 ease-out '>
                  <a href="#" className="block py-3 px-6">About</a>
                </li>
                <li className='text-white rounded-md hover:text-prim duration-400 ease-out '>
                  <a href="#" className="block py-3 px-6">Podcast</a>
                </li>
                <li className='text-white rounded-md hover:text-prim duration-400 ease-out '>
                  <a href="#" className="block py-3 px-6">Athletes</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='md:mt-16 sm:mt-8 grid md:grid-cols-12 sm:grid-rows-12 sm:space-y-8 md:space-y-0 '>
          <div className='md:col-span-7 sm:row-span-6 md:w-10/12 sm:w-full '>
            <span><Image className='sm:w-8 md:w-16' src="/icons/solar_microphone-outline.svg" width={48} height={48} alt="microphone"/></span>
            <h1 className='text-white font-title md:text-8xl sm:text-4xl '>Meet the people behind the <span className='text-prim '>Athletes</span> you see on TV</h1>
            <p className='text-white text-xl font-medium mt-4 '>Amazing Canadian athletes share all their secrets</p>
            <div className='flex md:flex-row sm:flex-col md:space-x-4 sm:space-y-4 md:space-y-0 mt-8'>
              <Button className='bg-spotify px-6 py-6'>Listen to podcast</Button>
              <Button className='text-white bg-sec px-6 py-6'>Discover athletes</Button>
            </div>
          </div>

          <div className='md:col-span-5 sm:row-span-6   '>
            <div className="grid grid-cols-4 grid-rows-5 gap-4">
                <div className="col-span-2 row-span-5 z-0 hover:z-40"><Image className=' hover-bright md:filter blur-sm sm:blur-none hover:blur-none hover:scale-110  duration-200 ease-in rounded-xl object-cover w-full h-full' src="/images/ep27.jpeg" width={2000} height={2000} alt="microphone"/></div>
                <div className="col-span-2 row-span-3 col-start-3 z-10 hover:z-40"><Image className=' hover-bright md:filter blur-sm sm:blur-none hover:blur-none hover:scale-110   hover:z-10 duration-200 ease-in rounded-xl object-cover w-full h-full' src="/images/ep1.jpg" width={2000} height={2000} alt="microphone"/></div>
                <div className="row-span-2 col-start-3 row-start-4 z-20 hover:z-40 "><Image className=' hover-bright md:filter blur-sm sm:blur-none hover:blur-none hover:scale-110   hover:z-10 duration-200 ease-in rounded-xl object-cover w-full h-full' src="/images/ep2.jpeg" width={2000} height={2000} alt="microphone"/></div>
                <div className="row-span-2 col-start-4 row-start-4 z-30 hover:z-40"><Image className=' hover-bright md:filter blur-sm sm:blur-none hover:blur-none hover:scale-110   hover:z-10 duration-200 ease-in rounded-xl object-cover w-full h-full' src="/images/ep3.jpeg" width={2000} height={2000} alt="microphone"/></div>
            </div>
          </div>     
        </div>
      </div>
      {/*************************END HERO SECTION************************/}
      
      {/*************************BEGIN ABOUT SECTION************************/}
      <div className='md:px-24 sm:px-12 md:py-16 sm:py-8 md:h-screen bg-gray-200 '>
        <div>
          <h2 className='font-title md:text-6xl sm:text-4xl sm:text-center md:text-left bg-prim px-8 py-4 text-white shadow-custom'>About</h2>
        </div>
       
        <div className='grid md:grid-cols-12 md:space-x-16 sm:grid-rows-12 md:mt-24 sm:mt-8 '>
          <div className='md:col-span-4 sm:row-span-4 flex sm:items-center'>
            <iframe className="border-radius:12px" src="https://open.spotify.com/embed/episode/2xlmvwndthFk7t9RV5MNn9?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div className='md:col-span-8 sm:row-span-8'>
            <p className='text-lg leading-loose text-sec'>Unfiltered Athletes goes behind the scenes with <strong>world class athletes</strong> , to reveal the  <strong>untold stories</strong> of their journeys. From gruelling training sessions to mental strategies to achieve greatness, get ready for a raw, unfiltered look at the world of sports.
Guests include: <strong>Aaron Brown</strong> (4x100m world champion), <strong>oel Anthony</strong>J (NBA), <strong>Sage Watson</strong> (400m hurdles), <strong>Laurence St-Germain (ski slalom)</strong>, <strong>Nick Wammes</strong> (track cycling), <strong>Shady El Nahas</strong> (Judo), <strong>Phylicia George</strong> (100m hurdles and bobsleigh)
If you want to know every time a new episode is released, follow the podcast on the platform you’re reading this! </p><br />
            
          <Button className='bg-spotify px-6 py-6 uppercase '>Listen to podcast</Button> <br />
          <div className='flex space-x-4 items-center mt-4'>
            <p className='font-semibold  tracking-wide text-sm text-prim'>Follow us on:</p>
            <a href="https://www.instagram.com/unfiltered.athletes/"><Image className='hover:-translate-y-1.5 duration-200 ease-out' src="/icons/linkedin.png" width={24} height={32} alt=""/></a>
            <a href="https://www.youtube.com/@unfilteredathletes"><Image className='hover:-translate-y-1.5 duration-200 ease-out' src="/icons/youtube.png" width={32} height={32} alt=""/></a>
          </div> 
          </div>
        </div>
        
      </div>
      {/*************************END ABOUT SECTION************************/}
      <div className='md:px-24 sm:px-12 grid md:grid-cols-12 md:space-x-32 md:space-y-0 sm:space-y-8 bg-gradient-to-tr from-black from-25% to-prim to-25% p-16' >
        <div className='md:col-span-6 sm:row-span-6'>
          <iframe src="https://open.spotify.com/embed/episode/3QLhlCgirc7uqKHn0OIxqW?utm_source=generator&theme=0" width="100%" height="352"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className='md:col-span-6 sm:row-span-6'>
          <div className='grid grid-rows-12 md:space-y-8 sm:space-y-2'>
            <iframe className="row-span-6 border-radius:12px" src="https://open.spotify.com/embed/episode/5MZbvoKXh5YLLO99bzz3Ok?utm_source=generator&theme=0" width="100%" height="152"  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe className="row-span-6 border-radius:12px" src="https://open.spotify.com/embed/episode/78O9oNg1pGwJRROs4B7PPL?utm_source=generator&theme=0" width="100%" height="152" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </div>

      <div className='md:px-24 sm:px-12 mt-16'>
        <h2 className='text-6xl font-title'>Follow us on Instagram for upcoming teasers</h2>
      </div>

    </main>
  )
}
