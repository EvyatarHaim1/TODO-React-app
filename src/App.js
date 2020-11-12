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
      console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => doc.data().todo));
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
          <Todo text={todo} key={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
