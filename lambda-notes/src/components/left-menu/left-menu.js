import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/menu.css'

export default class LeftMenu extends Component {

  render(props){
    console.log(this.props.to)

    return (
      <div className="menu">
        <h1>Lambda Notes</h1>
        <Link className="menu-item" to="/listnotes" style={this.props}>View Your Notes</Link>
        <Link className="menu-item" to="/new-note">+ Create New Note</Link>
     
      </div>
    )
  }
}
