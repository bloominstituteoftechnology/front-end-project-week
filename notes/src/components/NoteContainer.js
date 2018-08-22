import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotePage from './NotePage';
import DeleteModal from './DeleteModal';

class NoteContainer extends React.Component {
    render(){
    return(
      <div className="notes">
        {this.props.show ? <DeleteModal /> : null}
        <Route exact path="/" component={NoteList} />
        <Route exact path="/new" component={NoteForm} />
        <Route exact path="/note/:id" component={NotePage} />
        <Route path="/note/:id/edit" component={NoteForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.showingModal,
  }
}

export default withRouter(connect(mapStateToProps)(NoteContainer));
