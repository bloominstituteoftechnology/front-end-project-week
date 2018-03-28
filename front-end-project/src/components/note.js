import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';

function mapStateToProps(state) {
    return {notes: state.notes};
}

class Note extends Component {
    render() {
        const note = this.props.notes.filter(
            note => note.id == this.props.match.params.id
        )[0];
        return(
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <h3 className='header'>Title
                            {note.title}
                        </h3>
                        <p>
                            Note
                            {note.note}
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
    componentDidMount() {}
}

export default connect(mapStateToProps)(Note)