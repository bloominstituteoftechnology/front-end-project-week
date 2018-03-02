import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
  state = {
    searchValue: '',
  }

  render() {
    return(
      <form className="searchBox__container" onSubmit={this.submitSearch} >
        <input className="searchBox__input" type="text" onChange={this.handleChange} value={this.state.searchValue} placeholder="Title Search"/>
        <span className="searchBox__button" role="img" onClick={(event) => this.submitSearch(event)}  aria-label="search">&#x1f50d;</span>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value});
  }

  submitSearch = event => {
    event.preventDefault();
    const thingToSearch = '' + this.state.searchValue;
    this.props.sendSearchValue(thingToSearch);

  }


}

export default SearchBar;
