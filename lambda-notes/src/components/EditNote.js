import React from 'react';
import { Button, Form, Input, Row, Container, Col } from 'reactstrap';

import './EditNote.css';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {}
        }
    }
    // componentDidMount() {
    //     let noteID = this.props.match.params.id;
    //     const note = this.state.notes.find(
    //         note => note.id === Number(noteID)
    //     );
    //     if (!note) return;
    //     this.setState({ note });
    // }Í

    handleEdit = (event) => {
        event.preventDefault();
        let noteID = this.props.match.params.id;
        const note = this.state.notes.find(
            note => note.id === Number(noteID)
        );
        this.props.editNote(note);
      }

    //   Object.assign({}, state, {
    //     addedSmurf: true,
    //     addingSmurf: false,
    //     smurfs: action.payload
    //   });

    // setNotesData = data => this.setState({ notes: data })

    // addNote = event => {
    //   event.preventDefault();
    //   const notes = this.state.notes.slice();
    //   notes.push({ content: this.state.content, title: this.state.title, id: Date.now() });
    //   this.setState({ notes, title: '', content: '' });
    // }

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
                            <Input onChange={this.props.handleInputChange} type="text" name="title" placeholder="Note Title" style={{ marginTop: 30 + 'px' }} value={this.props.title} />
                        </Col>
                    </Row>
                    <Input onChange={this.props.handleInputChange} type="textarea" name="content" placeholder="Note Content" rows="15" style={{ marginTop: 15 + 'px' }} value={this.props.content} />
                    <Row>
                        <Col sm="4">
                            <Button onClick={this.handleEdit} onMouseUp={() => this.props.history.goBack()} color="info" style={{ marginTop: 15 + 'px' }} block>Update</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}



export default EditNote;
