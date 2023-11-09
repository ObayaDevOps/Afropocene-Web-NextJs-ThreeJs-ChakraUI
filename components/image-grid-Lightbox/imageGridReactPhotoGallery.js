import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Box, Center } from "@chakra-ui/layout";

import ImageGridSlider from '../../components/image-grid-Lightbox/imageGridSlider'
import { SlideData } from "../../components/utils/carousel/odur-muwawa-slides"


//https://www.npmjs.com/package/react-photo-gallery?activeTab=readme
//https://stackoverflow.com/questions/68162570/react-images-image-in-carousel-not-centred
const imageGridImages =[
    {   
        src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
        original: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699558990/Untitled3_fwfagn.jpg",
        width: 720,
        height: 1280,
        caption: "Gallery Space1",
    },
    {   
        src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699562475/Untitled2_aesw2a.jpg",
        original: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699562475/Untitled2_aesw2a.jpg",
        width: 1131,
        height: 1600,
        caption: "Gallery Space2",
    },
    {   
        src: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699562476/Untitled_uegrxu.jpg",
        original: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1699562476/Untitled_uegrxu.jpg",
        width: 1200,
        height: 1600,
        caption: "Gallery Space4",
    },


        
  
  
  ] 

  export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Box>
      <Gallery photos={imageGridImages} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Box maxW={{base: '85vw',lg: '70vw'}}>
                <ImageGridSlider slides={imageGridImages} />
            </Box>

          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
}
