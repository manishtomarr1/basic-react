import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const handelReset = () => {
    setCount(0);
  };

  const handelInc = () => {
    if (count >= 10) {
      return
    } else {
      setCount(count + 1);
    }
  };

  const handelDec = () => {
    if(count<=0){
      return
    }
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter using State/Hooks.</h1>
      <h1>Current Value {count}</h1>
      <button onClick={handelReset}>Reset Counter</button>
      <button onClick={handelInc}>Inc Counter</button>
      <button onClick={handelDec}>Dec Counter</button>
    </div>
  );
};

export default App;
