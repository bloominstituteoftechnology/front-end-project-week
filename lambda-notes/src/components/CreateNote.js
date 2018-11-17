import React, {Component} from 'react';
import styled from 'styled-components';

const CreateNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 4%;
    width: 100%;

    h2{
        font-size: 2.2rem;
        margin: 55px 0 25px 0;
    }
`;

const CreateNoteForm = styled.form`
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

const CreateNoteButton = styled.button`
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

class CreateNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            text: ''
        }
    }

    handleInput = event=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event=>{
        event.preventDefault();
        
        this.props.addNote({
            title: this.state.name,
            textBody: this.state.text
        })

        this.props.history.push('/');
    }

    render(){
        return(
            <CreateNoteContainer>
                <h2>Create New Note:</h2>
                <CreateNoteForm onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} placeholder="Note Title" onChange={this.handleInput}/>
                    <textarea name="text" value={this.state.text} placeholder="Note Content" onChange={this.handleInput}/>
                    <CreateNoteButton type="submit">Save</CreateNoteButton>
                </CreateNoteForm>
            </CreateNoteContainer>
        )
    }
}

export default CreateNote;