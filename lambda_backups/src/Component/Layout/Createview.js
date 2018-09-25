import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Styles from '../../Styles/Createview.css';
import Mybutton from '../Reusables/Mybutton';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class Createview extends Component {
    componentDidMount(){
        this.props.fetch();
    }
    
  render() {
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
                    <h2>Create New Note: </h2>
                </div>

                    <div className = "titleInput">
                        <Input name="title" placeholder="Note Title" onChange={this.props.handleTaskChange} value= {this.props.title} />
                    </div>

                    <div className = "noteInput">
                        <Input name="textBody" placeholder="Note Content" onChange={this.props.handleTaskChange} value= {this.props.textBody} />
                    </div>
                    
                    <div className = "submitButton">
                    {/* ask about linkingh this stuff */}
                    <Link to="/">
                        <Mybutton type="submit" href = "/" onClick={this.props.handleRequest}  className="btn" text = "Save"/>
                    </Link>
                    </div>
             

            </div>
      </div>
    )
  }
};
