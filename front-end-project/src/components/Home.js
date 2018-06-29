import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Grid } from "@material-ui/core";

const Home = props => {
    return (
    <div style={{ padding: 20 }}>
        <Grid container spacing={40}>
            <h1> Welcome to Lambda Take Note! </h1>
            <NavLink to="/login"> <button> Click to Log in </button> </NavLink>
            <NavLink to="/register"> <button> Click to Register </button> </NavLink>
        </Grid>
    </div>
    )
}

export default Home