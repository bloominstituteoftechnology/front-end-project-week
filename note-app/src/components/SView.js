import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { addNote, deleteNote, checkUpdate } from "../actions/action";
import { connect } from "react-redux";

let noteOne = [];
let titleOne = [];
let taskCheck;
let deleteColor = "red";
let taskDone = "NOT COMPLETE";

const buttonStyle2 = {
  marginTop: 20,
  width: "40%",
  backgroundColor: "#25b8bd",
  cursor: "pointer",
  color: "white",
  height: 50,
  fontWeight: "bold",
  fontSize: 20,
  marginLeft: "8%",
  marginRight: "10%"
};
const buttonStyle = {
  marginTop: 20,
  width: "100%",
  paddingRight: 60,
  paddingLeft: 60,
  backgroundColor: "red",
  cursor: "pointer",
  color: "white",
  height: 50,
  fontWeight: "bold",
  fontSize: 20,
  marginLeft: "15%",
  marginRight: "30%"
};
const warning = {
  textAlign: "center"
};
const noteStyle = {
  padding: 30
};
const linkSte = {
  justifyContent: "center",
  marginLeft: "87%",
  marginRight: "2%",
  textAlign: "center"
};

const hide = {
  display: "none"
};
const inpSt = {
  width: 50,
  height: 50
};
const lst = {
  fontSize: 24
};

class SView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      list: this.props.notes,
      checked: true,
      Complete: "NOT COMPLETE",
      tColor: "red"
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.refresh();
  }
  refresh = () => {
    this.props.notes;
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleDelete = id => {
    this.props.deleteNote(this.props.notes[id]);
    noteOne = [];
    titleOne = [];
    this.refresh();
    this.setState({
      modal: !this.state.modal
    });
  };
  handleInputChange = event => {
    this.setState({ checked: this.state.checked === false ? true : false });
    this.setState({ tColor: this.state.tColor === "red" ? "blue" : "red" });
    this.props.checkUpdate(this.state.checked, this.props.id);
  };

  render() {
    noteOne = [];
    titleOne = [];
    taskCheck = [];
    taskDone = "";
    return (
      <div>
        <div>
          <Link to={`/notes/edit/${this.props.id}`} style={linkSte}>
            <span style={lst}>edit</span>
          </Link>

          <Link to={`#`} onClick={this.toggle}>
            <span style={lst}>delete</span>
          </Link>

          {this.props.notes.map((note, i) => {
            return (
              <div style={hide} key={note + i}>
                {noteOne.push(note.note)}
                {titleOne.push(note.title)}
                {taskCheck.push(note.check)}
              </div>
            );
          })}
          <div style={hide}>
            {taskCheck[this.props.id] === false
              ? (deleteColor = "red")
              : (deleteColor = "blue")};
            {taskCheck[this.props.id] === false
              ? (taskDone = "NOT COMPLETE")
              : (taskDone = "COMPLETED")};
          </div>
          <div style={noteStyle}>
            <h1>{titleOne[this.props.id]}</h1>
            <h4>
              Complete Status:{" "}
              <span style={{ color: deleteColor }}> {taskDone} </span>{" "}
            </h4>
            <input
              name="checkedB"
              type="checkbox"
              checked={taskCheck[this.props.id]}
              onChange={this.handleInputChange}
              style={inpSt}
            />
            {noteOne[this.props.id]}
            <label />
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody style={warning}>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Link to={`/`} onClick={() => this.handleDelete(this.props.id)}>
              <Button color="primary" style={buttonStyle}>
                Delete
              </Button>
            </Link>
            <Button
              color="secondary"
              onClick={this.toggle}
              style={buttonStyle2}
            >
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = state => {
  return {
    notes: state.notes
  };
};
export default connect(mapDispatchToProps, {
  addNote,
  deleteNote,
  checkUpdate
})(SView);
