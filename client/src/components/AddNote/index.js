import React, { Component } from 'react'
import NewNote from './NewNote/index';
import { connect } from 'react-redux';

const styles = {
  addNote: {
    margin: '100px auto 0 auto',
    // border: '1px solid black',
    width: '60vw',
  }
}

class AddNote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.addNote}>
        <NewNote />
      </div>
    );
  }
}

export default connect()(AddNote);
