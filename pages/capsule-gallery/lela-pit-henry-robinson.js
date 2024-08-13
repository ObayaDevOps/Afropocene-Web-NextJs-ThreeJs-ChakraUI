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


import ImageGridPhotoGallery from '../../components/image-grid-Lightbox/imageGridPhotoGallery'

import ImageGridReactPhotoGallery from '../../components/image-grid-Lightbox/imageGridReactPhotoGallery'

import NextImage from 'next/image'
import republicPoster from '../../public/images/exhibitions/prempeh-a-constant-yearning/Emma_flip_frame.png'
import republicPoster2 from '../../public/images/exhibitions/prempeh-a-constant-yearning/Emma_flip_frame.png'



import Head from 'next/head'

const imageGridImages =[

  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236519/WhatsApp_Image_2024-06-24_at_16.37.47_spjob2.jpg",
      width: 1527,
      height: 1080,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.48_3_h2dfyi.jpg",
      width: 1527,
      height: 1080,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.48_1_iydamo.jpg",
      width: 1527,
      height: 1080,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236509/WhatsApp_Image_2024-06-24_at_16.37.48_oepx0a.jpg",
      width: 854,
      height: 1280,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236508/WhatsApp_Image_2024-06-24_at_16.37.49_2_hap7cd.jpg",
      width: 1280,
      height: 1024,
      caption: "Henry Robinson Lela Pit",
  },
  {   
      src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719236510/WhatsApp_Image_2024-06-24_at_16.37.49_pdadpr.jpg",
      width: 1024,
      height: 1280,
      caption: "Henry Robinson Lela Pit",
  },

{   
  src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719235391/WhatsApp_Image_2024-06-24_at_15.23.27_f1iavz.jpg",
  width: 1080,
  height: 608,
  caption: "Henry Robinson Lela Pit",
  },
// {   
//   src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719235391/WhatsApp_Image_2024-06-24_at_15.23.29_hbpm28.jpg",
//   width: 1080,
//   height: 608,
//   caption: "Henry Robinson Lela Pit",
//   },

] 


export default function RobinsonLelaPitCapsuleExhibitionPage() {
  return (
    <Container maxW={'7xl'}>
    <Head>
      <title>Henry Robinson: Lela Pit Exhibition</title>
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
                Henry Robinson: Lela Pit
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{base:'lg',md:'xl'}}
                fontFamily={'Space Mono'} 
                >
                The Capsule  24/06/24
              </Text>
            </Box>

            <Box>
              <NextImage 
                  src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719234255/lela-pit-flyer_jriguq.jpg'} 
                  alt="Henry Robinson Lela Pit Capsule" width={1440} height={1800}  
                  placeholder="blur" 
                  blurDataURL={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719234255/lela-pit-flyer_jriguq.jpg'} />
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
              This exhibition explores the relationship of women with their bikes in the North of Uganda. 
              Unlike the capital city, Kampala, where women rarely ride bikes, 
              despite the prevalence of boda-bodas for public and private transport, 
              many women in the North use bikes for transport and carrying goods. 
              The work celebrates the bike as the women&apos;s travelling companion 
              - &apos;wot ki lakwany lum iwangi&apos; (it&apos;s good to have a companion, especially when travelling).  
              </Text>
              <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
              This emphasis mirrors Henry&apos;s own practice of the Wandering Studio, a mobile photo studio that Henry developed in Kampala, 
              whose name reflects on his status as a traveller in East Africa. 
              His work in the North builds on this wandering, translating the world through his photographer&apos;s eye.
             
              </Text>

            {/* Photo Gallery */}
            <Box py={{base: 10, lg: 12}}>
              <ImageGridPhotoGallery photos={imageGridImages} />
            </Box>


              <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
              In the first series, Henry captures the women in transit, 
              practising a quick frame method that allows him to pose the women as they are. 
              The focus is placed on them in such a way that the relationship between the woman and her bike is highlighted, 
              while remaining embedded in the environment. In these images, the women are centred and given full attention;
               unlike ethnographic images, where people can be presented almost as extensions of the land to be conquered.

             
              </Text>

              <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
              In the second series, Henry places even more emphasis on the women by bringing his Wandering Studio practice to Gulu. 
              He builds a backdrop to take studio shots in the tradition of African photographers such as James Barnor and Seydou Keita, 
              who used studio photography to canonise everyday life on the continent. With this approach, 
              Henry pushes his practice further, experimenting with more daring poses that enhance the relationship between the woman
               and her bike. Here, the bike becomes almost an appendage of the woman,
                showcasing her control over the tool and the way she wields its power to carry out her wishes.

              </Text>

            </Box>


            <Heading
              pt={20}
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              About the Artist
            </Heading>

            <Stack direction={['column-reverse','row']}>
            <Box pb={{base: 20,lg:12}}>
              <Text fontSize={'lg'}
                fontFamily={'Space Mono'}

              >
                Henry Robinson is a Uganda-based visual artist born and bred in Jamaica. 
                He has worked in film and photography in the Caribbean and the United Kingdom. 
                He uses portrait photography to explore what intrigues him about his subjects, 
                answering questions about them with each shot. In addition to working with numerous commercial clients 
                such as Puma and Google, his work has been featured in Plantain magazine and exhibited at King&apos;s College 
                in London. 
                
              </Text>
              <Text fontSize={'lg'} pt={{base:10, lg: 6}} fontFamily={'Space Mono'}  >
                  This work builds on his residency at Afropocene StudioLab in September 2022, 
                  during which he spent part of his time in Northern Uganda.               
              </Text>
            </Box>

            <Box p={{base: 2, md: 4}}>
              <NextImage 
              src={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719233962/henrypfp.png'}
               alt="Henry Robinson Afropocene"  height={1457} width={1203} placeholder="blur"
                blurDataURL={'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719233962/henrypfp.png'} />
            </Box>
            </Stack>

            
            </VStack>
         
          </Stack>

        </Stack>
      </SimpleGrid>
    </Container>
  );
}