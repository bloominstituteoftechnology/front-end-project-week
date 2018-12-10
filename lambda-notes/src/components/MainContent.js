import React, { Component } from 'react';
import styled from 'styled-components';
import ListView from './ListView.js'
import { Route } from 'react-router-dom';
import axios from 'axios';
import NoteView from './NoteView.js'
import CreateNote from './CreateNote.js'

const MainContentContainer = styled.div`
    display: table-cell;
    width: 80%;
    vertical-align: top;
    padding-left: 30px;
`

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 1",
                    "textBody": "Sample Body 1",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 2",
                    "textBody": "Sample Body 2",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 3",
                    "textBody": "Sample Body 3",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 1",
                    "textBody": "Sample Body 1",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 2",
                    "textBody": "Sample Body 2",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 3",
                    "textBody": "Sample Body 3",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 1",
                    "textBody": "Sample Body 1",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 2",
                    "textBody": "Sample Body 2",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 3",
                    "textBody": "Sample Body 3",
                },
            ]
        }
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({
                    notes: response.data
                });
            })
            .catch(err => console.log(err));
    }

    addNote = response => {
        window.location.reload();
    }

    render() {
        return (
            <MainContentContainer>
                <Route
                    path='/'
                    exact
                    render={props =>
                        <ListView {...props} notes={this.state.notes} />
                    }
                />
                <Route
                    path={`/notes/:id`}
                    render={props =>
                        <NoteView {...props} />
                    }
                />
                <Route
                    path={`/create`}
                    render={props =>
                        <CreateNote {...props} addNote={this.addNote} />
                    }
                />
            </MainContentContainer>
        )
    }
}

export default MainContent;