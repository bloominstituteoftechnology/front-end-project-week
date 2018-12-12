import React from 'react';
import SideBar from '../SideBar/SideBar';
import styled from 'styled-components';
import AddNoteForm from './AddNoteForm';

const ContentDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #F3F3F3;
`
const CreateContentDiv = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #F3F3F3;
`;
const CreateViewH1 = styled.h1`
    height: 20px;
    font-size: 25px;
    margin: 0px;
    padding: 50px;
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    color: #4A4A4A;
    font-weight: bold;
`;

class CreateView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            textInput: '',
        }
    }
    inputHandler =(event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    submitHandler = (event) =>{
        event.preventDefault();
        this.props.addNotes({title: this.state.title, textBody: this.state.textInput});
        this.setState({
            title: '',
            textInput: '',
        })
    }
    render(){
    return (
        <ContentDiv>
            <SideBar handleLogout = {this.props.handleLogout} handleClick = {this.props.handleClick}/>
            <CreateContentDiv> 
                <CreateViewH1>Create New Note: </CreateViewH1>
                <AddNoteForm 
                inputHandler = {this.inputHandler}
                submitHandler = {this.submitHandler}
                title ={this.state.title} 
                textInput ={this.state.textInput} 
                addNotes = {this.props.addNotes}/>
            </CreateContentDiv>
        </ContentDiv>
    )
    }
}

export default CreateView