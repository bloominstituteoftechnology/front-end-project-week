import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NewNote.css';

class Newnote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <h4 className="new-note-header">Create New Note:</h4>
                            <input className="new-note-title" placeholder="Note Title"/>
                        <div>
                            <input className="new-note-content" style={{ width:'600px', height:'400px' }} placeholder="Note Content"/>
                        </div>
                        <span>
                            <Link to="/">
                                <button className="save-button">Save</button>
                            </Link>
                        </span>
                    </Col>
                </Row>
            </Container>
         )
    }
}
 
export default Newnote;