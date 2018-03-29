// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { get_notes } from '../../actions';

// Styling
import './ListView.css';

class ListView extends Component {
    componentDidMount() {
        this.props.get_notes();
    }
    render() {
        return (
            <div className='list-view pl-4 pt-5'>
                <h2 className='my-3 ml-2'>Your Notes:</h2>
                <div className='list-view-notes'>
                    {this.props.notes.map(note => {
                        const notePropsAndPath = {
                            pathname: `/notes/${note.id}`,
                            id: note.id,
                            title: note.title,
                            content: note.content
                        };
                        return (
                            <Link to={notePropsAndPath} key={`${note.id} ${note.title}`}
                                className='mx-2 my-3'>
                                    <div className='note p-3'>
                                        <h3>
                                            {note.title}
                                        </h3>
                                        <p className='pt-2'>
                                            {note.content}
                                        </p>
                                    </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    } // end of render()
}; // end of ListView

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps, { get_notes })(ListView);