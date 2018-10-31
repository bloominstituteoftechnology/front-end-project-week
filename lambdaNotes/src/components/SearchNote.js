import React, { Component } from "react";
import {searchFunc} from '../util';


class SearchNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.SearchedResultNotes = [];
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.SearchedResultNotes = searchFunc(this.state.query, this.props.notes);
    this.props.handleSearch(this.SearchedResultNotes);
  };

  render() {
    return (
     
        <form className="searchNote" onSubmit={this.handleSearch} >
        
            <input
              type="input"
              onChange={this.handleInputChange}
              value={this.state.query}
              name="query"
              placeholder="Search notes..."
            />
            <button type="submit">Search</button>
         
        </form>
      
    );
  }
}

export default SearchNote;
