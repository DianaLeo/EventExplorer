import React, { useEffect, useState } from 'react'
import Controller from './Controller'

const ImageGallery = ({ images }) => {
  const [activeImg, setActiveImg] = useState(images[0])
  const index = images.indexOf(activeImg)

  useEffect(()=>{
    setActiveImg(images[0])
  },[images])

  const handleBack = () => {
    if (index === 0) {
      setActiveImg(images[images.length - 1])
      return
    }
    setActiveImg(images[index - 1])
  }

  const handleNext = () => {
    if (index === images.length - 1) {
      setActiveImg(images[0])
      return
    }
    setActiveImg(images[index + 1])
  }

  return (
    <div className='relative'>
      <img className='rounded w-full object-cover' src={activeImg.src} alt={activeImg.alt}></img>
      <Controller
        count={images.length}
        onBack={handleBack}
        onNext={handleNext}
        activeImg={index}
      />
    </div>
  )
}

export default ImageGallery