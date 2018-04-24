import React from 'react'
import {Form, Input, Button, FormGroup} from 'reactstrap'
class NoteForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='col-9 right__side'>
                <div className='row'>
                    <div className="col-3">
                        <h4>Create New Note:</h4>
                    </div>
                </div>
                <div className="row">
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
            </div>
        );
    }
}
export default NoteForm