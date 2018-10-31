import React from "react";
import { LeftBar, StyledLink, ContainCards, NotesH2, CardList, TitleH1 } from "../Styles";
import { Link } from 'react-router-dom';
import NoteCard from "./NoteCard";

class NotesListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LeftBar>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
        </LeftBar>
        <CardList>
          <NotesH2>Your Notes:</NotesH2>
          <ContainCards>
            {this.props.notes.map(note => (
              <NoteCard key={note._id} note={note} />
            )).reverse()}
          </ContainCards>
        </CardList>
      </div>
    );
  }
}

export default NotesListView;