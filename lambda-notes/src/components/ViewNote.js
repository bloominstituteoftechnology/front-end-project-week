import React from 'react';
import { connect } from 'react-redux';
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

missingData = e => {
    if(this.state.count === 0 || this.state.note.length === 0) {
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
                    <Link to={`/edit/${this.state.note._id}`}><span className='viewBtn'>delete</span></Link>
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
    {  }
)(ViewNote);