import React from 'react';
import { connect } from 'react-redux';

import { 
    Row,
    Col, 
    Card,
    CardTitle,
    CardText 
} from 'reactstrap';
import styled from 'styled-components';

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;
`;

const Notes = ({ notes }) => {
    return (
        <Col xs="9" className="mb-5 pb-5 pl-5 pr-5">
            <H3>Your Notes:</H3>
            <Row className="mb-5" >
            {notes.map(note => (
            <Col className="mb-4 pl-2 pr-2" xs="4" key={note.id}>
                <Card body className="">
                    <CardTitle className="pb-2 border-bottom border-secondary">{note.title}</CardTitle>
                    <CardText>{note.content}</CardText>
                </Card>
            </Col>
            ))}
            </Row>
        </Col>
    );
};

const mapStateToProps = ({ notes}) => {
    return {
        notes,
    }
};

export default connect(mapStateToProps, {})(Notes);