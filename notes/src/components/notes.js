import React from 'react';

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

const Notes = () => {
    return (
        <Col xs="9" className="mb-5 pb-5 pl-5 pr-5">
            <H3>Your Notes:</H3>
            <Row className="mb-5" >
            {[1,2,3,4,5,6,7,8,9,10,11].map(x=>(
            <Col className="mb-4 pl-2 pr-2" xs="4" key={x}>
                <Card body className="">
                    <CardTitle className="pb-2 border-bottom border-secondary">Note Title</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
            </Col>
            ))}
            </Row>
        </Col>
    );
};

export default Notes;