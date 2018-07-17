import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { deleteNote } from "../actions/action";

class ViewNote extends React.Component {
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
  deleteNote = event => {
    console.log("this.props:", this.props);
    event.preventDefault();
    this.props.deleteNote(this.props.singleNote[0].id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="singleNote">
        <div className="singleNoteButtons">
          <Link exact to="/edit">
            Edit
          </Link>
          <div
            className="delete-button"
            onClick={this.toggle}
          >
            Delete
          </div>
        </div>

        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalBody>
              Are you sure you want to delete this?
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={this.deleteNote}
                color="primary"
              >
                Delete
              </Button>{" "}
              <Button
                color="secondary"
                onClick={this.toggle}
              >
                No
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="singleNoteBody">
          <h3>{this.props.singleNote[0].title}</h3>
          <p>{this.props.singleNote[0].body}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleNote: state.singleNote
  };
};

export default connect(
  mapStateToProps,
  { deleteNote }
)(ViewNote);
