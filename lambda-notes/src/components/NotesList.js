import React from "react";
import { Link } from "react-router-dom";
import { LeftBar, StyledLink, ContainCards } from "../Styles";

import NoteCard from "./NoteCard";

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    };

  render() {
    return (
      <div>
        <LeftBar>
          <StyledLink to={"/"}>Lambda Notes</StyledLink>
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
        </LeftBar>
        <ContainCards>
          {this.props.notes.map(note => (
            <NoteCard key={note._id} note={note} 
            />
          ))}
        </ContainCards>
      </div>
    );
  }
}

export default NotesList;
