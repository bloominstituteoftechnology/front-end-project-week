import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { viewNote, deleteNote, reorderNotes } from '../actions';
import './ListView.css';
import DeleteNoteModal from './DeleteNoteModal';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Search from './Search';
import SortingMenu from './SortingMenu';
import ListItem from './ListItem';

import Loading from './Loading';

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
          <SortableItem key={`item-${note.id}`} index={index} note={note} viewNote={viewNote} />
        );
      })}
    </ul>
  );
});

class SearchedListView extends React.Component {
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
    this.props.reorderNotes(arrayMove(this.props.searchResults, oldIndex, newIndex), this.props.searching);
  }

  render() {
    return (
      <div className='list-view'>
        <Search history={this.props.history} terms={this.props.match.params.terms}/>
        <div>
          <div className='list-title-container'><h2 className='list-title'>Your Notes:</h2><SortingMenu searched={true}/></div>
        {this.props.loading ? <Loading /> : <SortableList viewNote={this.viewNote} notes={this.props.searchResults} onSortEnd={this.onSortEnd} distance={20} axis='xy' helperClass='draggable'/> }
        </div>
        {this.state.view ? <Redirect to={`/view/${this.state.id}`} /> : null }
        {this.state.deleting ? <DeleteNoteModal deleteNote={this.deleteNote} cancelDelete={this.cancelDelete}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.notes.searchResults,
    searching: state.notes.searching,
    searchTerms: state.notes.searchTerms,
    sorted: state.notes.sorted,
    hash: state.notes.hash,
    loading: state.notes.loading,
  };
};

export default connect(mapStateToProps, { viewNote, deleteNote, reorderNotes, })(SearchedListView);