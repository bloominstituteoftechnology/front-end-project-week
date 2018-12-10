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
    // added this to fix refresh issue
    if (
      this.props.adding !== prevProps.adding ||
      this.props.deleting !== prevProps.deleting
    ) {
      //console.log('update');
      this.props.fetchNotes();
    }
  }

  render() {
    console.log(this.props);
    if (this.props.deleting || this.props.fetching || this.props.adding) {
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
    adding: state.adding,
  };
};

export default connect(
  mapStateToProps,
  {fetchNotes},
)(NotesContainer);
