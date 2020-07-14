import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import Styles from '../../Styles/Loginview.css';


export default class Listview extends Component {

    componentDidMount(){
        this.props.fetch();
    }
  render() {
    return (
      <div>
            <div className="BigContainer">
                <div className="sidebar">
                    <div className="sidebarname">
                        <h1> Lambda Notes</h1>
                    </div>
                </div>

                <div className="mainbar">
                    <div className = "mainbarHeading">
                        <h2>Login: </h2>
                    </div>
                
                    <div className="loginContainer">
                        <Input className="margin" name="username" onChange={this.props.handleTaskChange}  value={this.props.username} placeholder="username" />
                        <Input className="margin" name="password" onChange={this.props.handleTaskChange}  value={this.props.password} placeholder="password" />
                        <Button className="margin" color="primary" onClick={this.props.handNewUser} >
                            Sign-up
                        </Button>
                        <Button className="margin" color="primary" onClick={this.props.handleReturningUser} >
                            login
                        </Button>
                    </div> 
                </div>  
            </div>
      </div>
    )
  }
};
