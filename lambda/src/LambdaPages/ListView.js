import React from 'react';
import NavBar from '../components/Nav'

import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import '../components/Form.css'

//Stateless function that renders Navbar from components file
const ListView = (props) => {
    // console.log("PROPS",props.notes);
    return(
        props.notes.map(note =>{
            return (
                <div key={note.id}>
                    <Container>
                    <Card body>
                        <CardTitle>{note.title}</CardTitle>
                        <CardText>{note.content}</CardText>
                    </Card>
                    </Container>
                </div>
            );   
        })
    )
};

export default ListView;


