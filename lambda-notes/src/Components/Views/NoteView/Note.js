import React, { Component } from 'react'
import axios from 'axios'
import './Note.css'
import { Link } from 'react-router-dom'

const baseURL = `https://lambda-notes-yusuf-nafey.herokuapp.com`

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            delete: false,
            showModal: false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        console.log('before fetch', id)
        axios
            .get(`http://localhost:9000/api/notes/${id}`)
            // .get(`${baseURL}/api/notes/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(error => console.log(error))
    }

    handleDelete = id => {
        axios
            .delete(`http://localhost:9000/api/notes/delete/${id}`)
            // .delete(`${baseURL}/api/notes/delete/${id}`)
            .then(response => {this.setState({ delete: true })})
            .catch(error => console.log(error))
    }

    showModal = () => {
        document.querySelector(".delete-modal").classList.toggle("show-modal");
    }
    
    render() {
        return (
            <div className="full-note-container">
                <div className="edit-delete-note">
                    <Link
                        className="edit"
                        to={{ pathname: `/edit/${this.props.match.params.id}`, note: { note: this.state.note} }}
                    >
                        edit
                    </Link>
                    <span className="empty-space">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span
                        className="delete"
                        onClick={this.showModal}
                    >
                        delete
                    </span>
                </div>
                        
                <div className="delete-modal">
                    <div className="modal-box">
                        <h4 className="confirmation">Are you sure you want to delete this?</h4>
                        <div className="modal-buttons">
                            <Link 
                                className="delete-button"
                                onClick={() => this.handleDelete(this.state.note.id)}
                                to="/"
                            >
                                Delete
                            </Link>
                            <button 
                                className='no-button' 
                                onClick={this.showModal}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>   
                <h2 className="note-title">{this.state.note.title}</h2>
                <p className="note-body">{this.state.note.body}</p>
            </div>
        )
    }
}
    





export default Note