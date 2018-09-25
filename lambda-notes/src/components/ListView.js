import React from 'react';

// Auxillary Packages
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNotes } from '../actions';

// Components
import ListItem from './ListItem';

// CSS
import '../CSS/ListView.css';

class ListView extends React.Component {
  
  componentDidMount() {
    this.props.getNotes();
  }
  
  render() {
    return (
      <div className="note-card-container" style={this.props.notes.length < 15 ? {height: '100vh'} : {height: '100%'}}>
        {
          this.props.notes.map(note => {
            return (
                <ListItem note={note} key={note._id} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    fetched: state.fetched,
    isFetching: state.isFetching,
    error: state.error,
    updated: state.updated,
    deleted: state.deleted,
  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(ListView));