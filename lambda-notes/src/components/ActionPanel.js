import React from "react";

// Purgatorial Packages
import {Link} from 'react-router-dom';

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
      </React.Fragment>
    );
  }
}

export default ActionPanel
