import React from 'react';
import EditNote from './EditNote';
import { FormWrapper, FormHeader, Form, EditFormInputTitle, EditFormInputText, FormInputText, FormButton } from '../style';

class EditANote extends React.Component {
    constructor(props){
        super(props);
       
       
    }
    render(){
        return(
            <FormWrapper>
                <FormHeader>Edit Note</FormHeader>
                <Form onSubmit={this.props.submitHandler}>
                    <EditFormInputTitle
                        className='title'
                        type='text'
                        maxLength='50'
                        name='title'
                        onChange={this.props.handleChange}
                        placeholder='Enter Title'
                        value={this.props.title}
                    />

                    <EditFormInputText
                        className='text'
                        type='text'
                        name='textBody'
                        required={!this.props.edit}
                        onChange={this.props.handleChange}
                        placeholder='Edit Text'
                        value={this.props.body}
                    />
                    <FormButton>Edit Note</FormButton>
                </Form>
        </FormWrapper>
        )
    }
}

export default EditANote