import React, {useState, useEffect} from 'react';
import { Button, FormControl,InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");
   
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
  }, [])

   const addTodo = (event) => {
     event.preventDefault();

     db.collection('todos').add({
       todo: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
     setInput('');
   }

  return (
    <div className="App">
      <h1 style={{margin: "20px"}}>To-Do List </h1>
      <FormControl>
        <InputLabel>✅ Write a Todo </InputLabel>
        <Input  type="text" 
                value={input}
                style={{width: "500px"}}
                onChange={event => setInput(event.target.value)}/>
      </FormControl>
          
          <Button type="submit" 
                  disabled={!input}
                  variant="contained" 
                  color="primary"
                  style={{margin: "10px", marginLeft: "30px"}}
                  onClick={addTodo}> Add todo
          </Button>


      <ul>
        {todos.map(todo => (
          <Todo todo={todo} key={todo.id}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
