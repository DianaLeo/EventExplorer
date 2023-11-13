import React from 'react'

const Followers = ({ followers }) => {
  return (
    <div className='flex relative items-center'>
      {/* method1 */}
      {followers.map(({ id, src, alt }) => (
        <div key={id} className='w-[20px]'>
          <img
            className='absolute top-0 w-[30px] h-[30px] rounded-full object-cover shadow-md'
            src={src}
            alt={alt}
          ></img>
        </div>
      ))}
      {/* method2 */}
      {/* {FollowerList.reduce((accumulator, { id, src, alt }) => (
        <>
          <img key={id} className='w-[30px] h-[30px] shadow rounded-full object-cover' src={src} alt={alt}></img>
          <div className='flex -translate-x-[10px]'>
            {accumulator}
          </div>
        </>
      ), null)} */}
      <div className='text-grey-100 ml-[20px]'>
        <p className='leading-normal'>+32 users joined this event</p>
      </div>
    </div>
  )
}

export default Followers