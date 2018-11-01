import React, { Component } from 'react'
import axios from 'axios'
import './Note.css'
import { Link } from 'react-router-dom'

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
        const {id} = this.props.match.params
        fetch = id => {
            axios
                .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
                .then(response => this.setState({ note: response.data }))
                .catch(error => console.log(error))
        }
        fetch(id)
    }

    handleDelete = id => {
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
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
                        to={{ pathname: '/edit', state: { note: this.state.note} }}
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
                        
                <div className='delete-modal'>
                    <div className='modal'>
                        <h4>Are you sure you want to delete this?</h4>
                        <div className='modal-buttons'>
                            <button 
                                className='delete-button' 
                                onClick={() => this.handleDelete(this.state.note._id)}
                            >
                                Delete
                            </button>
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
                <p className="note-body">{this.state.note.textBody}</p>
            </div>
        )
    }
}
    





export default Note