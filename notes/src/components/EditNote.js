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
        return ( 
            <Container>
                <Row>
                    <Col>
                        <h4 className="edit-note-header">Edit Note:</h4>
                        <div className="edit-note">
                            <input placeholder="Note Title"/>
                        </div>
                        <div>
                            <input style={{ width:'500px', height:'500px' }} placeholder="Note Content"/>
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