import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { viewNote } from '../actions';
import './ListView.css';
import Shiitake from 'shiitake';
import DeleteNoteModal from './DeleteNoteModal';

class ListView extends React.Component {
  state = {
    redirect: false,
  }

  viewNote = (note) => {
    this.props.viewNote(note);
    this.setState({ redirect: true });
  }

  render() {
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
        {this.state.redirect ? <Redirect to='/view' /> : null }
        {this.props.delete ? <DeleteNoteModal /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    delete: state.delete,
  };
};

export default connect(mapStateToProps, { viewNote })(ListView);