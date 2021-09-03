import { useState } from 'react';
import '../styles/globals.css'
import '../styles/custom.css'
import AppContext from "../context/AppContext";

// Apollo dependencies
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }) {
  const [loginModal, setLoginModal] = useState(false);

  const contextProps = {
    loginModal,
    setLoginModal,
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
