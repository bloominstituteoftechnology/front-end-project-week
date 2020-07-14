import React, { Component } from 'react';

class SearchBar extends Component{

  render(){
    return (
      <input
        type='text'
        name='filter'
        value={this.props.filter}
        placeholder='filter search'
        className='search-filter'
        onChange={this.props.handleFilter}></input>
    )
  }
}

export default SearchBar
