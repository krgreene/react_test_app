import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TodoList from './components/todoList';

function App() {

  const [data, setData] = useState([])
  
  async function fetchData(url) {
    const result = await axios(url);
    setData(result.data.task);
    // console.log(result.data.task)
  }

  useEffect(() => {
    fetchData('http://localhost:5000/todo/api/v1.0/tasks');
  }, []);

  return (
    <div className='app'>
      <TodoList data={data} />      
    </div>    
  );
  
}  

export default App;
