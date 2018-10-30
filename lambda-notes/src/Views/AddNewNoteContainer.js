import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { addNote } from '../Actions'


const WrapperDiv = styled.div`
    margin-top:10px;
    border:1px solid #CECECE;
    display:flex;
`

const NavSection = styled.div`
    background-color:#D3D2D3;
    width:25%;
    border:1px solid #CECECE;

`
const FormSection = styled.div`

`

const Form = styled.form`
    display:flex;
    flex-direction:column;
`

const TitleInput = styled.input`
    width:300px;
    height:25px;
`
const TextArea = styled.textarea`
    margin-top:25px;
    width:300px;
    height:500px;
`
const SaveButton = styled.button`
    width:150px;
    height:25px;
    margin-top:25px;
`

class AddNewNote extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'',
            body:''
        }
    }

    handleTextChange = event =>{
        this.setState({[event.target.id]: event.target.value})
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.props.addNote({
            title: this.state.title,
            textBody: this.state.body
        })
        this.setState({title:'', body:''},()=>{
            this.props.history.push('/')
        })

    }

    render(){
        return(
            <WrapperDiv>
                <NavSection>
                    &nbsp;
                </NavSection>
                <FormSection>
                    <Form onSubmit={this.handleSubmit}>  
                        <TitleInput onChange={this.handleTextChange} id='title' type='text' value={this.state.title}></TitleInput>
                        <TextArea onChange={this.handleTextChange} id='body' value={this.state.body}></TextArea>
                        <SaveButton>Save</SaveButton>
                    </Form>
                </FormSection>
        </WrapperDiv>
        )
    }
}


  export default connect(null,{ addNote })(AddNewNote);
  


