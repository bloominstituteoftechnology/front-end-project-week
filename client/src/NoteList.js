import React, { Component } from 'react';
import './index.css';
import NoteCard from './NoteCard';

export const Header = (props) =>{
    return(
        <div className="main-container-header single-note-header">
            <h2>{props.text}</h2>
        </div>
    )
}
class NoteList extends Component {
    render() {
        return (
            <div className="notelist-wrapper">
                <NoteCard text="Your Notes"/>
            </div>
        );
    }
}

export default NoteList;
