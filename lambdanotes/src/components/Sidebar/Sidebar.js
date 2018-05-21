import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'reactstrap';

const Sidebar = () => {
    return (
        <Container className='sidebarContainer'>
            <Row>
                <Col>
                    <h1 className='title'>Lambda Notes</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button block='true' className='button'>View Your Notes</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button block='true' className='button'>+ Create New Note</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Sidebar;