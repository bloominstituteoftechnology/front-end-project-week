import React, { Component } from 'react';
import classes from './App.css';
import {connect} from 'react-redux';
import {Cockpit} from '../../Components/Cockpit';
import {getNotes} from '../../Actions/NoteActions';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <div className={classes.Container}>
        <Cockpit/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
export default connect(mapStateToProps, {getNotes})(App);
