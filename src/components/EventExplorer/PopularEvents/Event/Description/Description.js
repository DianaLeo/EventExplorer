import React, { useEffect, useState } from 'react'

const MAX_LENGTH = 20

const Description = ({
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(()=>{
    setIsExpanded(false)
  },[description])

  const descriptionWords = description.split(' ')

  return (
    <div className='text-xl leading-snug'>
      <span className='text-black-100'>
        {isExpanded ? descriptionWords.join(' ') : descriptionWords.slice(0, MAX_LENGTH).join(' ')}
      </span>
      {descriptionWords.length > MAX_LENGTH && (
        <span className='text-grey-100 ml-4'>
          <button onClick={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}>
          {isExpanded ? ' less' : '... more'}
          </button>
        </span>
      )}
    </div>

  )
}

export default Description