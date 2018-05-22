import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Edit.css'

const Edit = props => {
    return (
        <div className="main-text">
            <h3 style={{textAlign: "left"}}> Edit Note: </h3>
            <textarea rows="1" cols="60" placeholder="Note Title">
            </textarea>
            <textarea rows="15" cols="110" placeholder="Note Content">
            </textarea>
            <NavLink to="/"> <button className="saveButton"> Update </button></NavLink>
            </div>
    )
}

export default Edit