import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { deleteNote } from '../Actions';
import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../Styles/NoteView.css';

const NoteView = (props) => {
    const noteId = parseInt(props.match.params.id, 10);
    
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
                           
                                <a>edit</a>

                               
                                <DeleteModal />
                                    {/* <button onClick={ (notes) => props.deleteNote(props.notes[noteId]) }>delete</button> */}
                             

                            </div>
                            <h4 className='noteTitle'>{ props.notes[noteId].title }</h4>
                            <p>{ props.notes[noteId].content }</p>
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
export default connect(mapStateToProps, {deleteNote})(NoteView);