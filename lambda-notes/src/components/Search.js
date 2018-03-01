import React, { Component } from 'react';
import { search, resetSearch } from '../actions/actions';
import { connect } from 'react-redux';

class Search extends Component {
  state = {
    searchText: this.props.searchText,
  }
  componentDidMount () {
    this.props.resetSearch(false);
  }
  searchInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.search(this.state.searchText); 
  };

  render() {
    return (
      <div className="col-md-6 col-sm-12 offset-md-6">
        <input
          onChange={this.searchInput}
          onKeyUp={this.searchInput}
          className="form-control"
          type="text"
          name="searchText"
          placeholder="Search Notes..."
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchText: state.searchText,
    error: state.error,
  };
};

export default connect(mapStateToProps, { search, resetSearch })(Search);
