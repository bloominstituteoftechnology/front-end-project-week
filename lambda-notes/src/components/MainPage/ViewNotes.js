import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchingNotes } from "../../actions/index";
import SingleNote from "./Note";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Fade from "react-reveal";

const Header = styled.div`
  display: flex;
  width: 100%;
`;

const Main = styled.div`
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Note = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class ViewNotes extends Component {
  componentDidMount() {
    this.props.fetchingNotes();
  }

  render() {
    return (
      <Fade left>
        <Main>
          <Header>
            <h1>Your Notes:</h1>
          </Header>
          {this.props.notes.map(note => (
            // <Route path='/view-note/:id' component={NoteViewer} />
            <SingleNote key={note._id} note={note} />
          ))}
        </Main>
      </Fade>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes
  };
};

export default connect(
  mapStateToProps,
  { fetchingNotes }
)(ViewNotes);
