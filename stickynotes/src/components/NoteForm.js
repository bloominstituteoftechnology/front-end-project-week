import React, {Component} from 'react';
import {Form, H1, Main, Input, Textarea, Button} from '../style';
import {Link} from 'react-router-dom';

class NoteForm extends Component {

    handleMode = () => {
        if(this.props.mode === 'create'){
            return this.props.addNote
        } else {
            return this.props.editNote
        }
    }

    render ()
    {return (
        <Main>
            <Form onSubmit={this.handleMode()}>
                <H1>Create New Note</H1>
                <Input
                required
                type="text"
                name="title"
                placeholder="Note Title..."
                onChange={this.props.handleChange}
                />
                <Textarea 
                required
                type="text"
                name="textBody"
                placeholder="Note Content..."
                rows='20'
                onChange={this.props.handleChange}
                />
               <Link to={`/${this.props.id}`}><Button component='form' type='submit' onSubmit={this.handleMode()}>{this.props.buttonText}</Button></Link> 
            </Form>

        </Main>
    )}
}

export default NoteForm