import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Markdown from 'react-markdown'
import posed from 'react-pose'


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
            .get(`http://localhost:7000/api/notes/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(response=> console.log(response));
        }

    
    deleteNote = (event) => {
      const id = this.state.note.id
      console.log(id)
      axios
        .delete(`http://localhost:7000/api/notes/edit/${id}`)
        .then(response => {
          console.log('DELETE RESPONSE: ', response)
          this.setState({ notes: response.data })
        })
        .catch(err => {console.log(err)})
    
    
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
        const { title, textBody, id } = this.state.note;
        return (
          <div>
            <div className="edit-delete-container">
              <Link className="note-link" to={`/edit/${id}`}>
                <p className="edit-note-link">edit</p>
              </Link>
              <p className="delete-note-link" onClick={this.openModal}>
                delete
              </p>
            </div>
            <div>
            {this.state.note.map((note) => {
              return (
                <div>
                 <h2>{note.title}</h2>
                 <p>{note.textBody}</p>
                </div>
               )
             })}
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
                    <Link className="note-link" to="/">
                      <div className="modal-delete-button" onClick={this.deleteNote}>
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












