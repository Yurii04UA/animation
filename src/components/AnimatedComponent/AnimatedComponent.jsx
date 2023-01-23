import { useState } from "react";
import "./styles.css";

export const AnimatedComponent = ({
  image,
  name,
  text,
  userName,
  isAnimate = true,
}) => {
  const formattedText = text?.replace(/https:\/\/[\n\S]+/g, '');

  return (
    <div className="wrapper">
      <div className={isAnimate ? "leftWrapper leftAnimation" : "leftWrapper "}>
        <img src={image} alt={name} />
      </div>
      <div className={isAnimate ? "rightWrapper rightAnimation" : "rightWrapper"}>
        <div className="content">
          <div className="author">
            <h2>{userName}</h2>
            <div>by {name}</div>
          </div>
          <h2>{formattedText}</h2>
        </div>
      </div>
    </div>
  );
};
