import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNoteReq } from '../actions';
import NoteView from './NoteView';
import DeleteModal from './DeleteModal';
import logo from '../logo.svg';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            isSelected: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id);
        this.props.fetchNoteReq(id);
    }

    render () {
        if(!this.props.note) return <img src={logo} className="App-logo" alt="logo" style={{margin: "auto", height: "50%"}}/>;

        return (
            <div className="Note-container">
                <div className="Note-header">
                    <div className="Note-links">
                    <Link to={`/edit/${this.props.note["_id"]}`}>
                        <p>edit</p>
                    </Link>
                    <Link to={`/note/${this.props.note["_id"]}`} onClick={this.props.toggleDelete}>
                        <p>delete</p>
                    </Link>
                    </div>
                    <h2>{this.props.note.title}</h2>
                </div>
                <div className="Note-content">
                    <p>{this.props.note.textBody}</p>
                </div>
                {this.state.isSelected ? <NoteView note={this.props.note}/> : null}
                {this.props.deleting ? <DeleteModal toggleDelete={this.props.toggleDelete} handleDelete={this.props.handleDelete} id={this.state.note["_id"]}/> : null}
            </div>
        );
    }
};

const mapStateToProps = ({ notes }) => {
    // console.log(notes);
    return {
        note: notes.note
    };
}

export default connect(mapStateToProps, { fetchNoteReq })(Note);