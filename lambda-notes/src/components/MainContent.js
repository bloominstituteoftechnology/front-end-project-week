import React, { Component } from 'react';
import styled from 'styled-components';
import ListView from './ListView.js'
import { Route } from 'react-router-dom';

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

    render() {
        return (
            <MainContentContainer>
                <Route
                    path='/'
                    exact
                    render={props =>
                        <ListView props={props} notes={this.state.notes} />
                    }
                />
            </MainContentContainer>
        )
    }
}

export default MainContent;