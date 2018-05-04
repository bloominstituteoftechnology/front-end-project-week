import React from 'react';
// import { Link, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import '../Styles/NoteView.css';


const NoteView = (props) => {
    console.log('PROPS', props)
    const note = parseInt(props.match.params.id);
    console.log("NOTEID", note)
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
                            <a href='#_'>edit</a>
                            <a href='#_'>delete</a>
                            </div>
                            <h4>{ props.notes[note].title }</h4>
                            <p>{ props.notes[note].content }</p>
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
export default connect(mapStateToProps)(NoteView);