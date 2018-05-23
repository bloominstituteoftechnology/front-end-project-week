import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';
import SearchBar from './SearchBar';
// import { JsSearch } from 'js-search';

class Notes extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
        this.setState({notes: this.props.notes});
    }

    filterNotes(value) {
        // let search = new JsSearch.Search('id');
        // console.log("filtering");
        // search.addIndex('title');
        // search.addIndex('content');
        // this.props.notes.forEach( note => {
        //     search.addDocuments(note)
        //     console.log("note added: ",note)
        // });
        // this.setState({notes: search.search(value)});
        // console.log("notes found: ", this.state.notes);

        let filteredNotes = [];
        this.state.notes.forEach(note => {
            if (note.title.includes(value)) {
                filteredNotes.push(note)
            }
        })
        this.setState({notes: filteredNotes});
    }

    render() { 
        return (
            <Container className="notes-container">
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