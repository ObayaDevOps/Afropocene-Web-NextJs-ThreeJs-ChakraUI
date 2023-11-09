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

    useColorModeValue
  } from '@chakra-ui/react';
  import { FaInstagram } from 'react-icons/fa';


  import Head from 'next/head'
  import NextLink from 'next/link'
  
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
          >
          <Stack maxW={'2xl'} align={'center'} spacing={6}>
            <Text
              color={useColorModeValue('black', 'white')}
              fontWeight={700}
              lineHeight={1.2}
              textAlign={'center'}
              fontFamily={'Space Mono'}
              fontSize={useBreakpointValue({ base: '2xl', md: '2xl', lg:'4xl' })}
              paddingTop={useBreakpointValue({base: '0', md: '0'})}
              >

                The Capsule is an Independent Public Arts Platform established in 2023 by the Afropocene StudioLab dedicated
                to exploring experimental, immersive and alternative exhibition formats in Kampala.
                ​
                </Text>
                
            <Stack 
            direction={'row'}
            paddingBottom={useBreakpointValue({base: '5em', md: '0'})}

            >
              <NextLink href="../capsule-gallery/capsule-archive" passHref>
              <Button
                bg={useColorModeValue('black', 'white')}
                rounded={'full'}
                color={useColorModeValue('white', 'black')}
                fontFamily={'Space Mono'}
                _hover={{ bg: 'whiteAlpha.500' }}
                >
                Show me more
              </Button>
              </NextLink>


            </Stack>
          </Stack>

          <Box pt={{base: 0, md:4}}>
          <SocialButton label={'Instagram'}  href={'https://www.instagram.com/afropocenethecapsule/'}>
                  <FaInstagram />
                </SocialButton>
          </Box>


        </VStack>
      </Flex>
    );
  }