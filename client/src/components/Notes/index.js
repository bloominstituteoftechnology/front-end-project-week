import React, { Component } from 'react';
import Note from './Note/index';
import { getAllNotes } from '../actions/index';
import { connect } from 'react-redux';

const styles = {
  display: 'flex',
  margin: '100px auto 0px auto',
  width: '90vw',
}

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes()
  }


  render() {

    console.log(this.props.notes);
    return (
      <div style={styles}>
        <Note />
      </div>
    );
  }

}

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.isFetching,
    notes: state.notes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotes: () => {
      dispatch(getAllNotes())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
