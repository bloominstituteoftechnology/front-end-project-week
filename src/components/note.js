import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { deleteNote } from '../actions';
import DeleteNote from './deleteNote'

function mapStateToProps(state) {
    return {notes: state.notes};
}

class Note extends Component {
    render() {
        const note = this.props.notes.filter(
            note => note.id === parseInt(this.props.match.params.id,10)
        )[0];
        return(
            <Container>
                <Row className='d-flex justify-content-end mt-3 mr-3'>
                    <Link className='header-link mr-3' to ={`/editNote/${note.id}`}>Edit</Link>{' '}
                    <DeleteNote buttonLabel='Delete' id={note.id}/>
                </Row>
                <Row className='mt-5'>
                    <h3 className='header w-100'>
                        {note.title}
                    </h3>
                    <p className='mt-4'>
                        {note.note}
                    </p>
                </Row>
            </Container>
        )
    }
    componentDidMount() {}
}

export default connect(mapStateToProps,{ deleteNote })(Note)