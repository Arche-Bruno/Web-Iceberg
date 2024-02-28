import React from 'react'
import ImageGallery from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css"
const SliderImgsGallery = ({arrImgs,onClose}) => {
console.log(arrImgs)
const handleContentClick = (event) => {
    event.stopPropagation(); // Detener la propagación del evento para evitar que se ejecute onClose
  };

  return (
    <div className='modal-overlay' onClick={onClose}>
    <div className='modal-content' onClick={handleContentClick}>
      <ImageGallery 
      items={arrImgs} 
      showBullets={true}
      showPlayButton={false}
      autoPlay={true}
      slideInterval={4000}
      slideDuration={900}
      thumbnailPosition='top'
   
     showFullscreenButton ={false}
      />
   
    </div>

    <div className='modal-content-pc' onClick={handleContentClick}>
      <ImageGallery 
      items={arrImgs} 
      showBullets={true}
      showPlayButton={false}
      autoPlay={true}
      slideInterval={4000}
      slideDuration={900}
      thumbnailPosition='left'
   
      />
   
    </div>
  </div>
  )
}

export default SliderImgsGallery


