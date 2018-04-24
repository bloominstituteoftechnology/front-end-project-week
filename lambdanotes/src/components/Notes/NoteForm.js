import React from 'react'
import {Form, Button,} from 'react-bootstrap'
class NoteForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Create New Note:</h1>
                {/*<Form>*/}
                    {/*<FieldGroup*/}
                        {/*id="formControlsText"*/}
                        {/*type="text"*/}
                        {/*label="Text"*/}
                        {/*placeholder="Enter text"*/}
                    {/*/>*/}
                    {/*<FieldGroup*/}
                        {/*id="formControlsEmail"*/}
                        {/*type="email"*/}
                        {/*label="Email address"*/}
                        {/*placeholder="Enter email"*/}
                    {/*/>*/}
                    {/*<Button>Save</Button>*/}
                {/*</Form>*/}
            </div>
        );
    }
}
export default NoteForm