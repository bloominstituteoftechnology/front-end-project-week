import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Styles from '../../Styles/Editview.css';
import Mybutton from '../Reusables/Mybutton';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class Editview extends Component {
  render() {
    console.log('props',this.props)
    return (
        <div className="BigContainer">

            <div className="sidebar">
                <div className="sidebarname">
                    <h1> Lambda Notes</h1>
                </div>
                <div>
                    <Link to="/">
                        <Mybutton className="btn" text = "View your notes"/>
                    </Link>
                    <Link to="/create">
                        <Mybutton className="btn" text = "+ Create new notes"/>
                    </Link>
                </div>
            </div>

            <div className="mainbar">

 
                <div className = "mainbarHeading">
                    <h2>Edit Note: </h2>
                </div>

                <div className = "titleInput">
                    <Input placeholder="Note Title" />
                </div>

                <div className = "noteInput">
                    <Input placeholder="Note Content" />
                </div>
                
                <div className = "submitButton">
                
                    <Mybutton className="btn" text = "Update"/>
         
                </div>


            </div>
      </div>
    )
  }
};
