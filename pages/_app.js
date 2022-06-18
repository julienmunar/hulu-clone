import '../styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '../store';
import Login from './login';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../pages/firestore'

function MyApp({ Component, pageProps }) {

 

 const [user, loading, error] = useAuthState(auth);
 
 

  
  return( 
    <Provider store={store}>
      {!user ? (<Login/>) :(     <Component {...pageProps} />) }
  

  </Provider>
  )
}

export default MyApp
