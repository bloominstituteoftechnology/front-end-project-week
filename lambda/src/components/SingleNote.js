import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchSingleNote, deleteNote, setUpdate } from "../actions/index";
import DeleteNote from './DeleteNote'

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
  div {
    padding: 20px 0px;
  }
  h1 {
    font-size: 1.6rem;
    margin-right: 10px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

class SingleNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  deleteHandler = () => {
    this.props.deleteNote(this.props.note.id);
    this.hideModal();
    this.props.history.push("/");
  };

  updateHandler = () => {
    this.props.setUpdate();
    this.props.history.push(`/update/${this.props.note.id}`);
  };

  render() {
    return (
      <div>
        <OptionsBar>
          <div onClick={this.updateHandler}>edit</div>
          <div onClick={this.showModal}>delete</div>
        </OptionsBar>
        {this.props.fetching(
          <Note>
            <h1>{this.props.note.title}</h1>
            <p>{this.props.note.textBody}</p>
          </Note>
        )}
        <DeleteNote
          show={this.state.show}
          deleteHandler={this.deleteHandler}
          hideModal={this.hideModal}
        />
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
  { fetchSingleNote, deleteNote, setUpdate }
)(SingleNote);