import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

class EditNote extends Component {
    state={
        title:'',
        content:'',
    }

    componentDidMount(){
        if(this.props.editNote) {
            this.setState({
                isUpdating:true,
                title:this.props.isUpdating.title,
                content:this.props.isUpdating.content,
                
            })
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    editNote = e => {
        e.preventDefault();
        const editedNote={
            id:this.props.id,
            title: this.state.title,
            content: this.state.content
        }
        this.props.editNote(editedNote)
    }
    
    render(){
        return(
            <Form>
                <H2>Edit Note:</H2>
                <InputTitle
                    type='text'
                    placeholder='Note Title...'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <InputContent 
                     type='text'
                     placeholder='Note Content...'
                     name='content'
                     value={this.state.content}  
                     onChange={this.handleChange}             
                />
                <Button onClick={this.editNote}>Update</Button>
            </Form>
        )
    }
}

const Form = styled.form`
    margin: 38px 4% 0 4%;
    display:flex;
    flex-direction:column;
`;

const H2 = styled.h2`
    font-size: 1.25rem;
    margin-bottom: 30px;
`;

const InputTitle = styled.input`
    width: 56.5%;
    height: 40px;
    border-radius: 5px;
    padding-left: 1.5%;
    border:1px solid grey;
`;

const InputContent = styled.input`
    width: 98.75%;
    height: 345px;
    border-radius: 5px;
    margin: 10px 0;
    border:1px solid grey;
`;

const Button = styled.button`
    color:white;
    background-color: #2BC1C4;
    width: 31.5%;
    height: 45px;
    font-weight:bold;
    font-size:1rem;
    border: 1px solid grey;
`;

export default withRouter(EditNote);