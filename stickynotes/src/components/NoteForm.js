import React from 'react';
import {Form, H1, Main, Input, Textarea, Button} from '../style';
import {Link} from 'react-router-dom';

const NoteForm = props => {
    return (
        <Main>
            <Form onSubmit={props.addNote}>
                <H1>Create New Note</H1>
                <Input
                required
                type="text"
                name="title"
                placeholder="Note Title..."
                onChange={props.handleChange}
                />
                <Textarea 
                required
                type="text"
                name="textBody"
                placeholder="Note Content..."
                rows='20'
                onChange={props.handleChange}
                />
               <Link to={`/${props.id}`}><Button component='form' type='submit' onSubmit={props.addNote} >Save</Button></Link> 
            </Form>

        </Main>
    )
}

export default NoteForm