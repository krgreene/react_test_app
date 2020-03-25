import React, { useState, useEffect } from 'react';
import TodoItem from './todoItem';
// import axios from 'axios';

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
    // axios.delete(uri)
    const index = data.findIndex(item => item.uri === uri);
    data.splice(index, 1);
    setTasks(data);
    setStatus(index);
    console.log(status)
  }

  return (
    <div className='todoList'>
      <h1>Todo List</h1>
        {tasks.map((item, index) => (
          <TodoItem item={item} key={index} onDelete={handleDelete} />
        ))}
    </div>    
  );
  
}  

export default TodoList;
