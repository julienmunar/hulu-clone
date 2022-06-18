import React, { useEffect } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { async } from '@firebase/util'


const Results = ({ data, DisplayVideo, CloseVideo }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [videoId,setVideoId]=useState(null)
  

  const closeModal = () => {
    setModalOpen(false)

  }
  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:mx-5'>
      {data.map((res) => {
        console.log(res)
        return (
        


            <div className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-110 z-20 ' key={`${res.backdrop_path}`} onClick={()=>{setVideoId(res.id); setModalOpen(true)}}>
              <Image src={`http://image.tmdb.org/t/p/original/${res.backdrop_path}`} height={1080} layout="responsive"  alt='ImageWallpaper' width={1920} className=" rounded-sm" />
              <p className='text-white text-xs truncate'>{res.overview}</p>
              <h2 className='text-white font-bold '>{res.title}</h2>
              <p className='text-white text-xs flex items-center opacity-0 group-hover:opacity-100'>{res.release_date} - {<ThumbUpIcon className='h-5 mx-2' />}  {res.vote_count} </p>

            </div>
    
        )
      })}
  {isModalOpen ? (<VideoModal  CloseVideo={closeModal} videoId={videoId}/>) : (<></>)}
    </div>
  )
}

export default Results


const VideoModal = ({ CloseVideo,videoId}) => {
  const [youtubeId, setYoutubeId]=useState(null)
  useEffect( ()=>{ 
    const fetchVideo= async()=>{
      const getVideoID= await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=fc4fa6cacb400514e088889a9dccc068&language=en-US`)
      const result= await getVideoID.json()
      console.log(result?.results[0]?.key)
      setYoutubeId(result?.results[0]?.key)
    }
  fetchVideo()
  } , [])

  return (
    <div onClick={CloseVideo} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-500 bg-opacity-0  z-30'>

      <div>
        
      </div>
      <div className='z-50 p-16' >
        <ReactPlayer controls={true} playing={true} url={`https://www.youtube.com/watch?v=${youtubeId}`} />
       
      </div>

    </div>
  )
}