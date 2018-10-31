import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { getNote, getNotes, setUpdateNote, deleteNote } from "../store/actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Singlet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    if (this.props.notes.length === 0) {
      this.props.getNotes();
    }
    this.props.getNote(this.props.match.params.id);
  }

  goToUpdateNoteForm = (event, id) => {
    event.preventDefault();
    this.props.setUpdateNote(id);
    this.props.history.push("/note-form");
  };

  deleteNote = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push("/notes");
  };

  render() {
    return (
      <div className="singlenoteDisplay">
        <h2 className="note-page-title">
          Note Title:
          {console.log(this.props.note)}
          <br /> {this.props.note.title}
        </h2>
        <br />
        <h3 className="note-page-text">
          Note Body: <br /> {this.props.note.content}
        </h3>
        <div className="button-flex">
          <Button
            color="blue"
            onClick={event => {
              this.goToUpdateNoteForm(event, this.props.note.id);
            }}
          >
            Edit
          </Button>
          <div>
            <Button color="danger" onClick={this.toggle}>
              {this.props.buttonLabel}
              Delete
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Delete</ModalHeader>
              <ModalBody>Are you sure you want to delete?</ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={this.deleteNote}>
                  Delete
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  fetchingData: state.fetchingData,
  note: state.note
});

export default connect(
  mapStateToProps,
  { getNote, getNotes, setUpdateNote, deleteNote }
)(Singlet);
