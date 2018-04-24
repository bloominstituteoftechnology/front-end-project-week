import React, { Component } from 'react';
import './CreateNote.css';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state={
          notes: []
        };
}


render() {
    return (
            <div className="container">
                <h3 className="headerNotes">Create New Note:</h3>
                <div className="inputFields">
                <div className="inputTitle">
                    <input
                        type="text"
                        className="createNoteTitle"
                        name="createNoteTitle"
                        // value={this.state.newTitle}
                        placeholder="Note Title"
                    />
                </div>
                <div className="inputContent">
                    <textarea
                        type="text"
                        className="createNoteContent"
                        name="createNoteContent"
                        // value={this.state.newContent}
                        placeholder="Note Content" >
                    </textarea>
                </div>
                </div>
                <div>
                    <button className="saveButton">Save</button>
                </div>
           </div>);
}
}