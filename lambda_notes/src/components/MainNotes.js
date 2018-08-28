import React, { Component } from 'react';
import NotesList from './NotesList';
import './index.css';

export default class MainNotes extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className='notesContainer'>
                <h2 className='header'>Your Notes:</h2>
                <NotesList />
            </div>
        );
    }
}