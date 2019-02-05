import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DeleteModal from'../DeleteModal/DeleteModal';
import './NoteView.css';

class NoteView extends Component {
    state = {
        showModal: false,
        notes: []
    }

    showDeleteModal = () => {
        this.setState(
            {showModal: !this.state.showModal}
        )
    }

    handleDelete = () => {
                fetch(`http://localhost:9000/api/notes/${this.props.match.params.id}`, { 
                method: 'DELETE' 
            }); 
    }

    componentDidMount() {
        fetch(`http://localhost:9000/api/notes/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => this.setState(
            {
                notes: data
            }
        ))
        .catch(err => console.log(err))
    }


    render() {
        console.log(this.state);
        return(
            <div className='note-view'>
                <div className='note-view-links'>
                    <div><Link to={`edit-note/${this.props.match.params.id}`} className='edit-link'>edit</Link></div>
                    <div onClick={this.showDeleteModal}>delete</div>
                </div>
                <p className='note-title'>{this.state.notes.title}</p>
                <p className='note-content'>{this.state.notes.content}</p>
                <DeleteModal showModal={this.state.showModal} showDeleteModal={this.showDeleteModal} handleDelete={this.handleDelete}/>
            </div>
        );
    } 
}

export default NoteView;