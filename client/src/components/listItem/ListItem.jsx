import React, { useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";

import {Films} from '../../data/Film'

const ListItem = ({ index }) => {
  console.log(Films)
  const [isHowered, setIsHowered] = useState(false);
  /* const trailer = "https://player.vimeo.com/video/615614447?autoplay=1&amp;h=3635f34633"; */

  const trailer = 291766127;
  const trailer2 = 24720957;

  return (
    <div
      className="listItem"
      style={{ left: isHowered && index * 225 - 50 + index * 5 }}
      onMouseEnter={() => setIsHowered(true)}
      onMouseLeave={() => setIsHowered(false)}
    >
      {/* {
        Films.map(item => {
          return (
            console.log(item.year)
          )
        })
 */}
      }


      <img
        src="https://images2.alphacoders.com/589/thumbbig-589553.webp"
        alt=""
      />

      {isHowered && (
        <>
          {/* <video src="https://player.vimeo.com/video/76979871?autoplay=1" autoPlay={true} loop /> */}

          {/* <iframe src="https://player.vimeo.com/video/291766127?h=25e048e2fc&autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  ></iframe> */}

          <iframe src={`https://player.vimeo.com/video/${trailer2}?h=25e048e2fc&autoplay=1&title=0&byline=0&portrait=0`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  ></iframe>

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className="limit">+16</span>
              <span>2020</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quidem iure doloribus nesciunt assumenda
              perspiciatis iste.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
      
    </div>
  );
};

export default ListItem;
