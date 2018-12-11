
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

const NotePreview = styled(Link)`
    border: 1px solid #C0C0C0;
    background: white;
    margin: 0 20px 30px 0;
    width: 20%;
    height: 190px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
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
    font-size: 1.6;
    line-height: 1.6;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
`

class ListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListViewContainer>
                {this.props.loading ? <ListHeader>Loading...</ListHeader> : <ListHeader>Your Notes:</ListHeader>}
                <NotePreviewContainer>
                    {this.props.notes.map(note =>
                        <NotePreview to={`/notes/${note._id}`}>
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
