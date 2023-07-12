import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducer"; //kuch bhi import kr skte hai because it will import by default.
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []); //todoreducer is the reducer function here.
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {/* abhi takh context khali tha ab yeh value dega. */}
      <Container fluid>
        <h1>todo application with context API and reducer.</h1>
        <Todos />
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
