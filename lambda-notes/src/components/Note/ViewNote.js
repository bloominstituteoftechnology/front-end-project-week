import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import NoteCard from './NoteCard';
import DeleteNoteModal from './DeleteNoteModal';


class VieNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
            isOpen: false,
            isDeleted: false,
        }
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    onDelete = () => {
        this.setState({isDeleted: !this.state.isDeleted});
    }



    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.notes.forEach((note) => {
            if(note.id+'' === id)
                this.setState({note: note})
        } )
      }
    
    render() {
        return (
            <div className="App-content-container">
                <div className="nav">
                    <Link to={`/editnote/${this.state.note.id}`} className="view-note-nav">edit</Link>
                    <div className="view-note-nav" onClick={this.toggleModal}>
                        delete
                    </div>
                    <DeleteNoteModal show={this.state.isOpen} isDeleted={this.state.isDeleted} onDelete={this.onDelete} onClose={this.toggleModal}>
                        Are you sure you want to delete this?
                    </DeleteNoteModal>
                </div>
                <NoteCard note={this.state.note}/>
            </div>
        )
    }
}
 
export default VieNote;