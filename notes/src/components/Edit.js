import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { editNote } from '../actions';

class Edit extends Component {
    state = {
        id: 0,
        title: '',
        text: '',
    }

    componentDidMount() {
        this.setState({
            id: parseInt(this.props.match.params.id, 10),
        });
        console.log('Currently Editing: ' + this.state.id)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        Edit Note:
                    </Col>
                </Row>
                <Form>
                    <FormGroup className='Edit__Title'>
                        <Input type='text' name='title' placeholder='Edit Title'
                        onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup className='Edit__Text'>
                        <Input type='text' name='text' placeholder='Edit Text'
                        onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <Button onClick={() => this.props.editNote(this.state)}>Save</Button>
                </Form>
            </Container>
        );
    }
}


export default connect(null, { editNote })(Edit);