import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


import {editNote, setCurrentNote} from '../actions/actions';

const EditNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 4%;
    width: 100%;

    h2{
        font-size: 2.2rem;
        margin: 55px 0 25px 0;
    }
`;

const EditNoteForm = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 2.2rem;

    input{
        width: 60%;
        height: 40px;
        font-size: 1.6rem;
        margin-bottom: 20px;
        border: 2px solid #c9c8c9;
        border-radius: 3px;
        outline-style: none;
    }

    textarea{
        height: 300px;
        margin-bottom: 20px;
        padding: 10px 10px;
        font-size: 2.0rem;
        border: 2px solid #c9c8c9;
        border-radius: 3px;
        outline-style: none;
    }
`;

const EditNoteButton = styled.button`
    font-size: 1.6rem;
    width: 30%;
    height: 40px;
    margin-bottom: 15px;
    color: white;
    background-color: #24b8bd;
    border: 2px solid #56aaad;
    cursor: pointer;
    outline-style: none;

    &:hover{
        color: #24b8bd;
        background-color: white;
        border: 2px solid #56aaad;
    }
`;

class EditNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.note.id,
            title: props.note.note_title,
            content: props.note.note_content
        }
    }

    handleInput = event=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event=>{
        event.preventDefault();
        
        this.props.editNote(this.state.id, {
            note_title: this.state.title,
            note_content: this.state.content
        }, this.props.notes)
        
        this.props.history.push(`/note/${this.props.note.id}`);
    }

    render(){
        if(!this.props.note){
            return <div>Loading data...</div>
        }
        return(
            <EditNoteContainer>
                <h2>Edit Note:</h2>
                <EditNoteForm onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={this.handleInput}/>
                    <textarea name="content" value={this.state.content} placeholder="Note Content" onChange={this.handleInput}/>
                    <EditNoteButton type="submit">Update</EditNoteButton>
                </EditNoteForm>
            </EditNoteContainer>
        )
    }
}

const mapStateToProps = state=>{
    return{
        notes: state.notes,
        note: state.currentNote
    }
}

export default withRouter(connect(mapStateToProps, {editNote, setCurrentNote})(EditNote));