import React, { Component } from 'react';
import { addNote } from '../Actions/index';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import "../Styles/CreateNote.css";

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: '',
            edited: false,
            deleted: false
        }
    }
    componentDidMount() {
        // this.props.getNotes();
    }
    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('UPDATE', this.state)
    }
    createNewNote = () => {
        const newNote = { 
            title: this.state.title,
            content: this.state.content,
            id: this.state.id,
            edited: false,
            deleted: false
        };
        console.log('NEWNOTE', newNote);
        this.props.addNote(newNote);
        this.setState({ title: '', content: ''})
    }
    render() {
        return (
            <div className='create'>
            <Sidebar />
                <div className='newNote'>
                <h4>Create New Note:</h4>

                <input type='text' name='title' placeholder='Note Title' value={this.state.title} onChange={this.updateInput}/>

                <textarea name='content' rows='20' cols='90' placeholder='Note Content' value={this.state.content} onChange={this.updateInput}/>

                <button className='submit' onClick={this.createNewNote}>save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        // id: state.id,
        // deleted: state.deleted,
        // edited: state.edited
    }
}
export default connect(mapStateToProps, { addNote })(CreateNote);