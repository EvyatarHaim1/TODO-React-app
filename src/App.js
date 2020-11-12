import React, {useState} from 'react';
import './App.css';

function App() {

   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");
   
   const addTodo = (event) => {
     event.preventDefault();
   setTodos([...todos, input]);
   }

  return (
    <div className="App">
      <h1>To Do app </h1>
      <form>
          <input  type="text" 
                  value={input}
                  onChange={event => setInput(event.target.value)}/>
          <button type="submit"
                  onClick={addTodo}>Add todo</button>
      </form>

      <ul>
        {todos.map(todo => (
         <li>{todo} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
