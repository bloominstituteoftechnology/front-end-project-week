import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Edit extends Component {
    state = {
        id: 0,
        title: '',
        text: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.note.id,
            title: this.props.note.title,
            text: this.props.note.text,
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        this.props.editNote(this.state);
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
                        <Input type='text' name='title' value={this.state.title}
                        onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input className="Create__form__text" type='textarea' name='text' value={this.state.text}
                        onChange={this.handleChange.bind(this)}/>
                    </FormGroup>
                    <Button className="Button Create__button" color="deoco" onClick={() => this.handleSubmit()}>Save</Button>
                </Form>
            </Container>
        );
    }
}


export default withRouter(Edit);