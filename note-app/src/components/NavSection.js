import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const navSection = () => { 
    return (
        <Container className= 'navContainer'>
          <Row>
              <Col>
                <h1 className='title'>Lambda Notes</h1>
                </Col>
            </Row>
                <Col>
                    <Row>
                    <Link to ='/'>
                        <Button>View Your Notes</Button>
                    </Link>
                    <Link to='/cardForm'>
                         <Button>+ Create New Note</Button>
                    </Link>
                    </Row>
                </Col>
        </Container>
    )
 }
                    

export default navSection;

