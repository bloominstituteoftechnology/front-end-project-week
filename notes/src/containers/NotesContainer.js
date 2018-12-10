import React from 'react';
import {connect} from 'react-redux';
import Notes from '../components/Notes';
import {fetchNotes} from '../store/actions';
import {withRouter} from 'react-router';

class NotesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log('update');
    }
  }

  render() {
    console.log(this.props);
    if (this.props.deleting || this.props.fetching) {
      return <h2>loading...</h2>;
    }
    return (
      <div>
        <Notes {...this.props} notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    deleting: state.deleting,
    fetching: state.fetching,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {fetchNotes},
  )(NotesContainer),
);
