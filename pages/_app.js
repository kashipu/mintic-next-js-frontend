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
  const [userInfo, setUserInfo] = useState(null);

  const handleLogout = () => {
    setUserLoggedIn(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    router.push('/');
  }

  const [editModals, setEditModals] = useState({
    personalInfo: false,
    education: false,
    experience: false,
    skills: false,
    links: false,
  })

  const contextProps = {
    loginModal,
    setLoginModal,
    userLoggedIn,
    setUserLoggedIn,
    handleLogout,
    editModals,
    setEditModals,
    userInfo,
    setUserInfo,
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
