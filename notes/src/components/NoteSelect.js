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
            checked={checked}
        >
            <span className="check">
                <input
                    type="checkbox" 
                    checked={checked}
                    onChange={e => {
                        e.preventDefault();
                        setChecked(!checked);
                        !checked ? noteChecked(note._id) : noteUnChecked(note._id)
                    }}
                />
                {
                    checked
                    ? <i className="far fa-check-square"></i>
                    : <i className="far fa-square"></i>
                }
            </span>
            <div className="title">{note.title}</div>
            <MarkdownRenderer className="body" markdown={note.textBody}/>
        </NoteContainer>
    );
}

export default NoteSelect;


const NoteContainer = styled.div`
    span.check { 
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        line-height: 24px;
        z-index: 2;
        left: -10px;
        top: -10px;
        height: 24px;
        width: 24px;
        input {
            display: none;
        }
        i {
            font-size: 24px;
        }
        .fa-square{
            background: #F5F5F5;
        }
        .fa-check-square{
            color: #F5B504;
            background: white;
        }

    }
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
            left: 3px;
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
