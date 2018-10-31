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

 
  render() {
    return (
     
        <form className="searchNote"  >
        
            <input
              type="input"
              onChange={this.props.handleInputChange}
              value={this.props.query}
              name="query"
              placeholder="Search notes..."
              size = "30"
            />
    
         
        </form>
      
    );
  }
}

export default SearchNote;
