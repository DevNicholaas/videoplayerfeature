import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoPlayer() {
  return (
    <div className='video-player'>
        <ReactPlayer url='https://www.youtube.com/watch?v=oUufnAAV5Fo' />
    </div>
  )
}
