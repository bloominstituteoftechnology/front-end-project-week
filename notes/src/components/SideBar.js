import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">Lambda Notes</div>
        <Link to="/"><button className="viewnote">View Your Notes</button></Link><br/>
        <Link to={{pathname: "/addnote", lastId: this.props.lastId}}><button>+ Creat New Note</button></Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const notes = state.notes.notes
  return {
    lastId: notes[notes.length-1].id
  } 
}

export default connect(mapStateToProps)(SideBar);