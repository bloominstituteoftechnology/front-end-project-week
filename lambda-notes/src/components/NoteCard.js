import React from 'react';
import { Cards, CardsH2, StyledLinkCard, CardsHr, CardsP } from '../Styles';

const NoteCard = props => {
    return (
        <Cards>
            <StyledLinkCard to={`/note/get/${props.note._id}`}>
                <CardsH2>{props.note.title}</CardsH2>
                <CardsHr></CardsHr>
                <CardsP>{props.note.textBody}</CardsP>
            </StyledLinkCard>
        </Cards>
    );
}

export default NoteCard;