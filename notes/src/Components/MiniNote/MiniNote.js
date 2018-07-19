import React from 'react';
import { MiniBox, TruncatedText, MaskText, Title, DeleteButton } from '../StyledComponents/StyledComponents';
import { Link } from 'react-router-dom';



const MiniNote = (props) => {
    return (
        <Link style={{textDecoration:'none', color: 'black'}} to={`/${props.note.id}`}>
        <MiniBox>
        
        <Title>{props.note.title}</Title>
        
        <TruncatedText>{props.note.content}</TruncatedText>
        <MaskText/>
        </MiniBox>
        </Link>
    );
}

export default MiniNote;
