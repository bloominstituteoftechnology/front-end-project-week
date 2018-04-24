import React, { Component } from 'react';
import './components.css'


export default class ViewNote extends Component {
    render() {
        return (
            <div className="ViewNote__Container">
            <div className="ViewNote__Title">
                <h4>Title</h4>
            </div>
            <div className="ViewNote__Content">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
            </div>
        )
    }
}