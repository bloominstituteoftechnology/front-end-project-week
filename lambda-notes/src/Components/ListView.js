import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

import '../css/ListView.css'
import Sidebar from './Sidebar';

const shortenNote = (str) => {
    if (str.length >= 100) {
        return str.slice(0, 90) + '...';
    }
    return str;
}

const ListView = (props) => {
    return (
        <Container className='container'>
            <Row>
                <Col xs='3'>
                    <Sidebar />
                </Col>
                <Col xs='9'>
                    <h4 className='yourNotes'>Your Notes:</h4>

                    { props.notes.map((note, id) =>
                        <div className='thumbnail'
                            key={ note.title }>
                            <Link to={ `/view/${ note.id }` }>
                                <div className='title'>{ note.title }</div>
                                <hr className='line' />
                                <div className='content'>{ shortenNote(note.content) }</div>
                            </Link>
                        </div>
                    ) }
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        notes: state,
    }
}
export default connect(mapStateToProps)(ListView);

