import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom'

const CreateNote = (props) => {
    return (
        <div>
            <h1 className ="m-4 font-weight-bold" > CREATE NEW NOTE :</h1>
            <Form>
                <FormGroup>
                  <Input  className = "form-control form-control-lg col-md-9" type="text" placeholder = "Note Title" onChange ={props.handleInput} name='title'/>
                </FormGroup>
                <FormGroup className = "input-large">
                    <Input className="form-control form-control-lg " style={{ "height": "400px" }} type="textarea" placeholder="Note Content" onChange={props.handleInput} name='noteBody'/>
                </FormGroup>
                <FormGroup>
                  <Link to="/"><Button color ="info" onClick ={props.addNote} >SAVE</Button></Link>
                </FormGroup>
            </Form>
        </div>
    )
}

export default CreateNote;