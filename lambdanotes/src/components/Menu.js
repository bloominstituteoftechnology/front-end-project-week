import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";

import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingOut: false
    };
  }

  loggingOutToggle = () => {
    this.setState({ loggingOut: !this.state.loggingOut });
  };

  render() {
    return (
      <div className="menu">
        <h1>Lambda Notes</h1>
        <Link to="/">
          <Button color="info">
            <b>View Your Notes</b>
          </Button>
        </Link>
        <Link to={`/create`}>
          <Button color="info">
            <b>+ Create New Note</b>
          </Button>
        </Link>
        <Button color="info" onClick={this.loggingOutToggle}>
          <b>Log Out</b>
        </Button>
        <Modal isOpen={this.state.loggingOut} toggle={this.loggingOutToggle}>
          <ModalBody>Are you sure you want to log out?</ModalBody>
          <div className="modal-buttons">
            <Button color="danger" onClick={this.props.logOut}>
              <b>Log Out</b>
            </Button>
            <Button color="info" onClick={this.loggingOutToggle}>
              <b>Cancel</b>
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Menu;
