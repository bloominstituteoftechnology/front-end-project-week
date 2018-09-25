import React from 'react';
 import { Link } from "react-router-dom";
 
 
 
 export const NoteView = props => {
     let denoted = props.notes.find(note => note.id === parseInt(props.match.params.id, 10));
     if(props.notes.length > 0) {
         return (
             <div className="Container SingleNoteView">
                 { props.showModal && (
                 <div className="modal-wrap" >
                    <div className="modal-content" >
                        <h3 className="Header">Are you sure you want to delete this?</h3>
                        <div className="modal-btn-wrap" >
                            <Link to=""> <div className="modal-btn-delete" onClick={() =>{props.deleteNote(denoted.id); props.modalToggle();}}  >Delete</div ></Link>
                            <div className="modal-btn-no" onClick={() => props.modalToggle()} >No</div >
                        </div>
                    </div>
                </div> )}
                <div className="view-links" >
                    <Link className="edit-button" to={`/notes/${denoted.id}/edit`} >edit</Link>
                    &nbsp; &nbsp;
                    <div className="delete-link" onClick={() => props.modalToggle()} >delete</div>
                </div>
                 <h3 className="Header">{denoted.title}</h3>
                 <p className="NoteText" >{denoted.text}</p>
             </div>
         )
     } else return (<div>I've got a bad feeling about this...</div>)
     
 }

 export default NoteView;