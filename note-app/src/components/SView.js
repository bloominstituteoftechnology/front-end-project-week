import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { addNote, deleteNote, checkUpdate } from "../actions/action";
import { connect } from "react-redux";

let noteI = [];
let titleI = [];
let dcheck;
let dcolor = "red";
let dcomplete = "NOT COMPLETE";

class SView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      list: this.props.notes,
      checked: true,
      Complete: "NOT COMPLETE",
      ccolor: "red"
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
    noteI = [];
    titleI = [];
    this.refresh();
    this.setState({
      modal: !this.state.modal
    });
  };
  handleInputChange = event => {
    this.setState({ checked: this.state.checked === false ? true : false });
    this.setState({ ccolor: this.state.ccolor === "red" ? "blue" : "red" });
    this.props.checkUpdate(this.state.checked, this.props.id);
  };

  render() {
    noteI = [];
    titleI = [];
    dcheck = [];
    dcomplete = "";
    return (
      <div>
        <div>
          <Link to={`/notes/edit/${this.props.id}`}>
            <span>edit</span>
          </Link>

          <Link to={`#`} onClick={this.toggle}>
            <span>delete</span>
          </Link>

          {this.props.notes.map((note, i) => {
            return (
              <div key={note + i}>
                {noteI.push(note.note)}
                {titleI.push(note.title)}
                {dcheck.push(note.check)}
              </div>
            );
          })}
          <div>
            {dcheck[this.props.id] === false
              ? (dcolor = "red")
              : (dcolor = "blue")};
            {dcheck[this.props.id] === false
              ? (dcomplete = "NOT COMPLETE")
              : (dcomplete = "COMPLETED")};
          </div>
          <div>
            <h1>{titleI[this.props.id]}</h1>
            <h4>
              Complete Status: <span> {dcomplete} </span>{" "}
            </h4>
            <input
              name="checkedB"
              type="checkbox"
              checked={dcheck[this.props.id]}
              onChange={this.handleInputChange}
            />
            {noteI[this.props.id]}
            <label />
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody>Are you sure you want to delete this?</ModalBody>
          <ModalFooter>
            <Link to={`/`} onClick={() => this.handleDelete(this.props.id)}>
              <Button color="primary">Delete</Button>
            </Link>
            <Button color="secondary" onClick={this.toggle}>
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
