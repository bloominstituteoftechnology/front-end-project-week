import React, { Component } from 'react';

export const EditNote = ({match, history, updateNote, notes}) => {

    let titleInput, textInput;

    const id = match.params.id;
    const handleSubmit = (event) => {
        event.preventDefault();
        updateNote({id: id, title: titleInput.value, text: textInput.value});
        history.push(`/noteview/${match.params.id}`);
    };

    const noteIndex = notes.findIndex(i => i.id === parseInt(id));
    
        return (
            <div className='col-8 right_side'>
                <div className='row title_bar'>
                    <div className='col-4 edit_title header_font' >
                        <h4>Edit Note:</h4>
                    </div>  
                </div>    
                <div className='row'>
                    <div className='col'>
                    <form className='new_note_form' onSubmit={handleSubmit}>
                        <input className='new_note_title' ref={title => titleInput = title} placeholder={notes[noteIndex].title}  autoFocus />
                        
                        
                        <textarea cols='66' rows='18' className='new_note_text' ref={text => textInput = text} placeholder={notes[noteIndex].text}></textarea>
                        <input className='save_button d-flex' type='submit' />
                        <br/>
                    </form>
                    </div>
                </div>
            </div>
        )
    
}

