import React from 'react';
import { Button, Form, Input, Row, Container, Col } from 'reactstrap';

import './EditNote.css';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {},
            title: '',
            content: ''
        }
    }
    componentDidMount() {
        let noteID = this.props.match.params.id;
        const note = this.state.notes.find(
            note => note.id === Number(noteID)
        );
        if (!note) return;
        this.setState({ note });
    }Í


    handleSubmit = (event) => {
        event.preventDefault();
        const updatedNote = {
          id: this.state.note.id,
          title: this.state.title,
          content: this.state.content
        }
        this.props.editNote(updatedNote);
      }

      handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };


    render() {
        return (
            <Container className="edit-note">
                <Row>
                    <Col>
                        <h2>Edit Note:</h2>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col sm="7">
                            <Input onChange={this.handleInputChange} type="text" name="title" placeholder="Note Title" style={{ marginTop: 30 + 'px' }} value={this.state.title} />
                        </Col>
                    </Row>
                    <Input onChange={this.handleInputChange} type="textarea" name="content" placeholder="Note Content" rows="15" style={{ marginTop: 15 + 'px' }} value={this.state.content} />
                    <Row>
                        <Col sm="4">
                            <Button onClick={this.handleSubmit} onMouseUp={() => this.props.history.goBack()} color="info" style={{ marginTop: 15 + 'px' }} block>Update</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}



export default EditNote;
