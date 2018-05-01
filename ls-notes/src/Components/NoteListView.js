import React from 'react';
import ReactDOM from 'react-dom';

class NoteListView extends React.Component {
  render() {
    return (
          // Notes lists and all other view elements go below here
            <div className="Notes-panel">
            <h1>I'm NoteListView {this.props.title}</h1>
            <div className="View-header">
                <h1>Your Notes {this.props.pageHeader}</h1>
            </div>
            <div>
              <ul>
                <li className="Note-row">
                  <div>
                    <header className="Note-header">
                      <h1>Note #1 Title {this.props.title}</h1>
                    </header>
                    <p className="Note-item">This is the note body.</p>
                  </div>
                  <div>
                    <header className="Note-header">
                      <h1>Note #1 Title {this.props.title}</h1>
                    </header>
                    <p className="Note-item">This is the note body.</p>
                  </div>
                  <div>
                    <header className="Note-header">
                      <h1>Note #1 Title {this.props.title}</h1>
                    </header>
                    <p className="Note-item">This is the note body.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>  
  );
  }
}
