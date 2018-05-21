import React from 'react';
import NavBar from '../components/Nav'

import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

//Stateless function that renders Navbar from components file
const ListView = (props) => {
    return(
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


