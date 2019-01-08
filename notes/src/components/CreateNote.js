import React, { Component } from 'react';
import styled from 'styled-components'


const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 80%;
`;

const Input = styled.input`
    width:40%;
    height:40px;
`;

class CreateNote extends Component {
    constructor(props){
    super(props);
    this.state ={
        title: '',
        text: ''
    }    
    }
    inputHandler = e => {
        this.setState({[e.target.title]: e.target.value});
    }


    //Set path back to default
    submitHandler = e=>{
        e.preventDefault();
        
        this.props.addNote({
            title: this.state.title,
            textBody: this.state.text
        })
        this.props.history.push("/");
}
    
    render(){
        return(
            <div className='createNote'>
                <h2>Create New Note:</h2>
                <Form onSubmit={this.submitHandler}>
                    <Input type='text' name='title' value={this.state.title} placeholder='Note Title' onChange={this.inputHandler}/>
                    <input type='text' name='text' value={this.state.text} placeholder='Text' onChange={this.inputHandler}/>
                    <button type='submit'> Save</button>
                </Form>
            </div>
        )
    }
}

export default CreateNote;