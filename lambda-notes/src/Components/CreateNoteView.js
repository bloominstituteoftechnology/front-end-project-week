import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { addNote } from '../actions'; 
import { connect } from 'react-redux'; 


class CreateNoteView extends Component {
    constructor(){
        super(); 
        this.state = {
            title: '', 
            content: ''
        }
    }

    handleChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitNoteHandler = (event) => {
        const newNote = {
            id: this.props.notes.length + 1, 
            title: this.state.title, 
            content: this.state.content
        }
        
        this.props.addNote(newNote); 
    }
    
    render(){
        return (
            <div className = "create-note-view">
                <h2>Create New Note:</h2>
                <input name = 'title'  onChange = {this.handleChangeHandler} type = "text" placeholder = "Note Title"/>
                <textarea onChange = {this.handleChangeHandler} name = "content" rows= "20"  placeholder = "Note Content"></textarea>
                <Link onClick = {this.submitNoteHandler} to = "/">Save</Link>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, {addNote})(CreateNoteView); 