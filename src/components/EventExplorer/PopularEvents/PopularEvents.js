import React, { useState } from 'react'
import Thumbnails from './Thumbnails'
import Event from './Event'

const EVENTS = [
  {
    id: 'One-day-Artist',
    publisher: {
      avatar: 'https://picsum.photos/seed/LindaJohnson/160/160',
      displayName: 'Linda Johnson',
    },
    title: 'One-day Artist',
    tagline: 'A dive to sustainable city planing with hands-on experience',
    createdAt: '3d ago',
    description: 'Ever wondered how urban greening initiatives come to life? Here is a once-in-a-lifetime opportunity! The team led by Mr. Eduard Franz decided to launch an exhibition that "engaged the entire city in creation". The exhibition consisted of facades and structures made of cardboard, and participants could',
    images: [
      { id: 'i1', src: 'https://picsum.photos/seed/One-day-Artist-1/1920/1080', alt: 'One-day Artist' },
      { id: 'i2', src: 'https://picsum.photos/seed/One-day-Artist-2/1920/1080', alt: 'One-day Artist' },
      { id: 'i3', src: 'https://picsum.photos/seed/One-day-Artist-3/1920/1080', alt: 'One-day Artist' },
      { id: 'i4', src: 'https://picsum.photos/seed/One-day-Artist-4/1920/1080', alt: 'One-day Artist' },
    ],
    followers: [
      { id: 'f1', src: 'https://picsum.photos/seed/Alice/100', alt: 'avatar' },
      { id: 'f2', src: 'https://picsum.photos/seed/Bob/100', alt: 'avatar' },
      { id: 'f3', src: 'https://picsum.photos/seed/John/100', alt: 'avatar' },
      { id: 'f4', src: 'https://picsum.photos/seed/Arya/100', alt: 'avatar' },
      { id: 'f5', src: 'https://picsum.photos/seed/Diana/100', alt: 'avatar' }
    ]
  },
  {
    id: 'Urban-Greeting-Workshop',
    publisher: {
      avatar: 'https://picsum.photos/seed/EduardFranz/160/160',
      displayName: 'Eduard Franz',
    },
    title: 'Urban Greeting Workshop',
    tagline: 'Immersive experience of how the artists build up one exhibition',
    createdAt: '4d ago',
    description: 'Do you have a dream of becoming an artist? Here is a once-in-a-lifetime opportunity! The team led by Mr. Eduard Franz decided to launch an exhibition that "engaged the entire city in creation". The exhibition consisted of facades and structures made of cardboard, and participants could',
    images: [
      { id: 'i1', src: 'https://picsum.photos/seed/UrbanGreetingWorkshop1/1920/1080', alt: 'One-day Artist' },
      { id: 'i2', src: 'https://picsum.photos/seed/UrbanGreetingWorkshop2/1920/1080', alt: 'One-day Artist' },
      { id: 'i3', src: 'https://picsum.photos/seed/UrbanGreetingWorkshop3/1920/1080', alt: 'One-day Artist' },
    ],
    followers: [
      { id: 'f1', src: 'https://picsum.photos/seed/Silver/100', alt: 'avatar' },
      { id: 'f2', src: 'https://picsum.photos/seed/Ivy/100', alt: 'avatar' },
      { id: 'f3', src: 'https://picsum.photos/seed/Tracey/100', alt: 'avatar' },
      { id: 'f4', src: 'https://picsum.photos/seed/George/100', alt: 'avatar' },
      { id: 'f5', src: 'https://picsum.photos/seed/Peppa/100', alt: 'avatar' }
    ]
  },
]

const PopularEvents = () => {
  const [event, setEvent] = useState(EVENTS[0])

  return (
    <div className='flex gap-20'>
      <Thumbnails
        images={EVENTS.map(({ id, publisher }) => ({ id, src: publisher.avatar, alt: publisher.displayName }))}
        activeEvent={event.id}
        OnImageClick={(id)=>setEvent(EVENTS.find(event=>event.id===id))}
      />
      <div className='flex-1'>
        <Event event={event} />
      </div>
    </div>
  )
}

export default PopularEvents