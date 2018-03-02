import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/DisplayOne.css';
import SideBar from './SideBar';

class DisplayOne extends Component {
  state = {
    note: {},
    title: '',
    body: '',
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const singleNote = this.props.notes.filter(note => note.id === id)[0];
    this.setState({ note: singleNote });
  }

  render() { 

    return (
      <div className="container">
        <SideBar />
        <div className="edit">edit</div>
        <div className='delete'>delete</div>
        <div className="title">{this.state.note.title}</div>
        <div className="body">{this.state.note.body}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes, 
  };
};
  
export default connect(mapStateToProps, null)(DisplayOne);