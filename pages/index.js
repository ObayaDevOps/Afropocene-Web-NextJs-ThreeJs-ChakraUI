import Head from 'next/head'
import {  Box, Icon } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'
import Image from 'next/image'
import HeadImage from '../public/images/icon/africa.png'

import client from '../sanityClient'
import groq from 'groq'

const landingPageQuery = groq`*[_type == "landingPage"]{
  title,
  headingTop,
  scrollingText1,
  scrollingText2,
  scrollingText3,
  scrollingText4,
  subheading,
  "backgroundImageUrl": backgroundImage.asset->url,
  whatWeDoTitle1,
  whatWeDoContentParagraph1,
  "whatWeDoImage1Url": whoWeDoImage1.asset->url,
  whatWeDoButtonText1,
  whatWeDoTitle2,
  whatWeDoContentParagraph2,
  "whatWeDoImage2Url": whoWeDoImage2.asset->url,
  whatWeDoButtonText2,
  whatWeDoTitle3,
  whatWeDoContentParagraph3,
  "whatWeDoImage3Url": whoWeDoImage3.asset->url,
  whatWeDoButtonText3,
}`

  export async function getStaticProps() {
    const landingPageContent = await client.fetch(landingPageQuery);


    return {
      props: {
        landingPageContent,
      },
      revalidate: 10, //In seconds
    };
  }
  


export default function Home(props) {
  return (
    <div >
      <Head>
        <title>Home | Afropocene StudioLab</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/uganda.png"></link>
      </Head>

      <Box>
        <LandingPage pageContent={props.landingPageContent} />
      </Box>

    </div>
  )
}
