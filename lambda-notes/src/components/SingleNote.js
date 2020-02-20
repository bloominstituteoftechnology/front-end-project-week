import React, { Component } from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";

import '../CSS/Note.css'


import Notes from './Notes'
import Modal from './Modal'



export default class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            isOpen: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id)
    }
    
    returnHome = () => {
        this.props.history.push("/")
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({ note: response.data })
               
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteNote = () => {
        const id = this.props.match.params.id
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => 
                this.returnHome()

                )

            .catch(error => console.log(error))
    }


    render() {
        if(this.state.note.length===0) {
            return <div>Loading...</div>
        }
        return(
            <div className="MainDiv">
                <div>
                    <Modal show={this.state.isOpen} onClose={this.toggleModal} delete={this.deleteNote}>
                    </Modal>
                </div>

               <div className="EditDeleteButtonDiv">
                    <div>
                        <Link to={`/EditNote/${this.props.match.params.id}`}>
                            <button className="EditDeleteButton">Edit</button>
                        </Link>
                        <button className="EditDeleteButton" onClick={this.toggleModal}>Delete</button>
                    </div>
               </div>
                <div className="SingleNoteDiv">
                    <Notes
                        title = {this.state.note.title}
                        textBody = {this.state.note.textBody}
                        />
                </div >
            </div >
        )
    }
}