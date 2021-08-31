import { useState } from 'react';
import '../styles/globals.css'
import '../styles/custom.css'
import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <AppContext.Provider value={{ loginModal, setLoginModal }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
