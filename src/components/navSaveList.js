import React from 'react'
import "../css/note.css"

class NavSaveList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      lists: [],
      selectThis: false,
    };
  }

  render() {
    let classNames = require('classnames');
    let temp = this.props.selectThis;
    //(temp) ? temp = false: temp = true;
    console.log("temp:", temp)
    let selectIt = classNames({
      'nav-save-lists-item': true,
      'nav-select-item': temp
    })

    return (
      <li className="nav-save-list-item">
        <div className={selectIt} onClick={() => this.props.listHandler(this.props.id)} >{this.props.title}</div>
      </li>
    );
  }
}

export default NavSaveList;