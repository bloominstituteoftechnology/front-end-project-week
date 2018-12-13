import React from 'react';
import { Cards, CardsH2, StyledLinkCard, CardsHr, CardsP } from '../Styles';

const NotePreview = props => {
    return (
        <Cards>
            <StyledLinkCard to={`/note/get/${props.note.id}`}>
                <CardsH2>{props.note.title.length >= 15
                ? props.note.title.substring(0,15)+'...'
                : props.note.title}</CardsH2>
                <CardsHr></CardsHr>
                <CardsP>{props.note.content.length >=50
                ? props.note.content.substring(0,50)+'...' 
                : props.note.content}</CardsP>
            </StyledLinkCard>
        </Cards>
    );
}

export default NotePreview;

