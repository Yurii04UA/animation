import { useEffect, useState } from "react";
import "../../App.css";
import { AnimatedComponent } from "../AnimatedComponent/AnimatedComponent";
import { mockData } from "../../constants/mockData";

export const AppOld = () => {
  const [cooldown, setCooldown] = useState(5);
  const [count, setCount] = useState(0);
  // const [render, setRender] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count <= mockData.length) {
        setCount((prev) => prev + 1);
        console.log(count, mockData.length);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="App">
      {mockData.map((elem) => {
        let isPlayAnimate = false;
        if (elem.id === count) isPlayAnimate = true;
        return (
          <AnimatedComponent
            isAnimate={isPlayAnimate}
            image={elem.img}
            author={elem.author}
            text={elem.text}
            content={elem.content}
          />
        );
      })}
    </div>
  );
};
