import React from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import Cursor from './Cursor'

const Controller = ({
    onBack,
    onNext,
    count,
    activeImg,
}) => {
    return (
        <div className=''>
            <div className='absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between text-white-100'>
                <IoChevronBackOutline
                    className='h-[36px] w-[36px] cursor-pointer'
                    onClick={() => onBack()}
                />
                <IoChevronForwardOutline
                    className='h-[36px] w-[36px] cursor-pointer'
                    onClick={() => onNext()}
                />
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-8 space-x-1'>
                {Array.from({ length: count }).map((_, index) =>
                    <Cursor key={index} isActive={activeImg===index}/>
                )}
            </div>
        </div>
    )
}

export default Controller