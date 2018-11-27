import React, { Component } from 'react';
import Modal from 'react-modal';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

class Note extends Component {
    state = {
        note: [],
        showModal: false
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(response => console.log(response));
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.fetchNote(id);
    }

    deleteNote = () => {
        const id = this.state.note._id
        axios
          .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
          .then(response => {
            this.setState({
              notes: response.data
            })
          })
          .catch(err => {
            console.log(err);
          })
      }

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { _id } = this.state.note


        return (
            <div>
                <div>
                    <div>
                        <NavLink 
                            to={`/edit/${_id}`}>
                            <p>edit</p>
                        </NavLink>
                    </div>
                    <div>
                        <p onClick={this.openModal}>delete</p>
                    </div>
                </div>
                <div>
                    <h2>{this.state.note.title}</h2>
                    <p>{this.state.note.textBody}</p>
                </div>
                <Modal                    
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel='Are you sure you want to DELETE?'>

                    <div>
                        <p>Are you sure you want to delete this?</p>
                    </div>
                    <div>
                        <Link to="/">
                        <button  
                            onClick={this.deleteNote}>
                            Delete
                        </button>
                        </Link>
                        <button                             
                            onClick={this.closeModal}>
                            No
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }
};


export default Note;