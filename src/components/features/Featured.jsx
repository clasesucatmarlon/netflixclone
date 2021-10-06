import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {
        type && (
          <div className="category">
            <span>{ type === 'movie' ? 'Movies' : 'Series'}</span>
            <select name="genre" id="genre">
              <option >genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="triller">Triller</option>
              <option value="western">Western</option>
              <option value="Animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )
      }
      <img src="https://www.okchicas.com/wp-content/uploads/2017/09/marvel-se-va-de-netflix.jpg" alt="" />
      <div className="info">
        <img src="https://spiderman569.files.wordpress.com/2017/11/cropped-232.png" alt="" />
        <span className="desc">
          A bit of that refreshing sensation of being before a character in a separate compartment is perceived in 'Spider-Man', a film absolutely alien in tone and aesthetics to the rest of the Marvel movies. Adaptations that although with greater or lesser degree of success captured details of the eternal plot of the character, the aesthetics and the usual New York atmosphere, never ceased to be superhero movies.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
