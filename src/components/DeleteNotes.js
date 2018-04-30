import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { deleteNote } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class DeleteNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: "",
        title: "",
        text: ""
      },
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      note: this.props.notes.find(note => {
        return note.id === parseInt(this.props.match.params.id, 10);
      })
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDelete(id) {
    this.props.deleteNote(id);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Are you sure you want to delete this?
          </ModalHeader>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => this.handleDelete(this.state.note)}
            >
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <div className="noteView">
          <div className="note">
            <Link to={`/edit/${this.props.match.params.id}`} className="edit">
              edit
            </Link>
            <a className="delete" onClick={this.toggle}>
              delete
            </a>
          </div>
          <h5 className="noteTitle">{this.state.note.title}</h5>
          <h5 className="noteContent">{this.state.note.text}</h5>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { deleteNote })(DeleteNotes);
