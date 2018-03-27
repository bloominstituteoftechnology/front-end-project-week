import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { 
    Row,
    Col, 
    Card,
    CardTitle,
    CardText 
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

const Notes = ({ notes }) => {
    return (
        <Col xs="9" className="mb-5 pb-5 pl-5 pr-5 ">
            <H3>Your Notes:</H3>
            <Row className="mb-5" >
                {notes.map(note => (
            <Col className="mb-4 pl-2 pr-2" xs="4" key={note.id}>
                <Link to={`/note/${note.id}`} className="Card__Link">
                <Card className="Notes__Note" body >
                    <CardTitle className="pb-2 border-bottom border-secondary">{note.title}</CardTitle>
                    <CardText  className="Note__Content">{note.content}</CardText>
                </Card>
                </Link>
            </Col>
            ))}
            </Row>
        </Col>
    );
};

const mapStateToProps = ( state ) => {
    return {
        notes: state.notes
    }
};
  
export default withRouter(connect(mapStateToProps, {})(Notes));