import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: 50%;
    margin-top: 80px;
    padding-left: 3%;
    color: #4a494a;

    input {
        width: 400px;
    }

    textarea {
        height: 500px;
    }
`;

const Button = Styled.button`
    width: 30%;
    height: 60px;
    background-color: #2ac0c4;
    color: white;
    border: 1px solid #969696;
    cursor: pointer;
    margin-top: 20px;
`;

function NoteCreateForm(props) {
    function handleSubmit(e) {
        e.preventDefault();

        if (props.isUpdating) {
            props.handleUpdateNote();
        } else {
            props.handleAddNewNote(e);
        }
    }

    return (
        <Wrapper>
            <form>
                <p className="h4 mb-4">{props.isUpdating ? 'Edit Note:' : 'Create New Note:'}</p>
                <input type="text" placeholder="Note Title" name="title" id="defaultFormContactNameEx" className="form-control" defaultValue={props.note.title} onChange={props.handleChange}/>
                <br />
                <input type="text" placeholder="Note Tags (Seperate with a , )" name="tags" id="defaultFormContactNameEx" className="form-control" value={props.note.tags} onChange={props.handleChange}/>
                <br/>
                <textarea type="text" placeholder="Note Content" name="textBody" id="defaultFormContactMessageEx" className="form-control" rows="3" value={props.note.textBody} onChange={props.handleChange}></textarea>
                <Button type="button" onClick={handleSubmit}>{props.isUpdating ? 'Update' : 'Save'}</Button>
            </form>
        </Wrapper>
    )
}

export default NoteCreateForm;