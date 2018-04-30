import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import './NoteView.css';

class NoteView extends Component {
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
      <div className="noteDiv">
        <div className="noteViewNav">
          <Link
            to={`/notes/${this.props.location.state.currentNote.id}/EditNote`}
            className="editLink"
          >
            edit
          </Link>
          <div className="deleteLink" onClick={this.toggle}>
            delete
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="deleteModal"
            centered
          >
            <div className="modalHeader">
              Are you sure you want to delete this?
            </div>
            <div>
              <div className="modalFooterBtns">
                <button
                  className="modalBtnDelete btn-danger modalBtn"
                  onClick={this.toggle}
                >
                  Delete
                </button>{' '}
                <button className="modalBtnNo modalBtn" onClick={this.toggle}>
                  No
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <h3 className="noteTitleView">
          {this.props.location.state.currentNote.title}
        </h3>
        <p className="noteContentView">
          {this.props.location.state.currentNote.text}
        </p>
      </div>
    );
  }
}
 
export default NoteView;