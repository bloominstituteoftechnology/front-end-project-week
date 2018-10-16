import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './EditNote.css';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            textBody: ''
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    editNote = (_id) => {
        const editedNote={ _id, title: this.state.title, textBody: this.state.textBody }
        this.props.updateNote(editedNote)
        this.setState({ title:'', textBody:'' })
        this.props.history.push('/')
    }

    render() { 
        console.log("Edit Note Props:", this.props);
        return (
            <Container>
                <Row>
                    <Col>
                        <h4 className="edit-note-header">Edit Note:</h4>
                        <div>
                            <input 
                                className="edit-note"
                                onChange={this.handleInputChange} 
                                style={{ marginBottom:'20px' }} 
                                placeholder="Note Title"
                                name="title"
                                value={this.state.title}
                            />
                        </div>
                        <div>
                            <textarea 
                                className="edit-note-content" 
                                style={{ width:'600px', height:'400px' }} 
                                placeholder="Note Content"
                                onChange={this.handleInputChange}
                                name="textBody"
                                value={this.state.textBody}
                            />
                        </div>
                        <span>
                            <button 
                                className="button-template"
                                type="submit"
                                onClick={()=> this.editNote(this.props.match.params.id)}
                            >
                            Update
                            </button>
                        </span>
                    </Col>
                </Row>
            </Container>
         )
    }
}
 
export default EditNote;