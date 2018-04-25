import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import {Route} from 'react-router-dom'

import { connect } from 'react-redux';


class NoteView extends Component {
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

export default NoteView;