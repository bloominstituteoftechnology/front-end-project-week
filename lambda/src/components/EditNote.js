import React from 'react';
import './EditNote.css';

export const EditNote = props => {
    return <div className="container">
                <h3 className="headerNotes">Edit Note:</h3>
                <div className="inputFields">
                <div className="editTitle">
                    <input
                        type="text"
                        className="editNoteTitle"
                        name="editNoteTitle"
                        // value={this.state.newTitle}
                        placeholder="Note Title"
                    />
                </div>
                <div className="editContent">
                    <textarea
                        type="text"
                        className="editNoteContent"
                        name="editNoteContent"
                        // value={this.state.newContent}
                        placeholder="Note Content" >
                    </textarea>
                </div>
                </div>
                <div>
                    <button className="updateButton">Update</button>
                </div>
           </div>
};