import React from 'react';
import { connect } from 'react-redux';
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
    const terms = this.state.searchTerm.toLowerCase();
    this.props.history.push(`/search/${terms}`);
    console.log('props', this.props);
    // console.log(searchResults);

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

export default connect(mapStateToProps)(Search);