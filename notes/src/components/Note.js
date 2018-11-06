import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Markdown from 'react-markdown'


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            note: [],
            showModal: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.getNote(id);
    }

    getNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(response=> console.log(response));
        }


        
    deletedNote = event => {
        event.preventDefault(event);
        this.props.deleteNote(event, this.state.note._id);
        this.props.history.push("/")
    }






            


    openModal = () => {
        this.setState({ showModal: true });
      };
    
      closeModal = () => {
        this.setState({ showModal: false });
      };
    











      render() {
        if (!this.state.note) {
          return <div>loading note</div>;
        }
        const { title, textBody, _id } = this.state.note;
        return (
          <div>
            <div className="delete-container">
              <Link className="note-link" to={`/edit/${_id}`}>
                <p className="edit-note-link">edit</p>
              </Link>
              <p className="delete-note-link" onClick={this.openModal}>
                delete
              </p>
            </div>
            <div>
              <h3>{title}</h3>
              <Markdown>{textBody}</Markdown>
            </div>
            <div>
              <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                contentLabel="Are you sure you want to delete?"
              >
                <div className="modal">
                  <div className="modal-prompt">
                    <p>Are you sure you want to delete this?</p>
                  </div>
                  <div className="modal-button-container">
                    <Link className="rr-link" to="/">
                      <div className="modal-delete-button" onClick={this.deletedNote}>
                        Delete
                      </div>
                    </Link>
                    <div className="modal-no-button" onClick={this.closeModal}>
                      No
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        );
      }
    }
    
    export default withRouter(Note);