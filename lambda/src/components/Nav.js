import React from 'react';
//importing button and Container from reactstrap
import { Button, Container, Col, Row } from 'reactstrap';
//importing Link to from react-router-dom
import { Link } from 'react-router-dom';

//importing Nav CSS
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//statless componet for Navbar, which will be exported to App.js to render NavBar
const NavBar = () => {
    return(
      <Container className="container">
        <Row>
        <Col md="3">
        <div className="Nav align-self-start">
            <h1>Lambda Notes</h1>
            <Link to="/"><Button className="button" color="info">View Your Note</Button>{' '}</Link>
            <Link to="/note"> <Button className="button1" color="info">+Create New Note</Button>{' '}</Link>  
        </div>
        </Col>
        </Row>
      </Container>
    );
};

export default NavBar;