import React, { useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";

const ListItem = ({ index }) => {
  const [isHowered, setIsHowered] = useState(false);
  const trailer = "https://player.vimeo.com/video/615614447?autoplay=1&amp;h=3635f34633";

  return (
    <div
      className="listItem"
      style={{ left: isHowered && index * 225 - 50 + index * 5 }}
      onMouseEnter={() => setIsHowered(true)}
      onMouseLeave={() => setIsHowered(false)}
    >
      <img
        src="https://images2.alphacoders.com/589/thumbbig-589553.webp"
        alt=""
      />

      {isHowered && (
        <>
        {/* <video src="https://player.vimeo.com/video/76979871?autoplay=1" autoPlay={true} loop /> */}
        {/* <iframe src="https://www.youtube.com/embed/BuA8CF7EBK4?rel=0&amp;autoplay=1" title="c" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

          {/* <iframe src="https://player.vimeo.com/video/291766127?autoplay=1?background=1 "frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
          <iframe src="https://player.vimeo.com/video/291766127?h=25e048e2fc&autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  ></iframe>

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownAltOutlined />
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
