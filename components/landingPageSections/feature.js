import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    Center,
    Button,
    AspectRatio,
    HStack,
  } from '@chakra-ui/react';

  import React from 'react'
  import NextImage from 'next/image'
  import studio2 from '../../public/images/studio/afropocene-OdurAssistant.jpg'
  import studio3 from '../../public/images/studio/PaperEgg.png'
  import NextLink from 'next/link'
  

  
  const defaultSections = [
    {
      title: 'We Write New African Narratives',
      description: 'We are afrofuturists interested in exploring the cultural aesthetics, philosophies of science and history that are borne of the developing intersection of African/Africana diaspora culture with technology. Our mission is to help ... to create ... to inspire',
      image: studio3,
      buttonText: 'More About Us',
      href: '../../../about/about-us',
    },
    {
      title: 'We Provide Space for Emerging Artists',
      description: 'A Co-Arts space for artists, researchers, thinkers, experimenters, developers & do-ers. We provide space and community for any and all explorers of African futures.',
      image: studio2,
      buttonText: 'Explore the Studio',
      href: '../../../studios/kabalagala-studio',
    },
    {
      title: 'We Innovate with Creative Technology',
      description: 'We also have extensive experience with Technology and Software Development and we have plans to merge the worlds of Nature, Art and Technology...',
      image: '../../../video/Reaction-Diffusion.mp4',
      isVideo: true,
      buttonText: 'Explore Tech+Art',
      href: '../../../tech/this',
    },
  ]

  export default function LandingPageSplitWithImage({ sections = [] }) {
    const content = sections.length ? sections : defaultSections;

    return (
      <Center p={8}>


        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {content.map((section, index) => {
            const isVideo = section.isVideo;
            const imageSrc = section.imageUrl || section.image || studio3;
            const description = section.description || '';
            const buttonText = section.buttonText || 'Learn More';

            return (
              <React.Fragment key={section.title || index}>
                <Stack spacing={4}>
                  <Heading as='h3' size='2xl'>{section.title}</Heading>
                  <Text color={'gray.500'} fontSize={'2xl'}>
                    {description}
                  </Text>
                  <NextLink href={section.href || '#'} passHref>
                    <Button size="md" color={'blue.500'} fontFamily="Space Mono">{buttonText}</Button>
                  </NextLink>
                </Stack>
                <Flex>
                  {isVideo ? (
                    <AspectRatio ratio={4/3}  float="left" clear="both" width={'85vw'} height={{base:'45vh', md:'55vh'}} left >
                      <iframe 
                      loop={true}
                      autoPlay
                      muted
                      src={imageSrc} 
                      allow="autoplay"
                      title="Reaction-Diffusion-Clip" ></iframe>

                    </AspectRatio>
                  ) : (
                    <NextImage src={imageSrc} alt={section.title || 'Afropocene'} width={1200} height={800}/>
                  )}
                </Flex>
              </React.Fragment>
            )
          })}
        </SimpleGrid>
       </Center>
    );
  }
