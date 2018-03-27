import React from 'react';

export const newNote = (addNote) => {

    let titleInput, textInput;
    
    return (
        <div className='col-9 right_side'>
            <div className='row title_bar'>
                <div className='col-3'>
                    <h4>Create New Note:</h4>
                </div>  
            </div>    
            <div className='row'>
                <div className='col'>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    addNote({title: titleInput, text: textInput});
                }}>
                    <input className='new_note_title' ref={title => titleInput = title} placeholder='Title of New Note' autoFocus />
                    <input className='new_note_text' ref={text => textInput = text} placeholder='New Note Text' />
                </form>
                </div>
            </div>
        </div>
    )

}