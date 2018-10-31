import React from 'react';
import styled from 'styled-components';
import MarkdownRenderer from 'react-markdown-renderer';


const Note = ({ note, noteClicked }) => {
    return (
        <NoteContainer onClick={noteClicked}>
            <div className="edit-icon"><i className="fas fa-pen-alt"></i></div>
            <div className="title">{note.title}</div>
            {/* <div className="body">{note.textBody}</div> */}
            <MarkdownRenderer className="body" markdown={note.textBody}/>
        </NoteContainer>
    );
}

export default Note;


const NoteContainer = styled.div`
    width: 100%;
    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
    color: rgb(32, 33, 36);
    margin: 8px;
    position: relative;
    padding: 12px 16px;
    font-size: 14px;
    min-height: 150px;
    display: inline-block;
    cursor: pointer;
    @media (min-width: 625px) {
        width: 240px;
    }
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
        overflow: scroll;
    };
    .edit-icon {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #000000;
        color: white;
        text-align: center;
        font-size: 12px;
        line-height: 25px;
        padding-left: 2px;
        position: absolute;
        top: -7px;
        left: -7px;
        opacity: 0;
    }
    :hover {
        .edit-icon {
            transition-duration: .418s;
            opacity: 1;
        };
        transition-duration: .218s;
        transition-timing-function: ease-in;
        transition-property: background,opacity,box-shadow,transform;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
    };
`;
