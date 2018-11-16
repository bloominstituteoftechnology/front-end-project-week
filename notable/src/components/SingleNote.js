import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchSingleNote, deleteNote } from "../actions/index";

const OptionsBar = styled.div`
  font-size: 1.1rem
  display: flex;
  justify-content: flex-end;

  div {
    padding: 10px;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Note = styled.div`
  width: 95%;
  margin: 20px auto;

  h1 {
    font-size: 1.6rem;
    padding: 20px 0px;
  }

  p {
    font-size: 1.2rem
    line-height: 1.6
  }
`;

class SingleNote extends React.Component {
  deleteHandler = () => {
    this.props.deleteNote(this.props.note._id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <OptionsBar>
          <div>edit</div>
          <div onClick={this.deleteHandler}>delete</div>
        </OptionsBar>
        {this.props.fetching ? (
          <h1>Please Wait</h1>
        ) : (
          <Note>
            <h1>{this.props.note.title}</h1>
            <p>{this.props.note.textBody}</p>
          </Note>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.singleNote,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchSingleNote, deleteNote }
)(SingleNote);
