import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes, addNote } from '../actions';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
            added: false
        }
    }

    changeHandler = event => {
        this.setState({ 
            [event.target.name]: event.target.value,
        })
    };

    addNote = event => {
        event.preventDefault();
        const { title, textBody } = this.state;
        let newNote = {title, textBody}
        this.props.addNote(newNote).then(() => this.props.fetchNotes())
        this.setState({
            title: '',
            textBody: '',
            added: true
        })
    }

    render() {
        return this.state.added ? 
        (<Redirect to='/'/>) :
        (
            <div className='add'>
                <form className='form' onSubmit={this.addNote}>Add Note
                    <input 
                        className='title-input' 
                        name='title' 
                        value={this.state.title} 
                        onChange={this.changeHandler} 
                        type='text' 
                        placeholder='Title' 
                        required 
                    />
                    <textarea 
                        className='content-input' 
                        name='textBody' 
                        value={this.state.textBody} 
                        onChange={this.changeHandler} 
                        placeholder='Content' 
                        required
                    />
                    <input className='form-submit' type='submit' value='Save'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps, { fetchNotes, addNote })(AddNote);
