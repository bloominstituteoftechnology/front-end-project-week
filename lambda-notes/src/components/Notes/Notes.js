import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

class Notes extends React.Component {
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <div className="mainContent" >
                <div className="directory__title mainContent__title" >
                    Your Notes:
            </div>
                {console.log('props', this.props)}
                <div className="mainContent__content" >
                    {this.props.notes.map(note => {
                        return <Note title={note.name} body={note.body} key={note.id}/>
                    })}
                </div>
            </div>
        )
    }
};

const stateProps = state => {
    console.log('state of notes', state.notes)
    return {
        notes: state.notes
    }
}

export default connect(stateProps, { getNotes })(Notes);