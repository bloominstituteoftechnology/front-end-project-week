import React from "react";
import { CSVLink } from "react-csv";
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
          <div onClick={this.props.signOut}>Sign Out</div>
          <CSVLink data={this.props.notes}>Download me</CSVLink>
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
