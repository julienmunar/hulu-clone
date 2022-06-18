import React from 'react'
import Image from 'next/image'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../pages/firestore';
import { useRouter } from 'next/router'

const HomeHeader = ({ title, Icon }) => {
    const router=useRouter()
    const logGout=()=>{
        signOut(auth)
        router.push('/')

    }
    return (
        <div className=' p-8 flex flex-col justify-center items-center pt-6 space-y-6 xl:space-y-0 xl:flex-row xl:justify-between'>
            <div className='flex  xl:space-x-14 '>
                <HomeHeaderList title='HOME' Icon={HomeIcon} />
                <HomeHeaderList title='TRENDING' Icon={LightningBoltIcon} />
                <HomeHeaderList title='VERIFIED' Icon={BadgeCheckIcon} />
                <HomeHeaderList title='COLLECTION' Icon={CollectionIcon} />
                <HomeHeaderList title='SEARCH' Icon={SearchIcon} />
                <HomeHeaderList title='ACCOUNT LOGOUT' Icon={UserIcon} logout={logGout}/>
            </div>
            <div >
                <Image src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg" alt='ImageWallpaper'  className='' width={150} height={50} />
            </div>
        </div>
    )
}

export default HomeHeader



const HomeHeaderList = ({Icon,title,logout}) => {

    return (

        <div className='text-white cursor-pointer  group  flex flex-col justify-center items-center' onClick={logout}>
            <Icon className=' group-hover:animate-bounce w-6 ml-3 text-center' />
            <p className='  hidden xl:block xl:opacity-0 xl:group-hover:opacity-100 tracking-widest pt-2'>{title}</p>
        </div>

    )
}