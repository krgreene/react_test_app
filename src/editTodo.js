import React, { useState } from 'react';
import Modal from 'react-modal';

function EditTodo(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const titleField = React.createRef();
    const descriptionField = React.createRef();
    const doneField = React.createRef();

    Modal.setAppElement('body');

    const onShowModal = () => {
        
    }

    const dismissModal = () => {
        setModalIsOpen(false);
    }

    const handleChange = (event) => {
        const source = event.target;
        switch(source.ref) {
            case titleField:
                setTitle(source.value);
                break;
            case descriptionField:
                setDescription(source.value);
                break;
            case doneField:
                setDone(source.value);
                break;
            default:
                break;
        }
    }

    const handleSave = (event) => {
        event.preventDefault();
        done === 1? setDone(true): setDone(false);

        const task = {
            id:props.item.id,
            title:title,
            description:description,
            done:done
        };
        dismissModal();
        props.onSaveEdit(task);
    }

    return (
        <div className='editTodo'>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={onShowModal}
                onRequestClose={dismissModal}
                shouldCloseOnEsc={true}
                shouldReturnFocusAfterClose={true} >                
                <h2>Edit Todo</h2>
                <form id={'editForm'} onSubmit={handleSave} >
                    <input label={'Title: '} type='text' ref={titleField} value={props.item.title} onChange={handleChange} />
                    <input label={'Description: '} type='text' ref={descriptionField} value={props.item.description} onChange={handleChange} />
                    <input label={'Done: '} type='checkbox' ref={doneField} value={props.item.done} onChange={handleChange} />
                    <button type='submit'>Save</button> 
                </form>
            </Modal>
        </div>
    )
}

export default EditTodo;