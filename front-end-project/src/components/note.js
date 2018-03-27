import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle} from 'reactstrap';

function mapStateToProps(state) {
    return {notes: state.notes};
}

class Note extends Component {
    render() {
        const note = this.props.notes.filter(note=>{
            note.id === this.props.match.params.id
        })[0];
        return(
            <Container>
                <Row>
                    <Col>
                        <h3>
                            {note.title}
                        </h3>
                        <p>
                            {note.note}
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Note)