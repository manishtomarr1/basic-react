import React, { useContext, useState } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.type";

const TodoForm = () => {
    const [todoString, setTodoString] = useState("")
    const {dispatch} = useContext(TodoContext)

    const handelSubmit = e =>{
        e.preventDefault()
        if(todoString===""){
            return alert("add todo")
        }
        const todo={
            todoString,
            id:v4()
        }

        dispatch({
            type:ADD_TODO,
            payload:todo
        })
setTodoString("")
    }
  return (
    <Form onSubmit={handelSubmit} style={{marginTop:"100px",position: "none",}}>
      <FormGroup>
        <InputGroup>
        <Input
          type="text"
          name="todo"
          id="todo"
          placeholder="your next todo"
          value={todoString}
          onChange={(e) => setTodoString(e.target.value)}
          //TODO: value ,onChange
        />
       <div>
          <Button
            color="warning"
            //TODO onclick
          >Add</Button>
        </div>
        </InputGroup>
       
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
