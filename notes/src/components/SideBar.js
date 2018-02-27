import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SideBar extends React.Component {

  exportCSV = () => {
    const jnotes = JSON.stringify(this.props.notes);
    console.log(jnotes);
  }

  render() {
    return (
      <div className='sidebar'>
        <h1>Lambda Notes</h1>
        <NavLink to='/' className='button'><button>View Your Notes</button></NavLink>
        <NavLink to='/new' className='button'><button>+ Create New Node</button></NavLink>
        <button className='export' onClick={this.exportCSV}>Export Notes</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps)(SideBar);