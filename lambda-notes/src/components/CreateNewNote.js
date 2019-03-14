import React, { Component } from 'react';
import { FormWrapper, FormHeader, Form, FormInputTitle, FormInputText, FormButton } from '../style';


class CreateNewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
            text: props.text
        }
    }

    

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    changeText = (event) => {
        const { textBody } = this.state.textBody;
        const newText = {
          ...textBody,
          text: event.target.value
        };
        this.setState({ textBody: newText });
      }

    submitHandler = (event) => {
        event.preventDefault();
        if(this.props.edit) {
            console.log('clicked')
            this.props.editNote(
                this.state,
                this.props.match.params.id); 
        } else {
            this.props.createNote(this.state);
        }
        this.props.history.push('/')
        
    }

    render () {
        console.log(this.state)
        return (
            <FormWrapper>
                <FormHeader>{this.props.edit ? 'Edit Note': 'Create New Note'}</FormHeader>
                <Form onSubmit={this.submitHandler}>
                    <FormInputTitle
                        className='title'
                        type='text'
                        maxLength='50'
                        name='title'
                        onChange={this.handleChange}
                        placeholder='Enter Title'
                        value={this.state.title}
                    />

                    <FormInputText
                        className='text'
                        type='text'
                        name='textBody'
                        required={!this.props.edit}
                        onChange={this.handleChange}
                        placeholder='Edit Text'
                        value={this.state.textBody}
                    />
                    <FormButton>{this.props.edit ? 'Edit Note': 'Save'}</FormButton>
                </Form>
            </FormWrapper>
        );
    }
}

export default CreateNewNote