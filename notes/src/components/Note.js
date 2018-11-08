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

    
    deleteNote = (event) => {
      const id = this.state.note._id
      console.log(id)
      axios
        .delete(`http://fe-notes.herokuapp.com/note/delete/${id}`)
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
        const { title, textBody, _id } = this.state.note;
        return (
          <div>
            <div className="delete-container">
              <Link className="note-link" to={`/edit/${_id}`}>
                <p className="edit-note-link">edit</p>
              </Link>
              <p className="delete-note-link" onClick={this.openModal} >
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
               
              >
                <div className="modal">
                 
                  <div className="modal-button-container">
                    <Link className="note-link" to="/">
                      <div className="modal-delete-button" onClick={this.deleteNote}>
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



            












