import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import './NoteView.css';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  deleteNote = () => {
    const id = this.props.location.state.currentNote._id;
    axios
      .delete('https://peaceful-gorge-48893.herokuapp.com/api/notes/' + id, {
        headers: {
          Authorization: localStorage.token,
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(response => {
        console.log({ Message: `Note Successfully Deleted!` });
      })
      .catch(err => {
        console.log({ Error: `Unable to Delete Note` });
      });
    this.toggle;
    this.props.history.push('/list');
  };

  render() {
    return (
      <div className="noteDiv">
        <div className="noteViewNav">
          <Link
            to={{
              pathname: `/notes/${
                this.props.location.state.currentNote._id
              }/EditNote`,
              state: { currentNote: this.props.location.state.currentNote },
            }}
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
                  onClick={this.deleteNote} //add deleteNote() here
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
          {this.props.location.state.currentNote.content}
        </p>
      </div>
    );
  }
}

export default NoteView;
