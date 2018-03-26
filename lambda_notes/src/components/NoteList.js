import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./NoteList.css";


class NoteList extends Component{
render(){
    return(
    <div className="NoteList">
    <span>Your Notes:</span>
    <Container>
        <Row>
            <Col xs="6">
                <Card>
                    <CardBody>
                        <CardTitle>Note Title</CardTitle>
                        <CardText> Morbi pellentesque euismod ventetatis. Nulla ut nibh nunc, Phasellus diam metus, blandic ac puris a, efficitr mollis </CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col>
            <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
        );
    }
}
export default NoteList;