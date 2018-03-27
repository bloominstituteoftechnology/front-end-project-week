import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Note extends Component {
    componentDidMount() {
        console.log(this.props.notes)
    }
    render() {
        return (
            <Container>
                <Row>
                    <Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
                </Row>
                <Row>
                    <Col className='Note__Title'>
                        {this.props.notes[this.props.match.params.id].title}
                    </Col>
                </Row>
                <Row>
                    <Col className='Note__Text'>
                        {this.props.notes[this.props.match.params.id].text}
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Note);