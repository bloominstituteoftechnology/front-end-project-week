import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';
import { Container, Col, Row } from 'reactstrap';

const ListView = () => {
    return (
        <div className='listViewContainer'>
            <Container>
                <Row>
                    <Col>
                        <h3>Your Notes</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ListView;