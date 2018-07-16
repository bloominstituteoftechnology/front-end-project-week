import React from 'react';
import { connect } from 'react-redux';
import { getNote, setNull } from '../../actions';
import { Link } from 'react-router-dom';

class Note extends React.Component {
    componentDidMount() {
        if (this.props.match) {
            this.props.getNote(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.setNull();
    }

    render() {
        return (
                <div className='note-container'>
                
                    <div className='note-links'>
                        <Link className='edit-link' to={this.props.note ? `/notes/${this.props.note._id}/edit` : null}>edit</Link>
                        <Link className='delete-link' to='/delete'>delete</Link>
                    </div>

                    <h3 className='note-header'>{this.props.note.title}</h3>
                    <p className='notes-paragraph'>{this.props.note.textBody}</p>

                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note
    }
}

export default connect(mapStateToProps, { getNote, setNull })(Note);