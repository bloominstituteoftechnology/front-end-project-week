import React from 'react';
// import { Link, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';


const NoteView = (props) => {
console.log("NOTE", props)
    return (
        <div>
            
            <Container>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <a href='#_'>edit</a>
                        <a href='#_'>delete</a>
                        <h4>{props.notes[0].title}</h4>
                        <p>{props.notes[0].content}</p>
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