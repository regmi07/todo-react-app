import { useState,useEffect } from 'react';
import './App.css';
import {Input,Button,InputLabel,FormControl} from '@material-ui/core';
import Todo from './Todo';
import {db} from './firebase';
import firebase from 'firebase';

function App() {
  const [todoInput,setTodoInput] = useState('');
  const [todoList,setTodoList] = useState([]);

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodoList(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: todoInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodoList([...todoList,todoInput]);
    setTodoInput('');
  }

  return (
    <div className="App">
      <h1>todo</h1>
      <form>
        <FormControl>
          <InputLabel>write a todo</InputLabel>
          <Input id="outlined-basic" label="todo" variant="outlined" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        </FormControl>
        <Button disabled={!todoInput} variant="contained" color="primary" size="large" type="submit" onClick={addTodo}>
          add todo
        </Button>
      </form>
      <ul>
        {todoList.map((todo) => {
          return <Todo todo={todo}/>
        })}
      </ul>
    </div>
  );
}

export default App;
