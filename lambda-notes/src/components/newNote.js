import React from 'react';

export const NewNote = ({addNewNote, history}) => {

    let titleInput, textInput;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //I really need to check and make sure neither fields is left blank
        addNewNote({title: titleInput.value, text: textInput.value});
        history.push('/');
    }

    return (
        <div className='col-8 right_side'>
            <div className='row title_bar'>
                <div className='col-4 header_font'>
                    <h4>Create New Note:</h4>
                </div>  
            </div>    
            <div className='row'>
                <div className='col'>
                <form className='new_note_form' onSubmit={handleSubmit}>
                    <input className='new_note_title' ref={title => titleInput = title} placeholder='Title of New Note' autoFocus />
                    <textarea cols='66' rows='18' className='new_note_text' ref={text => textInput = text} placeholder='New Note'></textarea>
                    <input className='save_button' type='submit' />
                    <br/>
                </form>
                </div>
            </div>
        </div>
    )

}