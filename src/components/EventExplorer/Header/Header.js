import React from 'react'
import Montserrat from '../../Montserrat'

const Header = () => {
    return (
        <Montserrat>
            <div className='text-center space-y-5 leading-tight'>
                <h2 className='text-base-800 text-5xl font-semibold '>
                    Explore the <strong>most</strong> popular journey
                </h2>
                <p className='text-grey-100 text-2xl font-light'>updated weekly, recommended based on popularity</p>
            </div>
        </Montserrat>

    )
}

export default Header