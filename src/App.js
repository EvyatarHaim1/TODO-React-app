import React, {useState} from 'react';
import { Button, FormControl,InputLabel, Input } from '@material-ui/core';
import './App.css';

function App() {

   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");
   
   const addTodo = (event) => {
     event.preventDefault();
     setTodos([...todos, input]);
     setInput('');
   }

  return (
    <div className="App">
      <h1>To Do app </h1>
      <FormControl>
        <InputLabel>✅ Write a Todo </InputLabel>
        <Input  type="text" 
                value={input}
                onChange={event => setInput(event.target.value)}/>
      </FormControl>
          
          <Button type="submit" 
                  disabled={!input}
                  variant="contained" 
                  color="primary"
                  onClick={addTodo}> Add todo
          </Button>


      <ul>
        {todos.map(todo => (
         <li>{todo} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
