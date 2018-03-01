import React, { Component } from 'react';
import { search } from '../actions/actions';
import { connect } from 'react-redux';

class Search extends Component {
  state = {
    searchText: this.props.searchText,
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
          value={this.state.searchText}
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

export default connect(mapStateToProps, { search })(Search);
