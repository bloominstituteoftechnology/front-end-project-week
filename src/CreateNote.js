import React from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions/index';
import { H2Header, NoteContainer, NoteForm, FormTitle, FormText, SubmitButton } from './StyledComponents';



class CreateNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            textBody: ''
        }
    }



    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            textBody: ''
        })
        this.props.history.push('/notes');
    }

    render(){
        return(
            <NoteContainer>
                <H2Header>Create New Note:</H2Header>

                <NoteForm onSubmit={this.submitHandler} >
                    <FormTitle onChange={this.inputHandler} type="text" value={this.state.title} name="title" placeholder="Note Title" />
                    <FormText onChange={this.inputHandler} type="text" value={this.state.text} name="textBody" placeholder="Note Content" />
                    <SubmitButton type="submit">Save</SubmitButton>
                </NoteForm>
            </NoteContainer>
        )
    }
}


export default connect( ()=>({}), { addNote })(CreateNote); 
