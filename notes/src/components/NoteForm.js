import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const FormContainer = styled.form`
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
    color: rgb(32, 33, 36);
    width: 472px;
    height: 46px;
    margin: 32px auto 16px auto;
    position: relative;
    input {
        border: none;
        height: 46px;
        padding: 12px 16px;
        font-size: 14px;
        line-height: 20px;
        outline: none;
        border-radius: 8px;
        background: transparent;
        width: 100%;
        ::placeholder {
            color: #202124;
        }
    }
    .title {
        font-size: 15px;
        color: #202124;
        font-weight: 600;
        letter-spacing: 0.9px;
        line-height: 24px;
        ::placeholder{
            color: #757575;
            font-size: 16px;
        }
    };
    .title-input {
        position: relative;
        display: none;
        svg {
            position: absolute;
            right: 16px;
            top: 12px;
            opacity: .54;
            :hover {
                opacity: 1;
            }
        }
    };
    :focus-within {
        height: 169px;
        .title-input{display: flex};
        .form-actions{display: flex};
        .note-actions {
            display: none;
        };
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
    }
    .form-actions {
        position: absolute;
        z-index: 3;
        width: 100%;
        bottom: 12px;
        display: flex;
        justify-content: space-between;
        display: none;
        padding: 0px 16px;
        button {
            font-size: 15px;
            font-weight: 600;
            user-select: none;
            outline: none;
            cursor: pointer;
            padding: 8px 24px;
            border: none;
            background-color: transparent;
            border-radius: 8px;
            :hover {
                background-color: rgba(0,0,0,.1);
            }
        }
    }
`;

const NoteActions = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
        opacity: .54;
        height: 100%;
        margin-right: 25px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
`;

const NoteForm = ({onSubmit, history, id=false}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    let titleRef = null;
    let bodyRef = null;
    let closeRef = null;
    let addRef = null;

    const blurAll = () =>  {
        titleRef.blur()
        bodyRef.blur()
        closeRef.blur()
        addRef.blur()
    }

    return (
        <FormContainer
            onSubmit={e => {
                e.preventDefault();
                if(id) {
                    onSubmit(title, body, id, history);

                    setTitle('');
                    setBody('');
                    blurAll();
                    return;
                }
                onSubmit(title, body, history);
                setTitle('');
                setBody('');
                blurAll();
            }}
        >
            <div className="title-input">
                <input ref={ref => titleRef = ref} value={title}  onChange={e => setTitle(e.target.value)} placeholder='Title' className="title" required/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill="#202124" d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z"/>
                </svg>
            </div>
            <div className="initial-input">
                <input ref={ref => bodyRef = ref} value={body}  onChange={e => setBody(e.target.value)}  placeholder='Take a note...' className="text-body" required/>
                <NoteActions className='note-actions'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.64 4.75L20 6.11l-7.79 7.79-1.36-1.36 7.79-7.79m0-2c-.51 0-1.02.2-1.41.59l-7.79 7.79c-.78.78-.78 2.05 0 2.83l1.36 1.36c.39.39.9.59 1.41.59.51 0 1.02-.2 1.41-.59l7.79-7.79c.78-.78.78-2.05 0-2.83l-1.35-1.35c-.39-.4-.9-.6-1.42-.6zM7 14.25c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/></svg>
                </NoteActions>
            </div>
            <div className="form-actions">
                <button ref={ref => closeRef = ref} type="button" onClick={() => blurAll()}>Close</button>
                <button ref={ref => addRef = ref} type="submit">Add</button>
            </div>
        </FormContainer>
    );
}

export default NoteForm;