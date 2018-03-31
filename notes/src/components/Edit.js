import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { editNote } from '../actions';

class Edit extends Component {
    state = {
        note: {
            id: 0,
            title: '',
            text: '',
        }
    }

    componentDidMount() {
        this.setState({
            note: this.props.notes.find(note => {
                return note.id === this.props.match.params.id
            })
        })
    }


    handleChange(event) {
        this.setState({
            note: Object.assign({}, this.state.note, {
                [event.target.name]: event.target.value
            })
        })
    }

    handleSubmit() {
        this.props.editNote(this.state.note);
        this.props.history.push('/');
    }

    render() {
        return (
            <Container className="Create">
                <Row className="Content__heading Create__heading">
                    <Col className="Content__heading__col Create__heading__col">
                        <h4>Edit Note:</h4>
                    </Col>
                </Row>
                <Form className="Create__form">
                    <FormGroup className='Create__form__title'>
                        <Input type='text' name='title' value={this.state.note.title}
                        onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input className="Create__form__text" type='textarea' name='text' value={this.state.note.text}
                        onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <Button className="Button Create__button" color="deoco" onClick={() => this.handleSubmit()}>Save</Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}


export default connect(mapStateToProps, { editNote })(Edit);