import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    Box,
    useBreakpointValue,
    chakra,
    VisuallyHidden,
    useColorMode,

    useColorModeValue
  } from '@chakra-ui/react';
  import { FaInstagram } from 'react-icons/fa';


  import Head from 'next/head'
  import NextLink from 'next/link'
  import NextImage from 'next/image'
  import groq from 'groq'
  import client from '../../sanityClient'

  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  

  export default function WithBackgroundImage({ pageData }) {

    const capsuleLogoBlack = pageData?.capsuleLogoLightUrl || "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699610171/Black_White_Minimalist_Business_Logo_1_-cropped_drtg6a.svg";
    const capsuleLogoWhite = pageData?.capsuleLogoDarkUrl || "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699627533/Black_White_Minimalist_Business_Logo_3_jmyrq6.svg";

    const { colorMode, toggleColorMode } = useColorMode()
    const headline = pageData?.heroText || `The Capsule is an Independent Public Arts Platform established in 2023 by the Afropocene StudioLab dedicated
                to exploring experimental, immersive and alternative exhibition formats in Kampala.
                ​`
    const primaryCtaText = pageData?.primaryCtaText || 'Show me More'
    const primaryCtaUrl = pageData?.primaryCtaUrl || 'https://www.afropocene.com/capsule-gallery/republic-of-this-and-that'
    const secondaryCtaText = pageData?.secondaryCtaText || 'Visit The Capsule'
    const secondaryCtaUrl = pageData?.secondaryCtaUrl || 'https://maps.app.goo.gl/dbMRW9oX3nP6UjZB7'
    const instagramUrl = pageData?.instagramUrl || 'https://www.instagram.com/afropocenethecapsule/'
    const backgroundImageUrl = pageData?.backgroundImageUrl
      ? `url(${pageData.backgroundImageUrl})`
      : undefined

    return (
      <Flex
        w={'full'}
        minH={'100vh'}
        backgroundImage={backgroundImageUrl}
        backgroundSize={'fit'}
        backgroundPosition={'center center'}>
        <Head>
        <title>{pageData?.title || 'About The Capsule: Afropocene StudioLab'}</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 6, md: 8 })}
        //   bgGradient={'linear(to-r, blackAlpha.900, transparent)'}
        // mt={{base:-24}}
          >
          <Stack maxW={'2xl'} align={'center'} spacing={6}>

          {/* <NextImage src={colorMode === 'light' ? africaIcon:  africaIconWhite} width={40} height={40}/> */}


            <Box mb={{base:-12, md: -6}} mt={{base:20, sm:0, md:16,lg:20}}>
                <NextImage src={colorMode === 'light' ? capsuleLogoBlack:  capsuleLogoWhite} alt="capsule logo" placeholder="blur" 
                blurDataURL={capsuleLogoBlack} width={500/2} height={500/2}/>
            </Box>

            <Box>
            <Text
              color={useColorModeValue('black', 'white')}
              fontWeight={700}
              lineHeight={1.2}
              textAlign={'center'}
              fontFamily={'Space Mono'}
              fontSize={useBreakpointValue({ base: '2xl', md: '2xl', lg:'4xl' })}
              // paddingTop={useBreakpointValue({base: '0', md: '0'})}
              
              >

                {headline}
                </Text>
                </Box>
                
            <Stack 
            direction={'column'}
            paddingBottom={useBreakpointValue({base: '5em', md: '0'})}

            >
              <NextLink href={primaryCtaUrl} passHref>
              <Button
                bg={useColorModeValue('black', 'white')}
                rounded={'full'}
                color={useColorModeValue('white', 'black')}
                fontFamily={'Space Mono'}
                _hover={{ bg: useColorModeValue('blackAlpha.600', 'whiteAlpha.500') }}
                mt={{base:14}}
                >
                {primaryCtaText}
              </Button>
              </NextLink>

              {secondaryCtaUrl && secondaryCtaText && (
                <NextLink href={secondaryCtaUrl} passHref>
                <Button
                  bg={useColorModeValue('black', 'white')}
                  rounded={'full'}
                  color={useColorModeValue('white', 'black')}
                  fontFamily={'Space Mono'}
                  _hover={{ bg: useColorModeValue('blackAlpha.600', 'whiteAlpha.500') }}
                  mt={{base:14}}
                  >
                  {secondaryCtaText}
                </Button>
                </NextLink>
              )}



            </Stack>
          </Stack>

          <Box pt={{base: -26, md:4}} pb={{md: 12}}>
          <SocialButton label={'Instagram'} href={instagramUrl}>
                  <FaInstagram />
                </SocialButton>
          </Box>


        </VStack>
      </Flex>
    );
  }

const query = groq`*[_type == "aboutCapsulePage"][0]{
  title,
  heroText,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  instagramUrl,
  "capsuleLogoLightUrl": capsuleLogoLight.asset->url,
  "capsuleLogoDarkUrl": capsuleLogoDark.asset->url,
  "backgroundImageUrl": backgroundImage.asset->url
}`

export async function getStaticProps() {
  const pageData = await client.fetch(query)

  return {
    props: {
      pageData: pageData || null,
    },
    revalidate: 10,
  }
}
