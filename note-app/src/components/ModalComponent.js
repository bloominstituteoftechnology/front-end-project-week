import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { addNote, deleteNote } from "../actions/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      list: this.props.notes,
      isGoing: true
      //hover
    };
  }
  componentDidMount() {
    this.props.notes;
  }
  handleInputChange = e => {
    let name = e.target.name;
    this.setState({ [e.target.name]: e.target.value });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div>
       
      </div>
    );
  }
}

const mapToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapToProps, 
    { 
         addNote, 
         deleteNote 
    }
    )
    (ModalComponent);
