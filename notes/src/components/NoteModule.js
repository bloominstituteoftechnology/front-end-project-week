import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import DeleteConfirm from './DeleteConfirm';

const NoteModule = ({
    note, 
    getNote,
    deleteNote,
    updateNote,
    activeNoteHandler,
    history, 
    match
}) => {

    const [gotNote, setGotNote] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        if(gotNote) return;

        const { id } = match.params;
        getNote(id);
        setGotNote(true);
    });
    return (
        <NoteModuleContainer>
            <NoteModuleForm onSubmit={e => {
                updateNote(note);
                history.push('/');
            }}>
                <div className="close-icon" onClick={e => {
                    e.preventDefault();
                    history.push('/');
                }}
                ><i className="fas fa-times"></i></div>
                <input 
                    className="title" 
                    type="text" 
                    name="title"
                    value={note.title}
                    onChange={activeNoteHandler}
                />
                <textarea
                    className="body" 
                    type="text" 
                    name="textBody"
                    value={note.textBody}
                    onChange={activeNoteHandler}
                />
                <div className="form-actions">
                    <button type="button" className="delete" onClick={e => {
                        e.preventDefault();
                        setShowDelete(true);
                    }}
                    >Delete</button>
                    <button type="submit" className="save">Save</button>
                </div>
            </NoteModuleForm>

            {
                !showDelete ? null
                    : <DeleteConfirm 
                        setShowDelete={setShowDelete} 
                        deleteNote={deleteNote} 
                        history={history} 
                        id={note._id} 
                    />
            }
        </NoteModuleContainer>
    );
}

export default NoteModule;

const NoteModuleContainer = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
`;

const NoteModuleForm = styled.form`
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
    color: rgb(32, 33, 36);
    width: 600px;
    height: 222px;
    margin: 132px auto 16px auto;
    position: relative;
    background-color: white;
    input, textarea {
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
    textarea {
        resize: none;
        overflow: visible;
        height: 125px;
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
    }
    .form-actions {
        position: absolute;
        height: 50px;
        width: 100%;
        bottom: 12px;
        display: flex;
        justify-content: space-between;
        padding: 0px 16px;
        button {
            font-size: 15px;
            font-weight: 600;
            user-select: none;
            outline: none;
            cursor: pointer;
            padding: 8px 24px;
            border: none;
            background: transparent;
            border-radius: 8px;
        }
        .delete:hover {
            background: #F5F5F5;
        }
        .save:hover {
            color: white;
            background: #F5B504;
        }
    }
    .close-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #000000;
        color: white;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        position: absolute;
        z-index: 6;
        top: -12px;
        right: -12px;
        opacity: 1;
        cursor: pointer;
        :hover {
            transition-duration: .218s;
            transition-timing-function: ease-in;
            transform: scale(1.08);
            i {
                transition-duration: .218s;
                transition-timing-function: ease-in;
                transform: scale(1.15);
            }
        }
    }
`;


