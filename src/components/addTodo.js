import React, { useState } from 'react';
import axios from 'axios';

function AddTodo(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const handleChange = (event) => {
        if (event.target.placeholder === 'Title') {
            setTitle(event.target.value);
        } else {
            setDescription(event.target.value);
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            title: title,
            description: description
        }
        axios.post('http://localhost:5000/todo/api/v1.0/tasks', 
            task)
            .then((response) => {
                if (response.request.status === 201) {
                    document.getElementById('todoForm').reset();
                    setStatus('Your data has been saved.');
                    props.onAdd(response.data.task, status);                    
                }
            })
            .catch((error) =>{
                console.log(error);
                setStatus('Attempted to save your data but got an error.');
                props.onAdd(null, status);
            });
    }


    return (
        <div className='todoForm'>
            <h2>New task</h2>
            {/* <h4>{status}</h4> */}
            <form id={'todoForm'} onSubmit={handleSubmit}>
                <div><input className={'text'} type='text' placeholder='Title' required onChange={handleChange} /></div>
                <div><textarea className={'text'} rows={2} placeholder='Description' onChange={handleChange} /></div>
                <div><button type='submit'>Add</button></div>                
            </form>    
        </div>    
    )
  
}  

export default AddTodo;
