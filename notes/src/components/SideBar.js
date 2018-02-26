import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

  render() {
    return (
      <div className="sidebar">
       <div>Side Bar Component</div>
       <div><Link to="/"><button>View Your Notes</button></Link></div>
       <div><Link to="/addnote"><button>+ Creat New Note</button></Link></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  } 
}

export default connect(mapStateToProps)(SideBar);