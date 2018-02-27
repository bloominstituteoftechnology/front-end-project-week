import React from 'react';
import { connect } from 'react-redux';

import NotesList from './NotesList';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';

import './css/MainContent.css';

class MainContent extends React.Component {
    
  render() {
    console.log("Props in Main Content", this.props)
    let show = null;
    if (this.props.current === 'list') return show = <NotesList />;
    if (this.props.current === 'create-note') return show = <CreateNote />;
    if (this.props.current === 'note') return show = <ViewNote />;
    if (this.props.current === 'edit') return show = <EditNote />;
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
