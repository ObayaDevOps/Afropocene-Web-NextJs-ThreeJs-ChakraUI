import { Heading, Box, Container, VStack, SimpleGrid, Center, Button, AspectRatio, Alert, AlertIcon, useToast } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useEffect } from "react";

import LandingPageSplitWithImage from '../landingPageSections/feature'
import acunye from '../../public/images/visting-artists/acunye/Afropocene-Studio-BTS60.jpg'
import SilkHero from '../landingPageSections/silkHero'


const DynamicTypeWriterWithNoSSR = dynamic(
    () => import('../utils/typewriter'),
    { ssr: false }
  )



export default function LandingPage(props) {
  const landingPageContent  = props.pageContent[0] || {};

  console.log('landingPageContent', landingPageContent);
  const heroBackground = landingPageContent.backgroundImageUrl || '../../../images/backgrounds/MandelbrotLargeDark.jpg';
  const heroBackgroundImage = `url(${heroBackground})`;
  const toastMessage = landingPageContent.toastMessage;
  const showLandingToast = Boolean(landingPageContent.toastEnabled && toastMessage);
  const typewriterTexts = [
    landingPageContent.scrollingText1,
    landingPageContent.scrollingText2,
    landingPageContent.scrollingText3,
    landingPageContent.scrollingText4,
  ].filter(Boolean);
  const featureSections = [
    {
      title: landingPageContent.whatWeDoTitle1,
      description: landingPageContent.whatWeDoContentParagraph1,
      imageUrl: landingPageContent.whatWeDoImage1Url,
      buttonText: landingPageContent.whatWeDoButtonText1,
      href: '../../../about/about-us',
    },
    {
      title: landingPageContent.whatWeDoTitle2,
      description: landingPageContent.whatWeDoContentParagraph2,
      imageUrl: landingPageContent.whatWeDoImage2Url,
      buttonText: landingPageContent.whatWeDoButtonText2,
      href: '../../../studios/kabalagala-studio',
    },
    {
      title: landingPageContent.whatWeDoTitle3,
      description: landingPageContent.whatWeDoContentParagraph3,
      imageUrl: landingPageContent.whatWeDoImage3Url,
      buttonText: landingPageContent.whatWeDoButtonText3,
      href: '../../../tech/this',
    },
  ]
  // Ensure empty schema items don't render blank blocks
  .filter(section => section.title || section.description || section.imageUrl);




  // /https://stackoverflow.com/questions/58314040/how-can-i-show-a-chakra-ui-toast-programmatically
  const toast = useToast();
  const id = 'landing-toast'


  useEffect(() => {
    if (!showLandingToast) return;

    toast({
      title: toastMessage,
      id,
      status: "info",
      position: "bottom",
      duration: 12000,
      isClosable: true,
      containerStyle: { fontFamily: 'Space Mono' }
    });
  }, [showLandingToast, toastMessage, toast]);
  
  
  return (
    <Box>
      
      {/* <Alert status='info' variant='left-accent'>
      <AlertIcon />
      Click here to see latest Workshop/Exhibition 
      </Alert> */}
      {/* <CustomToastExample /> */}

      {/* Animated Silk hero */}
      {/* <Box px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }}>
        <SilkHero headline={landingPageContent.headingTop} />
      </Box> */}

    <SimpleGrid
    columns={1}
    spacing={{ base: 8, md: 10 }}
    >
        <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" 
        backgroundImage={{base: heroBackgroundImage, lg: heroBackgroundImage }}
        
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
                <DynamicTypeWriterWithNoSSR multiText={typewriterTexts}/>
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

        <LandingPageSplitWithImage sections={featureSections}/>

      </SimpleGrid>
      </Box>
  )
}
