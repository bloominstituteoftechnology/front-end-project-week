import React from 'react';
import styled from 'styled-components';

const IndividualNote = styled.div`
    height: 19rem;
    width: 19rem;
    padding: 1rem 1.5rem;
    border: 2px solid #AFAFAF;
    margin:  0 2rem 3rem 0;
    color: #1F1F1F;
    background-color: white;

    h3 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1.8rem;
        font-weight: bold;
        padding-bottom: 0.5rem;
        border-bottom: 1.5px solid #AFAFAF;
        margin-bottom: 0.5rem;
    }

    P {
        height: 80%;
        overflow: hidden;
        white-space: pre-wrap;
        text-overflow: ellipsis;
    }
`

const SmallNote = props => {
    return(
        <IndividualNote>
            <h3 className='note-title'>{props.noteData.title}</h3>
            <p className='note-text'>{props.noteData.textBody}</p>
        </IndividualNote>
    );
}

export default SmallNote;