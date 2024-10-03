import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar'
import FooterLargeWithNewsletter from '../components/utils/footer' 
import theme from '../components/utils/theme'

import { SessionProvider } from "next-auth/react";


import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
      <SessionProvider session={pageProps.session} refetchInterval={0}>

      <ChakraProvider theme={theme}>
        <WithSubnavigation  {...pageProps} />
        <Component {...pageProps} />
        <FooterLargeWithNewsletter />
        <Analytics />

      </ChakraProvider>      
    
    </SessionProvider>
  );
}

export default MyApp;