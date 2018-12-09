import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { Link } from 'react-router-dom';
import '../styles/ViewNote.css';

class ViewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            note: {},
            count: 0,
        }
    }

    componentDidMount() {
        if(this.state.text === '') {
            this.props.notes.filter(note => {
                if(note._id !== this.props.match.params.noteId) {
                    return <></>
                }
                this.setState({
                    title: note.title,
                    text: note.textBody,
                    note: note,
                });
                return note;
            })
            
        }
    }

    deleteFunct = e => {
        this.props.deleteNote(this.state.note._id);
        this.props.history.push('/');
    }

    missingData = e => {
        if(this.state.count === 0) {
            this.setState({
                count: this.state.count +1,
            });
        }
        if(this.state.count === 1) {
            this.setState({
                count: 0
            });
            this.props.history.push('/');
            }
    }

    render() {
        if(this.state.title === '') {
            this.missingData();
        }
        return (
            <div>
                <div className='edit-delete-btn'>
                    <Link to={`/edit/${this.state.note._id}`}><span className='viewBtn'>edit</span></Link>
                    <span className='viewBtn' onClick={() => this.deleteFunct()}>delete</span>
                </div>
                <h3 className='notes-page-title'>{this.state.title}</h3>
                <div className='note-text-Container'>
                    <p>{this.state.text}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
}

export default connect(
    mapStateToProps,
    { deleteNote }
)(ViewNote);