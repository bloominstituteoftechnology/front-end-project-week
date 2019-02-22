import React from 'react';
import styled from 'styled-components';
import MenuContainer from '../Containers/MenuContainer';

const EditNoteContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    height:100%;
`;
const FormContainter = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    width:70%;
    padding-top:50px;
    padding-left:50px;

`;

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    padding-bottom:450px;
`;

const NoteTitle = styled.input`
    display:flex;
    width:60%;
    margin-bottom:20px;
`;

const NoteContent = styled.input`
    display:flex;
    width:90%;
    height:150px;
    margin-bottom:10px;
`;
const NoteSubmit = styled.input`
    display:flex;
    justify-content:center;
    width:15%;
    height:35px;
`;

const Title = styled.h2`
    display:flex;
    width:100%;
`;

const EditNote = props => {
    const EditNotes = event => {
        event.preventDefault();
        props.editNote(props.note, props.match.params.id);
        props.history.push('/');
    }

    return(
        <EditNoteContainer>
            <MenuContainer/>
            <FormContainter>
                <Title>Edit Note: </Title>
                <Form onSubmit={EditNotes}>
                    <NoteTitle type="text" name="title" placeholder="Note Title" onChange={props.handleInput}/>
                    <NoteContent type="text" name="textBody" placeholder="Note Content" onChange={props.handleInput}/>
                    <NoteSubmit type="submit" value="save" />
                </Form>
            </FormContainter>
        </EditNoteContainer>
    )
}

export default EditNote;