import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {newNote} from "../../Actions"


import "./ListView.css";
class ListView extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            loginUser: {
                Username: "Admin",
                Password: "Password"
            }
        }
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

    display = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        console.log(this.state.loginUser.Username)
        return (
        <div>
            {this.state.display===false ? (
                <div className="loginBody">
                    <div className="loginCard">
                        <h1>Sign in</h1>
                        <div className="inputs">
                            Username: <input onChange={this.handleInputChange} name="Username" type="text"></input>
                            Password: <input onChange={this.handleInputChange} name="Password" type="text"></input>
                        </div>
                        <button onClick={() => {
                            {this.state.Username === this.state.loginUser.Username
                                 &&
                            this.state.Password === this.state.loginUser.Password
                            ? (
                                this.display()
                            ) : (
                                alert('Incorrect username or password')
                            )}
                        }} style={login}>Login</button>
                    </div>
                </div>
            ) : (
                <div className = "body">
                <SideBar/>
                <div className = "sideBar_pop notes">
                    <div className = "list">
                        <h2>Your Notes:</h2>
                    </div>

                    <div>
                        {this.props.notes.notes.length === 1 ? (
                            <h1>Make a note</h1>
                        ) : (
                            <div className = "row">
                                {this.props.notes.notes.map((note, index) => {
                                    console.log('index',index)
                                return (
                                    <Link className="card" to={{
                                        pathname: `/note/${index}`,
                                        state: {
                                            index: index
                                        }
                                    }}>
                                        <h1 className="underline" key={index}>{note.title}</h1>
                                        <p key={index}>{note.note}</p>
                                    </Link>
                                )
                            })} 
                            </div>
                        )}
                    </div>
                </div>
            </div>
            )}
        </div>
        )
    }
}

const login = {
    textDecoration: "none",
    backgroundColor: "rgb(110, 200, 200)",
    border: "none",
    width: "30%",
    height: "10vh",
    cursor: "pointer"
}

const mapStateToProps = state => {
    console.log('list', state)
    return {
        notes: state
    }
  }

export default connect(mapStateToProps, {
    newNote,
  })(ListView);
  
