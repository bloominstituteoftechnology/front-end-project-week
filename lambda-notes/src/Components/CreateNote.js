import React, { Component } from 'react';
import { addNote } from '../Actions/index';
import { connect } from 'react-redux';

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        }
    }
    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('UPDATE', this.state)
    }
    submit = e => {
        const newNote = { title: this.state.title, content: this.state.content};
        this.props.addNote(newNote);
        this.state({ title: '', content: ''})
    }
    render() {
        return (
            <div className='create'>
                <h3>Create New Note:</h3>

                <input type='text' name='title' placeholder='Note Title' value={this.state.title} onChange={this.updateInput}/>

                <textarea name='content' rows='25' cols='50' value={this.state.content} onChange={this.updateInput}/>

                <button onClick={this.addNote}>save</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}
export default connect(mapStateToProps, { addNote })(CreateNote);