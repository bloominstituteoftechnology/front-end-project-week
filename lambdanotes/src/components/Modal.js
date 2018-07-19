import React from 'react';
import '../styles/Modal.css';


const Modal = props => {
    return (
        <div>
            <p>Are you sure you want to delete this?</p>
            <button onClick={() => props.delete(props.id)}>Delete</button>            
            <button onClick={() => props.toggle()}>Just Kidding</button>
        </div>
    )
}

export default Modal;