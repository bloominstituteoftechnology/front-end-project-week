import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { viewNote, deleteNote, reorderNotes, getNotes } from '../actions';
import './ListView.css';
import DeleteNoteModal from './DeleteNoteModal';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Search from './Search';
import SortingMenu from './SortingMenu';
import ListItem from './ListItem';

const SortableItem = SortableElement(({note, viewNote}) =>
  <div>
    <ListItem note={note} viewNote={viewNote} />
  </div>
);

const SortableList = SortableContainer(({notes, viewNote}) => {
  return (
    <ul className='list-notes'>
      {notes.map((note, index) => {
        return (
          <SortableItem key={`item-${note._id}`} index={index} note={note} viewNote={viewNote}/>
        );
      })}
    </ul>
  );
});

class ListView extends React.Component {
  state = {
    id: '',
    deleting: false,
    selectingLabel: false,
  }

  viewNote = (note) => {
    this.props.viewNote(note);
    this.setState({ view: true, id: note._id });
  }


  componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ deleting: true });
    }
    this.props.getNotes();
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
        {this.props.notes ?
        <div>
          <div className='list-title-container'><h2 className='list-title'>Your Notes:</h2><SortingMenu /></div>
          <SortableList viewNote={this.viewNote} toggle={this.toggleLabelSelection} selecting={this.state.selectingLabel} notes={this.props.notes} onSortEnd={this.onSortEnd} distance={20} axis='xy' helperClass='draggable'/>
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
    notes: state.notes.notes,
    sorted: state.notes.sorted,
    hash: state.notes.hash,
  };
};

export default connect(mapStateToProps, { viewNote, deleteNote, reorderNotes, getNotes })(ListView);