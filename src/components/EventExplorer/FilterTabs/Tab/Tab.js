import React from 'react'

const Tab = ({ name,className }) => {
  return (
    <button className={`w-1/4 pb-8 border-orange-100 ${className}`}>
      {name}
    </button>
  )
}

export default Tab