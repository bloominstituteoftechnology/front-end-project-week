import React, { Component } from 'react';
import NavBar from './NavBar/index';
import { connect } from 'react-redux';
import { getAllNotes } from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes()

  }


  render() {

    console.log(this.props.notes);

    return (
      <div>
        <NavBar />

      </div>
    );
  }
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
