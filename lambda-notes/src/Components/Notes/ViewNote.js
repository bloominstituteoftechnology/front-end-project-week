import React from 'react';
import { getNote } from '../../actions';
import { connect } from 'react-redux';

class ViewNote extends React.Component {
    componentDidMount() {
        this.props.getNote(this.props.id);
    }
    render() {
        const { notes } = this.props
        return (
            <div>
            {notes.map(note => {
                return(
                <div key={note.id} className="mainContent" >
                    <div className="directory__title mainContent__title" >
                        {note.name}
                </div>
                    <div className="mainContent__content" >
                        {note.body}
                    </div>
                </div>)
            })}
            </div>
        )
    }
};

const stateProps = (state, ownProps) => {
    return {
        notes: state.rootReducer.notes,
        id: ownProps.match.params.id
    }
}

export default connect(stateProps, { getNote })(ViewNote);