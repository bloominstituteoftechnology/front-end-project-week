import React from 'react';
import "../css/note.css"

class Nav extends React.Component {
  constructor() {
    super();


    this.state = {
      noteList: [],
      inputText: ''
    };
  }

  render() {
    return (
      <form className="nav-left">
        <div className="nav-title">Lambda Notes</div>
        <ul className="nav-list">
          <li className="nav-left-item icon1">
            <button className="nav-button" value="noteList" onClick={this.props.noteList} name="noteList">View Notes</button>
          </li>
          <li className="nav-left-item">
            <div id="icon2" className="nav-left-icon-1"></div>
            <button className="nav-button" value="noteCreate" onClick={this.props.noteCreate} name="noteCreate">+ Create New Note</button>
          </li>


        </ul>
      </form>
    );
  }
}

export default Nav;