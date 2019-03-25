import React, { Component } from 'react';

class ListSearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  onSearchChange = e => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.onSearchNotes(e, this.state.searchTerm)}>
        <input className="list-search-input" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.onSearchChange} />
      </form>
    );
  }
}

export default ListSearchForm;