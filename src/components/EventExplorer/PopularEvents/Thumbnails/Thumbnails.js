import classNames from 'classnames'
import React, { useState } from 'react'

const Thumbnails = ({
  images,
  activeEvent,
  OnImageClick
}) => {

  return (
    <div className='space-y-8 w-[200px]'>
      {images.map(({ id, src, alt }) => (
        <button
          key={id}
          onClick={() => OnImageClick(id)}
          className='block rounded-[16px] overflow-hidden'
        >
          <img
            className={classNames('object-cover',
              {
                'w-[160px] h-[100px]': id === activeEvent,
                'w-[100px] h-[64px]': id !== activeEvent,
              }
            )}
            src={src}
            alt={alt}
          ></img>
        </button>
      ))}
    </div>
  )
}

export default Thumbnails