import { useRouter } from 'next/router'
import React from 'react'
import apiTmdb from '../apiTmdb'

const HomeNav = () => {
   const router = useRouter()

   return (
      <div className='relative pb-8 lg:mx-14'>


         <div className='flex px-10  space-x-8 lg:space-x-20  overflow-x-scroll scrollbar-hide  whitespace-nowrap   text-white'>
            {Object.entries(apiTmdb).map(([key, { title, url }]) => {

               const routeTo = () => {
                  router.push(`/?genre=${key}`)

               }
               return (

                  <div className=' last:pr-24 transition duration-100 transform hover:scale-125 cursor-pointer active:text-red-500' onClick={routeTo} key={`${key}${title}`}>
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
