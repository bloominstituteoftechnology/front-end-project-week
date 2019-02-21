import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      backtoList: false
    };
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }
  handleDelete = e => {
    e.preventDefault();
    this.setState({ backtoList: true });
    this.props.deleteNote(this.props.match.params.id);
  };
  truncateString(str, num) {
    return str.length >= 75 || num <= 75
      ? str.slice(0, num) + "..."
      : str.length <= num
      ? str
      : str.slice(0, num) + "...";
  }
  render() {
    if (this.state.backtoList) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div>
          <NavLink to={`/edit/${this.props.match.params.id}`}>
            <button>edit</button>
          </NavLink>
          <button onClick={this.toggle}>delete</button>
        </div>

        <div className="singlenote">
          {this.props.notes.map(note => {
            if (this.props.match.params.id === note.id.toString()) {
              return (
                <div className="note" key={note.id}>
                  <h1 className="notetitle">{note.title}</h1>
                  <p className="notetext">
                    {this.truncateString(note.textBody, 90)}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <ModalBody>
            <p>Are you sure you want to delete this note?</p>
            <div>
              <button onClick={this.handleDelete}>Yes</button>{" "}
              <button onClick={this.toggle}>No</button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default NoteView;
