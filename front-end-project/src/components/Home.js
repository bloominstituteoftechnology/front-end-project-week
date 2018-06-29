import React, { Component } from "react";
import { Grid } from "@material-ui/core";

const Home = props => {
    return (
    <div>
        <h1> Welcome to Lambda Take Note! </h1>
        <NavLink to="/login"> <button/> </NavLink>
        <NavLink to="/register"> <button/> </NavLink>
    </div>
    )
}