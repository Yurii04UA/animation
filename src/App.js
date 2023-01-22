import { useEffect, useState } from "react";
import "./App.css";
import { AnimatedComponent } from "./components/AnimatedComponent/AnimatedComponent";
import { DATA } from "./constants/DATA";
import { mockData } from "./constants/mockData";

export const App = () => {
  const [cooldown, setCooldown] = useState(5);
  const [count, setCount] = useState(0);
  // const [render, setRender] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count <= mockData.length-2) {
        setCount((prev) => prev + 1);
        console.log(count, mockData.length);
      } else {
        setCount(0)
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [count]);
console.log(DATA)
  return (
    <div className="App">

      {count <= 5 ? (
        <AnimatedComponent
          image={mockData[count].img}
          author={mockData[count].author}
          text={mockData[count].text}
          content={mockData[count].content}
        />
      ) : null}
    </div>
  );
};
