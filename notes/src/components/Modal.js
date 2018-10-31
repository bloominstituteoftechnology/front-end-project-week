import React, { Component } from "react";
import { Dialog } from "@reach/dialog";
import { Button, DeleteModal } from "../styles";

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = ({ key }) => {
    if (key === "Escape") {
      this.props.open && this.props.hideModal();
    }
  };

  disableScrolling() {
    if (this.props.open === true) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  render() {
    return (
      <>
        <span onClick={this.props.showModal}>Delete</span>

        <Dialog isOpen={this.props.open}>
          <DeleteModal>
            <h2>Are you sure you want to delete this?</h2>
            <div>
              <Button delete onClick={this.props.handleDelete}>
                Delete
              </Button>
              <Button onClick={this.props.hideModal}>No</Button>
            </div>
          </DeleteModal>
        </Dialog>
      </>
    );
  }
}
