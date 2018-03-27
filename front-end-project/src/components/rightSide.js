import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class RightSide extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col sm="9">
                        You got something to render in right
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default RightSide;