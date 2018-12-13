import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    cursor: pointer;
    background: white;
    width: 195px;
    border: 2px solid black;
    padding:  5px 20px;
    margin:  12px 7px;
    height: 195px;
    overflow: hidden;
`;

const NoteCard = props => {
    let { title, textBody, _id } = props.note
  
    return (
        <Card onClick={() => 
        props.history.push(`/card/${_id}`)
        
        }>
            <h3>{title}</h3>
            <p>{textBody}</p>
        </Card>
    )
}

export default NoteCard;