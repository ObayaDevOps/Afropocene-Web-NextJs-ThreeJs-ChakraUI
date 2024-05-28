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
  

  export default function WithBackgroundImage() {

    const capsuleLogoBlack = "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699610171/Black_White_Minimalist_Business_Logo_1_-cropped_drtg6a.svg";
    const capsuleLogoWhite = "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699627533/Black_White_Minimalist_Business_Logo_3_jmyrq6.svg";

    const { colorMode, toggleColorMode } = useColorMode()

    return (
      <Flex
        w={'full'}
        minH={'100vh'}
        // backgroundImage={'../../../../images/backgrounds/mandelbrot.jpg'        }
        backgroundSize={'fit'}
        backgroundPosition={'center center'}>
        <Head>
        <title>About The Capsule: Afropocene StudioLab</title>
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

                The Capsule is an Independent Public Arts Platform established in 2023 by the Afropocene StudioLab dedicated
                to exploring experimental, immersive and alternative exhibition formats in Kampala.
                ​
                </Text>
                </Box>
                
            <Stack 
            direction={'column'}
            paddingBottom={useBreakpointValue({base: '5em', md: '0'})}

            >
              <NextLink href="https://www.afropocene.com/capsule-gallery/republic-of-this-and-that" passHref>
              <Button
                bg={useColorModeValue('black', 'white')}
                rounded={'full'}
                color={useColorModeValue('white', 'black')}
                fontFamily={'Space Mono'}
                _hover={{ bg: useColorModeValue('blackAlpha.600', 'whiteAlpha.500') }}
                mt={{base:14}}
                >
                Show me More
              </Button>
              </NextLink>

              <NextLink href="https://maps.app.goo.gl/dbMRW9oX3nP6UjZB7" passHref>
              <Button
                bg={useColorModeValue('black', 'white')}
                rounded={'full'}
                color={useColorModeValue('white', 'black')}
                fontFamily={'Space Mono'}
                _hover={{ bg: useColorModeValue('blackAlpha.600', 'whiteAlpha.500') }}
                mt={{base:14}}
                >
                Visit The Capsule
              </Button>
              </NextLink>



            </Stack>
          </Stack>

          <Box pt={{base: -26, md:4}} pb={{md: 12}}>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/afropocenethecapsule/'}>
                  <FaInstagram />
                </SocialButton>
          </Box>


        </VStack>
      </Flex>
    );
  }