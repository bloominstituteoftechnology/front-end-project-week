import React from 'react';
import { Button } from './../styles/styles';
import Styled from 'styled-components';
import { connect } from 'react-redux'
import { searchNotes, getNotes } from './../actions';

const SearchContainer = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        }
    }


    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value})
        console.log(this.state.searchTerm)
    }

    searchNotes = (e) => {
        e.preventDefault();
        this.props.searchNotes(this.state.searchTerm)
        this.setState({searchTerm: ''})
    }

    clearSearch = () => {
        this.props.getNotes()
    }
    render() {
    return (
        <div>
            <SearchContainer onSubmit={this.searchNotes}>
                <input
                    type='text'
                    placeholder='Search'
                    defaultValue=''
                    onChange={this.handleSearch}
                    
                    />
                    <Button> Search Notes</Button>
                    <p onClick={this.clearSearch} style={{fontSize: '10px'}}>Clear Search</p>
            </SearchContainer>
        </div>    
    )
}
}

const mapStateToProps = state => {
    return {
      notes: state.notes.notes
    }
  }
  
  const mapActionsToProps = {
    searchNotes: searchNotes,
    getNotes: getNotes
  }
  export default connect( mapStateToProps, mapActionsToProps)(SearchBar);