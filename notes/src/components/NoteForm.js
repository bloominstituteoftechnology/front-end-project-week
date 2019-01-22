import React, { Fragment } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const NoteTitleField = styled.input`
height: 2rem;
width: 40%;
margin-bottom: 1rem;
border-radius: 3px;
`

const NoteContentField = styled.textarea`
text-align: left;
display: flex;
padding-top: 0;
height: 300px;
width: 60%;
border-radius: 3px;
margin-button: 1rem;
`

const NoteTagsField = styled.input`
text-align: left;
display: flex;
width: 40%;
`

const Button = styled.button`
  text-align: center;
  background-color: #24B8BD;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 3rem;
  margin: 0.5rem 0;
`

function NoteForm(props) {
    function handleSubmit(event) {
        event.preventDefault();

        if (props.updatingNote) {
            props.handleUpdateNote();
        } else {
            props.handleAddNewNote(event);
        }
    }

    return (
        <Fragment>
            <div className="notes-form-header">
            <h2>{props.updatingNote ? 'Edit Note:' : 'Create New Note:'}</h2>
            </div>
            <form>
                <NoteTitleField
                    type="text"
                    value={props.note.title}
                    name="title"
                    placeholder="Note Title"
                    onChange={props.handleChange}
                />
                <NoteContentField
                    type="text"
                    value={props.note.textBody}
                    name="textBody"
                    placeholder="Note Content"
                    onChange={props.handleChange}
                />
                <NoteTagsField
                    type="text"
                    value={props.note.tags}
                    name="tags"
                    placeholder="Note Tags"
                    onChange={props.handleChange}
                    />
                <Button className="button" onClick={handleSubmit}>{props.updatingNote ? 'Update' : 'Save'}</Button>
            </form>
        </Fragment>
    )
}

NoteForm.propTypes = {
    note: PropTypes.shape({
        title: PropTypes.string,
        textBody: PropTypes.string,

    })
}

export default NoteForm;