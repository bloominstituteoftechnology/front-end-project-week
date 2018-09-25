import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { viewNote, deleteNote, updateNote } from '../actions';
import Note from './Note';
import EditNote from './EditNote';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateActive: false
        }
    }

    componentDidMount() {
        this.props.viewNote(this.props.match.params.id);
    }

    toggleUpdate = () => {
        this.setState((prevState) => { 
            return {updateActive: !prevState.updateActive}
        });
    }

    deleteNote = () => {
        this.props.deleteNote(this.props.match.params.id, this.props.history);
    };

    render() {
        if (this.props.viewingNote) {
            return(
            <div>
                test
            </div>)
        }
        return (
            <div>
                <Note
                    title={this.props.note.title}
                    content={this.props.note.textBody}
                />
                <button onClick={this.toggleUpdate}>edit</button>
                <button onClick={this.deleteNote}>delete</button>
                {this.state.updateLive !== false
                    ? <EditNote onCancel={this.toggleUpdate} title={this.props.note.title} content={this.props.note.textBody} 
                                updateNote={this.props.updateNote} id={this.props.match.params.id} />
                    : null
                }
                <Link to="/">Back</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      note: state.note,
      viewingNote: state.fetchingNotes,
      viewedNote: state.fetchedNotes,
      error: state.error
    }
  }

export default withRouter(connect(mapStateToProps, { viewNote, deleteNote, updateNote })(ViewNote));