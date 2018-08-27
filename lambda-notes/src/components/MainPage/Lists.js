import React, { Component } from 'react';
import Note from './Note';

const Notes = props => {
    return (
        <div className='notes-container'>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    );
};

export default Notes;