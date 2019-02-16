import React, { Component } from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";


import Notes from './Notes'
import Modal from './Modal'

export default class SingleNote extends Component {
    // console.log(this.props)
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            isOpen: false
            
        }
    
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id)
        this.fetchNote(id)
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                // console.log(this.state)
                this.setState({ note: response.data })
                // this.props.updateNote(this.state)
               
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteNote = () => {
        const id = this.props.match.params.id
        // console.log(id)
        // console.log(this.state)
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => 
                // console.log(response))
                // this.state.history.push('/'))
                window.location.href="/")

            .catch(error => console.log(error))
    }

    fetchNoteforEdit = () => {
        // console.log(this.state)
        this.props.updateNote(this.state)

    }

    render() {
        if(this.state.note.length===0) {
            return <div>Loading...</div>
        }
        console.log(this.state)
        return(
            <div>
                <div>
                    <Modal show={this.state.isOpen} onClose={this.toggleModal} delete={this.deleteNote}>
                        <h1>HI</h1>
                    </Modal>
                </div>

                {/* <Link to={`EditNote/${this.state.note._id}`}> */}
                <button onClick={this.fetchNoteforEdit}>Edit</button>
                {/* </Link> */}
                <button onClick={this.toggleModal}>Delete</button>
                <Notes
                    title = {this.state.note.title}
                    textBody = {this.state.note.textBody}
                    />
            </div>
        )
    }
}