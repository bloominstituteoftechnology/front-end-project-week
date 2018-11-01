import React from "react";
import { connect } from "react-redux";
import { deleteNote, getData } from "../../actions";
import Modal from "../presentational/Modal";
import { Button, ViewContainer } from "../styling/NoteStyling";

class NoteView extends React.Component {
  state = {
    note: {},
    showModal: false
  };

  filterProps = () => {
    //map through all the notes and load up the one that correctly corresponds with the ID of the note clicked
    this.props.notes.forEach(note => {
      if (this.props.match.params.id === note.id) {
        this.setState({ note: note });
      }
    });
  };

  componentDidMount() {
    this.props.getData();
  }

  componentDidUpdate(prevProps) {
    // males sure that the correct note is always displaying even if the state updates
    if (this.props.notes !== prevProps.notes) {
      this.filterProps();
    }
  }

  toggleModal = event => {
    event.preventDefault();
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  deleteClick = event => {
    event.preventDefault();
    //Feed the note id to the deleteNote fxn
    this.props.deleteNote(this.state.note.id);
    //after successful deletion, go back to main note page
    this.props.history.goBack();
  };

  editClick = event => {
    event.preventDefault();
    // push the new state that the noteform contains
    this.props.history.push(`/noteform/${this.state.note.id}`);
  };

  render() {
    // prevents an undefined content section from breaking the rendering
    const content = this.state.note.content === undefined
        ? []
        : this.state.note.content.split("\n");

    return (
      <ViewContainer>
        <Button onClick={this.editClick} className="left">
          edit
        </Button>
        <Button onClick={this.toggleModal}>delete</Button>
        <div>
          <h3>{this.state.note.title}</h3>
          {content.map((content, index) => {
            return <p key={index}>{content}</p>;
          })}
        </div>
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          deleteClick={this.deleteClick}
        />
      </ViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { deleteNote, getData }
)(NoteView);