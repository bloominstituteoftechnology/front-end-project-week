import React from 'react';

// CSS
import '../CSS/Search.css';

class Search extends React.Component {
  state = {
    term: ''
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form onSubmit={() => this.props.filterResult(this.state.term)}>
        <input onChange={this.handleOnChange} name="term" placeholder="Search Here" type="search" />
        <button type="submit" onClick={() => this.props.filterResult(this.state.term)}>Search</button>
      </form>
    )
  }
}

export default Search;