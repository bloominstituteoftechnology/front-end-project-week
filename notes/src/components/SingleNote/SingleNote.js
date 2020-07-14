import React, { Component } from 'react';
import { fetchNote, deleteNote, setUpState } from '../../actions';
import { connect } from 'react-redux';
import './singleNote.css';

class SingleNote extends Component {
    componentDidMount() {
    }

    showModal = () => {
        let modal = document.querySelector('.modal');
        modal.style.display = 'flex';
    }

    hideModal = () => {
        let modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }

    handleDelete = (event, id) => {
        event.preventDefault();
        this.props.deleteNote(id);
        this.props.history.push('/');
    }

    handleEdit = (event, title, body, id) => {
        event.preventDefault();
        this.props.setUpState(title,body, id);
        this.props.history.push('/edit');
    }
    
    render() {


            return(
                <div className="page">
                    <div className="singleNote">
                        <div className="top">
                            <span onClick={event => this.handleEdit(event, this.props.note.title, this.props.note.textBody, this.props.note._id)}>edit</span>
                            <span onClick={this.showModal}>delete</span>
                        </div>
                        <h2>{this.props.note.title}</h2>
                        <p>{this.props.note.textBody}</p>
                    </div>
                    <div className="modal">
                        <div className="modal_background">
                            <p>
                                    Are you sure you want to delete this?
                                </p>
                                <div className="buttons">
                                    <div onClick={event => this.handleDelete(event, this.props.note._id)} className="deleteButton">
                                        Delete
                                    </div>
                                    <div  onClick={this.hideModal} className="noButton">
                                        No
                                    </div>
                                </div>                        
                        </div>

                    </div>
                </div>
            )
    }
    
}

const mapStateToProps = state => {
    return {
        note: state.notesReducer.note,
        fetchingNote: state.notesReducer.fetchingNote,
        fetchedNote: state.notesReducer.fetchedNote,
        deletingNote: state.notesReducer.deletingNote
    }
}
export default connect(mapStateToProps, {
    fetchNote,
    deleteNote,
    setUpState
})(SingleNote);