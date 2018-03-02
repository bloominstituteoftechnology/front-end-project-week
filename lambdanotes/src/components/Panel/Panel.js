import React from 'react';

class Panel extends React.Component {
  render() {
    return (
      <div className="Panel">
        <div className="ln-title">Lambda</div>
        <div className="ln-title2">Notes</div>
        <div className="panel-buttons">
          <button onClick={this.props.handleClickForView}>View Your Notes</button>
          <button onClick={this.props.handleClickForCreate}>+ Create New Note</button>
          <button onClick={this.props.handleClickForExport}>Export to CSV</button>
        </div>
      </div>
    );
  }
};

export default Panel;
