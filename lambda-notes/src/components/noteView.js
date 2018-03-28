import React from 'react';


export const noteView = (notes, match) => {
    const note = notes.filter(note => note.id === parseInt(match.params.id))[0];
    return (
        <div className='col-9 right_side'>
            <div className='row title_bar'>
                <div className='col-3 header_font'>
                    <h4>{note.title}</h4>
                </div>
                <div className='col-9 mini_nav'>
                    <a href={`/EditNote/${match.params.id}`}>edit</a>
                    <a href='/' data-toggle="modal" data-target="#deleteModal" >delete</a>
                </div>
            </div>    
            <div className='row'>
                <div className='col note_box'>
                    {note.text}
                </div>
            </div>
        

            {/* Delete Modal code starts here */}
            <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        Are you sure you want to delete this note?
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class="modal_btn del_btn" onClick={() => window.location.href='/'}>Delete</button>
                            <button type="button" class="modal_btn no_btn" data-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}