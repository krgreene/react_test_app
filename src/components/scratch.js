import React, { useState } from 'react';
import axios from 'axios';

function AddTodo() {

    function AddItem(props) {
        console.log(props.onAdd);
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('')

        const handleSubmit = () => {
            axios.post('localhost:5000/todo/api/v1.0/tasks', {title, description});
        }

        //   const testSubmit = (event) => {
        //     event.preventDefault();
        //     props.onAdd(title, description);
        //   }

        return (
            <form onSubmit={testSubmit}>
            <input type='text' placeholder='title' onChange={e => setTitle(e.target.value)} />
            <input type='text' placeholder='description'onChange={e => setDescription(e.target.value)} />
            <button type='submit'>Save</button>
            </form>
        )
    }

  const handleAddItem = (title, description) => {
    console.log('Added item', title, description);
  }

  return (
    <div>
      <AddItem onAdd={handleAddItem}/>
    </div>    
  );
  
}  

export default AddTodo;
