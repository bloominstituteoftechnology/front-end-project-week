import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './NewNote.css';

class Newnote extends Component {
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
    
    addNote = () => {
        const noteInfo={ title: this.state.title, textBody: this.state.textBody }
        this.props.postNote(noteInfo);
        this.setState({ title: '', textBody: '' })
        this.props.history.push('/')
    }

    render() { 
        console.log(this.handleInputChange)
        return ( 
            <Container>
                <Row>
                    <Col>
                        <h4 className="new-note-header">Create New Note:</h4>
                            <input
                                className="new-note-title" 
                                onChange={this.handleInputChange} 
                                placeholder="Note Title"
                                name="title"
                                value={this.state.title}
                            />
                        <div>
                            <textarea
                                className="new-note-content" 
                                onChange={this.handleInputChange} 
                                style={{ width:'600px', height:'400px' }} 
                                placeholder="Note Content"
                                name="textBody"
                                value={this.state.textBody}
                            />
                        </div>
                        <span>
                            <button 
                                className="button-template"
                                type="submit"
                                onClick={() => this.addNote()}
                            >
                            Save
                            </button>
                        </span>
                    </Col>
                </Row>
            </Container>
         )
    }
}
 
export default Newnote;