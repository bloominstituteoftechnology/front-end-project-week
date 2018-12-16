import React from 'react';
import { connect } from 'react-redux';

import { getNotes } from '../../components/actions/index';

//styling
import './ListView.css';

class ListView extends React.Component {
    componentDidMount() {
        this.props.getNotes()
    }

    render() {
        return (
            <div className='listView'>
                <h3>Your Notes:</h3>
                <div className='notesWrapper'>
                    {this.props.noteList.map(note => {
                        return (
                            <div id={note.id} key={note.id} className='notesBox' onClick={(event) => this.props.getNote(event)}>
                                <p className='prevTitle'>{note.title}</p>
                                <p className='prevContent'>{note.textBody}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        noteList: state.noteList
    }
}

export default connect(mapStateToProps, { getNotes })(ListView);