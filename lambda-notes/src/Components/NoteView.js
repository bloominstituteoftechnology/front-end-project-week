import React from 'react';
// import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { deleteNote } from '../Actions';
import Sidebar from './Sidebar';
import '../Styles/NoteView.css';


const NoteView = (props) => {
    // console.log('PROPS', props)
    const noteId = parseInt(props.match.params.id);
    // console.log("NOTEID", note)
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
                                {/* <Link to={ '/' }> */}
                                    <button onClick={ (notes) => props.deleteNote(props.notes[noteId])}>delete</button>
                                {/* </Link> */}

                            </div>
                            <h4>{ props.notes[noteId].title }</h4>
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