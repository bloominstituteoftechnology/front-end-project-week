import React, {Fragment}  from 'react';

const DeleteModal = (props) =>{
    return(
        <Fragment>
            <h3>Are you sure you want to Delete Note?</h3>
            <button onClick={props.abortDelete}>No</button>
            <button onClick={props.deleteNote}>Yes</button>
        </Fragment>
    )
    

} 

export default DeleteModal;