import React, { Component } from 'react';
import axios from 'axios';
import './ListView.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import NoteCard from './NoteCard';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteList: [],
        };
    }

    componentDidMount() {
        const endpoint = 'https://killer-notes.herokuapp.com/note/get/all';
    
        axios
        .get(endpoint)
        .then(response => {
          this.setState({ noteList: response.data });
        })
        .catch(error => {
          console.log('Error: ', error);
        });
    }

    render() {
        return (
            <div className="list-container">
                <h3 className="notes-title">Your Notes:</h3>
                <div className="notes-top-container">
                    <ul className="notes-container">
                    {this.state.noteList.map(note => {
                        return (
                        <NoteCard
                            tags={note.tags}
                            title={note.title}
                            textBody={note.textBody}
                            key={note.title + note.textBody}
                        />
                        );
                    })}
                    </ul>                    
                </div>
 
            </div>
        );
    }
}

export default ListView;