import React from 'react';
import { MiniBox, TruncatedText, MaskText } from '../StyledComponents/StyledComponents';
import { Link } from 'react-router-dom';

const MiniNote = (props) => {
    return (
        <Link style={{textDecoration:'none', color: 'black'}} to={`/${props.note.id}`}>
        <MiniBox>
        <h1>{props.note.title}</h1>
        <TruncatedText>{props.note.content}</TruncatedText>
        <MaskText/>
        </MiniBox>
        </Link>
    );
}

export default MiniNote;
