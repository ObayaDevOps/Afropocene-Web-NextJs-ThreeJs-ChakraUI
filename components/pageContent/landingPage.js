import { Heading, Box, Container, VStack, SimpleGrid, Center, Button, AspectRatio, Alert, AlertIcon, useToast } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect } from "react";

import LandingPageSplitWithImage from '../landingPageSections/feature'
import acunye from '../../public/images/visting-artists/acunye/Afropocene-Studio-BTS60.jpg'


const DynamicTypeWriterWithNoSSR = dynamic(
    () => import('../utils/typewriter'),
    { ssr: false }
  )

  function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }


export default function LandingPage(props) {
  const landingPageContent  = props.pageContent[0] || [];




  // /https://stackoverflow.com/questions/58314040/how-can-i-show-a-chakra-ui-toast-programmatically
  const toast = useToast();
  const id = 'test-toast'


  useEffect(() => {
    // Show toast every 5 seconds.
      toast({
        title: "Now On at The Capsule: Kobusinge & Komukama - In the Midst",
        id,
        // description: `Time ${new Date()}`,
        status: "info",
        position: "bottom",
        duration: 12000,
        isClosable: true,
        containerStyle: {
          fontFamily: 'Space Mono'
        }
      });

  }, []); // Passing in empty array so this will only get called on mount
  
  
  return (
    <Box>
      
      {/* <Alert status='info' variant='left-accent'>
      <AlertIcon />
      Click here to see latest Workshop/Exhibition 
      </Alert> */}
      {/* <CustomToastExample /> */}

    <SimpleGrid
    columns={1}
    spacing={{ base: 8, md: 10 }}
    >
        <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" 
        // backgroundImage={{base: '../../../images/backgrounds/MandelbrotMediumDark.jpg', lg:'../../../images/backgrounds/MandelbrotLargeDark.jpg' }}
        backgroundImage={{base: 'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.48_1_iydamo.jpg', lg:'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.48_1_iydamo.jpg' }}

        
        >
            <Center p={{sm:1 , md:10}} >
                <Heading
                 as='h1'
                 size='3xl'
                textAlign="center"
                color="white"
                pt={{base: 10, md: 20}}
                pb={{base: 5}}
                 >
                   {landingPageContent.headingTop}
                </Heading>
            </Center>

            {/* Scrolling Text */}
            <Container maxW='md' centerContent     zIndex={1}>
                <DynamicTypeWriterWithNoSSR/>
            </Container>

        </Box>

      <Center p={{sm:1 , md:10}} flex='1'>
        <Heading
          as='h1'
          size='4xl'
          sx={{
            background: "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          paddingBottom='1em'
          >
            What We Do
          </Heading>
      </Center>

        <LandingPageSplitWithImage />

      </SimpleGrid>
      </Box>
  )
}
