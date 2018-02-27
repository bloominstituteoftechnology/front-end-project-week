import React from 'react';
import { connect } from 'react-redux';

import { search_results_clicked } from '../actions/index';

import './css/Search.css';

class Search extends React.Component {
  state = {
    title: '',
    body: '',
  };

  render() {
    return (
      <div className="search">
        <h1 className="search-header">Search for a Title</h1>
        <input className="searchbar" onChange={this.handleTitleChange} />
        <h1 className="search-header"> Or... </h1>
        <h1 className="search-header">Search within the body</h1>
        <input className="searchbar" onChange={this.handleBodyChange} />
        <button className="search-button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };
  handleSearch = () => {
    let results = [];
    if (this.state.title === '') results = this.search({ term: this.state.body, type: 'body' });
    else if (this.state.body === '')
      results = this.search({ term: this.state.title, type: 'title' });
    else alert('Search either by title or body');
    this.setState({
      body: '',
      title: '',
    });
    console.log(results);
    this.props.search_results_clicked(results);
  };

  search = term => {
    let lowerTerm = term.term.toLowerCase();
    let results = [];
    const { notes } = this.props;
    if (term.type === 'title') {
      notes.forEach(note => {
        let lowerNote = note.title.toLowerCase();
        if (lowerNote === lowerTerm) {
          results.push(note);
        }
      });
    }
    if (term.type === 'body') {
      notes.forEach(note => {
        let flag = false;
        let body = note.body.split(' ');
        body.forEach(word => {
          const lowerWord = word.toLowerCase();
          if (lowerWord === lowerTerm) {
            flag = true;
          }
        });
        if (flag === true) {
          results.push(note);
          flag = false;
        }
      });
    }
    return results;
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { search_results_clicked })(Search);
