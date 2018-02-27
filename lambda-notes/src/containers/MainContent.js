import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteGrid from '../components/NoteGrid';

class MainContent extends Component {
  render() {
    return (
      
          <NoteGrid notes={} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(MainContent);
