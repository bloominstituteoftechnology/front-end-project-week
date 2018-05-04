import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
// import { Route, Link } from 'react-router-dom'

import '../Styles/ListView.css'
import Sidebar from './Sidebar';
// import NoteView from './NoteView';
// import CreateNote from './CreateNote';


class ListView extends Component {
    // constructor(props) {
    //     super(props);
    // }
    shorten(str) {
        if (str.length >= 110) {
           return str.slice(0, 110) + '...'; 
        }
        
    }
    
    render() {
        // <Route path={ `${this.props.match.path}/view:note.id` } component={ NoteView } />
        console.log("LIST", this.props)
        return (
            <Container className='container'>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>

                    <Col xs='9'>
                        <div className='note'>
                            <h4>Your Notes:</h4>
                            
                                { this.props.notes.map((note, id) => 
                                    <div className='postIt'
                                        key={ id }>
                                    {/* <Link to={`${this.props.match.path}/${note.id}`}> */}
                                        <span className='title'>{ note.title }</span>
                                        <hr className='line' />
                                        <span className='content'>{ this.shorten(note.content) }</span> 
                                        {/* </Link> */}
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

