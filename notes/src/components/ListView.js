import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { viewNote, deleteNote, reorderNotes } from '../actions';
import './ListView.css';
import Shiitake from 'shiitake';
import DeleteNoteModal from './DeleteNoteModal';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({note, viewNote}) =>
  <li key={note.id} className='list-note' onClick={() => { viewNote(note)} }>
    <div className='item-title'><span>{note.title}</span></div>
    <Shiitake lines={6} throttleRate={200} className='item-entry'>{note.entry}</Shiitake>
  </li>
);

const SortableList = SortableContainer(({notes, viewNote}) => {
  return (
    <ul className='list-notes'>
    {notes.map((note, index) => {
      return (
        <SortableItem key={note.id} index={index} note={note} viewNote={viewNote}/>
      );
    })}
</ul>
  );
});

class ListView extends React.Component {
  state = {
    view: false,
    renotes: false,
    id: '',
    notes: this.props.notes,
  }

  viewNote = (note) => {
    this.props.viewNote(note);
    this.setState({ view: true, id: note.id });
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.deleteNote(this.props.match.params.id);
    }
    this.setState({ renotes: true });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      notes: arrayMove(this.state.notes, oldIndex, newIndex),
    });
  }

  render() {
    return (
      <div className='list-view'>
        {this.props.notes ?
        <div>
          <h2 className='list-title'>Your Notes:</h2>
          <SortableList viewNote={this.viewNote} notes={this.state.notes} onSortEnd={this.onSortEnd} distance='20' axis='xy' helperClass='draggable'/>
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

export default connect(mapStateToProps, { viewNote, deleteNote, reorderNotes })(ListView);