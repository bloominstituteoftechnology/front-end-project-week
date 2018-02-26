import React from 'react';
import { connect } from 'react-redux';
import './CreateNote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    entry: '',
  }

  render() {
    return (
      <div className='create-note'>
        test
      </div>
    );
  }
}

export default connect()(CreateNote);