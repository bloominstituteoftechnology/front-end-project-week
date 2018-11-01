import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { searchEdit, notesFetch, noteFetch } from '../redux/actions';

import NotesList from '../components/NotesList';

import NotesMenuView from './NotesMenuView';
import NoteAuth from '../components/NoteAuth';

const NotesFilterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const NotesFilterInput = styled.input`
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;

    :focus {
        outline: none;
    }
`;

class NotesListView extends Component {
    componentDidMount() {
        this.props.notesFetch();
    }

    // componentDidUpdate(nextProps) {
    //     if (this.props.notes_array !== nextProps.notes_array) {
    //         this.props.notesFetch();
    //     }
    // }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

  render() {
    //   if (this.props.nts_fthg) {
    //       return (
    //           <h1>Loading...</h1>
    //       )
    //   }
      const notesFilter = this.props.notes_array.filter(note => {
          return note.title.toLowerCase().includes(this.props.searchField.toLowerCase());
      });
      if (this.isAuthenticated()) {
        return (
            <div>
                <NotesMenuView />
                    <NotesFilterContainer>
                        <NotesFilterInput onChange={(event) => this.props.searchEdit(event.target.value)} />
                    </NotesFilterContainer>
                <NotesList {...this.props} 
                    noteFetch={this.props.noteFetch}
                    notesFilter={notesFilter} 
                />
            </div>
        );
      } else {
          return (
              <NoteAuth />
          );
      }
  }
}

const mapStateToProps = state => ({
    searchField: state.searchReducer.searchField,
    notes_fetching: state.notesReducer.notes_fetching,
    notes_fetched: state.notesReducer.notes_fetched,
    notes_array: state.notesReducer.notes_array
});

export default connect(mapStateToProps, { searchEdit, notesFetch, noteFetch })(NotesListView);