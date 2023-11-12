import { useState } from "react";

const Part1D = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAllClicks] = useState([]);
    const [total, setTotal] = useState(0);
  
    const handleLeftClick = () => {
      setAllClicks(allClicks.concat("L"));
      setLeft(left + 1);
      setTotal(left + right);
    };
  
    const handleRightClick = () => {
      setAllClicks(allClicks.concat("R"));
      setRight(right + 1);
      setTotal(left + right);
    };
  
    return (
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks && allClicks.join(" ")}</p>
        <p>Total: {total}</p>
      </div>
    );
};

export default Part1D;
