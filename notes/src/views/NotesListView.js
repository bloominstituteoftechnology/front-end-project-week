import React from 'react';
import { connect } from 'react-redux';
import { getNotes, searchNote } from '../store/actions/index';
import NotesList from '../components/NotesList/NotesList';
import SearchBar from '../components/Search/Search';
import styled from 'styled-components';

const Container = styled.div`
  form{
    display: flex;
    justify-content: center;
    
  }
`

class NotesListView extends React.Component {
        state = {
            searchInput: ''
        }
    
    componentDidMount() {
        this.props.notesList;
        if(this.props.notesList.length === 0){
            this.props.getNotes();
        }
    }

    searchNotes = event => {
        this.setState({
          searchInput: event.target.value
        });
      }

      searchSubmit = event => {
        event.preventDefault();
        this.props.searchNote(this.state.searchInput);
        this.setState({searchInput: ''});
      };

    render() {
        return (
            <Container>
            <SearchBar searchInput={this.state.searchInput} 
            searchNotes={this.searchNotes} 
            searchSubmit={this.searchSubmit} 
            {...this.props}/>
            <NotesList            
            {...this.props}/>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, { getNotes, searchNote })(NotesListView);