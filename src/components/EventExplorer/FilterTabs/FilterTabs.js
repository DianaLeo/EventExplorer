import React from 'react'
import Tab from './Tab'

const FilterTabs = () => {
  return (
    <div className="w-1/1 mx-auto border-b border-blue-200 font-montserrat text-center text-2xl color-black-100 ">
        <Tab name='Popular' className='border-b-4'/>
        <Tab name='Top rated'/>
        <Tab name='New'/>
        <Tab name='Followed'/>
    </div>
  )
}

export default FilterTabs