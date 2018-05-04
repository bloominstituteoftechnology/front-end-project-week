import React from "react";
import {Route, Redirect} from "react-router-dom";

const redirect = () => {
    return <Redirect to="/signin" />
}

export const LoginChecker = ({render, ...rest}) => {
    return(
    localStorage.getItem("user._id") ?
    <Route {...rest} render={render}/>: <Route {...rest} render={redirect} />
    )
}