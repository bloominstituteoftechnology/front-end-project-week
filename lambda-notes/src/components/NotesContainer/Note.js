import React from 'react';
import { connect } from 'react-redux';
import { getNote } from '../../actions';

class Note extends React.Component {
    componentDidMount() {
        if (this.props.match) {
            this.props.getNote(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.getNote(null);
    }

    render() {
        return (
            <div className='note-container'>
                <div>
                    <h3 className='notes-header'>{this.props.note.title}</h3>
                    <p className='notes-paragraph'>{this.props.note.textBody}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note
    }
}

export default connect(mapStateToProps, { getNote })(Note);