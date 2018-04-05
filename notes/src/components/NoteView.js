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
    dateCreated: '',
    redirect: false,
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.id === undefined) {
      this.setState({ redirect: true });
    }
    // const toView = this.props.notes.filter(note => this.props.match.params.id === note.id);
    // if (toView.length === 1) {
    //   this.setState({ title: toView[0].title, entry: toView[0].entry,  dateCreated: toView[0].dateCreated, id: toView[0].id });
    // } else {
    //   this.setState({ redirect: true });
    // }
  }

  render() {
    const Converter = require('react-showdown').Converter;
    const converter = new Converter();

    return (
      <div className='note-view'>
        <div className='separator'>
          <div className='button-container'>
            <Link to={`/edit/${this.state.id}`} className='edit-button'>edit</Link>
            <Link to={`/delete/${this.state.id}`} className='delete-button'>delete</Link>
          </div>
          {this.props.current ? <div>
            <div className='note-title'><span>{this.props.current.title}</span><span className='note-timestamp'>{this.props.current.dateCreated}</span></div>
            <div className='note-entry'>{converter.convert(this.props.current.entry)}</div>
          </div>
          :
          <div>
            Loading...
          </div>}
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
    current: state.notes.current,
    notes: state.notes.notes,
  }
}

export default connect(mapStateToProps)(NoteView);