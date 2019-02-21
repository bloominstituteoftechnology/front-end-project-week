import React from 'react'
import {NotesContext} from '../contexts/NotesProvider'

const Delete = ({id, showModal, closeModal}) =>{
    //display modal based upon the status of showModal in Note.js
    const displayClassName = showModal ? 'modalDisplay' : 'modalHide';

    return(
        <div className={displayClassName}>
            <div className="modalContent">
                <p>Are you sure you want to delete this?</p>
                <div className="modalButtons">
                    <NotesContext.Consumer>
                        {data =>{
                        return <button 
                                className="modalDelete"
                                onClick={()=> {data.actions.deleteNote(id)}}>Delete</button>

                        }}
                    </NotesContext.Consumer>
                    
                    <button className="modalCancel" onClick={closeModal}>No</button>
                </div>
            </div>
      
        </div>
    )
}

export default Delete