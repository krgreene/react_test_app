import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddTodo from './addTodo';
import TodoItem from './todoItem';

function TodoList(props) {

  let data = props.data;

  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(
    () => {
      setTasks(data);      
    }, [data]
  );
  

  const handleDelete = (uri) => {
    axios.delete(uri)
      .then((response) => {
        if (response.data.result === true) {
          const index = data.findIndex(item => item.uri === uri);
          const label = data[index].title;
          data.splice(index, 1);
          setTasks(data);
          setStatus(`Deleted task with title: ${label}`);
        }
      })
      .catch((error) =>{
          console.log(error);
          setStatus('Error deleting item!');
      });    
  }

  const handleAdd = (newItem, message) => {
    if (newItem !== null) {
      data.push(newItem);
      setTasks(data);
    }
    setStatus(message);
  }

  return (
    <div className='todoList'>
      <h1>Todo List</h1>
      <h4>{status}</h4>
        {tasks.map((item, index) => (
          <TodoItem item={item} key={index} onDelete={handleDelete} />
        ))}
      <AddTodo onAdd={handleAdd} />
    </div>    
  );
  
}  

export default TodoList;
