import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';
import SearchBar from './SearchBar';

class Notes extends Component {
    constructor() {
        super();
        this.filterNotes = this.filterNotes.bind(this)
        this.state = {
            notes: [],
            filtered: false
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
        this.setState({notes: this.props.notes});
    }

    filterNotes(value) {
        let filteredNotes = [];
        this.state.notes.forEach(note => {
            if (note.title.includes(value)) {
                filteredNotes.push(note)
            }
        })
        this.setState({notes: filteredNotes, filtered: true});
    }

    render() { 
        return (
            <Container fluid="true" className="notes-container">
                <SearchBar filter={this.filterNotes}/>
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