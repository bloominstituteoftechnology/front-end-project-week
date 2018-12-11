import React from 'react';
import {connect} from 'react-redux';
import Notes from '../components/Notes';
import {fetchNotes} from '../store/actions';
import Fuse from 'fuse.js';
import Papa from 'papaparse';

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
  };
  componentDidMount() {
    this.props.fetchNotes();
  }

  exportToCsv = () => {
    //dispatch({type: EXPORTING_NOTES});
    const notes = this.props.notes;
    //const rows = ['title', 'textBody'];
    //let data = notes.map(n => {
    //return `${n.title},${n.textBody}`;
    //});
    //data = JSON.stringify(rows.join(',') + '\n' + data.join('\n'));
    //console.log(data);
    //data = Papa.unparse(data);
    //console.log(data);
    console.log(Papa.unparse(notes));
  };

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

  filterNotes = () => {
    const result = this.state.fuse.search(this.state.searchText);
    this.setState({filteredNotes: result});
  };

  searchNotes = e => {
    this.setState({searchText: e.target.value});
    //console.log(this.props.notes);
    const fuse = new Fuse(this.props.notes, this.state.filterOptions);
    console.log(fuse.search(this.state.searchText));
    const result = fuse.search(this.state.searchText);
    this.setState({filteredNotes: result.map(i => i.item)});
  };

  clearSearchText = e => {
    e.preventDefault();
    this.setState({searchText: ''});
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
            this.state.searchText ? this.state.filteredNotes : this.props.notes
          }
          export={this.exportToCsv}
          searchText={this.state.searchText}
          searchNotes={this.searchNotes}
          clearSearchText={this.clearSearchText}
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
