import React from 'react';

// create note form should have an input box for the title, 
// an input box for the content, and a save button


const CreateNoteForm = props => {
    return (
        <div>
            <form>
                NOTE TITLE:
                    <input
                    type="text"
                    placeholder="Note Title"
                    name="title"
                    onChange={props.createNoteTitleHandler}
                    value = {props.noteEntry.title}
                />
                NOTE CONTENT:
                    <input
                    type="text"
                    placeholder="Note Content"
                    name="content"
                    onChange={props.createNoteTextBodyHandler}
                    value = {props.noteEntry.textBody}
                />
            </form>

            <button onClick = {props.addNoteEntry}>  Save </button>
        </div>
    )
}



export default CreateNoteForm