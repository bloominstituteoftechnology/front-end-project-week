import React from 'react';
import {Link} from 'react-router-dom';

export const NoteView = ({match, history, notes, deleteNote}) => {
    
    const note = notes.filter(note => note.id === parseInt(match.params.id))[0];
    
    const handleDeleteClick= (event) => {
        event.preventDefault();
        deleteNote(note); 
        history.push('/');
    }
    return (
        <div className='col-8 right_side'>
            <div className='row title_bar'>
                <div className='col-3 header_font'>
                    <h4>{note.title}</h4>
                </div>
                <div className='col-9 mini_nav'>
                    <Link to={`/EditNote/${match.params.id}`} >edit</Link>
                    <a href='/' data-toggle="modal" data-target="#deleteModal" >delete</a>
                </div>
            </div>    
            <div className='row'>
                <div className='col note_box'>
                    {note.text}
                </div>
            </div>
        

            {/* Delete Modal code starts here */}
            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        Are you sure you want to delete this note?
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="modal_btn del_btn" data-dismiss="modal" onClick={handleDeleteClick}>Delete</button>
                            <button type="button" className="modal_btn no_btn" data-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}