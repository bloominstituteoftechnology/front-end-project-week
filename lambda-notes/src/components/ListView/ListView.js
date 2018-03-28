// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { get_notes } from '../../actions';

// Components
import Note from '../Note/Note';

// Styling
import { Col, Card } from "reactstrap";
import './ListView.css';

class ListView extends Component {
    componentDidMount() {
        this.props.get_notes();
    }
    render() {
        return (
            <Col className='list-view'
                style={{backgroundColor: '#f2f1f2'}}>
                <h5>Your notes:</h5>
                <div className='notes-container'>
                    {this.props.notes.map(note => {
                        return (
                            <Link to={`/notes/${note.id}`}>
                                <Card key={`${note.id} ${note.title}`}>
                                    <p>{note.title}</p>
                                    <p>{note.content}</p>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </Col>
        );
    } // end of render()
}; // end of ListView

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, { get_notes })(ListView);