import React, { useState } from 'react'
import Profile from './Profile'
import Description from './Description'
import ImageGallery from './ImageGallery'
import Footer from './Footer'
import Montserrat from '../../../Montserrat'

const Event = ({ event }) => {

  const {
    publisher,
    title,
    tagline,
    createdAt,
    description,
    images,
    followers,
  } = event

  return (
    <Montserrat>
      <div className='space-y-8'>
        <Profile
          publisher={publisher}
          title={title}
          tagline={tagline}
          createdAt={createdAt}
        />
        <Description description={description} />
        <ImageGallery images={images} />
        <Footer followers={followers} />
      </div>
    </Montserrat>
  )
}

export default Event