import React from 'react';
import { connect } from 'react-redux';
import { searchNotes } from '../actions';
import './Search.css';

class Search extends React.Component {
  state = {
    searchTerm: '',
    termToSearch: '',
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchTerm !== '') {
      const terms = this.state.searchTerm.toLowerCase();
      this.checkSearch(terms);
      this.props.history.push(`/search/${terms}`);
    } else {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.terms !== nextProps.match.params.terms ){
      this.checkSearch(nextProps.match.params.terms);
      this.props.history.push(`/search/${nextProps.match.params.terms}`);
    }
  }

  checkSearch = (terms) => {
    const searchResults = [];
    let regex = new RegExp(terms, 'i');
    this.props.notes.forEach((item) => {
      if (item.title.match(regex) || item.entry.match(regex)) {
        searchResults.push(item);
      }
    });
    this.props.searchNotes(searchResults, terms);
  }

  render() {
    return (
      <div className='search'>
        <form onSubmit={this.onSubmit}>
          <label>Search:</label>
          <input className='search-bar' name='searchTerm' onChange={this.onChange}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { searchNotes })(Search);