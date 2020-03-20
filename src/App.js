import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './App.css';

function AddItem(props) {
  console.log(props.onAdd);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    axios.post('localhost:5000/todo/api/v1.0/tasks', {title, description});
  }

  const testSubmit = (event) => {
    event.preventDefault();
    props.onAdd(title, description);
  }

  return (
    <form onSubmit={testSubmit}>
      <input type='text' placeholder='title' onChange={e => setTitle(e.target.value)} />
      <input type='text' placeholder='description'onChange={e => setDescription(e.target.value)} />
      <button type='submit'>Save</button>
    </form>
  )
}

function editItem() {
  
}

function deleteItem(uri) {
  // axios.delete(uri)
}

// function saveItem() {
  
// }

function App() {
  const [data, setData] = useState([{title: 'Hello', description: 'I am here'}]);

  async function fetchData(url) {
    const result = await axios(url);
    setData(result.data);
  }

  useEffect(() => {
    // fetchData('http://localhost:5000/todo/api/v1.0/tasks');
  }, []);

  const handleAddItem = (title, description) => {
    console.log('Added item', title, description);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            {item.description}
            <div>
              <button className="deleteButton" onClick={deleteItem(index)}>Delete</button>
              <button className="editButton" onClick={editItem}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
      <AddItem onAdd={handleAddItem}/>
    </div>    
  );
  
}  

export default App;
