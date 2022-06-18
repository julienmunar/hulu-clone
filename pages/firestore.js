import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn3VdXj9vRj5J5Qf_RyZIBb0kegs_zRW8",
    authDomain: "hulu-cl-370fc.firebaseapp.com",
    projectId: "hulu-cl-370fc",
    storageBucket: "hulu-cl-370fc.appspot.com",
    messagingSenderId: "458565147942",
    appId: "1:458565147942:web:5351d9876c0f89529a75e7"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth=getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);


  const provider = new GoogleAuthProvider();

  export {db,auth,provider};