import React from 'react';
import { CSVLink } from 'react-csv';
class Panel extends React.Component {
  render() {
    return (
      <div className="Panel">
        <div className="ln-title">Lambda</div>
        <div className="ln-title2">Notes</div>
        <div className="panel-buttons">
          <button onClick={this.props.handleClickForView}>View Your Notes</button>
          <button onClick={this.props.handleClickForCreate}>+ Create New Note</button>
          <CSVLink data={this.props.notes} ><button>Export to CSV</button></CSVLink>
        </div>
      </div>
    );
  }
};

export default Panel;
