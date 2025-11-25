import { Box, Heading } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Silk = dynamic(() => import('../backgrounds/Silk'), { ssr: false });

function GrainOverlay() {
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
        opacity: 0.18,
      }}
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

// Card using an SVG overlay (top-left) to create an inverted rounded corner
function InvertedCornerCard({ children, bg = '#F9F8F6', notchSize = 0, borderRadius = 28 }) {
  const size = notchSize && notchSize > 0 ? notchSize : 30;
  return (
    <Box position="relative" w="100%" h="100%" bg={bg} borderRadius={`${borderRadius}px`}>
      {/* Corner overlay: bottom-right (rotate original 180°) */}
      <svg
        className="svg-corner corner-content-box-one"
        width={size}
        height={size}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', bottom: 0, right: 0, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <g clipPath="url(#clip0_310_2)"  >
          <path d="M30 0 H0 V30 C0 13.431 13.431 0 30 0 Z" fill={bg} />
        </g>
        <defs>
          <clipPath id="clip0_310_2">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Box position="absolute" inset="0" p={{ base: 6, md: 10 }}>
        {children}
      </Box>
    </Box>
  );
}

export default function SilkHero({
  headline = 'Equal parts creative developer & designer',
  silk = { speed: 5, scale: 1, color: '#7B7481', noiseIntensity: 1.5, rotation: 0 },
  height = { base: '70vh', md: '85vh' },
}) {
  return (
    <Box position="relative" borderRadius="36px" overflow="hidden" h={height} w="100%" bg="black">
      {/* Animated silk gradient */}
      <Box position="absolute" inset="0">
        <Silk {...silk} />
      </Box>

      {/* Grain overlay */}
      <GrainOverlay />

      {/* Bottom-left inverted corner text card */}
      <Box
        position="absolute"
        bottom={{ base: 4, md: 8 }}
        left={{ base: 4, md: 8 }}
        w={{ base: '88%', md: '60%', lg: '46%' }}
        h={{ base: '40%', md: '44%' }}
        maxW="900px"
      >
        <InvertedCornerCard>
          <Heading as="h1" size="3xl" color="black" lineHeight="1.1">
            {headline}
          </Heading>
        </InvertedCornerCard>
      </Box>
    </Box>
  );
} 