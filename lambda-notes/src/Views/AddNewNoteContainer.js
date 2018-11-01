import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { addNote } from '../Actions'
import NavSection from '../Components/NavView/NavSection'

const TopBorder = styled.div`
    margin-top:15px;
    margin-bottom:15px;
    border-bottom:1px solid #CCC;
`
const WrapperDiv = styled.div`
    border:1px solid #CECECE;
    display:flex;
`
const FormSection = styled.div`
    padding-left:25px;
    padding-right:25px;

`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const TitleInput = styled.input`
    width:355px;
    height:43px;
`
const TextArea = styled.textarea`
    margin-top:16px;
    width:610px;
    height:350px;
`
const SaveButton = styled.button`
    width:190px;
    height:40px;
    margin-top:15px;
    background-color:#2FB8BC;
    color:white;
    font-size:1.7rem;
    margin-bottom:100px;
`
const FormTitle = styled.p`
    margin-top:50px;
    font-weight:bold;
    font-size:2.3rem;
    margin-bottom:30px;
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
        },()=>{
            if(this.props.isAdded){
                this.setState({title:'', body:''},()=>{
                    this.props.history.push('/')
                })
            }
        })
    }
    render(){
        return(
            <div>
            <TopBorder>
            </TopBorder>  
            <WrapperDiv>
                <NavSection>
                </NavSection>
                <FormSection>
                    <FormTitle>Create New Note:</FormTitle>
                    <Form onSubmit={this.handleSubmit}>  
                        <TitleInput placeholder='Note Title' onChange={this.handleTextChange} id='title' type='text' value={this.state.title}></TitleInput>
                        <TextArea placeholder='Note Content' onChange={this.handleTextChange} id='body' value={this.state.body}></TextArea>
                        <SaveButton>Save</SaveButton>
                    </Form>
                </FormSection>
            </WrapperDiv>
            </div>
            
        )
    }
}
const mapStateToProps = state => {
    return {
        isAdding: state.isAdding,
        isAdded: state.isAdded
    };
  };


  export default connect(mapStateToProps,{ addNote })(AddNewNote);
  


