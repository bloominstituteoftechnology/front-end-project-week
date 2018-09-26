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
    this.props.notes.forEach(note => {
      if (this.props.match.params.id === note._id) {
        this.setState({ note: note });
      }
    });
  };

  componentDidMount() {
    this.props.getData();
  }

  componentDidUpdate(prevProps) {
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
    this.props.deleteNote(this.state.note._id);
    //after successful deletion, go back to main note page
    this.props.history.goBack();
  };

  editClick = event => {
    event.preventDefault();
    // push the new state that the noreform contains
    this.props.history.push(`/noteform/${this.state.note._id}`);
  };

  render() {
    // prevents an undefined description section from breaking the rendering
    const description = this.state.note.textBody === undefined
        ? []
        : this.state.note.textBody.split("\n");

    return (
      <ViewContainer>
        <Button onClick={this.editClick} className="left">
          edit
        </Button>
        <Button onClick={this.toggleModal}>delete</Button>
        <div>
          <h3>{this.state.note.title}</h3>
          {description.map((descript, index) => {
            return <p key={index}>{descript}</p>;
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