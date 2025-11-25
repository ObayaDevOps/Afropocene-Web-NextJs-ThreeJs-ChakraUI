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

import NextImage from 'next/image'


import Head from 'next/head'
import ImageGridPhotoGallery from '../../components/image-grid-Lightbox/imageGridPhotoGallery'



const imageGridImages =[

    {   
        src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723032636/IMG_1311-43_ipofvy.jpg",
        width: 6240,
        height: 4160,
        caption: "Kobusinge & Komukama: In the Midst Exhibition",
    },

] 


  export default function InTheMidstCapsuleExhibitionPage() {
    return (
      <Container maxW={'7xl'}>
      <Head>
        <title>Kobusinge & Komukama: In the Midst Exhibition</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>


        <SimpleGrid
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24, lg:0 }}>
          <Flex>

          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <HStack>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  Liz Kobusinge & Darlyne Komukama: In the Midst
                </Heading>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={{base:'lg',md:'xl'}}
                  fontFamily={'Space Mono'} 
                  >
                  The Capsule  02/07/24
                </Text>
              </Box>

              <Box>
                <NextImage 
                    src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1722593778/WhatsApp_Image_2024-08-02_at_09.22.44_qfehnz.jpg'} 
                    alt="In the Midst Capsule" width={1440} height={1800}  
                    placeholder="blur" 
                    blurDataURL={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1722593778/WhatsApp_Image_2024-08-02_at_09.22.44_qfehnz.jpg'} />
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
                A Moving Image Exhibition: In the midst is the first in a series of meditations on movement curated by E Mirembe and Rosie Olang.  
                </Text>


              {/* Photo Gallery */}
              <Box py={{base: 10, lg: 12}}>
                <ImageGridPhotoGallery photos={imageGridImages} />
              </Box>


                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
               
                  We started out wanting to print sound and made literal representations of the Black Circles that always hold us and lift us in community.
                   As part of our experiment, we laid some prepared brass plates on the floor of our residency apartment and had friends dance on them, 
                   making impressions that we printed onto the bark cloth and lint paper we made in the studio. 
                   These pieces are the results of our playing around with placement and echo on the drum of the printer.                
                </Text>

                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                Our explorations centred on remembrance, and curiosity as a driving force to build on practices that rely on 
                  alternative processes and materials, intending to share and expand our interest in sustainable practices as 
                  rituals of memory keeping. This process-based materials study explores how we create and document soundscapes, 
                  as an access point into a shared inheritance that is preserved through body memory. Using an antidisciplinary 
                  approach to situate our knowledge of bark cloth and sound production as core functions of memory work, we are 
                  curious about the experimental processes of textured, and sonic art-making, that perform as a conduit to an 
                  organic archive.
                </Text>

                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                This work is a testament to collective making; we were gently and lovingly held by a community of artists who
                   made us feel present and welcomed in this space as we documented how our bodies responded to this particular 
                   space and time and relayed body memory onto fragile handmade materials. Making this work was an opportunity 
                   for us to participate in art-making in service of the ideals of collective intimacy and healing.
                </Text>

                <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                All works printed at Edition Verso during a collaborative residency by Liz Kobusinge and Darlyne Komukama, 
                  supported by LAPA Brixton.
                </Text>

              </Box>



              <Heading
                pt={20}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                About the Artists
              </Heading>

              <Stack direction={['column-reverse','row']}>
                <Box pb={{base: 20,lg:12}} >
                  <Text fontSize={'lg'}
                    fontFamily={'Space Mono'}
                    maxW={{md:'8xl'}}
                  >
                    Kobusinge is a community-taught artist who makes as a
                    ritual of remembrance, layering handmade paper,
                    dyes, ink and video to mimic how our skin holds and
                    disperses memory. Her current research is on the textured
                    possibilities of eco-printing and painting methods on hand-made
                    bark cloth, positioning memory as material. As part of the
                    2023/2024 cohort of the Njabala Foundation, Kobusinge contributed
                    to Pillars of Rectitude, a research project that foregrounds East African
                    women artists whose work has undergone systematic erasure. Her
                    work has been exhibited with the Njabala Foundation for their annual
                    exhibition at the Makerere University Art Gallery, as part of KLA ART
                    2021 in Kampala, with the Salooni Collective at Institut National de
                    Formation Artistique et Culturelle in Burkina Faso and the N&apos;GOLA
                    Biennial of Arts and Culture in São Tomé e Príncipe,  with 32
                    Degrees East for their members&apos; exhibition, with Gloria
                    Kiconco at the German Cultural Institute in Kampala, and as part of FitClique Africa&apos;s Feminist Utopia installations in Kampala and Nairobi.
                                        
                  </Text>
                </Box>

                <Box p={{base: 2, md: 4}}>
                  <NextImage 
                  src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723548730/liz_qxpf7a.jpg'}
                  alt="Liz Kobusinge Afropocene"  height={719} width={1080} placeholder="blur"
                    blurDataURL={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723548730/liz_qxpf7a.jpg'} />
                </Box>
              </Stack>

              <Stack direction={['column-reverse','row']}>
                <Box pb={{base: 20,lg:12}}>
                  <Text fontSize={'lg'}
                    fontFamily={'Space Mono'}
                    maxW={{md:'8xl'}}

                  >
                    
                    Darlyne is a Ugandan self-taught photographer and multi-media artist who works mostly collaboratively to 
                    investigate and edify the things she cares about; femininity, blackness and connectedness. 
                    Her feminist ideals are vital to her projects and she will be found working with other women to make some
                     cool shit for even more women to enjoy. 
                    
                    Her photographs are full of regal, statuesque Black women, colour and a call back to the natural world.
                    Her visual art projects include; The Salooni, a multi-media roving installation made together with three Ugandan women,
                     investigating and celebrating Black hair, Our Things, a video archive installation made with one other Ugandan woman 
                     collecting stories about similar Ugandan experiences, and, Penthouse, a rage room on a rooftop in the middle of downtown
                      Kampala where Kampalan women could safely express and manifest their rage for Kla Art 2018.

                                            Her projects, Decay and Cardi Monáe, serve as sonic explorations. As a DJ (Decay), she is interested in feeling and 
                                            sharing the joy of the power of the femme. Whether she&apos;s playing trap, dancehall, ballroom or the stankiest twerking music, it&apos;s in service to freedom for the femme body and spirit. 
                                            With Cardi Monáe, as a producer, she is interested in translating her artistic pursuits, which include photography, 
                                            videography and installation art, as well as her influences into music. Her music will soon be released on the 
                                            Hakuna Kulala label.
                    Her work has appeared on CNN, BBC, The Guardian, Quartz and OkayAfrica. Her work has also been shown at the Southbank Centre in 
                    London as part of the Africa Utopia Festival, Constitution Hill in Johannesburg as part of the Being Her(e) Exhibition, the Chale Wote Festival in Jamestown in Accra, the Africa Bass Cultural festival in Ouagadougou and at multiple locations in Kampala, Uganda.                   
                  </Text>
                  {/* <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
          
                  </Text> */}
                </Box>

                <Box p={{base: 2, md: 4}}>
                  <NextImage 
                  src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723548672/darlyne_ngjhut.jpg'}
                  alt="Darlyne Komukama Afropocene"  height={1000} width={750} placeholder="blur"
                    blurDataURL={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1723548672/darlyne_ngjhut.jpg'} />
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