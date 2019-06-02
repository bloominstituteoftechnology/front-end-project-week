import React from 'react';
import '../styles/Forms.css';
import { connect } from 'react-redux';
import { editNote } from '../actions';
import axios from 'axios';

class EditNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
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
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.noteId}`)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    text: res.data.textBody,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.title + this.state.text);
    }

    editNote = e => {
        e.preventDefault();
        this.props.editNote(this.state.title, this.state.text, this.props.match.params.noteId);
        this.setState({
            title: '',
            text: ''
        });
        
        this.props.history.push(`/view/${this.props.match.params.noteId}`);
    }

    render() {
        return (
            <div>
                <h3 className='notes-page-title'>Edit Note:</h3>
                <div className='createNewNote-Container'>
                    <form className='form-content-container' onSubmit={this.editNote}>
                        <input 
                            onChange={this.handleChange}
                            name='title'
                            value={this.state.title}
                            type="text"
                            placeholder='Note Title'
                            required={true}
                            className='createNote-title-input'
                        />
                        <textarea 
                            onChange={this.handleChange}
                            name='text'
                            value={this.state.text}
                            type="text"
                            placeholder='Note Content'
                            required={true}
                            className='createNote-text-input'
                            rows='20'
                        />
                        <button className='navBtn saveBtn' type='submit'>SAVE EDIT</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        updating: state.updating,
    };
}


export default connect(
    mapStateToProps,
    { editNote }
)(EditNoteForm);