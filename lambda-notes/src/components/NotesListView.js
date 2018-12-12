import React from "react";
import { LeftBar, StyledLink, ContainCards, NotesH2, CardList, TitleH1 } from "../Styles";
import { Link } from 'react-router-dom';
import NotePreview from "./NotePreview";

class NotesListView extends React.Component {
  render() {
    return (
      <div>
        <LeftBar>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/note/create"}>+ Create New Note</StyledLink>
        </LeftBar>
        <CardList>
          <NotesH2>Your Notes:</NotesH2>
          <ContainCards>
            {this.props.notes.map(note => (
              <NotePreview key={note.id} note={note}  />
            )).reverse()}
          </ContainCards>
        </CardList>
      </div>
    );
  }
}

export default NotesListView;