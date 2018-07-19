import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNoteReq, deleteReq } from '../actions';
import NoteView from './NoteView';
import DeleteModal from './DeleteModal';
import logo from '../logo.svg';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            tags: null,
            isSelected: false,
            toggle: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id);
        this.props.fetchNoteReq(id);
        this.setState({isSelected: false, toggle: false});
    }

  toggleDelete = () => {
    this.setState({toggle: !this.state.toggle});
  };

  handleDelete = (id) => {
    this.props.deleteReq(id);
    this.toggleDelete();
  };

    render () {
        return (
            <div className="Note-container">
                <div className="Note-header">
                    <div className="Note-links">
                    <Link to={`/edit/${this.props.note["_id"]}`}>
                        <p>edit</p>
                    </Link>
                    <Link to={`/note/${this.props.note["_id"]}`} onClick={this.toggleDelete}>
                        <p>delete</p>
                    </Link>
                    </div>
                    <h2>{this.props.note.title}</h2>
                </div>
                <div className="Note-content">
                    <p>{this.props.note.textBody}</p>
                </div>
                <div className="Note-tag">
                    {this.props.tags ? <p>tags: {this.props.tags.map((tag, index) => <span key={index} id={index}>{`${tag}`}</span>)}</p> : ''}
                </div>
                {this.state.isSelected ? <NoteView note={this.props.note}/> : null}
                {this.state.toggle ? <DeleteModal toggleDelete={this.toggleDelete} handleDelete={this.handleDelete} id={this.props.note["_id"]}/> : null}
            </div>
        );
    }
};

const mapStateToProps = ({ notes }) => {
    // console.log(notes);
    return {
        note: notes.note,
        tags: notes.note.tags
    };
}

export default connect(mapStateToProps, { fetchNoteReq, deleteReq })(Note);