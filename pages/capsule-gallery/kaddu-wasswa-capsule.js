import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    VStack,
    Button,
    Heading,
    Center,
    SimpleGrid,
    HStack,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'



import ImageGridReactPhotoGallery from '../../components/image-grid-Lightbox/imageGridReactPhotoGallery'

import NextImage from 'next/image'
import republicPoster from '../../public/images/exhibitions/republic-of-this-and-that/Odur-rep.jpeg'


import Head from 'next/head'

const imageGridImages =[
//   {   
//       src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
//       width: 720,
//       height: 1280,
//       caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {   
//     src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
//     width: 720,
//     height: 1280,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {   
//     src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
//     width: 720,
//     height: 1280,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {   
//     src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
//     width: 720,
//     height: 1280,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
//   {   
//     src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
//     width: 720,
//     height: 1280,
//     caption: "After Rain (Jeshu John - designerspics.com)",
//   },
      

] 


  export default function KadduWasswaExhibitionPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>Kaddu Wasswa: Archive</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>


        <SimpleGrid
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24, lg:0 }}>
          <Flex>
            {/* <NextImage src={odurInstallation}  placeholder="blur" /> */}
            {/* <ImageSlider slides={SlideData} /> */}
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <HStack>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  Kaddu Wasswa: Archive
                </Heading>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={{base:'lg',md:'xl'}}
                  fontFamily={'Space Mono'} 
                  >
                  The Capsule - 06/01/22 to 06/02/24
                </Text>
              </Box>

              <Box>
                <NextImage src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1704533461/kaddu-wasswa_yad62g.jpg" 
                    alt="kaddu waswa poster" 
                    placeholder="blur"
                    blurDataURL="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1704533461/kaddu-wasswa_yad62g.jpg"
                    width={1080}
                    height={1080}
                    />
              </Box>
            </HStack>
  
            <Stack
              spacing={{ base: 4, sm: 6, lg: 20 }}
              direction={'column'}
              // divider={
              //   <StackDivider
              //     borderColor={useColorModeValue('gray.200', 'gray.600')}
              //   />
              // }
              
              >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                    
                </Text>
                <Heading
                pt={20}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                About the Exhibition
              </Heading>
              <Box pb={{base: 20,lg:12}}>
                <Text fontSize={'lg'}
                  fontFamily={'Space Mono'}

                >
                    Afropocene The Capsule and History in Progress Uganda invite you to the opening of a bite sized exhibition of the Kaddu Wasswa Archive Saturday 6th Jan 4pm, in celebration of his 90th birthday.
                </Text>
                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                    Kaddu Wasswa has been on a mission not only to serve his community as a social worker, environmentalist and grassroots philosopher, but also to be able to tell his own story. At 90 he is still a keen observer of life, community and country.                 
                </Text>
              </Box>
              
              </VStack>

              {/* Photo Gallery */}
              {/* <Box pb={{lg: 12}}>
                <ImageGridReactPhotoGallery />
              </Box> */}

              {/* <SimpleGrid columns={{base: 1,md:2}} spacing={10} pt={20}>
                <Box>
                <NextImage src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699957481/Screenshot_from_2023-11-14_11-23-35_afwrej.png"
                 alt="work by kharumwa" placeholder="blur" 
                 blurDataURL="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699957481/Screenshot_from_2023-11-14_11-23-35_afwrej.png" 
                 width={1400} height={1702}/>
                </Box>


              </SimpleGrid> */}







              {/* <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Installation</ListItem>
                    <ListItem>Sculpture</ListItem>{' '}
                    <ListItem>Visual Art</ListItem>
                  </List>
                </SimpleGrid>
              </Box> */}
{/* 
              <Box pb={20}>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Art Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Materials:
                    </Text>{' '}
                     Cast Aluminium, Sheet Aluminium
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dimensions
                    </Text>{' '}
                    3m x 3m
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                </List>
              </Box> */}
              
            </Stack>
  
            {/* <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Purchase
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>Physical Delivery Only</Text>
            </Stack> */}
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }