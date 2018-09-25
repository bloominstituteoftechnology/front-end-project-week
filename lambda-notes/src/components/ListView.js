import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import ListItem from './ListItem';
import '../CSS/ListView.css';
import { withRouter } from 'react-router-dom';


class ListView extends React.Component {
  
  componentDidMount() {
    this.props.getNotes();
  }
  
  render() {
    return (
      <div className="note-card-container">
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
  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(ListView));