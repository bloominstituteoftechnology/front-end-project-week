import React from 'react';
import Button from './Button'
import { Link } from 'react-router-dom'
import { signOut, fetchNotes } from './Actions'
import { connect } from 'react-redux'

// SideBar component, using the previously created Btn Component

const SideBar = (props) => {
    return (
        <div className="sidebar">
            <h1>Lambda</h1>
            <h1>Notes</h1>
            {props.auth !== null ? <img className="portrait" src={props.auth.photoURL} /> : null}
            {props.auth !== null ? <h6 className="display-name">{props.auth.displayName}</h6> : null}
            <Link to="/notes"><Button text="View Your Notes" id="top-button" class="main-button" /></Link>
            <Link to="/create"><Button text="+ Create New Note" class="main-button" /></Link>
            {props.auth != null ? <Button text="Sign Out" class="main-button" function={props.signOut} /> : null}

        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth.user
    }
}

export default connect(mapStateToProps, { signOut, fetchNotes })(SideBar)