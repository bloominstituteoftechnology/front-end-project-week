import React, {Component} from 'react';
import { Route, withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchNote, editNote } from "../actions";

import DeleteModal from './DeleteModal';
import EditNote from './EditNote';

class NotePage extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id);
        }

    editNote = (id) => {
        id = parseInt(id, 10);
        let copy = this.state.data.slice();
        let i = copy.findIndex(note => note.id === id);
        copy.splice( i, 1, { id: id, title: this.state.title, content: this.state.content} )
        this.setState({ data: copy });
        }

    deleteNote = (id) => {
        this.props.deleteNote(id);
        }

    render () {
        return (
            <div className="note-page">
                <div className="note-options">
                <Link to={`/notes/${this.props.match.params.id}/edit-note`}>edit</Link>
                <DeleteModal id={this.props.note.id} deleteNote={this.deleteNote}/>
                </div>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.textBody}</p>
            <Route
                path="/notes/:id/edit-note"
                render={(props) => <EditNote {...props} handleChange={this.inputHandler} editNote={this.editNote} />}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      note: state.note
    }
  }
  
  export default withRouter(
    connect(mapStateToProps, {
      fetchNote,
      editNote
    })(NotePage)
  );