import React, {Component} from 'react';
import { Card, CardText, CardBody, Form, FormGroup, Input} from 'reactstrap';
//import axios from 'axios';

export default class EditNote extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         movie: []
    //     };
    // }

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Note Title" />
                        <Input type="textarea" name="text" id="exampleText" placeholder="Note Content" />
                    </FormGroup>
                </Form>
                {/* <form onSubmit={e => {e.preventDefault() 
                        if(!input.value.trim()) {
                            return 
                        }
                        dispatch(addItem(input.value))
                        input.value = ''
                        }} >
                    <input ref={node => {input = node}} />
                    <button type='submit'> Add Note</button>
                </form> */}
            </div>
        )
    }
    }