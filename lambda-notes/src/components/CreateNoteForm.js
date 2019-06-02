import React from 'react';
import '../styles/Forms.css';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class CreateNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.title + this.state.text);
    }

    addNewNote = e => {
        e.preventDefault();
        this.props.addNote(this.state.title, this.state.text);
        this.setState({
            title: '',
            text: ''
        });
        this.props.history.replace('/');
    }

    render() {
        return (
            <div>
                <h3 className='notes-page-title'>Create New Note:</h3>
                <div className='createNewNote-Container'>
                    <form className='form-content-container' onSubmit={this.addNewNote}>
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
                        <button className='navBtn saveBtn' type='submit'>SAVE</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default connect(
    null,
    { addNote }
)(CreateNoteForm);