import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { viewNote } from '../actions';
import Note from './Note';

class ViewNote extends Component {
    componentDidMount() {
        this.props.viewNote(this.props.match.params.id);
    }

    render() {
        console.log(this.props.note);
        return (
            <div>
                <Note
                    title={this.props.note.title}
                    content={this.props.note.textBody}
                />
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

export default withRouter(connect(mapStateToProps, { viewNote })(ViewNote));