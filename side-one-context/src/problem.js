import React, { useState } from "react";

const GrandChild = (props) => {
  return (
    <div>
      <h3>GrandChild: </h3>
      <Child brandName={props.brand} /> 
      {/* Child yhan aaya kyuki brandName use kra tha child mae
      toh yhan brandName hi use kra hai. then give the value
      using props.
      this is called the props drillig the solution of this is
      useContext.
      */}
    </div>
  );
};
const Child = (props) => {
  return (
    <div>
      <h2>child : {props.brandName}</h2>
    </div>
  );
};

const App = () => {
  const [brand] = useState("apple");
  return (
    <div>
      <h1>Hello!!!</h1>
      <GrandChild brand={brand} />
    </div>
  );
};

export default App;
