import React from "react";
import styled from "styled-components";
import HeadingTitle from "../common/Titles/HeadingTitle";

import NotesList from "./NotesList";
const HomeWrapper = styled.div``;

class HomeComponent extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    console.log(this.props);
    return (
      <HomeWrapper>
        <HeadingTitle>Your Notes:</HeadingTitle>
        <NotesList notesData={this.props.notesData} history = {this.props.history} />
      </HomeWrapper>
    );
  }
}

export default HomeComponent;
