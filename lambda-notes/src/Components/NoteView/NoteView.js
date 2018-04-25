import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import {Route} from 'react-router-dom'
import "./NoteView.css"
import { connect } from 'react-redux';


class NoteView extends Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props.location.state.index)
        return(
            <div className="noteView">
                <SideBar/>
                <div>Hello</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('NoteView', state)
    return {
        notes: state
    }
  }

export default connect(mapStateToProps)(NoteView);