import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledEditNote = styled.div`
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

class EditNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            editTitle: '',
            editBody: '',
            editNote: props.editNote,
            id: props.match.params.id,
            edited: false,
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    editNote = (e) => {
        e.preventDefault();
        this.state.editNote(this.state.id, this.state.editTitle, this.state.editBody);
        this.setState({editTitle: '', editBody: '', edited: true});
    }

    render(){
        //Returns us home after an edit
        if(this.state.edited){
            return <Redirect to='/' />;
        }
        return (
            <StyledEditNote>
                <H3>Edit Note:</H3>
                <form onSubmit={this.editNote}>
                    <TitleInput type="text"
                            name="editTitle"
                            placeholder="Edit Title"
                            value={this.state.editTitle}
                            onChange={this.handleInput} /><br />
                    <ContentInput type="text"
                            name="editBody"
                            placeholder="Edit Content"
                            value={this.state.editBody}
                            onChange={this.handleInput} /><br />
                    <StyledButton>Update</StyledButton>
                </form>
            </StyledEditNote>
        );
    }
    }

 
export default EditNote;