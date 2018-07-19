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
      modal: false,
      input: "",
      todos: ""
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
    this.props.deleteNote(this.props.singleNote[0]._id);
    this.props.history.push("/");
  };
  inputTodo = event => {
    this.setState({ input: event.target.value });
  };
  submitTodo = event => {
    event.preventDefault();
    let newInput = this.state.input.slice();
    this.setState({
      todos: newInput,
      input: ""
    });
  };
  render() {
    return (
      <div className="singleNote">
        <div className="singleNoteButtons">
          <Link to="/edit">Edit</Link>
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
          <p>{this.props.singleNote[0].textBody}</p>
          {this.props.singleNote[0].tags.length > 0 ? (
            <div className="tags">
              Tags:{" "}
              {this.props.singleNote[0].tags.map(tag => {
                return (
                  <p key={Math.random()} className="tag">
                    *{tag}
                  </p>
                );
              })}
            </div>
          ) : null}
          <hr className="hr" />

          <div className="checkList">
            <p>To Do List</p>
            {this.state.todos ? (
              <li>{this.state.todos}</li>
            ) : null}

            <form onSubmit={this.submitTodo}>
              <input
                onChange={this.inputTodo}
                placeholder="Add a checklist"
                value={this.state.input}
              />
            </form>
          </div>
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
