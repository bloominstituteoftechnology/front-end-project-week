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



    return (

        <div className="nav-container">

            <h1 className="lambdaNotes">Lambda Notes</h1>

           <Link style={{textDecoration: 'none'}} to="/"><Button onClick={() => props.fetchNotes()} style={{width: "100%"}} text="View Your Notes" /></Link>
           
           <Link style={{textDecoration: 'none'}} to="/create"><Button style={{width: "100%"}} link="/create" text="+ Create New Note"/></Link>

           <CSVLink style={{textDecoration: 'none'}} data={props.notes} ><Button className="csv-btn" style={{width: "100%"}} text="CSV Export"></Button> </CSVLink>

        </div>

    )

}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, {fetchNotes})(SideNav);