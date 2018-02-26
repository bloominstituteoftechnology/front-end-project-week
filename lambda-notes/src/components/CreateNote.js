import React from 'react';
import { connect } from 'react-redux';

import './css/CreateNote.css'

class CreateNote extends React.Component {
  state = {
    title: '',
    body: '',
  }
    
  render() {
    return (
      <div className='create'>
        <h1 className='create-header'> Create New Note: </h1>
        <form onSubmit={this.handleSumbit} style={{display:"flex", justifyContent:"space-between"}}>
        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
        <button type="submit">Save</button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.current,
  };
};

export default connect(mapStateToProps, null)(CreateNote);