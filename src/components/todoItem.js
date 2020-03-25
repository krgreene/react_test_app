import React from 'react';

function TodoItem(props) {

    const handleDelete = () => {
        props.onDelete(props.item.uri);
    }

    return (
        <div className='todoItem'>
            <h4>{props.item.title}</h4>
            {props.item.description}
            <div>
              <button className="deleteButton" onClick={handleDelete} >Delete</button>
              <button className="editButton" >Edit</button>
            </div>
        </div>
    )
}

export default TodoItem;