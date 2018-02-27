import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './NoteView.css';

class NoteView extends React.Component {
  state = {
    title: '',
    entry: '',
    id: '',
    redirect: false,
  };

  componentDidMount() {
    if (this.props.match.params.id === undefined) {
      this.setState({ redirect: true });
    }
    if ( this.props.current !== undefined ) {
      const { title, entry } = this.props.current;
      this.setState({ title: title, entry: entry, id: this.props.match.params.id });
    } else {
      const toEdit = this.props.notes.filter(note => this.props.match.params.id === note.id);
      if (toEdit.length > 0) {
        this.setState({ title: toEdit[0].title, entry: toEdit[0].entry, id: toEdit[0].id });
      } else {
        this.setState({ redirect: true });
      }
    }
  }

  render() {
    return (
      <div className='note-view'>
        <div>
          <Link to={`/edit/${this.state.id}`} className='edit-button'>edit</Link>
          <Link to={`/delete/${this.state.id}`} className='delete-button'>delete</Link>
          <div className='note-title'>{this.state.title}</div>
          <div className='note-entry'>{this.state.entry}</div>
        </div>
        <div>
          {this.state.redirect ? <Redirect to='/404' /> : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.current,
    notes: state.notes,
  }
}

export default connect(mapStateToProps)(NoteView);