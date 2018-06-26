import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { cancelDelete } from '../actions'
import '../styles/SideNav.css'

const SideNav = props => {
    return (
        <div className="nav sideNav" style={{background: props.deleting ? 'gray' : '#D8D8D8', opacity: props.deleting ? '.5' : '1', borderRight: props.deleting ? '1px solid gray' : '#979797 1px solid'}} onClick={props.cancelDelete}>
            <h1 className="headingforSideNav"> Lambda Notes </h1>
            <div className="buttonStyle" style={{opacity: props.deleting ? '.6' : '1'}}>
            <NavLink to="/"> <button> View Your Notes </button></NavLink>
            </div>
            <div className="buttonStyle" style={{opacity: props.deleting ? '.6' : '1'}}>
            <NavLink to="/create"> <button>+Create New Note </button></NavLink>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        deleting: state.notes.deleting
    }
}
export default connect(mapStateToProps, { cancelDelete })(SideNav)