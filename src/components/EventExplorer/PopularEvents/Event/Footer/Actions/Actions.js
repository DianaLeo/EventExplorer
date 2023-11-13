import React from 'react'
import { IoAddCircleOutline, IoBookmarkOutline, IoShareSocialOutline, IoCalendarOutline } from 'react-icons/io5'

const Actions = () => {
  return (
    <div className='flex space-x-3'>
      <IoAddCircleOutline className='w-[32px] h-[32px] cursor-pointer' />
      <IoBookmarkOutline className='w-[32px] h-[32px] cursor-pointer' />
      <IoShareSocialOutline className='w-[32px] h-[32px] cursor-pointer' />
      <IoCalendarOutline className='w-[32px] h-[32px] cursor-pointer' />
    </div>
  )
}

export default Actions