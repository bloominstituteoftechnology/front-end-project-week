
import React, { Component } from 'react';
import { Form, FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
// import { withRouter } from 'react-router-dom';


class AddNote extends Component {
    state= {
            title: '',
            content: ''
        };
    
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      console.log(e.target.name)
    }
   

    handleSubmit = () => {
        this.props.addNewCard(this.state);
        this.props.updateNewNote(this.state);
    }

    render() {
        return(
            <div className='body'>
                <h1 className='sub-header'>Create New Note:</h1>
                <Form>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type='text' className='noteTitle mt-4' name='title' id='Title' placeholder='Note Title' />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type='textarea' className='noteContent'name='content' id='Body' placeholder='Note Content' />
                    </FormGroup>
                    <FormGroup>
                        <Link className='' to='/'>
                        <button onClick={this.handleSubmit} className='navButton_save mt-2'>Save</button>
                        </Link>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default AddNote;