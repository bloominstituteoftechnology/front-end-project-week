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
                        <h3>Create New Note:</h3>
                        <div className="note-title">
                            <input placeholder="Note Title"/>
                        </div>
                        <div>
                            <input style={{ width:'500px', height:'500px' }} placeholder="Note Content"/>
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