import React from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

const NoteAdd = props => {

    return (
        <div>
            <h1>Add New Note</h1>
            <form>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={props.handleInput}
                    value={props.note.title}
                />

                <label>Content</label>
                <input
                    type="text"
                    name="textBody"
                    placeholder="Content"
                    onChange={props.handleInput}
                    value={props.note.textBody}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NoteAdd;