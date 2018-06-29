import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';

import './SideNav.css';
import Button from '../Button/Button';
import { fetchNotes } from '../../actions';

function homeLink() {
    return window.location.href = "/"
}

const SideNav = (props) => {

    const signout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        props.history.push('/');
    }

    let loggedInUser = localStorage.getItem('userId')
    let filteredCSV = props.notes.filter(note => {
        console.log(note.user == loggedInUser) 
    })
    console.log(filteredCSV)

    return (

        <div className="nav-container">

            <h1 className="lambdaNotes">Lambda Notes</h1>

            <Link style={{textDecoration: 'none'}} to="/notes"><Button onClick={() => props.fetchNotes()} style={{width: "100%"}} text="View Your Notes" /></Link>
        
            <Link style={{textDecoration: 'none'}} to="/notes/create"><Button style={{width: "100%"}} link="/create" text="+ Create New Note"/></Link>

            <CSVLink style={{textDecoration: 'none'}} data={props.filteredCSV} ><Button className="csv-btn" style={{width: "100%"}} text="CSV Export"></Button> </CSVLink>

            <Link style={{textDecoration: 'none'}} to="/"><Button onClick={signout} className="logoutBtn" style={{width: "100%"}} link="/" text="Logout"/></Link>

        </div>

    )

}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        filteredCSV: state.filteredCSV
    }
}

export default connect(mapStateToProps, {fetchNotes})(SideNav);