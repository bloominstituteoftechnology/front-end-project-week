import React from 'react';

class SearchForm extends React.Component {

  state = {
    search: ''
  }

  handleOnchange = e => {
    this.setState({search: e.target.value,})
    this.props.search(e.target.value)
  }

  render() {
    return (
      <input 
        onChange={this.handleOnchange}
        value={this.state.search}
      />
    ) 
  }
}

export default SearchForm;