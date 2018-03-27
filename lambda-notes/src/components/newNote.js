import React from 'react';

export const newNote = (addNote) => {

    let titleInput, textInput;
    console.log(addNote);
    return (
        <div className='col-9 right_side'>
            <div className='row title_bar'>
                <div className='col-4'>
                    <h4>Create New Note:</h4>
                </div>  
            </div>    
            <div className='row'>
                <div className='col'>
                <form className='new_note_form' onSubmit={(event) => {
                    event.preventDefault();
                    addNote({title: titleInput.value, text: textInput.value});
                    window.location.href='/';
                }}>
                    <input className='new_note_title' ref={title => titleInput = title} placeholder='Title of New Note' autoFocus />
                    
                    
                    <textarea cols='66' rows='18' className='new_note_text' ref={text => textInput = text} placeholder='New Note'></textarea>
                    <input className='save_button d-flex' type='submit' />
                    <br/>
                </form>
                </div>
            </div>
        </div>
    )

}