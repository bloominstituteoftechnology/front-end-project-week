import React from 'react';
import { connect } from 'react-redux';

import NotesList from './NotesList';
import CreateNote from './CreateNote';

import './css/MainContent.css';

class MainContent extends React.Component {
    
  render() {
    let show = null;
    if (this.props.current === 'list') return show = <NotesList />;
    if (this.props.current === 'create-note') return show = <CreateNote />;
    return (
      <div>
        {show};
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.current,
  };
};

export default connect(mapStateToProps, null)(MainContent);
