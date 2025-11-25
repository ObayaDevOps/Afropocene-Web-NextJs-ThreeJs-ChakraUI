import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head'
import NextImage from 'next/image'
import groq from 'groq'

import ImageGridPhotoGallery from '../../components/image-grid-Lightbox/imageGridPhotoGallery'
import client from '../../sanityClient'

const CapsuleExhibition = ({ exhibitionPage }) => {
  const {
    exhibitionName,
    artistName,
    headingMeta,
    heroImage,
    heroImageAlt,
    heroImageCaption,
    exhibitionParagraphs = [],
    galleryImages = [],
    aboutArtistHeading,
    aboutArtistParagraphs = [],
    artistImage,
  } = exhibitionPage || {}

  const hasGallery = Array.isArray(galleryImages) && galleryImages.length > 0
  const heroImg = heroImage?.src ? heroImage : null

  return (
    <Container maxW={'7xl'}>
      <Head>
        <title>{artistName ? `${artistName}: ${exhibitionName}` : exhibitionName}</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

      <SimpleGrid
        columns={1}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24, lg: 0 }}>
        <Flex />
        <Stack spacing={{ base: 6, md: 10 }}>
          <HStack alignItems="flex-start" spacing={{ base: 6, lg: 10 }}>
            <Box as={'header'} flex="1">
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {artistName ? `${artistName}: ${exhibitionName}` : exhibitionName}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={{ base: 'lg', md: 'xl' }}
                fontFamily={'Space Mono'}>
                {headingMeta}
              </Text>
            </Box>

            {heroImg && (
              <Box flex="1" maxW={{ base: '100%', md: '50%' }}>
                <NextImage
                  src={heroImg.src}
                  alt={heroImageAlt || exhibitionName || 'Capsule hero'}
                  width={heroImg.width || 1440}
                  height={heroImg.height || 1800}
                  placeholder="blur"
                  blurDataURL={heroImg.src}
                />
                {heroImageCaption ? (
                  <Text fontSize="sm" mt={2} color={useColorModeValue('gray.600', 'gray.400')}>
                    {heroImageCaption}
                  </Text>
                ) : null}
              </Box>
            )}
          </HStack>

          <Stack
            spacing={{ base: 4, sm: 6, lg: 20 }}
            direction={'column'}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Heading
                pt={10}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                About the Exhibition
              </Heading>
              <Box pb={{ base: 20, lg: 12 }} maxW={'3xl'}>
                {exhibitionParagraphs.map((para, idx) => (
                  <Text
                    key={idx}
                    fontSize={'lg'}
                    fontFamily={'Space Mono'}
                    pt={idx === 0 ? 0 : { base: 10, lg: 6 }}>
                    {para}
                  </Text>
                ))}

                {hasGallery && (
                  <Box py={{ base: 10, lg: 12 }}>
                    <ImageGridPhotoGallery photos={galleryImages} />
                  </Box>
                )}
              </Box>

              <Heading
                pt={10}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {aboutArtistHeading || 'About the Artist'}
              </Heading>

              <Stack direction={['column-reverse', 'row']}>
                <Box pb={{ base: 20, lg: 12 }} flex="1">
                  {aboutArtistParagraphs.map((para, idx) => (
                    <Text
                      key={idx}
                      fontSize={'lg'}
                      fontFamily={'Space Mono'}
                      pt={idx === 0 ? 0 : { base: 10, lg: 6 }}>
                      {para}
                    </Text>
                  ))}
                </Box>

                {artistImage?.src && (
                  <Box p={{ base: 2, md: 4 }} flex="1">
                    <NextImage
                      src={artistImage.src}
                      alt={`${artistName || 'Artist'} portrait`}
                      height={artistImage.height || 1457}
                      width={artistImage.width || 1203}
                      placeholder="blur"
                      blurDataURL={artistImage.src}
                    />
                  </Box>
                )}
              </Stack>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "capsulePage" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

const query = groq`*[_type == "capsulePage" && slug.current == $slug][0]{
  title,
  exhibitionName,
  artistName,
  headingMeta,
  "heroImage": {
    "src": heroImage.asset->url,
    "width": heroImage.asset->metadata.dimensions.width,
    "height": heroImage.asset->metadata.dimensions.height
  },
  heroImageAlt,
  heroImageCaption,
  exhibitionParagraphs,
  galleryImages[]{
    "src": asset->url,
    "width": coalesce(asset->metadata.dimensions.width, 1200),
    "height": coalesce(asset->metadata.dimensions.height, 800),
    "caption": caption
  },
  aboutArtistHeading,
  aboutArtistParagraphs,
  "artistImage": {
    "src": artistImage.asset->url,
    "width": artistImage.asset->metadata.dimensions.width,
    "height": artistImage.asset->metadata.dimensions.height
  },
  currentlyActiveExhibition,
  moveToArchive,
  exhibitionStartDate,
  exhibitionEndDate
}`

export async function getStaticProps(context) {
  const { slug = "" } = context.params

  const exhibitionPage = await client.fetch(query, { slug })

  return {
    props: {
      exhibitionPage
    },
    revalidate: 10,
  }
}

export default CapsuleExhibition
