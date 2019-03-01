import React from 'react';
import { Link } from "react-router-dom"; 
 
const NoteView = props => {
     let deleted = props.notes.find(note => note.id === parseInt(props.match.params.id, 10));
     if(props.notes.length > 0) {
         return (
             <div className="Container SingleNoteView">
                 { props.showModal && (
                 <div className="modal-wrap" >
                    <div className="modal-content" >
                        <h3 className="Header ModalHeader">Are you sure you want to delete this?</h3>
                        <div className="modal-buttons" >
                            <Link to="/notes"> 
                            <div className="delete-button" 
                            onClick={()=>{props.deleteNote(deleted.id); props.modalToggle();}}>Delete</div >
                            </Link>
                            <div className="no-button" onClick={() => props.modalToggle()}>No</div >
                        </div>
                    </div>
                </div> )}
                <div className="view-links" >
                    <Link className="edit-button" to={`/notes/${deleted.id}/edit`}>edit</Link>
                    &nbsp; &nbsp;
                    <div className="delete-link" onClick={() => props.modalToggle()}>delete</div>
                </div>
                 <h3 className="Header">{deleted.title}</h3>
                 <p className="NoteText" >{deleted.content}</p>
             </div>
         )
     }
 }

 export default NoteView;