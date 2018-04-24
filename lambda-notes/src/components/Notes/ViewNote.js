import React from 'react';
import { getNote } from '../../actions';
import { connect } from 'react-redux';

class ViewNote extends React.Component {
    componentDidMount() {
        this.props.getNote(this.props.id);
        console.log('cdm state', this.state)
    }

    // componentWillReceiveProps(newProps) {
    //     if (this.props.match.params.id !== newProps.match.params.id) {
    //         this.props.getNote(newProps.match.params.id);
    //     }
    // }

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
    console.log('state in view', state, 'state props', ownProps)
    return {
        notes: state.rootReducer.notes,
        id: ownProps.match.params.id
    }
}

export default connect(stateProps, { getNote })(ViewNote);