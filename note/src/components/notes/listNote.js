import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './card';
import './notes.css';

const Notes = ({notes}) => {
    return (
        <div className="notes">
            <h1>Your Note: </h1>
            <div className="notes__flex">
                {notes.map(note => (<Card note = {note} key={note.id}/>  ))}
            </div>
        </div>
        
        
    )
}

export default Notes;
