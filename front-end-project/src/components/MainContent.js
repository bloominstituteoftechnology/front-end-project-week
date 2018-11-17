import React, { Component } from 'react';
import styled from 'styled-components';
import ListView from './ListView.js'
import { Route } from 'react-router-dom';
import axios from 'axios';
import NoteView from './NoteView.js'

const MainContentContainer = styled.div`
    display: table-cell;
    width: 80%;
    vertical-align: top;
    padding-left: 30px;
`

class MainContent extends Component {
    constructor(props){
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

    render() {
        return (
            <MainContentContainer>
                <Route 
                    path='/' 
                    exact
                    render={props => 
                        <ListView {...props} notes={this.state.notes}/>
                    } 
                />
                <Route
                    path={`/notes/:id`}
                    render={props =>
                        <NoteView {...props}/>
                    }
                />
            </MainContentContainer>
        )
    }
}

export default MainContent;