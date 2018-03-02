import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { viewNote, deleteNote, reorderNotes, searchNotes } from '../actions';
import './ListView.css';
import Shiitake from 'shiitake';
import DeleteNoteModal from './DeleteNoteModal';
import removeMd from 'remove-markdown';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Search from './Search';
import SortingMenu from './SortingMenu';

const SortableItem = SortableElement(({note, viewNote}) =>
  <li className='list-note' onClick={() => { viewNote(note)} }>
    <div className='item-title'><Shiitake lines={1} throttleRate={200}>{note.title}</Shiitake></div>
    <Shiitake lines={6} throttleRate={200} className='item-entry'>{removeMd(note.entry)}</Shiitake>
    <div className='item-timestamp'>{note.dateCreated}</div>
  </li>
);

const SortableList = SortableContainer(({notes, viewNote}) => {
  return (
    <ul className='list-notes'>
      {notes.map((note, index) => {
        return (
          <SortableItem key={`item-${note.id}`} index={index} note={note} viewNote={viewNote} />
        );
      })}
    </ul>
  );
});

class ListView extends React.Component {
  state = {
    id: '',
    deleting: false,
  }

  viewNote = (note) => {
    this.props.viewNote(note);
    this.setState({ view: true, id: note.id });
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ deleting: true });
    }
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push('/');
    this.setState({ deleting: false });
  }

  cancelDelete = () => {
    this.props.history.push('/');
    this.setState({ deleting: false });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.reorderNotes(arrayMove(this.props.notes, oldIndex, newIndex), this.state.searching);
  }

  render() {
    return (
      <div className='list-view'>
        <Search history={this.props.history} search={this.search}/>
        <SortingMenu />
        {this.props.notes ?
        <div>
          <h2 className='list-title'>Your Notes:</h2>
          <SortableList viewNote={this.viewNote} notes={this.props.notes} onSortEnd={this.onSortEnd} distance={20} axis='xy' helperClass='draggable'/>
        </div>
        :
        <div className='nothing-to-view'>
          <h2>Please Add a note</h2>
        </div>
        }
        {this.state.view ? <Redirect to={`/view/${this.state.id}`} /> : null }
        {this.state.deleting ? <DeleteNoteModal deleteNote={this.deleteNote} cancelDelete={this.cancelDelete}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    sorted: state.sorted,
  };
};

export default connect(mapStateToProps, { viewNote, deleteNote, reorderNotes, searchNotes })(ListView);