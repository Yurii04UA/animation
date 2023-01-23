import { useEffect, useState } from "react";
import "./App.css";
import { AnimatedComponent } from "./components/AnimatedComponent/AnimatedComponent";
import { DATA, USERS } from "./constants/DATA";
import { mockData } from "./constants/mockData";

export const App = () => {
  const [cooldown, setCooldown] = useState(5);
  const [count, setCount] = useState(0);
  // const [render, setRender] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count <= mockData.length-2) {
        setCount((prev) => prev + 1);
      } else {
        setCount(0)
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [count]);
console.log(USERS)
  return (
    <div className="App">

      {count <= 5 ? (
        <AnimatedComponent
          image={USERS[count].url}
          name={USERS[count].name}
          text={USERS[count].text}
          userName={USERS[count].username}
        />
      ) : null}
    </div>
  );
};
