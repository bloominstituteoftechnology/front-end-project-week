import React, { Component } from 'react';
import { addNote } from '../Actions/index';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import "../Styles/CreateNote.css";

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        }
    }
    componentDidMount() {
        //maybe something here
    }
    updateInput = e => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log('UPDATE', this.state)
    }
    submit = e => {
        // e.preventDefault();
        const newNote = { 
            title: this.state.title, 
            content: this.state.content
        };
        console.log("NEWNOTE", newNote)
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

                <button className='submit' onClick={this.submit}>save</button>
                </div>
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