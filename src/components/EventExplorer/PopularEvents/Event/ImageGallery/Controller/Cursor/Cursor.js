import React from 'react'
import classNames from 'classnames'

const Cursor = ({isActive}) => {
  return (
    <span className={classNames(
        isActive? 'w-8': 'w-2',
        !isActive && 'opacity-50',
        'inline-block h-1 bg-white-100 rounded-xl'
    )}></span>
    )
}

export default Cursor