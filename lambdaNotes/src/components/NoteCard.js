import React from "react";
import { Cards, CardsH2, StyledLinkCard, CardsHr, CardsP } from "../Styles";

const NoteCard = props => {
  return (
    <Cards>
      <StyledLinkCard to={`/note/get/${props.note.id}`}>
        <CardsH2>{props.note.title}</CardsH2>
        <CardsHr />
        <CardsP>{props.note.content}</CardsP>
      </StyledLinkCard>
    </Cards>
  );
};

export default NoteCard;
