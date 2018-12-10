import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 25%;
    border: 1px solid grey;
    margin: 20px;
    h1 {
        display: flex;
        font-size: 1.5rem;
        border-bottom: 2px solid grey;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }
    p {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        font-size: 1.2rem;
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
