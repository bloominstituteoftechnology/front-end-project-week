import React from 'react';
import { MiniBox, TruncatedText, MaskText } from '../StyledComponents/StyledComponents';

const MiniNote = (props) => {
    return (
        <MiniBox>
        <h1>{props.note.title}</h1>
        <TruncatedText>{props.note.content}</TruncatedText>
        <MaskText/>
        </MiniBox>
    );
}

export default MiniNote;
