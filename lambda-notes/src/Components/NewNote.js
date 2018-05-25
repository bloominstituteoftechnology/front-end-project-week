import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'reactstrap';
import Button from './Button';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = { title:'', note:'' };
    }
    render() {
        return (
            <div className='TemplateContainer'>



                {/* <div className='TopText'>Create New Note:</div>
                <input className='TopInput' placeholder='Note Title' />
                <input className='BottomInput' placeholder='Note Content'/>
                <Button link='/' text='Save' /> */}
 <Row>
                    <Col sm="12">
                        <Form onSubmit={this.saveNote} className="form">
                            <Input 
                                type="text" 
                                name="title"
                                placeholder="Note Title"
                                value={this.state.title} 
                                onChange={this.handleChange}
                                className="TopInput"/>
                            <Input 
                                type="textarea" 
                                name="content" 
                                placeholder="Note Content"
                                value={this.state.content}
                                onChange={this.handleChange}
                                className="BottomInput"/>
                            <Button link='/' text='Save' />

                        </Form>
                    </Col>
                </Row>



            </div>
        );
    }
}

export default NewNote;