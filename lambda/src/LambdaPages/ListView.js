import React from 'react';
import { Link } from 'react-router-dom'

import NavBar from '../components/Nav'
import Delete from '../components/Delete';
import EditNote from '../LambdaPages/EditNote'

import { Card, CardTitle, CardText, Row, Col, Container, Button, } from 'reactstrap';

import '../components/Form.css'
import '../components/Delete'

//Stateless function that renders Navbar from components file
const ListView = (props) => {
    // console.log("PROPS",props.notes);
    return(
        props.notes.map(note =>{
            return (
                <div key={note.id}>
                    <Container className="form-container">
                        <Row >
                            <Card body>
                                <CardTitle className="tcard">{note.title}</CardTitle>
                                <CardText className="ctext">{note.note}</CardText>
                            </Card>
                        </Row>
                    </Container>
                </div>
            );   
        })
    )
};

export default ListView;


