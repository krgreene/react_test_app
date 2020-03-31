import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function TodoItem(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [className, setClassName] = useState('todo');

    Modal.setAppElement('body');

    useEffect(() => {
        if (props.item.done === true || props.item.done === 1) {
            setClassName('todoDone');
        } else {
            setClassName('todo');
        }
    }, [className, props.item.done])

    const onShowModal = () => {
        setTitle(props.item.title);
        setDescription(props.item.description);
        setDone(props.item.done);      
    }

    const dismissModal = () => {
        setModalIsOpen(false);
    }

    const handleChange = (event) => {
        const source = event.target;
        switch(source.id) {
            case 'titleField':
                setTitle(source.value);
                break;
            case 'descriptionField':
                setDescription(source.value);
                break;
            case 'doneField':
                setDone(source.checked);
                break;
            default:
                break;
        }
    }

    const handleSave = (event) => {
        event.preventDefault();
        console.log(done)

        const task = {
            title:title,
            description:description,
            done:done,
            uri:props.item.uri
        };
        dismissModal();
        props.onSave(task);
    }

    const handleDelete = () => {
        props.onDelete(props.item.uri);
    }

    const handleEdit = () => {
        setModalIsOpen(true);
    }
 
    return (
        <div className='todoItem' >
            <h4 className={className} id ={'todo'}>{props.item.title}</h4>
            <p className={className}>{props.item.description}</p>
            <div>
              <button className="deleteButton" onClick={handleDelete} >Delete</button>
              <button className="editButton" onClick={handleEdit}>Edit</button>
            </div>
            <hr />

            <Modal
                className={'modal'}
                // overlayClassName={'modalOverlay'}
                isOpen={modalIsOpen}
                onAfterOpen={onShowModal}
                onRequestClose={dismissModal}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                shouldReturnFocusAfterClose={true} >                
                <h2>Edit Task</h2>
                <form onSubmit={handleSave} >
                    <div>Title:<br />
                    <input name={'Title'} className={'text'} type='text' id='titleField' defaultValue={title} onChange={handleChange} /></div>
                    <div>Description:<br />
                    <textarea className={'text'} rows={2} id='descriptionField' defaultValue={description} onChange={handleChange} /></div>
                    <div>Done: <input className={'checkbox'} type='checkbox' id='doneField' defaultChecked={done} onChange={handleChange} /></div>
                    <div><button type='submit'>Save</button></div>
                </form>
            </Modal>
        </div>
    )
}

export default TodoItem;