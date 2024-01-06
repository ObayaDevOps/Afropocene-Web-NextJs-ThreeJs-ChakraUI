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
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
      width: 720,
      height: 1280,
      caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
    width: 720,
    height: 1280,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
    width: 720,
    height: 1280,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
    width: 720,
    height: 1280,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
    width: 720,
    height: 1280,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
      


] 


  export default function OdurMuwawaExhibitionPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>Odur: Republic of This and That Exhibition</title>
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
                  Odur: Republic of This and That
                </Heading>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={{base:'lg',md:'xl'}}
                  fontFamily={'Space Mono'} 
                  >
                  The Capsule - 11/09/23 to 06/01/24
                </Text>
              </Box>

              <Box>
                <NextImage src={republicPoster} alt="work by kharumwa" placeholder="blur"/>
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
                The Republic of This and That presents an artistic exploration and commentary on the concepts of unrestricted and restricted mobility, belonging, and personal identity. Using aluminum printing plates and copper wire, Odur skillfully reimagines traditional passport booklets as metallic representations, each containing visa endorsement stamps on various pages. This conceptual approach effectively captures the multifaceted challenges, obstacles, and restrictions imposed by borders and boundaries. 
                </Text>
                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                  Odur Ronald invites us to contemplate the complexities of free movement, belonging and
                  personhood through the motif of the passport. By denting, burning, stitching and weaving,
                  reclaimed aluminium he transforms this commonplace and often discarded material into highly
                  stylised sculptural reconstructions of everyday objects that capture the current moment, and
                  seemingly freeze time. The Republic of This and That offers an entry point into a critical re-
                  evaluation of the structure of modern society that makes us look twice and draws us in to look
                  closer.                
                </Text>
              </Box>
              
              </VStack>

              {/* Photo Gallery */}
              <Box pb={{lg: 12}}>
                <ImageGridReactPhotoGallery />
              </Box>

              <SimpleGrid columns={{base: 1,md:2}} spacing={10} pt={20}>
                <Box>
                <NextImage src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699957481/Screenshot_from_2023-11-14_11-23-35_afwrej.png"
                 alt="work by kharumwa" placeholder="blur" 
                 blurDataURL="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699957481/Screenshot_from_2023-11-14_11-23-35_afwrej.png" 
                 width={1400} height={1702}/>
                </Box>

                <Box>
                  <Heading
                  pt={{base:20, lg: 0}}
                  pb={{base: 8, lg:12}}
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
                  SP Residency &amp; 32 commission
                  </Heading>
                  <Text fontSize={'lg'} fontFamily={'Space Mono'} >
                  Odur began using the aluminum plates to materialize his ideas during a Silhouette residency at
                  Afriart Gallery in 2020 which culminated in the first passport ‘The Republic of Contemporary Art’.
                  He returned to this format for the installation titled ‘Ekisaakaate’ (2023), which was
                  commissioned by Prince Claus Fund for the occasion of the phase 1 opening of 32 Degrees
                  East Arts Trust. The installation, consisted of 50 aluminium passport sculptures suspended from
                  door frames, and explored themes of boundaries and borders.
                    </Text>
                </Box>

              </SimpleGrid>


              <SimpleGrid columns={{base: 1,md:2}} spacing={10} pt={20} pb={20}>
              <Box>
              <Heading
                  pt={{base:20, lg: 0}}
                  pb={{base: 8, lg:12}}
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
                  AU 20 Residency
                  </Heading>
                <Text fontSize={'lg'} fontFamily={'Space Mono'} >
                The African Union residency (AU20) in collaboration with UNDP Africa, and implemented by
                Africa No Filter, brought 10 artists from across the continent to Dakar to create works under the
                theme Our Africa, Our Future. The aim of the residency was to support works which shifted
                narratives and highlight the valuable contributions of African artists in sharing African stories.
                The completed works were also exhibited at the AU headquarters in Addis Ababa Ethiopia at
                the margins of the AU summit 2023.
                </Text>
              </Box>
                <Box>
                <NextImage src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699956908/DKR_LOMAN_RESIDENCY_824_tlknuh.jpg" 
                alt="work by kharumwa" placeholder="blur" blurDataURL="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg" 
                width={4000} height={6000}/>
                </Box>
              </SimpleGrid>


              <SimpleGrid columns={{base: 1,md:2}} spacing={10} pt={20}>
                <Box>
                <NextImage src="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699956907/DKR_LOMAN_RESIDENCY_823_egkmga.jpg" 
                alt="work by kharumwa" placeholder="blur" blurDataURL="https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg" 
                width={6000} height={4000}/>
                </Box>

                <Box>
                  <Heading
                  pt={{base:20, lg: 0}}
                  pb={{base: 8, lg:12}}
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
                  14th Kaunas Biennial
                  </Heading>
                  <Text fontSize={'lg'} fontFamily={'Space Mono'} >
                  As part of the 14th Kaunas Biennial, under the theme of Long-distance Friendships Odur’s
                  passports were presented at the Kaunas Central Post Office by curator Alicia Knock. The

                  defunct post office was reanimated by the exhibition as a space to reflect on exchange and
                  togetherness, transnational solidarity, and friendship, and included works and correspondence
                  by African and Eastern European artists. Odur&#39;s contribution highlighted the challenges of visa
                  policies and lack of mobility which affects artists from both regions.
                    </Text>
                </Box>

              </SimpleGrid>






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