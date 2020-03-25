import React, { useState } from 'react';
import axios from 'axios';

function AddTodo() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${title}, ${description}`);
        axios.post('localhost:5000/todo/api/v1.0/tasks', {"title":title, "description":description});
    }

    return (
        <div className='todoForm'>
            <h2>New task</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' required onChange={e => setTitle(e.target.value)} />
                <input type='text' placeholder='Description' onChange={e => setDescription(e.target.value)} />
                <button type='submit'>Save</button>
            </form>    
        </div>    
    )
  
}  

export default AddTodo;
