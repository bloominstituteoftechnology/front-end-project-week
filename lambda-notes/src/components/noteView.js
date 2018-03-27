import React from 'react';


export const noteView = (notes, match) => {
    const note = notes.filter(note => note.id === parseInt(match.params.id))[0];
    return (
        <div className='col-9 right_side'>
            <div className='row title_bar'>
                <div className='col-3'>
                    <h4>{note.title}</h4>
                </div>
                <div className='col-9 mini_nav'>
                    <a href='#'>edit</a>
                    <a href='#'>delete</a>
                </div>
            </div>    
            <div className='row'>
                <div className='col note_box'>
                    {note.text}
                </div>
            </div>
        </div>
    )
}