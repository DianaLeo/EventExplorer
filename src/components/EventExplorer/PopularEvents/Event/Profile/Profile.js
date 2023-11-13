import React from 'react'

const Profile = ({
  publisher,
  title,
  tagline,
  createdAt,
}) => {
  return (
    <div className='flex items-center gap-10'>
      <img className='rounded-full w-[50px] h-[50px] object-cover' src={publisher.avatar} alt={publisher.displayName}></img>
      <div className='space-y-2 leading-snug'>
        <div className='color-black-100 text-2xl font-bold'>{title}</div>
        <div className='text-sm text-grey-100'>{tagline}</div>
        <div className='text-orange-200'>{createdAt}</div>
      </div>
    </div>
  )
}

export default Profile