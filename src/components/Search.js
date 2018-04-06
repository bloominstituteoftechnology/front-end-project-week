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

  componentWillReceiveProps() {
    this.setState({ searchTerm: ''});
  }

  checkSearch = (terms) => {

    // const searchResults = [];
    // let looseReg = '';
    // for (let i = 0; i < terms.length; i++) {
    //   looseReg += terms[i] + "\\s*";
    // }
    // let strictRegex = new RegExp(terms, 'i');
    // let looseRegex = new RegExp(looseReg, 'i');

    // this.props.notes.forEach((item) => {
    //   if (item.title.match(strictRegex) || item.entry.match(strictRegex)) {
    //     searchResults.push(item);
    //   }
    // });

    // this.props.notes.forEach((item) => {
    //   if (item.title.replace(/[\W_]+/g," ").replace(/\s/g, '').match(looseRegex) || item.entry.replace(/[\W_]+/g," ").replace(/\s/g, '').match(looseRegex)) {
    //     if (!searchResults.includes(item)){
    //       searchResults.push(item);
    //     }
    //   }
    // });
    this.props.searchNotes(terms);
  }

  render() {
    return (
      <div className='search'>
        <form onSubmit={this.onSubmit}>
          <label>Search:</label>
          <input className='search-bar' value={this.state.searchTerm} name='searchTerm' onChange={this.onChange} placeholder={this.props.terms} maxlength='100'/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
  }
}

export default connect(mapStateToProps, { searchNotes })(Search);