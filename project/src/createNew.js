import React, { Component } from 'react';
import { Form, FormGroup, Input, FormText } from 'reactstrap';

class createNew extends Component {
    render() {
        return (
            <div>
            <container className='CNcontainer'>
                <div className='sidebar'>
                    <div className='heading-container'>
                        <p className='heading-font'><strong>Lambda Notes</strong>
                    </p>
                    </div>
                    
                    <div>
                        <button className='button'>View Your Notes</button>
                    </div>
                    <div>
                        <button className='DL button'>+ Create New Notes</button>
                    </div>
                </div>

                <div className='createNew-Form'>
                    <Form>
                        <FormGroup className="form">
                        <div className="CNtitle"><strong>Create New Note:</strong></div>
                            <div className="CNnewTitle">
                                <Input type="email" name="email" id="exampleEmail" placeholder="New Title" />
                            </div>
                            <div>
                                {/* <Input className="comment" type="text" name="new comment" id="new comment" placeholder="New Comment" />*/}
                                <textarea className="CNcomment">New Comment</textarea>
                            </div>
                            <div>
                                <button className="CNbutton">Save</button>
                            </div>
 
                        </FormGroup>
                    </Form>
                </div>
        </container>
            </div>
        );
    }
}

export default createNew;