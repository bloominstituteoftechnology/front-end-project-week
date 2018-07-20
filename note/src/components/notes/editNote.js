import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardForm from './cardform';

const EditNote = ({match, notes, handleInput,changeNote, text, title, history}) => {
    const editNT = notes.filter(note => note.id === Number(match.params.id))
    return(
        <div className="notes">
            <h2>Edit Note:</h2>        
            <CardForm text={text} title={title} 
                handleInput={handleInput} 
                onSubmit={(e) => {
                    changeNote(e, editNT[0].id);
                    history.push(`/note/${editNT[0].id}`);
                }}
            />
        </div>
    )
}

export default EditNote;