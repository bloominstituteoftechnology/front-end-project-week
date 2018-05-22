import React from 'react';
import NavBar from '../components/Nav'

import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import '../components/Form.css'

//Stateless function that renders Navbar from components file
const ListView = (props) => {
    console.log("PROPS",props);
  
    return(
        <Container>
            <div>
                <NavBar />
            <Row>
            <Col sm="3">
                <Card body>
                    <CardTitle>NoteTitle</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
            </Col>
            </Row>  
            <Row>
            <Col sm="3">
                <Card body>
                    <CardTitle>NoteTitle</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
            </Col>
            </Row>
            <Row>
            <Col sm="3">
                <Card body>
                    <CardTitle>NoteTitle</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                 </Card>
            </Col>
            </Row>  
            </div>
            </Container>
        // <div>
        // <Row>
        //     <Col sm="3">
        //         <Card body>
        //             <CardTitle>NoteTitle</CardTitle>
        //             <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        //         </Card>
        //     </Col>
        // </Row>
        // </div>
               
    )
};

export default ListView;


