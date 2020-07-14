import React from 'react';
import styled from 'styled-components';


const NoteForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 125px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
` 
const TitleInput = styled.input`
    width: 50%;
    margin-bottom: 15px;
    height: 35px;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #C5C5C5;
    :focus{
        outline: none;
    }
    ::placeholder{
        font-family: 'Open Sans', sans-serif;
    }
`
const TextInput = styled.textarea`
    width: 95%;
    border: 1px solid #C5C5C5;
    border-radius: 4px;
    padding-left: 10px;
    padding-top: 10px;
    :focus{
        outline: none;
    }
    ::placeholder{
        font-family: 'Open Sans', sans-serif;
    }
`
const SubmitButton = styled.button `
    width: 25%;
    margin-top: 30px;
    background-color:#2bc1c4;
    border: 1px solid #979797;
    color: #FFFFFF;
    height: 40px;
    font-size: 25px;
    
`
class AddNoteForm extends React.Component {
    render(){
        return (
            <NoteForm onSubmit = {this.props.submitHandler}>
                <TitleInput 
                    value = {this.props.title} 
                    onChange = {this.props.inputHandler} 
                    name = 'title' 
                    placeholder ='note title'
                />
                <TextInput 
                    value = {this.props.textInput} 
                    onChange = {this.props.inputHandler} 
                    name = 'textInput' 
                    placeholder = 'Note Comment' 
                    rows = '20'/>
                <SubmitButton onClick={this.props.history.goBack}>Save</SubmitButton>
            </NoteForm>
        )
        }
}

export default AddNoteForm