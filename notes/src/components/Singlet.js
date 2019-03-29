import React from "react";
import { connect } from "react-redux";
import { getNote, getNotes, setUpdateNote, deleteNote } from "../store/actions";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

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
        <h1 className="note-page-title">
        
          <br /> {this.props.note.title}
        </h1>
        <br />
        <h3 className="note-page-text">
          Note Body: <br /> {this.props.note.textBody}
        </h3>
        <div className="button-flex">
          <Button
            color="blue"
            onClick={event => {
              this.goToUpdateNoteForm(event, this.props.note._id);
              console.log("id", this.props.note._id);
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
             
              <ModalBody>Are you sure you want to delete this?</ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={this.deleteNote}>
                  Delete
                </Button>{" "}
                <Button color="gray" onClick={this.toggle}>
                  No
                </Button>{" "}
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
