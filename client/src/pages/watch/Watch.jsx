import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <div className="video">
        <iframe src="https://player.vimeo.com/video/291766127?h=25e048e2fc&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Watch
