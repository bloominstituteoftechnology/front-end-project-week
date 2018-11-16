import React, { Component } from 'react';
import styled from 'styled-components';

// list view styled components

const ListViewContainer = styled.div`
    padding-top: 50px;
`

const ListHeader = styled.h2`
    color: #4A494A;
    font-size: 1.4rem;
    margin-bottom: 30px;
    font-weight: bold;
`

const NotePreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const NotePreview = styled.div`
    border: 1px solid #C0C0C0;
    background: white;
    margin: 0 20px 30px 0;
    width: 20%;
    height: 190px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const PreviewTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
    width: 100%;
    border-bottom: 1px solid #CACACA;
    padding-bottom: 10px;
    margin-bottom: 10px;
`

const PreviewBody = styled.p`
    font-size: 0.9rem;
`

class ListView extends Component {
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

    render() {
        return (
            <ListViewContainer>
                <ListHeader>Your Notes:</ListHeader>
                <NotePreviewContainer>
                    {this.state.notes.map(note => 
                        <NotePreview note={note}>
                            <PreviewTitle>{note.title}</PreviewTitle>
                            <PreviewBody>{note.textBody}</PreviewBody>
                        </NotePreview>
                    )}
                </NotePreviewContainer>
            </ListViewContainer>
        )
    }
}

export default ListView;