import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import { connect } from 'react-redux';


class NewNote extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <SideBar/>
            </div>
        )
    }
}