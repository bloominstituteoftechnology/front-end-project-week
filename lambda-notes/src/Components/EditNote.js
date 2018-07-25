import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CreateNoteFormContainerStyledDiv, CreateNoteStyledForm, CreateNoteStyledTextarea } from './CreateNoteForm';


const EditNote = props => {
    return (
        <CreateNoteFormContainerStyledDiv>
            EDIT NOTE:
            <CreateNoteStyledForm>
                <input
                    type="text"
                    placeholder="Note Title"
                    name="title"
                    onChange={props.createNoteTitleHandler}
                    // value={props.noteEntry.title}
                    defaultValue={props.noteEntries[1].title}
                />
                <CreateNoteStyledTextarea
                    type="text"
                    placeholder="Note Content"
                    name="content"
                    onChange={props.createNoteTextBodyHandler}
                    // value={props.noteEntry.textBody}
                    defaultValue={props.noteEntries[1].textBody}
                />
            </CreateNoteStyledForm>


            <Link to={"/note"}>  {/*TOO HACKY!!! */}
                <button onClick={props.editNoteEntry}>
                    <Link to={"/note"}>
                        UPDATE
                    </Link>
                </button>
            </Link>


        </CreateNoteFormContainerStyledDiv>
    );
}

export default EditNote