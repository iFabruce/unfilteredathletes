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
      <div className='md:bg-gradient-to-r sm:bg-gradient-to-b from-black from-10%  to-[#1e1e1e] to-90% h-screen  md:px-24 sm:px-12' >
        <nav className=" border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src="/images/Logo.png" className="" width={128} height={128} alt="Unfiltered Athletes Logo" />
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
      


    </main>
  )
}
