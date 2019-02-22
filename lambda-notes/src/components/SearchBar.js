import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

handleSubmit = event => {
  event.preventDefault();
}
  render(){
    return (
      <div className='search-bar'>
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='searchInput'
          defaultValue=''
          placeholder='search notes'
          onChange={this.props.handleInput}
        />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
  }
}

export default connect(
  mapStateToProps,
  {
  }
)(SearchBar);
