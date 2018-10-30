import React from 'react';
import styled from 'styled-components';

const DeleteConfirm = ({setShowDelete, deleteNote, history, id}) => {
    return (
        <DeleteContainer>
            <div className="module">
                <h3>Are you sure you want to delete?</h3>
                <div>
                    <button 
                        className='close' 
                        onClick={e => {
                            e.preventDefault();
                            setShowDelete(false);
                        }}
                    >Close</button>
                    <button 
                        className='delete'
                        onClick={e => {
                            e.preventDefault();
                            deleteNote(id)
                            setShowDelete(false);
                            history.push('/');
                        }}
                    >DELETE</button>
                </div>
            </div>
        </DeleteContainer>
    );
}

export default DeleteConfirm;

const DeleteContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    .module {
        margin: 0 auto;
        width: 350px;
        height: 150px;
        padding: 12px 16px;
        background: rgb(255,255,255);
        margin-top: 100px;
        border-radius: 8px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        button {
            width: 100px;
            height: 35px;
            font-size: 18px;
            margin: 0 10px;
            outline: none;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            background: white;
            color: rgb(32, 33, 36);
        }
    }
    .delete {
        :hover {
            background: rgba(255,0,0,0.6);
            color: white;
        }
    }
    .close {
        :hover {
            background: rgba(0, 138, 0, 0.4);
            color: white;
        }
    }
`;

