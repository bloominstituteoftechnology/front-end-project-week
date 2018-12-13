import React, { Component } from 'react';
import { connect } from 'react-redux';

import { create, edit } from '../actions';

//styling
import './EditCreate.css';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note.id,
            title: this.props.note.title,
            textBody: this.props.note.textBody
        }
    }
    
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    newNote = (event, props) => {
        event.preventDefault();
        const noteId = this.state.id
        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        // console.log(noteId)
        if (this.props.editNote) {
            this.props.edit(note, noteId)
            props.history.push('/');
        } else {
            this.props.create(note)
            props.history.push('/');
        }
    }

    render() {
        return (
            <div className='notePage'>
                <h3>{this.props.editNote ? 'Edit Note:' : 'Create New Note:'}</h3>
                <form className='noteEntry'>
                    <input
                        type='text'
                        placeholder='Note Title'
                        name='title'
                        onChange={this.changeHandler}
                        value={this.state.title}
                    />
                    <textarea
                        rows='25'
                        placeholder='Note Content'
                        name='textBody'
                        onChange={this.changeHandler}
                        value={this.state.textBody}
                    >
    
                    </textarea>
                    <button onClick={(event) => this.newNote(event, this.props)} className='noteSave'>
                        {this.props.editNote ? 'Update' : 'Save'}
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        editNote: state.editNote
    }
}
 
export default connect(mapStateToProps, { create, edit })(EditNote);