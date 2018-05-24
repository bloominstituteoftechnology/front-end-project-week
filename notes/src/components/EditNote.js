import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './EditNote.css';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("Edit Note Props:", this.props);
        return (
            <Container>
                <Row>
                    <Col>
                        <h4 className="edit-note-header">Edit Note:</h4>
                        <div>
                            <input className="edit-note" style={{ marginBottom:'10px' }} placeholder="Note Title"/>
                        </div>
                        <div>
                            <textarea className="edit-note-content" style={{ width:'600px', height:'400px' }} placeholder="Note Content"/>
                        </div>
                        <span>
                            <Link to="/">
                                <button className="edit-button">Update</button>
                            </Link>
                        </span>
                    </Col>
                </Row>
            </Container>
         )
    }
}
 
export default EditNote;