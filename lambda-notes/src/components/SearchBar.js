import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: '',
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSearch = event => {
    event.preventDefault();
    const search = this.state.searchInput;
  }
  
  render(){
    return (
      <div className='search-bar'>
      <form onSubmit={this.handleSearch}>
        <input
          type='text'
          name='searchInput'
          value='this.state.searchInput'
          onChange={this.handleInput}
        />
        <button type='submit' className='button search-button'>
        Search
        </button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
  }
}

export default connect(
  mapStateToProps,
  {
  }
)(SearchBar);
