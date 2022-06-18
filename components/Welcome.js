import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Image from 'next/image'
const Welcome = () => {
    return (
        <div className='h-screen'>
            <div className="bg-[url('https://www.hulu.com/static/hitch/s3/attachments/ckzoylttk003x1v6mcd4p0gk2-ckxgnvin29r771v5fyutjbf5c-bundle-6400x2640-desktop-1x.jpg')] bg-cover ">
                {/* HEADER */}
                <Header />
                {/* HERO */}
                {/* <Hero /> */}
            </div>
            <div className=' bg-[#0b0c0f] text-center'>
                <p className='text-[#1CE783] font-medium pt-24 pb-4'>INCLUDED IN ALL PLANS</p>
                <p  className='text-white text-5xl font-bold pb-8'> All The TV You Love</p>
                <p  className='text-white text-lg pb-11 font-medium'>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals,<br/> kids shows, and more.</p>
                <div className='flex space-x-5 justify-center pb-48'>
                    <MovieClass link={'https://www.hulu.com/static/hitch/s3/attachments/ckzix4ce0m28n1k7rwhwjufa7-ckllond4i0i9w1u7ghnu91j1b-bobsburgers-category-tile-294x450-1x-full.jpg'} category='TV Shows' release='Past & Current Seasons'/>
                    <MovieClass link={'https://www.hulu.com/static/hitch/s3/attachments/ckzix6os0m2cl1k7rmtowojwd-cklms7f221g6z1u6ye8eurm1e-unitedstatesvsbillieholiday-category-tile-294x450-1x-1-full.jpg'} category='Movies' release='New & Classic'/>
                    <MovieClass link={'https://www.hulu.com/static/hitch/s3/attachments/ckzix9rkis6t31v5mteb3tnon-ckzix7nm8s6q01v5mrhx8mjms-cktarx0vs0o9q1w7av35olnl8-nine-perfect-strangers-category-poster-tile-294x450-2x-full-full.jpg'} category='Hulu Originals' release='Past & Current Seasons'/>
                    <MovieClass link={'https://www.hulu.com/static/hitch/s3/attachments/ckzixaonhhgrc1k6w2bn2vte1-cktaw41ct0trg1v5yjb2aysun-billions-category-poster-tile-v1-294x450-2x-full.jpg'} category='Premiums' release='Add-on'/>
                </div>
            </div>
        </div>

    )
}

export default Welcome


const MovieClass=({link,category,release})=>{
    return(
     <div className='top-0 left-0 after:bg-gradient-to-b after:from-[#000000dc] after:to-transparent after:absolute after:w-full  after:h-full after:top-0  after:left-0 relative   '>
         
         <p className='absolute  text-white text-base  font-bold top-8 left-8 z-20'>{release}</p>
         <p className='absolute text-white  text-2xl font-bold top-14 left-8 z-20'>{category}</p>

         <img src={link}  alt='ImageWallpaper' width={294} height={540} className=""/>

     </div>
    )
}