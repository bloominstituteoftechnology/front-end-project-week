import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const NotesFormHeader = styled.h2`
    margin-bottom: 2%;
    font-size: 1.6rem;
    text-align: center;
`;

const NotesFormContainer = styled.div`
    width: 65%;
    margin: 0 auto;
    text-align: center;
`;

const NotesStyledInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;

    :focus {
        outline: none;
    }
`;

const NotesStyledTextarea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    margin: 2% 0%;
    border: 2px solid #ccc;
    border-radius: 4px;
    resize: none;

    :focus {
        outline: none;
    }
`;

const NotesStyledButton = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 2% 0%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    :hover {
        background-color: white;
        color: #4CAF50;
        cursor: pointer;
    }
`;

const NotesForm = (props) => {
    const handleSubmit = event => {
        event.preventDefault();
        if (props.notes_editing) {
            props.handleEdit();
        } else {
            props.handleCreate(event);
        }
    }
  return (
    <PageContainer>
      <NotesFormContainer>
        <NotesFormHeader>{props.notes_editing ? "Edit" : "Create" }</NotesFormHeader>
            <NotesStyledInput
                type="text"
                value={props.note.title}
                name="title"
                onChange={props.handleChange}
                placeholder="Title"
            />
            <NotesStyledTextarea
                type="text"
                value={props.note.textBody}
                name="textBody"
                onChange={props.handleChange}
                placeholder="Content"
            />
            <NotesStyledInput
                type="text"
                value={props.note.tags}
                name="tags"
                onChange={props.handleChange}
                placeholder="Tags"
            />
            <NotesStyledButton onClick={handleSubmit}>Submit</NotesStyledButton>
      </NotesFormContainer>
    </PageContainer>
  )
}

export default NotesForm;