import React from 'react';
import EditANote from './EditANote';
import { FormWrapper, FormHeader, Form, EditFormInputTitle, EditFormInputText, FormInputText, FormButton } from '../style';

class EditNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            textBody:''
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.editNote(
            this.props.match.params.id,
            {title: event.target.value, textBody: this.state.textBody})
            // {title: this.state.title, textBody: this.state.textBody})
        this.setState({
            title: '',
            textBody: ''
        })
        this.props.getById(this.props.match.params.id)
        console.log('getting by id')
    }

    render() {
        return (
            <div className='form-wrapper'>
                <EditANote
                    title={this.state.title}
                    body={this.state.textBody}
                    handleChange={this.handleChange}
                    submitHandler={this.submitHandler}
                    getById={this.props.getById}
                />
            </div>
        )
    }
}

export default EditNote