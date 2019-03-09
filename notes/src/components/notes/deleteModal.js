import { Modal, ModalHeader, ModalFooter, Button } from "reactstrap";
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteNote } from "../../actions";

class DeleteModal extends React.Component {
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
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {"Delete"}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Are you sure you want to delete this note?
          </ModalHeader>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => {
                const token = localStorage.getItem("jwt");
                const reqOptions = {
                  headers: {
                    Authorization: token
                  }
                };
                this.props.deleteNote(
                  this.props.match.params.noteId,
                  this.props.history,
                  reqOptions
                );
              }}
            >
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { deleteNote })(
  withRouter(DeleteModal)
);
