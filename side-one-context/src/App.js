import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";
import CheckContext from "./CheckContext";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => { //yhan bar bar props drill nhi krna pedega we only use provider.
  return(
    <Context.Consumer>
      {context => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mName}</p>
          <h3>Mission Status: {context.data.accept}</h3>
         <button onClick={context.isMissionAccepted}>Accept Mission</button>
       <CheckContext />

        </Fragment>
      )}
    </Context.Consumer>
  )
};


const App=() =>{
  return (
    <div>
      <h1>Contex API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;


//step 1:- create context.
//step 2:- create provider
//step 3:- use the provider in the consumer.

// ho kya rha hai?
// ho yeh rha hai sbse phele context banaya context.js mae
// fher provider.js mae packageContext banyaya jisme .provider lagaya return statement mae 
// or props.children kr dia
// esse kya hoga jb bhi hum provider ka use krenge aage toh eske and jo jo children honge 
// sb data le skte hai.

