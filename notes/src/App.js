import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import NotesListView from './views/NotesListView';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Sidebar from './components/Sidebar';
import Authenticate from './components/Authenticate';

import { getNotes } from './actions/';

// #region Styled Components
const AppWrapper = styled.div`
  display: flex;
  margin: auto 0;
`;
const MainWrapper = styled.div`
  margin-left: 200px;
  width: 80%;
`;
// #endregion Styled Components

class App extends Component {
    state = {
        notes: [],
        noteIds: [],
        filteredNotes: [],
        reversedNotes: [],
        sortText: 'newest',
    }

  componentDidMount() {
    this.props.getNotes();
  }

  componentDidUpdate() {
    if(this.props.addingNote || this.props.editingNote || this.props.deletingNote) {
      this.props.getNotes();
    }
  }

  searchNotes = event => {
    const searchNotes = this.props.notes.filter(note => {
      if (note.textBody.includes(event.target.value) || note.title.includes(event.target.value)) {
        return note;
      }
    });
    this.setState({ filteredNotes: searchNotes })
  }

  sortNotes = event => {
    let reversedArray = this.props.notes.reverse();
    this.setState(prevState => ({ reversedNotes: reversedArray, sortText: (prevState.sortText === 'newest' ? 'oldest' : 'newest') }));
  }

  convertArrayOfObjectsToCSV = (args) => {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
  }

  downloadCSV = (args) => {
    var data, filename, link;

    var csv = this.convertArrayOfObjectsToCSV({
        data: this.props.notes
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }

  render() {
    return (
      <AppWrapper>
        <Route path="/" render={props => <Sidebar {...props} searchNotes={this.searchNotes} exportCSV={this.exportCSV} downloadCSV={this.downloadCSV} />} />
          <MainWrapper>
              <Route 
                exact path="/" 
                render={props => 
                  <NotesListView 
                    {...props}
                    sortNotes={this.sortNotes}
                    sortText ={this.state.sortText}
                    notes={this.state.filteredNotes.length > 0 && this.state.filteredNotes.length !== this.props.notes.length ? this.state.filteredNotes : (this.state.reversedNotes.length > 0 ? this.state.reversedNotes : this.props.notes)} 
                  /> 
                  }
                />
              <Route exact path="/note/:noteId" render={props => <Note {...props} notes={this.props.notes} />} />
            <Route path="/createnewnote" component={NoteForm} />
            <Route path="/note/edit/:noteId" render={props => <NoteForm {...props} notes={this.props.notes} />} />
          </MainWrapper>
      </AppWrapper>
    );
  }
}

const mapStatetoProps = state => {
  return {
      notes: state.notes,
      fetchingNotes: state.fetchingNotes,
      error: state.error,
      addingNote: state.addingNote,
      deletingNote: state.deletingNote,
      editingNote: state.editingNote
  }
}

export default Authenticate(withRouter(connect(mapStatetoProps, { getNotes })(App)));