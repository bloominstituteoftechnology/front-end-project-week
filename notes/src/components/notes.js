import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { 
    Row,
    Col, 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText ,
    Input,
    Button,
    Label,
    FormGroup,
} from 'reactstrap';

import styled from 'styled-components';

import './notes.css';

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;
`;

const Notes = ({notes}) => {
    return (
        <Col xs="9" className="mb-5 pb-5 pl-5 pr-5 ">
            <Row>
            <H3>Notes:</H3>
            </Row>
            <Row className="mb-4">
                <Col xs="10">
                    <Input className="mr-0" type="Text" serarch="search" placeholder="Search Notes" />
                </Col>
                <Col xs="1">
                    <Button className="ml-0">Search</Button>
                </Col>
            </Row>
            <Row className="mb-5" >
                {notes.map(note => (
            <Col className="mb-4 pl-2 pr-2" xs="4" key={note.id}>
                <Card>
                    <CardBody>
                        <CardTitle >{note.title}</CardTitle>
                        <CardSubtitle className="pb-2 border-bottom border-secondary Author">Author: {note.user.author}</CardSubtitle>
                        <CardText className="Note__Content"> 
                            {note.content}
                        </CardText>
                    </CardBody>
                    <CardBody>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            
                        </Label>
                        </FormGroup>
                        <Link to={`/note/${note.id}`} className="Card_Link d-flex justify-content-end">
                            more
                        </Link>
                    </CardBody>
                </Card>
                
            </Col>
            ))}
            </Row>
        </Col>
    );
};

const mapStateToProps = ( {notes} ) => {
    return {
        notes: notes.notes
    };
};
  
export default withRouter(connect(mapStateToProps, {})(Notes));