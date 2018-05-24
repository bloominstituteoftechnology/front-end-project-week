import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleModalBack } from '../actions'
import '../styles/SideNav.css'

const SideNav = props => {
    return (
        <div className="nav flex-column sideNav" style={{background: props.deleting ? 'gray' : '#D8D8D8', opacity: props.deleting ? '.5' : '1'}} onClick={props.toggleModalBack}>
            <div className="row no-gutters">
            <h1 className="headingforSideNav"> Lambda Notes </h1>
            </div>
            <div className="row no-gutters buttonStyle" style={{opacity: props.deleting ? '.6' : '1'}}>
            <NavLink to="/"> <button> View Your Notes </button></NavLink>
            </div>
            <div className="row no-gutters buttonStyle" style={{opacity: props.deleting ? '.6' : '1'}}>
            <NavLink to="/create"> <button className="button2">+Create New Note </button></NavLink>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        deleting: state.notes.deleting
    }
}
export default connect(mapStateToProps, { toggleModalBack })(SideNav)