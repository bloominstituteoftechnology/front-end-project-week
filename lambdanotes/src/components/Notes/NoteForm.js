import React from 'react'
import {Form, Input, Button, FormGroup, Label} from 'reactstrap'
class NoteForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Create New Note:</h1>
                <Form>
                    <FormGroup>
                        <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        );
    }
}
export default NoteForm