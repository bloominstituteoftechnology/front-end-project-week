import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Papa from 'papaparse';
import FileSaver from 'file-saver';

class SideBar extends React.Component {

  exportCSV = () => {
    if(this.props.auth) {
      const jnotes = JSON.stringify(this.props.notes);
      const csvnotes = Papa.unparse(jnotes);
      const file = new File([csvnotes], "lambda_notes.csv", {type: 'text/plain;charset=utf8'});
      FileSaver.saveAs(file);
    }
  }

  render() {
    return (
      <div className='sidebar'>
        <div className='top'>
          <h1>Dry Notes</h1>
          <NavLink to='/' className='button'><button>View Your Notes</button></NavLink>
          <NavLink to='/new' className='button'><button>+ Create New Node</button></NavLink>
          <button className='export' onClick={this.exportCSV}>Export Notes</button>
        </div>
        <div className='bottom'>
          {!this.props.auth ?
          <div className='btns'>
            <NavLink to='/login' className='button'><button>Log In</button></NavLink>
            <NavLink to='/register' className='button'><button>Register</button></NavLink>
          </div>
           :
           <NavLink to='/logout' className='button'><button>Log Out</button></NavLink>
          }
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
    auth: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(SideBar);