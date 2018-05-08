import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { deleteNote } from '../Actions';
import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../Styles/NoteView.css';

const NoteView = (props) => {
    const noteId = parseInt(props.match.params.id, 10);

    const getNote = (id) => {
        return props.notes.find(note => note.id === id);
    }
    const note = getNote(noteId);
    // console.log('NOTE', note)
    return (
        <div>

            <Container>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <div className='noteView'>
                            <div className='viewLinks'>

                                <button onClick={ console.log('editEvent') }>edit</button>

                                <DeleteModal id={ noteId }/>

                            </div>
                            <h4 className='noteTitle'>{ note.title }</h4>
                            <p>{ note.content }</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        notes: state,
    }
}
export default connect(mapStateToProps, { deleteNote })(NoteView);