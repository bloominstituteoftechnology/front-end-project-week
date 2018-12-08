import React from "react";
import Modal from "./Modal";
import { NoteCard } from "../styled/SingleNote";
import { fetchSingle, deleteNote } from "../actions";
import { connect } from "react-redux";

class Note extends React.Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingle(id);
    window.scrollTo(0, 0);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  delete = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push("/notes");
  };

  render() {
    const { note } = this.props;
    return (
      <>
        <Modal
          show={this.state.showModal}
          delete={this.delete}
          close={this.toggleModal}
        />
        <NoteCard>
          <div className="button-container">
            <span
              onClick={() =>
                this.props.history.push(
                  `/edit-note/${this.props.match.params.id}`
                )
              }
            >
              edit
            </span>
            <span onClick={this.toggleModal}>delete</span>
          </div>

          <h2>{note.title}</h2>
          <p>{note.textBody}</p>
        </NoteCard>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note,
    notes: state.note,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSingle, deleteNote }
)(Note);
