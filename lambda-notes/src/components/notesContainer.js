import React, {  } from 'react';
import {  Link } from "react-router-dom";
import { SearchBar } from './searchBar';

export const NoteList = props => {
    if(props.searchResults.length > 0) {
        let display = props.searchResults;
    } else {
        let display = props.notes;
    }
    return (
        <div className="notes-wrap" >
            <div className="search-wrap" >
                <h3 className="your-header" >Your Notes:</h3>
                <SearchBar
                    searchQuery={props.searchQuery}
                    handleInputChange={props.handleInputChange}
                    filterNotes={props.filterNotes}
                />
            </div>
            <div className="notes-container" >
            {(props.searchResults.length < 1) ? props.notes.map(note => {
            return ( 
                <Link to={`/notes/${note.id}`} key={note.id} >
                    <div 
                        title={note.title}
                        text={note.text}
                        key={note.id}
                        className="note-wrap"
                    >
                        <h4 className="list-title" >{note.title}</h4>
                        <hr/>
                        <p className="list-text" >{note.text}</p>
                    </div>
                </Link>
            );
            }) : props.searchResults.map(note => {
                return ( 
                    <Link to={`/notes/${note.id}`} key={note.id} >
                        <div 
                            title={note.title}
                            text={note.text}
                            key={note.id}
                            className="note-wrap"
                        >
                            <h4 className="list-title" >{note.title}</h4>
                            <hr/>
                            <p className="list-text" >{note.text}</p>
                        </div>
                    </Link>
                );
                }) }
            </div>

        </div>
    )
}