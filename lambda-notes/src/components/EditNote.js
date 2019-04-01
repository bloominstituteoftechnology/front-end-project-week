import React from 'react';
import EditANote from './EditANote';
import { FormWrapper, FormHeader, Form, EditFormInputTitle, EditFormInputText, FormInputText, FormButton } from '../style';

class EditNote extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <FormWrapper onSubmit={this.props.submitHandler}>
                <EditFormInputTitle
                    name='title'
                    onChange={this.props.inputHandler}
                    value={this.props.title}
                    placeholder='Title'
                />

                <EditFormInputText
                     name='textBody'
                     onChange={this.props.inputHandler}
                     value={this.props.textBody}
                     placeholder='Body'
                />
                <FormButton onClick={this.props.history.goBack}>Save</FormButton>
            </FormWrapper>
        )
    }
}

export default EditNote