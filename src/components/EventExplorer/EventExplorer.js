import React from 'react'
import Header from './Header'
import FilterTabs from './FilterTabs'
import PopularEvents from './PopularEvents'

const EventExplorer = () => {
    return (
        <div className='px-[40px] py-[100px] space-y-[100px]'>
            <Header />
            <FilterTabs />
            <PopularEvents />
        </div>
    )
}

export default EventExplorer