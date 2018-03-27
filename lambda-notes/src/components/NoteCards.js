import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

class NoteCards extends Component {
    state = {
        notes: [],
    }
    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }
    render() {
        return (
            <Container>

                <div className="cardList">
                    <h3> Your Notes: </h3>
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Note Title</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </Container>
        )
    }
}
export default NoteCards;