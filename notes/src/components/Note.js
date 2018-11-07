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


        
    deleteTheNote = event => {
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
              <Link className="delete-note-link" onClick={this.openModal} to={`/delete/${_id}`} >
                delete
              </Link>
            </div>
            <div>
              <h3>{title}</h3>
              <Markdown>{textBody}</Markdown>
            </div>
            <div>
              <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
               
              >
                <div className="modal">
                 
                  <div className="modal-button-container">
                    <Link className="note-link" to="/">
                      <div className="modal-delete-button" onClick={this.deleteTheNote}>
                        Delete
                      </div>
                    </Link>
                    <div className="modal-no-button" onClick={this.closeModal}>
                      Don't Delete
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



            












