import React from "react";

// Auxillary Packages
import { connect } from 'react-redux';

// Purgatorial Packages
import {Link} from 'react-router-dom';
import { CSVLink } from 'react-csv';


// CSS
import "../CSS/ActionPanel.css";

class ActionPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="action-panel-title">Lambda Notes</h2>
        <Link className="btn btn-block link" to="/">
          View Your Notes
        </Link>
        <Link className="btn btn-block link" to="/newNote">
          + Create New Note
        </Link>
        <CSVLink className="btn btn-block link" filename={"lambda-notes.csv"} data={this.props.notes}>Dowload Notes</CSVLink>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {})(ActionPanel)
