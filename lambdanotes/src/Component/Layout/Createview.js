import React, { Component } from 'react';
import Styles from '../../Styles/Createview.css';
import Mybutton from '../Reusables/Mybutton';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class Createview extends Component {
  render() {
    return (
        <div className="BigContainer">
            <div className="sidebar">
                <div className="sidebarname">
                    <h1> Lambda Notes</h1>
                </div>
                <div>
                    <Mybutton className="btn" text = "View your notes"/>
                    <Mybutton className="btn" text = "+ Create new notes"/>
                </div>
            </div>

            <div className="mainbar">
                <div className = "mainbarHeading">
                    <h2>Create New Note: </h2>
                </div>

                <div className = "titleInput">
                    <Input placeholder="Note Title" />
                </div>

                <div className = "noteInput">
                    <Input placeholder="Note Content" />
                </div>
                
                <div className = "submitButton">
                <Mybutton className="btn" text = "Save"/>
                </div>


            </div>
      </div>
    )
  }
};
