import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';

class Edit extends Component {
    componentDidMount() {
        console.log(this.props.notes)
    }
    render() {
        return (
            <Form>
                <FormGroup className='Edit__Title'>
                    <Input type='text' name='title' placeholder='Edit Title'/>
                </FormGroup>
                <FormGroup className='Edit__Text'>
                    <Input type='text' name='title' placeholder='Edit Text'/>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Edit);