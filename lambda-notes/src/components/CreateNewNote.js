import React, { Component } from 'react';
import { FormWrapper, FormHeader, Form, FormInputTitle, FormInputText, FormButton } from '../style';


class CreateNewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
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
        console.log(this.props.note)
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
                        onChange={this.handleChange}
                        placeholder={this.props.edit ? `${this.state.textBody}`: 'Create New Note'}
                        value={this.state.textBody}
                    />
                    <FormButton>{this.props.edit ? 'Edit Note': 'Save'}</FormButton>
                </Form>
            </FormWrapper>
        );
    }
}

export default CreateNewNote