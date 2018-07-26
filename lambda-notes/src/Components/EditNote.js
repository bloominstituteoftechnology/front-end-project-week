import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CreateNoteFormContainerStyledDiv, CreateNoteStyledForm, CreateNoteStyledTextarea, CreateNoteStyledInput } from './CreateNoteForm';

const EditNote = props => {
    return (
        <CreateNoteFormContainerStyledDiv>
            <h2>Edit Note:</h2>
            <CreateNoteStyledForm>
                <CreateNoteStyledInput
                    type="text"
                    placeholder="Note Title"
                    name="title"
                    onChange={props.createNoteTitleHandler}
                    defaultValue={props.noteEntries[props.match.match.params.id - 1].title}
                />
                <CreateNoteStyledTextarea
                    type="text"
                    placeholder="Note Content"
                    name="content"
                    onChange={props.createNoteTextBodyHandler}
                    defaultValue={props.noteEntries[props.match.match.params.id - 1].textBody}
                />
            </CreateNoteStyledForm>

            <Link to={`/`}>
                <button onClick={(e) => props.editNoteEntry(e, props.match.match.params.id)}>
                    <Link to={`/`}>
                        UPDATE
                    </Link>
                </button>
            </Link>

        </CreateNoteFormContainerStyledDiv>
    );
}

export default EditNote