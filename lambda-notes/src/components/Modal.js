import React from 'react'
import './Note.css';
import { Link, NavLink } from 'react-router-dom';

const Modal = (props, {handleClose, show, children}) => {
    const showHideClassName = props.show ? 'modal display-flex' : 'modal display-none';
    
    return (
    <div className = "alert-cont">
        <section className = {showHideClassName}>
            <h3>Are you sure you want to delete this?</h3>
            <Link to = "/"><button onClick = { props.deleteNote(props.id) }>Delete</button></Link>
            <button onClick = { props.hideModal }>No</button>
        </section>

    </div>
    );
}

export default Modal;