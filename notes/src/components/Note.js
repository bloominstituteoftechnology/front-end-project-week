import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
    width: 240px;
    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
    color: rgb(32, 33, 36);
    margin: 8px;
    position: relative;
    padding: 12px 16px;
    font-size: 14px;
    min-height: 150px;
    display: inline-block;
    :hover {
        transition-duration: .218s;
        transition-timing-function: ease-in;
        transition-property: background,opacity,box-shadow,transform;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
    };
    .title {
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.1px;
    };
    .body {
        font-size: 14px;
        letter-spacing: 0.2px;
        padding-top: 4px;
        padding-bottom: 12px;
    };

`;

const Note = ({ note, noteClicked }) => {
    return (
        <NoteContainer onClick={noteClicked}>
            <div className="title">{note.title}</div>
            <div className="body">{note.textBody}</div>
        </NoteContainer>
    );
}

export default Note;
