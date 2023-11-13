import React from 'react'
import Followers from './Followers'
import Actions from './Actions'

const Footer = ({followers}) => {
  return (
    <div className='flex'>
      <div className='flex-1'>
        <Followers followers={followers}/>
      </div>
      <Actions />
    </div>
  )
}

export default Footer