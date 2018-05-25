import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './navSection.css';

const navSection = () => { 
    return (
        <Container className= 'navContainer'>
          <Row className ='navRow'>
              <Col sm='4'>
                <h1 className='title'>Lambda Notes</h1>
                </Col>
            </Row>
                <Col sm='8'>
                    <div>
                    <Link to ='/'>
                        <Button className='navButton'>View Your Notes</Button>
                    </Link>
                    </div>
                    <div>
                    <Link to='/cardForm'>
                         <Button className='navButton'>+ Create New Note</Button>
                    </Link>
                    </div>
                </Col>
        </Container>
    )
 }
                    

export default navSection;

