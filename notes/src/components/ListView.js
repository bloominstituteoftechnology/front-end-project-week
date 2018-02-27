import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { viewNote, deleteNote } from '../actions';
import './ListView.css';
import Shiitake from 'shiitake';
import DeleteNoteModal from './DeleteNoteModal';

class ListView extends React.Component {
  state = {
    view: false,
    renotes: false,
    id: '',
  }

  viewNote = (note) => {
    this.props.viewNote(note);
    this.setState({ view: true, id: note.id });
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      console.log('deleted');
      this.props.deleteNote(this.props.match.params.id);
    }
    this.setState({ renotes: true });
  }

  render() {
    console.log(this.props);
    return (
      <div className='list-view'>
        {this.props.notes ?
        <div>
          <h2 className='list-title'>Your Notes:</h2>
          <ul className='list-notes'>
            {this.props.notes.map((note) => {
              return (
                <li key={note.id} className='list-note' onClick={() => { this.viewNote(note)} }>
                  <div className='item-title'><span>{note.title}</span></div>
                  <Shiitake lines={6} throttleRate={200} className='item-entry'>{note.entry}</Shiitake>
                </li>
              );
            })}
        </ul>
        </div>
        :
        <div className='nothing-to-view'>
          <h2>Please Add a note</h2>
        </div>
        }
        {this.state.view ? <Redirect to={`/view/${this.state.id}`} /> : null }
        {this.state.renotes ? <Redirect to='/' /> : null}
        {this.props.delete ? <DeleteNoteModal /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { viewNote, deleteNote })(ListView);