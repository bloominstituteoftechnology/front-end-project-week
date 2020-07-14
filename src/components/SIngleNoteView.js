import React, { Component } from "react";
import { connect } from "react-redux";
import { getNote, deleteNote } from "../actions";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class SingleNoteView extends Component {
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
  /* React strap Modal */

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.match.params.id, this.props.history);
  };

  render() {
    return (
      <div className="singlenoteDisplay">
        <div className="button-flex">
		
          <Link to={`/updateNote/${this.props.match.params.id}`}>Edit</Link>

		  {/* React strap Modal */}
          <p onClick={this.toggle}>
			{this.props.buttonLabel}
			Delete
          </p>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle} />
            <ModalBody>Are you sure you want to delete this?</ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.deleteNote}>
                Delete
              </Button>{" "}
              <Button color="primary" onClick={this.toggle}>
                No
              </Button>
            </ModalFooter>
          </Modal>
		   {/* React strap Modal */}
		   
        </div>

        <h1 className="note-page-title">{this.props.note.title}</h1>
        <p className="note-page-text">{this.props.note.content}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note
  };
};

export default connect(
  mapStateToProps,
  { getNote, deleteNote }
)(SingleNoteView);
