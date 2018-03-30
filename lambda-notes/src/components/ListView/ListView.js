// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { get_notes } from '../../actions';

// Styling
import { Form, Input } from 'reactstrap';
import './ListView.css';

class ListView extends Component {
    state = {
        query: ''
    };

    componentDidMount() {
        this.props.get_notes();
    }
    render(props) {
        // this.props.notes.filter(obj => {obj.title.includes(query) || obj.text.includes(query));
        const noteSearch = this.props.notes.filter(note => {
            console.log(note.title)
            return note.title.indexOf(this.state.query) !== -1 || note.content.indexOf(this.state.query) !== -1;
            }  
        );
        console.log('noteSearch', noteSearch);
        return (
            <div className='list-view pl-4 pt-5'>
                <Form onSubmit={() => this.searchNotes()} className='search'>
                    <Input 
                    type='text'
                    placeholder='Search...'
                    value={this.state.query}
                    onChange={this.handleSearch}
                    className='search-input col-4 mr-4'/>
                </Form>
                <h2 className='my-3 ml-2'>Your Notes:</h2>
                <div className='list-view-notes'>
                    {noteSearch.map(note => {
                        return (
                        
                            <Link to={`/notes/${note.id}`} key={`${note.id} ${note.title}`}
                                className='mx-2 my-3'>
                                    <div className='note p-3'>
                                        <h3>
                                            {note.title}
                                        </h3>
                                        <p className='pt-2'>
                                        {note.content.length > 125 ? `${note.content.slice(0, 125)}…` : note.content}
                                        </p>
                                    </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    } // end of render()

    handleSearch = event => {
        event.preventDefault();
        this.setState({ query: event.target.value });
    }
}; // end of ListView

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, { get_notes })(ListView);