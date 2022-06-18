import Image from 'next/image'
import React from 'react'
import Img from '../assets/images/logo-0-1-2-0.full.png'

const Hero = () => {
    return (
        <div>
            <div className=' text-center pt-4'>
                <p className='text-[#1CE783] font-bold pb-6 text-xs'>BUNDLE WITH ANY HULU PLAN & SAVE</p>
                <Image src={Img} width={603} height={136} className="pb-8" />
                <p  className=' text-white text-2xl font-semibold pb-6'>Get endless entertainment, live sports, and the shows and <br /> movies you love.</p>
                <button className=' bg-[#1CE783] py-3  px-60 rounded-md font-semibold hover:opacity-30 transition-opacity'>GET THE DISNEY BUNDLE</button>
                <p className='text-gray-400 pt-4  font-bold text-xs pb-3'><span className='underline '>What's included?</span> See <span className='underline '>Bundle terms.</span></p>
                <p className=' text-white underline text-md pb-20   '>Sign up for Hulu only</p>
            </div>

        </div>
    )
}

export default Hero