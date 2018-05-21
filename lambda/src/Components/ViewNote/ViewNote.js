import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_notes } from '../../Actions/index.js';
import { Form, Input } from 'reactstrap';
import './ViewNote.css';

class ViewNote extends Component {
    state = {
        query: ''
    };

    componentDidMount() {
        this.props.get_notes();
    }
    render(props) {
        const noteSearch = this.props.notes.filter(note => {
            return note.title.indexOf(this.state.query) !== -1 || note.content.indexOf(this.state.query) !== -1;
            }  
        );
        return (
            <div className='view'>
                <Form className='search'>
                    <Input 
                    type='text'
                    placeholder='Search...'
                    value={this.state.query}
                    onChange={this.handleSearch}
                    className='search-input'/>
                </Form>
                <h2 className='notes'>Your Notes</h2>
                <div className='view-notes'>
                    {noteSearch.map(note => {
                        return (
                            <Link to={`/notes/${note.id}`} key={`${note.id} ${note.title}`}
                                className='notes'>
                                    <div className='note'>
                                        <h3>
                                            {note.title}
                                        </h3>
                                        <p className='notes'>
                                        {note.content.length > 125 ? `${note.content.slice(0, 125)}…` : note.content}
                                        </p>
                                    </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
    handleSearch = event => {
        event.preventDefault();
        this.setState({ query: event.target.value });
    }
};

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, { get_notes })( ViewNote );