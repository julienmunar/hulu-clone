import React from 'react'
import Image from 'next/image'
import {auth,provider} from '../firestore'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const Header = () => {

const signIn=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
  
  return (
    <header className='  py-8 px-12 w-full left-0 top-0 h-40 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-transparent via-[#00000088]'>
        {/* Gradient */}
        <div className='flex  justify-between' >
        <Image src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg" alt='Icon'  className='' width={70} height={20} />
        <p onClick={signIn} className=' font-bold text-gray-400 cursor-pointer text-md '>LOG IN</p>
        </div>
    </header>
  )
}

export default Header