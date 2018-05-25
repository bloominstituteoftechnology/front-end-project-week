// bulding component allows new note


import React, { Component } from 'react';






class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: "",
            noteTitle:"",
            noteText: ""
        }

    }
    // captures input field data
    handleNoteInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
// handles button click
    handleSaveNoteButton = () => {
        const newNote = this.state;
        this.props.notes.push(newNote);
        this.setState({
            ID: new Date(),
            noteTitle: '',
            noteText: ''
        });
    }
    render() {
        return (
            <div>
                <div className='TitleField'>
                {/* input field     */}
                    <input onChange={this.handleNoteInput} type="text" name="noteTitle" id={this.state.noteID} placeholder="Note Title" value={this.state.noteTitle} /> 
                    
                </div>
                <div>
                    {/* note text */}
                    <input onChange={this.handleNoteInput} type="text" name="noteText" id={this.state.ID} placeholder="Note Text" value={this.state.noteText} /> 
                </div>
                <div>
                    <button type="button"  onClick={this.handleSaveNoteButton}>Save</button>
                </div> 
            </div>
        )
    }
}




export default AddNote;
