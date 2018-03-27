import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class LeftSide extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col sm="3">
                        You got something to render in left
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LeftSide;