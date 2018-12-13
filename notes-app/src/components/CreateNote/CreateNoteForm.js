import React, { Component } from 'react';
import { Route,NavLink } from "react-router-dom";
import styled from 'styled-components';


export const Button = styled.button`
    width: 200px;
    border: 1px solid gray;
    background: #24B8BD;
    color: white;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
`;

export const NoteLinks = styled.div`
    position: absolute;
    right:20px;
    top: 20px;
    a{
        margin-right:20px;
    }
`;

const NoteForm = styled.div`
    height: 93vh;
    background: #F2F1F2
`;

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
`;

class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody:''
        };
    }

    componentDidMount(){
        let editNote = this.props.editNote;
        console.log(editNote);

        if(editNote.title){
            this.setState({
                title: editNote.title,
                textBody: editNote.textBody
            })
            
        }
    }
    componentWillUnmount(){
        this.props.resetEdit();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSumbit = e => {
        e.preventDefault();

        if(!this.props.editNote.title){
            this.props.addToList(this.state);
        }else{
            this.props.updateToList(this.props.editNote._id, this.state)
        }
        this.props.history.push('/');
        
        this.setState({
            title: '',
            textBody:''
        })
    }

    render() {
        return (
            <NoteForm>
                <NoteLinks>
                    {this.props.editNote.title 
                    ?<NavLink to='/' onClick={(e) =>{
                        e.preventDefault();
                        this.props.history.goBack();
                    }}>View Note</NavLink> 
                    :null
                    }
                    
                </NoteLinks>
                <h2>{this.props.editNote.title ? 'Edit Note' : 'Create New Note'}:</h2>
                <InputForm onSubmit={this.handleSumbit}>
                    <input
                        className='inputs' 
                        onChange={this.handleChange}
                        placeholder='title'
                        value={this.state.title}
                        name='title'
                    />
                    <textarea
                        className='inputs'
                        name='textBody' 
                        onChange={this.handleChange} 
                        value={this.state.textBody} 
                        placeholder='content'></textarea>
                    <Button type='submit'>Save</Button>
                </InputForm>
            </NoteForm>
        )
    }
}

export default CreateNoteForm;