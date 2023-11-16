import React, { useState } from 'react'
import Thumbnails from './Thumbnails'
import Event from './Event/Event'
import EVENTS from '../../../utils/constants'


const PopularEvents = () => {
  const [event, setEvent] = useState(EVENTS[0])

  return (
    <div className='flex gap-20'>
      <Thumbnails
        images={EVENTS.map(({ id, publisher }) => ({ id, src: publisher.avatar, alt: publisher.displayName }))}
        activeEvent={event.id}
        OnImageClick={(id) => setEvent(EVENTS.find(event => event.id === id))}
      />
      <div className='flex-1'>
        <Event event={event} />
      </div>
    </div>
  )
}

export default PopularEvents