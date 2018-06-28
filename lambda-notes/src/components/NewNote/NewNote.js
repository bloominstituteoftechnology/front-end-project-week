import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import './NewNote.css';
import { addNote } from '../../actions';

class NewNote extends Component {
    
    state ={
        title: "",
        body: ""
    }

    newNoteHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    // count = 9;
    submitNewNote = (e) => {

    //    this.count++;

        let { title, body } = this.state
        let newNote = {
            title, 
            body, 
            // id: this.count
    }

        e.preventDefault();
        this.props.addNote(newNote);
        this.setState({title: "", body: ""})

        this.props.history.push('/notes'); // takes back to list view 
        
    }

    render() {

        return (

            <div className="newNote-container">

                <div className="create-newNote">Create New Note:</div>

                <input 
                    onChange={this.newNoteHandler} 
                    name="title" value={this.state.title} 
                    className="title-input" 
                    type="text" 
                    placeholder="Note Title">
                </input>

                <textarea 
                    onChange={this.newNoteHandler} 
                    name="body" value={this.state.body} 
                    className="content-input" 
                    cols="30" 
                    rows="10" 
                    type="text" 
                    placeholder="Note Content" >
                </textarea>

                <Button style={{width: "30%"}} onClick={this.submitNewNote} text="Save"/>

            </div>

        )

    }
}



export default connect(null, { addNote })(NewNote);