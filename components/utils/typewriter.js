import { Heading, Box, Container, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import TypeWriterEffect from 'react-typewriter-effect';


export default function SimpleTypeWriter({ multiText }) {
  const defaultText = [
    'Welcome to a new branch in the Future of African Creativity...',
    'A group of thinkers, creators and doers formed a team to explore Art in all forms  ...',
    'From the Physical... To the Digital...',
    'Linked by a shared passion to: Innovate. Create. Educate. ', 
  ];
  const textToRender = multiText && multiText.length ? multiText : defaultText;

  return (
    <Container centerContent>
      <TypeWriterEffect
                    textStyle={{ fontFamily: 'Space Mono', color: '#FFFFFF', fontWeight: 50, fontSize:'2.3em' }}
                    startDelay={600}
                    // cursorColor="white"
                    // color="red"
                    multiText={textToRender}
                    typeSpeed={65}
                    font
                />

    </Container>
                
  )
}
