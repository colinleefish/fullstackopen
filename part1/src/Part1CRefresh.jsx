import { useState } from "react";

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Part1CRefresh = () => {
  const [counter, setCounter] = useState(0);

  const incraseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter} />
      <Button onClick={incraseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </>
  );
};

export default Part1CRefresh;
