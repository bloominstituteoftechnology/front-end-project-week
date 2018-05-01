import React from 'react';
import ReactDOM from 'react-dom';

class CreateNoteView extends React.Component {
  render() {
    return (
      <div className="Notes-panel">
        <h1>I'm CreateNoteView{this.props.title}</h1>
        <div className="View-header">
                <h1>Your Notes {this.props.pageHeader}</h1>
        </div>
        <div>
          <input type="text" placeholder="Note title"></input>
        </div>
      </div>
    );
  }
}
