import { useState } from 'react';
import { useRouter } from 'next/router';

// Context
import AppContext from "../context/AppContext";

// Apollo dependencies
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

//Styles
import '../styles/globals.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loginModal, setLoginModal] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogout = () => {
    setUserLoggedIn(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/');
  }

  const contextProps = {
    loginModal,
    setLoginModal,
    userLoggedIn,
    setUserLoggedIn,
    handleLogout,
  }

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={contextProps}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
