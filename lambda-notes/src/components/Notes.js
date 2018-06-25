import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';
import { Typeahead } from 'react-typeahead';

class Notes extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            titles: []
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
        this.setState({notes: this.props.notes});
        const titles = []
        this.props.notes.forEach( note => {
            titles.push(note.title);
        })
        this.setState({titles: titles});
    }

    selectNote = (e) => {
        const filteredNote = this.state.notes.find(note => note.title === e);
        const id = filteredNote._id;
        this.props.history.push(`/note/${id}`);
    }

    render() { 
        return (
            <Container fluid={true} className="notes-container">
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <Typeahead 
                        options={this.state.titles}
                        onOptionSelected={this.selectNote}
                        defaultClassNames={false}
                        />
                </div>
                <h3 className="heading">Your Notes:</h3> 
                <Row className="notes-section">
                    {this.state.notes.map( note => {
                        const summary = note.content.substring(0,145) + '...';
                        const thumbnailNote = Object.assign({}, note, {content: summary})
                        return <NoteThumbnail note={thumbnailNote} key={note._id}/>
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