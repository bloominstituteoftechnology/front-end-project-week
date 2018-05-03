import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import '../Styles/ListView.css'
import Sidebar from './Sidebar';


class ListView extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xs='3'>
                    <Sidebar />
                    </Col>

                    <Col xs='9'>
                    <div className='note'>
                        <h4>Your Notes:</h4>
                        { this.props.notes.map(note =>
                            <div className='postIt'
                                key={ note.title }>
                                <span className='title'>{ note.title }</span>
                                <hr className='line' />
                                <span className='content'>{ note.content }</span>
                            </div>) }
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}
export default connect(mapStateToProps)(ListView);

