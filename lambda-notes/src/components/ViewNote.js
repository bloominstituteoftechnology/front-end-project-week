import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { Link } from 'react-router-dom';
import '../styles/ViewNote.css';
import Axios from 'axios';

class ViewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            modalOpen: false,
        }
    }

    componentDidUpdate(prevState) {
        if(this.props.updating !== prevState.updating) {
            if(!this.props.updating) {
                this.getNote();
            }
        }
    }

    componentDidMount() {
        this.getNote();
    }

    getNote() {
        Axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.noteId}`)
            .then(res => {
                this.setState({
                    note: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    deleteFunct = e => {
        this.props.deleteNote(this.state.note._id);
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <div className={this.state.modalOpen ? 'modal-container' : 'modal-hide'}>
                    <div className='modal-content'>
                        <p className='modal-text'>Are you sure you want to delete this?</p>
                        <div className='modal-btns'>
                            <button className='modal-delete-btn' onClick={() => this.deleteFunct()}>Delete</button>
                            <button className='modal-cancel-btn' onClick={() => this.toggleModal()}>No</button>
                        </div>
                    </div>
                </div>

                <div className='edit-delete-btn'>
                    <Link to={`/edit/${this.state.note._id}`}><span className='viewBtn'>edit</span></Link>
                    <span className='viewBtn' onClick={() => this.toggleModal()}>delete</span>
                </div>
                <h3 className='notes-page-title'>{this.state.note.title}</h3>
                <div className='note-text-Container'>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        updating: state.updating,
    };
}

export default connect(
    mapStateToProps,
    { deleteNote }
)(ViewNote);