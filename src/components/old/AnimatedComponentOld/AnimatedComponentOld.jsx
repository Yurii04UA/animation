import { useState } from "react";
import "./styleOld.css";

export const AnimatedComponentOld = ({
  image,
  author,
  text,
  content,
  isAnimate = true,
}) => {

  return (
    <div className="wrapper">
      <div className={isAnimate ? "leftWrapper leftAnimate2" : "leftWrapper2 "}>
        <div className="top">top</div>
        <p>{image}</p>
        <div className="bottom">bottom</div>
      </div>
      <div className={isAnimate ? "rightWrapper rightAnimate" : "rightWrapper"}>
        <div className="top">{author}</div>
        <p>{content}</p>
        <div className="bottom">{text}</div>
        {/* <img className='leftImg' src={range3} alt="" /> */}
      </div>
    </div>
  );
};
