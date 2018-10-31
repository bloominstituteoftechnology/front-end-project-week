import React from "react";
import { Link } from "react-router-dom";
import {
  LeftBar,
  StyledLink,
  ContainCards,
  NotesH2,
  CardList,
  TitleH1
} from "../Styles";

import NoteCard from "./NoteCard";

class NotesList extends React.Component {
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
            ))}
          </ContainCards>
        </CardList>
      </div>
    );
  }
}

export default NotesList;
