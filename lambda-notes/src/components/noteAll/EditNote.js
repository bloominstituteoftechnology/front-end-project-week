import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        }
    }

    handleInputChange = (e) => {
        this.props.updateNote(this.state);
    }

    render() {
        return (
            <div className='create-note'>
                <Form>
                    <Row>
                        <Col className='col-8 mb-3'>
                            <Input onChange={this.handleInputChange}
type='text' name='title' value={this.state.title} placeholder='Note Title' />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-8 mb-3'>
                            <Input onChange={this.handleInputChange}
type='text-area' name='content' value={this.state.content} placeholder='Content' /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={this.handleSubmit} className='btn-info'>Update</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to='/' onClick={() => this.handleSubmit()}>
                            <Button className='btn-nfo'>Update</Button>
                        </Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default EditNote;