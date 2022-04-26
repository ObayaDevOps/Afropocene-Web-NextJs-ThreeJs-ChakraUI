// Threejs example: threejs.org/examples/?q=asc#webgl_effects_ascii

import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor, Text as FibreText } from '@react-three/drei'
import { AsciiEffect } from 'three-stdlib'
import { Box, Text } from '@chakra-ui/layout'

import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicAsciiTorusComponentWithCustomLoading = dynamic(
  () => import('../../components/asciiTorusNonDynamic'),
  { loading: () => {
    <Box minHeight="100vh" bgColor="red.100">
                  <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
    </Box>
  } }
)

export default function AsciiTorus() {
  return (
    <Box>
      <Head>
        <title>Ascii Torus: Interactive</title>
        <meta name="description" content="Afropocene StudioLab Webpage" />
      </Head>

      < DynamicAsciiTorusComponentWithCustomLoading />
      {/* <Canvas position="relative" zIndex='1'>
        <color attach="background" args={['black']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Torusknot />
        <OrbitControls />
        <AsciiRenderer invert />
      </Canvas> */}
    </Box>


  )
}



// function Torusknot(props) {
//   const ref = useRef()
//   const [clicked, click] = useState(false)
//   const [hovered, hover] = useState(false)
//   useCursor(hovered)
//   useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1.25}
//       onClick={() => click(!clicked)}
//       onPointerOver={() => hover(true)}
//       onPointerOut={() => hover(false)}>
//       <torusKnotGeometry args={[1, 0.25, 128, 32]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   )
// }
// //' .:-+*=%@#'
// //' afropocene STUDIO LAB'
// //' .:-+*= afropocene STUDIO LAB'
// //' BEGIN END.:-+*='
// //' ouroboros.:-+*='
// //' LIFE DEATH.:-+*='

// // var timedInput = ' BEGIN END*:-+*=' 


// // function changeTimedInput() {
// //   let op1 = ' .:-+*=%@#'
// //   let op2 = ' afropocene STUDIO LAB'
// // }

// function AsciiRenderer({ renderIndex = 1, characters = ' BEGIN END.:-+*=', ...options }) {
//   // Reactive state
//   const { size, gl, scene, camera } = useThree()

//   // Create effect
//   const effect = useMemo(() => {
//     const effect = new AsciiEffect(gl, characters, options)
//     effect.domElement.style.position = 'absolute'
//     effect.domElement.style.top = '0px'
//     effect.domElement.style.left = '0px'
//     effect.domElement.style.color = 'white'
//     effect.domElement.style.backgroundColor = 'black'
//     effect.domElement.style.pointerEvents = 'none'
//     return effect
//   }, [characters, options.invert])

//   // Append on mount, remove on unmount
//   useEffect(() => {
//     gl.domElement.parentNode.appendChild(effect.domElement)
//     return () => gl.domElement.parentNode.removeChild(effect.domElement)
//   }, [effect])

//   // Set size
//   useEffect(() => {
//     effect.setSize(window.innerWidth, window.innerHeight)
//   }, [effect, size])

//   // Take over render-loop (that is what the index is for)
//   useFrame((state) => {
//     effect.render(scene, camera)
//   }, renderIndex)

//   // This component returns nothing, it has no view, it is a purely logical
// }