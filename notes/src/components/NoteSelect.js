import React, { useState } from 'react';
import styled from 'styled-components';
import MarkdownRenderer from 'react-markdown-renderer';


const NoteSelect = ({ note, noteChecked, noteUnChecked }) => {

    const [checked, setChecked] = useState(false);

    return (
        <NoteContainer
            onClick={e => {
                e.preventDefault();
                setChecked(!checked);
                !checked ? noteChecked(note._id) : noteUnChecked(note._id)
            }}
        >
            <div className="edit-icon">
                <input 
                    type="checkbox" 
                    name="note"
                    checked={checked}
                    onChange={e => {
                        e.preventDefault();
                        setChecked(!checked);
                        !checked ? noteChecked(note._id) : noteUnChecked(note._id)
                    }}
                ></input>
                <span className="checkbox-cover"></span>
            </div>
            <div className="title">{note.title}</div>
            <MarkdownRenderer className="body" markdown={note.textBody}/>
        </NoteContainer>
    );
}

export default NoteSelect;


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
    user-select: none;
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
        width: 24px;
        height: 24px;
        line-height: 25px;
        border-radius: 50%;
        background-color: rgb(32, 33, 36);
        color: white;
        text-align: center;
        position: absolute;
        top: -7px;
        left: -7px;
        opacity: 1;
        input {
            position: absolute;
            top: 3px;
            left: 4px;
        }
        .checkbox-cover {
            position: absolute;
            z-index: 3;
            width: 100%;
            height: 100%;
            background: transparent;
        }
    }
    :hover {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
    };
`;
