import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

import '../Styles/ListView.css'
import Sidebar from './Sidebar';

class ListView extends Component {
    constructor(props) {
        super(props)
    }
    shortenNote(str) {
        if (str.length >= 110) {
           return str.slice(0, 110) + '...'; 
        }
        return str;
    }
    
    render() {

        return (
           
            <Container className='container'>
               
              <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>

                    <Col xs='9'>
                   
                        <div className='note'>
                        
                            <h4 className='yourNotes'>Your Notes:</h4>
                            
                                { this.props.notes.map((note, id) => 
                                    <div className='postIt'
                                        key={ note.title }>
                                    <Link to={`/view/${note.id}`}>
                                        <span className='title'>{ note.title }</span>
                                        <hr className='line' />
                                        <span className='content'>{ this.shortenNote(note.content) }</span> 
                                    </Link>
                                    </div>
                                )}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state,
    }
}
export default connect(mapStateToProps)(ListView);

