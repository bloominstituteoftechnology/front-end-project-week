import React from 'react';
import EditNote from './EditNote';
import { FormWrapper, FormHeader, Form, EditFormInputTitle, EditFormInputText, FormInputText, FormButton } from '../style';

class EditANote extends React.Component {
    constructor(props){
        super(props);
       this.state = {
           title: '' || props.title,
           textBody: '' || props.textBody
       }
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.value]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.editNote(this.props.match.params.id, {title: this.state.title, text: this.state.textBody})
        this.setState({
            title: '',
            textInput: ''
        })
        // this.props.getNote(this.props.params.id)
        console.log(this.title)
    }

    render(){
        const note = this.props.notes.find( note  => { return this.props.match.params.id === `${note._id}`})
        console.log(note)
        return(
            <FormWrapper>
                <FormHeader>Edit Note</FormHeader>
                    <EditNote
                        inputHandler={this.inputHandler}
                        submitHandler={this.submitHandler}
                        title={this.state.title}
                        textBody={this.state.textBody}
                        // id={note._id}
                        {...this.props}
                    />
                {/* <Form onSubmit={this.props.submitHandler}>
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
                </Form> */}
        </FormWrapper>
        )
    }
}

export default EditANote