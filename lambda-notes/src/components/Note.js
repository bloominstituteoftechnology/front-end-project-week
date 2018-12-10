import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 31.3%;
    height: 270px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 35px;
    background: white;
    h1 {
        display: block;
        font-size: 1.5rem;
        border-bottom: 2px solid grey;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    p {
        display: block;
        text-overflow: ellipsis;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.2rem;
        overflow: hidden;
    }
`;

const Note = props => {
    return (
        <Div>
            <h1>{props.note.title}</h1>
            <p>{props.note.textBody}</p>
        </Div>
    );
};

export default Note;
