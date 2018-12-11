import React from 'react'
import './Note.css';

const Modal = (props, {handleClose, show, children}) => {
    const showHideClassName = props.show ? 'modal display-flex' : 'modal display-none';
    
    return (
    <div className = "alert-cont">
        <section className = {showHideClassName}>
            <h3>Are you sure you want to delete this?</h3>
            <button onClick = { props.deleteNote }>Delete</button>
            <button onClick = { props.hideModal }>No</button>
        </section>

    </div>
    );
}

export default Modal;