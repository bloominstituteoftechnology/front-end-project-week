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
    constructor() {
        super();
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
                this is list-container
                <ul>
          {this.state.noteList.map(note => {
            return (
              <NoteCard
                tags={note.tags}
                title={note.title}
                textBody={note.textBody}
              />
            );
          })}
        </ul>
            </div>
        );
    }
}

ListView.defaultProps = {
    noteList: [],
};

export default ListView;