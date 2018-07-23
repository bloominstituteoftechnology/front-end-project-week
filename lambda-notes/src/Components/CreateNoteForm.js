import React, { Component } from 'react';

// create note form should have an input box for the title, 
// an input box for the content, and a save button


class CreateNoteForm extends Component {
    constructor() {
        super();
        this.state = {
            noteEntry: {
                title: "",
                textBody: "",
                tags: []
            }
        }
    }

    createNoteTitleHandler = e => {
        console.log(e.target.value);
        
        this.setState({noteEntry: {
            title:[e.target.value], 
            textBody: this.state.noteEntry.textBody,
            tags: this.state.noteEntry.tags
        }})
    }

    createNoteTextBodyHandler = e => {
        console.log(e.target.value);
        
        this.setState({noteEntry: {
            title:this.state.noteEntry.title, 
            textBody: [e.target.value],
            tags: this.state.noteEntry.tags
        }})
    }

    render() {
        return (
            <div>
                <form>
                    NOTE TITLE:
                    <input
                        type="text"
                        placeholder="Note Title"
                        name = "title"
                        onChange = {this.createNoteTitleHandler}
                    />
                    NOTE CONTENT:
                    <input
                        type="text"
                        placeholder="Note Content"
                        name = "content"
                        onChange = {this.createNoteTextBodyHandler}
                    />
                </form>

                <button> Save </button>
            </div>
        )
    }
} 


export default CreateNoteForm