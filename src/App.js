import "./App.css";
import "./";
import Input from "./component/input/Input";
import Button from "./component/button/Button";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const increment = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };
  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <Button text="-" actionOnClick={decrement} />
      <Input number={number} />
      <Button text="+" actionOnClick={increment} />
    </>
  );
}

export default App;
