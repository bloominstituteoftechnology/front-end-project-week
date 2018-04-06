import React from 'react';
import { CSVLink } from 'react-csv';
import { logout, logout2 } from '../../utils/AuthService';
import { withRouter } from "react-router-dom";

class Panel extends React.Component {

  render() {
    let stuff = () => {
     this.props.history.push('/');
     logout();
   }

   let stuff2 = () => {
     window.location.replace("https://45h131.auth0.com/v2/logout?returnTo=https%3A%2F%2Ffefb03a7.ngrok.io");
     logout2();
  }

   return (
    <div className="Panel">
      <div className="ln-title">Lambda</div>
      <div className="ln-title2">Notes</div>
      <div className="panel-buttons">
        <button onClick={this.props.handleClickForView}>View Your Notes</button>
        <button onClick={this.props.handleClickForCreate}>+ Create New Note</button>
        <CSVLink data={this.props.notes} ><button>Export to CSV</button></CSVLink>
        <button onClick={() => stuff()}>Log Out</button>
        <button onClick={() => stuff2()}>Force Log Out</button>

      </div>
      </div>
    );
  }
};

export default withRouter(Panel);
