import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
                <Row>
                    <div className="cardList">
                        <h3> Your Notes: </h3>
                    </div>
                </Row>
            </Container>
        )
    }
}
export default NoteCards;