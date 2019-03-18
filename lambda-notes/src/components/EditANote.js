import React from 'react';
import EditNote from './EditNote';
import { FormWrapper, FormHeader, Form, FormInputTitle, FormInputText, FormButton } from '../style';

class EditANote extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
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
        )
    }
}

export default EditANote