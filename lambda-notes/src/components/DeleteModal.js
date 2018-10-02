import React, {Fragment}  from 'react';
import './DeleteModal.css';

const DeleteModal = (props) =>{
    return(
        <Fragment>
            <div className="dm-wrapper">
                <h3 className="dm-header">Are you sure you want to Delete Note?</h3>
                <div>
                    <button className="dm-no" onClick={props.abortDelete}>No</button>
                    <button className="dm-yes" onClick={props.deleteNote}>Yes</button>
                </div>
            </div>
        </Fragment>
    )
    

} 

export default DeleteModal;