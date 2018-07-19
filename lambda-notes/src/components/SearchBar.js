import React from 'react';
import { Button } from './../styles/styles';
import Styled from 'styled-components';
import { connect } from 'react-redux'
import { searchNotes, getNotes } from './../actions';

const SearchContainer = Styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    height: 70px;
`;

const InputContainer = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 10px;
`;

const InputField = Styled.input`
    width: 200px;
    height: 20px;
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
                <InputContainer>
                <InputField
                    type='text'
                    placeholder='Search'
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                    />
                    <p onClick={this.clearSearch} style={{fontSize: '10px'}}>Clear Search</p>
                </InputContainer>
                    <Button search> Search Notes</Button>
                
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