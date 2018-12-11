import React from 'react';
import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

const IndividualNote = styled.div`
    height: 19rem;
    width: 19rem;
    padding: 1rem 1.5rem;
    border: 2px solid #AFAFAF;
    margin:  0 2rem 3rem 0;
    color: #1F1F1F;
    background-color: white;
    word-break: break-word;

    h3 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1.8rem;
        font-weight: bold;
        padding-bottom: 0.5rem;
        border-bottom: 1.5px solid #AFAFAF;
        margin-bottom: 1rem;
    }
`

const SmallNote = props => {
    return(
        <IndividualNote draggable>
            <h3>{props.noteData.title}</h3>
            <EllipsisText text={props.noteData.textBody} length={90} />
        </IndividualNote>
    );
}

export default SmallNote;