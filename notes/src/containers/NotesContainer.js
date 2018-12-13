import React from 'react';
import {connect} from 'react-redux';
import Notes from '../components/Notes';
import Fuse from 'fuse.js';
import Papa from 'papaparse';
import {fetchNotes} from '../store/actions';

class NotesContainer extends React.Component {
  state = {
    filteredNotes: [],
    filterOptions: {
      shouldSort: true,
      threshold: 0.2,
      tokenize: true,
      distance: 200,
      includeMatches: true, //don't forget to use this
      minMatchCharLength: 2,
      keys: ['title', 'textBody'],
    },
    searchText: '',
    sortType: 'none',
    submittedSearch: '',
  };
  componentDidMount() {
    this.props.fetchNotes();
  }

  componentDidUpdate(prevProps) {
    // ensure props are up to date
    if (
      this.props.adding !== prevProps.adding ||
      this.props.deleting !== prevProps.deleting ||
      this.props.isEditing !== prevProps.isEditing
    ) {
      this.props.fetchNotes();
    }
  }

  exportToCsv = () => {
    const notes = this.props.notes;
    const data = Papa.unparse(notes, {newling: '\n'});
    const blob = new Blob([data], {type: 'text/csv'});
    const dl = window.document.createElement('a');
    dl.href = window.URL.createObjectURL(blob, {type: 'text/plain'});
    dl.download = 'notes.csv';
    document.body.appendChild(dl);
    dl.click();
    document.body.removeChild(dl);
  };

  sortNotes = notes => {
    switch (this.state.sortType) {
      case 'alpha':
        const alphaSortedNotes = notes.sort((n, m) => {
          if (n.title.toUpperCase() < m.title.toUpperCase()) return -1;
          if (n.title.toUpperCase() > m.title.toUpperCase()) return 1;
          return 0;
        });
        return alphaSortedNotes;
      case 'length':
        return notes.sort((n, m) => m.textBody.length - n.textBody.length);
      case 'time':
        return [...notes].reverse();
      default:
        return notes;
    }
  };

  changeSort = e => {
    e.preventDefault();
    this.setState({sortType: e.target.value});
  };

  searchEnter = (e, text) => {
    e.preventDefault();
    let result;
    const fuse = new Fuse(this.props.notes, this.state.filterOptions);
    this.setState({searchText: ''}, () => {
      result = fuse.search(text);
      this.setState({filteredNotes: result.map(i => i.item)});
    });
  };

  searchNotes = e => {
    e.preventDefault();
    this.setState({searchText: e.target.value}, () => {
      if (this.state.searchText !== '') {
        const fuse = new Fuse(this.props.notes, this.state.filterOptions);
        const result = fuse.search(this.state.searchText);
        console.log(result);
        this.setState({filteredNotes: result.map(i => i.item)});
      } else {
        this.setState({filteredNotes: []});
      }
    });
  };

  clearFilter = e => {
    e.preventDefault();
    this.setState({filteredNotes: [], searchText: ''});
  };

  render() {
    if (this.props.deleting || this.props.fetching || this.props.adding) {
      return <h2>loading...</h2>;
    }
    return (
      <div>
        <Notes
          {...this.props}
          notes={
            this.state.filteredNotes.length
              ? this.sortNotes(this.state.filteredNotes)
              : this.sortNotes(this.props.notes)
          }
          export={this.exportToCsv}
          searchText={this.state.searchText}
          searchNotes={this.searchNotes}
          clearFilter={this.clearFilter}
          changeSort={this.changeSort}
          searchEnter={this.searchEnter}
          totalNotes={this.props.notes.length}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    deleting: state.deleting,
    fetching: state.fetching,
    adding: state.adding,
    isEditing: state.isEditing,
  };
};

export default connect(
  mapStateToProps,
  {fetchNotes},
)(NotesContainer);
