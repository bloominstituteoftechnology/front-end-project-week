import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { addNote, deleteNote, checkUpdate } from "../actions/action";
import { connect } from "react-redux";


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
    return <div />;
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
