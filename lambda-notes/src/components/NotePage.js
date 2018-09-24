import React, {Component} from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchNote, deleteNote } from "../actions";
import DeleteModal from './DeleteModal';

class NotePage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id);
        }

    deleteNote = (id) => {
        this.props.deleteNote(id);
        }

    render () {
        return (
            <div className="note-page">
                {this.props.note.title && this.props.note.textBody ? (
                    <div>
                        <div className="note-options">
                            <Link to={`/notes/${this.props.match.params.id}/edit-note`}>edit</Link>
                            <DeleteModal id={this.props.match.params.id} deleteNote={this.deleteNote}/>
                        </div>
                        <h2>{this.props.note.title}</h2>
                        <p>{this.props.note.textBody}</p>
                    </div>
                ) : (
                    <h4>This note does not exist</h4>
                )}
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
      deleteNote
    })(NotePage)
  );