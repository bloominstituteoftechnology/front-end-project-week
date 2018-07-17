import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote } from '../actions';

const StyledNoteForm = styled.div`
    background: #F3F3F3;
    width: 100%;
    padding: 5%;
    font-family: Roboto Bold;
`;

const H3 = styled.h3`
    margin: 2% 0;
`;

const TitleInput = styled.input`
    width: 50%;
    min-height: 25px;
    margin-bottom: 3%;
`;

const ContentInput = styled.textarea`
    width: 100%;
    min-height: 300px;
`;

const StyledButton = styled.button`
    background: #2BC1C4;
    padding: 1%;
    margin-top: 5%;
    color: white;
    border: 2px solid #979797;
    width: 30%;
    height: 40px;
    font-family: Raleway Medium;
    font-size: 1rem;
    &:hover{cursor: pointer;}
`;

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputTitle: '',
            inputBody: '',
            addNote: props.addNote,
            created: false,
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    addNote = (e) => {
        e.preventDefault();
        const newNote = {title: this.state.inputTitle, textBody: this.state.inputBody}
        this.props.addNote(newNote);
        this.setState({inputTitle: '', inputBody: '', created: true});
    }

    render(){
        if(this.state.created){
            return <Redirect to='/' />
        }
        return (
            <StyledNoteForm>
                <H3>Create New Note:</H3>
                <form onSubmit={this.addNote}>
                    <TitleInput type="text"
                            name="inputTitle"
                            placeholder="Note Title"
                            value={this.state.inputTitle}
                            onChange={this.handleInput} /><br />
                    <ContentInput type="text"
                            name="inputBody"
                            placeholder="Note Content"
                            value={this.state.inputBody}
                            onChange={this.handleInput} /><br />
                    <StyledButton>Save</StyledButton>
                </form>
            </StyledNoteForm>
        );
    }
    }

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { addNote })(NoteForm);