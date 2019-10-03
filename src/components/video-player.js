import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = props => {
  return (
    <ReactPlayer
      {...props}
      url="https://www.youtube.com/watch?reload=9&v=YE7VzlLtp-4"
      playing={props.playing}
      controls
      width="100%"
      height="100%"
      css={{
        position: `absolute`,
        top: 0,
        left: 0,
      }}
    />
  )
}
