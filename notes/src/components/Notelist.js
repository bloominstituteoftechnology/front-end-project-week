import React, { Component } from "react";
import "./Sidebar.css";
import styled from "styled-components";

import Notecard from "./Notecard";

const Page = styled.div`
    padding: 20px 40px;
    background: #f9f9f9;
    width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  margin: 20px 20px;
`;

const PageHeader = styled.h2`
    margin: 40px 20px;
`
class Notelist extends Component {
  state = {
    notes: this.props.notes
  };
  render() {
    return (
      <Page>
        <PageHeader>Your Notes:</PageHeader>
        <Grid>
          {this.props.notes.map(note => {
            return <Notecard key={note.id} note={note} />;
          })}
        </Grid>
      </Page>
    );
  }
}

export default Notelist;
