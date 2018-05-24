import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

class Notes extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
        this.setState({notes: this.props.notes});
    }

    render() { 
        return (
            <Container fluid={true} className="notes-container">
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <Typeahead 
                        className="search-field"
                        labelKey="title"
                        multiple={false}
                        options={this.state.notes}
                        placeholder="Search for a note..."/>
                </div>
                <h3 className="heading">Your Notes:</h3> 
                <Row className="notes-section">
                    {this.state.notes.map( note => {
                        const summary = note.content.substring(0,145) + '...';
                        const thumbnailNote = Object.assign({}, note, {content: summary})
                        return <NoteThumbnail note={thumbnailNote} key={note.id}/>
                    })}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
 
export default connect(mapStateToProps, { fetchNotes })(Notes);