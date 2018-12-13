import React from "react";
import {withRouter, NavLink } from "react-router-dom";

class SideBar extends React.Component {
    logOut = () => {
        localStorage.removeItem('secret_token');
    }
    render() {
        if(this.props.isLoggedIn === true){
            return (
                <div className="side-bar">
                    <h1>Lambda<br />Notes</h1>
                    <div className="link-section">
                        <NavLink exact to="/" activeClassName="link">
                            <button>View Your Notes</button>
                        </NavLink>
                        <NavLink to="/create" activeClassName="link">
                            <button>+ Create New Note</button>
                        </NavLink>
                        <br/>
                        <button className="logout-btn" onClick={this.logOut}>log out</button>
                    </div>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default withRouter(SideBar);