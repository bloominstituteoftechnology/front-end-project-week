import React from "react";
import '../Styles.css';
import { Button, Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';


const MenuBar = () => {
    return (
        <Container className='APP__MENUBAR'>
            <Navbar>
            <Row>
            <Col xs="12"><h1>Lambda<br/>Notes</h1></Col>
            </Row>
            <Row><Col xs="12"><Button className='APP__MENUBUTTON' color="info" xs="12">
                View Your Notes
            </Button></Col></Row>
            <Row><Col xs="12"><Button className='APP__MENUBUTTON' color="info" xs="12">
                + Create New Note
            </Button></Col></Row>
            </Navbar>
        </Container>
    );
};

export default MenuBar;