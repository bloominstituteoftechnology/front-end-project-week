import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import './NewNote.css';
import { addNote } from '../../actions';

class NewNote extends Component {
    
    state ={
        title: "",
        body: "",
        error: ""
    }

    newNoteHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    // count = 9;
    submitNewNote = (e) => {

    //    this.count++;
        let userId = localStorage.getItem('userId')
        console.log(userId)

        // let { title, body } = this.state
        let newNote = {
            title: this.state.title, 
            body: this.state.body,
            user: userId
            // id: this.count
    }
    console.log(newNote)

        e.preventDefault();

        if(!this.state.title || !this.state.body) {
            this.setState({error: 'Title and Content are both required for a new note.'})
        } else {
            this.props.addNote(newNote);
            this.setState({title: "", body: ""})

            this.props.history.push('/notes'); // takes back to list view 
        }
        
    }

    render() {

        const errorStyle = {
            color: "#cc0000"
        }

        return (

            <div className="newNote-container">
            {this.state.error && (<div style={errorStyle}>{this.state.error}</div>)}

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