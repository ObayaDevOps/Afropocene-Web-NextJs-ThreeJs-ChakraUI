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
    AspectRatio,
  } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'



import ImageGridReactPhotoGallery from '../../components/image-grid-Lightbox/imageGridReactPhotoGallery'

import ImageGridPhotoGallery from '../../components/image-grid-Lightbox/imageGridPhotoGallery'


import NextImage from 'next/image'
import republicPoster from '../../public/images/exhibitions/prempeh-a-constant-yearning/Emma_flip_frame.png'
import republicPoster2 from '../../public/images/exhibitions/prempeh-a-constant-yearning/Emma_flip_frame.png'



import Head from 'next/head'

const imageGridImages =[
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716293661/Emma_flip_frame_.pdf_1_zcijfi.png",
      width: 1406,
      height: 1762,
      caption: "Emma Prempeh",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716293666/Emma_flip_frame_.pdf_2_aayxza.png",
    width: 1409,
    height: 1046,
    caption: "Emma Prempeh",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716293674/Emma_flip_frame_.pdf_3_wlj9gy.png",
    width: 1403,
    height: 1064,
    caption: "Emma Prempeh",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716293670/Emma_flip_frame_.pdf_5_iktc7d.png",
    width: 1414,
    height: 2000,
    caption: "Emma Prempeh",
  },
  {   
    src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716293676/Emma_flip_frame_.pdf_4_t6kzdn.png",
    width: 1412,
    height: 1119,
    caption: "Emma Prempeh",
  },
      


] 


  export default function PrempehYearningCapsuleExhibitionPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>Emma Prempeh: A Constant Yearning Exhibition</title>
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
                  Emma Prempeh: A Constant Yearning
                </Heading>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={{base:'lg',md:'xl'}}
                  fontFamily={'Space Mono'} 
                  >
                  The Capsule - 17/05/24
                </Text>
              </Box>

              <Box>
                <NextImage src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716295170/Untitled_design_5_qpjpqe.png'} alt="Emma Prempeh Capsule" width={841} height={1190}  placeholder="blur" blurDataURL={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716295170/Untitled_design_5_qpjpqe.png'} />
              </Box>
            </HStack>
  
            <Stack
              spacing={{ base: 4, sm: 6, lg: 20 }}
              direction={'column'}
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
                The starting point to Prempeh’s
                paintings is the matter of
                blackness – the tonal properties of
                the colour establishes the ground
                to her paintings and a cinematic
                basis to invoke and project
                memories of events, people, and
                places to emphasise an
                appreciation of ancestral time and
                relationships, selfhood and
                transformation. 
                                </Text>
                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                 Schlag metal, a
                brass alloy of copper and zinc
                imitative of gold leaf, is a material
                that Prempeh applies to selected
                areas of her often large-scale
                paintings. Over time this oxidises
                creating slow, live visual changes
                that animate the image and create
                a meta-narrative around our
                experiences of the passing of time,
                memory and its representation.
               
                </Text>

              {/* Photo Gallery */}
              <Box py={{base: 10, lg: 12}}>
                <ImageGridPhotoGallery photos={imageGridImages} />
              </Box>

                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                Prempeh occasionally experiments with
                projected still and moving imagery to
                create painting installations that invite
                other experiential and performative
                encounters with her work. During her
                residency she has spent time exploring
                the possibilities of projection mapping
                in her practice in collaboration with
                artist SCARLETTMOTIFF.
               
                </Text>

                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                Prempeh’s most recent explorations
                heavily focus on the ‘Home’ a theme
                that she has continued to mould
                throughout her career, with early
                narratives starting with family as a
                basis of understanding her existence
                in Britain as part of the Afro-
                Caribbean population. Most recently
                Prempeh has been exploring the
                home to investigate mechanisms
                people within the diaspora might
                establish, trying to grasp an identity
                in (un)familiar environments.
                </Text>

                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                She delves into the world of magic
                realism in an attempt to re-examine
                the diaspora through storytelling
                and myth and how it can act as a
                cushion for harsh truths. This
                includes examining the relationships
                between different cultures trying to
                occupy a singular space allocated to
                them through previous colonial
                intervention. Exploring the home,
                whether in acceptance of or while
                exploring the return to, is an
                artistic commentary on the
                circularity and malleability of time
                and memory, and how it will allow
                her to present visual queries that
                can prompt unexpected answers to
                otherwise existential questions.

                </Text>
              </Box>
              

              <Box>
              
              </Box>


              <Heading
                pt={20}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Exhibition Video
              </Heading>
              
              <AspectRatio ratio={16 / 9} width="100%">
                <iframe
                  src="https://www.youtube.com/embed/IuIVPV1gdOE"
                  title="Emma Prempeh: A Constant Yearning"
                  allowFullScreen
                />
              </AspectRatio>
              

              <Heading
                pt={20}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                About the Artist
              </Heading>

              <Stack direction={['column','row']}>
              <Box pb={{base: 20,lg:12}}>
                <Text fontSize={'lg'}
                  fontFamily={'Space Mono'}

                >
                  Emma Prempeh b. 1996 is a British artist
                  with Ghanaian and Vincentian heritage
                  based in London Prempeh Studied at
                  Goldsmiths University of London
                  graduating in 2019 winning the
                  Alumno/Space bursary award for 2020.
                  She won 1st place for the Ingram
                  Collection Purchase Prize and became a
                  participating artist in Bloomberg New
                  contemporaries 2019.
 
                </Text>
                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                Prempeh attended
                MA Painting at the Royal College of Art
                under the LeverHulme Trust Arts
                Scholarship winning the Valerie Beston
                Trust Arts award for 2022.               
                </Text>
              </Box>

              <Box>
                <NextImage src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716293979/Emma_flip_frame_.pdf_ddqmiq.png'} alt="work by kharumwa"  height={2000} width={1414} placeholder="blur" blurDataURL={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716293979/Emma_flip_frame_.pdf_ddqmiq.png'} />
              </Box>
              </Stack>

              
              </VStack>

 

              {/* <SimpleGrid columns={{base: 1,md:2}} spacing={10} pt={20}>
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

              </SimpleGrid> */}


              {/* <SimpleGrid columns={{base: 1,md:2}} spacing={10} pt={20} pb={20}>
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
              </SimpleGrid> */}


              {/* <SimpleGrid columns={{base: 1,md:2}} spacing={10} pt={20}>
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