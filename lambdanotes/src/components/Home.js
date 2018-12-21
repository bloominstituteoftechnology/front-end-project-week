import React, { Component } from 'react'
import SideBar from './SideBar.js'
import NoteDisplay from './NoteDisplay.js'
import './Home.css'

class home extends Component {
    render() {
        return (
            <div className= "home-screen">
                <SideBar/>
                <NoteDisplay/>
            </div>
        )
    }
}

export default home;