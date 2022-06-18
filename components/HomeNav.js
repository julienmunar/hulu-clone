import { useRouter } from 'next/router'
import React from 'react'
import apiTmdb from '../apiTmdb'

const HomeNav = () => {
   const router = useRouter()

   return (
      <div className='relative pb-16 xl:mx-8'>


         <div className='flex space-x-14 pl-10 pr-10 lg:space-x-20 overflow-y-hidden whitespace-nowrap scrollbar-hide justify-center text-white'>
            {Object.entries(apiTmdb).map(([key, { title, url }]) => {

               const routeTo = () => {
                  router.push(`/?genre=${key}`)

               }
               return (

                  <div className=' transition duration-100 transform hover:scale-125 cursor-pointer active:text-red-500' onClick={routeTo} key={`${key}${title}`}>
                     <p>{title}</p>
                  </div>



               )
            })}

         </div>
         <div className=' top-0 right-0 absolute bg-gradient-to-l  from-[#06202A] h-10 w-10 '></div>
      </div>
   )
}

export default HomeNav
