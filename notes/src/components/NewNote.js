import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
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
        console.log(noteInfo);
        this.props.postNote(noteInfo);
        this.setState({ title: '', textBody: '' })
        //redirect to home
        console.log(this.props)
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
                            {/* <Link to="/"> */}
                                <button 
                                    className="save-button"
                                    type="submit"
                                    onClick={() => this.addNote()}
                                >
                                Save
                                </button>
                            {/* </Link> */}
                        </span>
                    </Col>
                </Row>
            </Container>
         )
    }
}
 
export default Newnote;