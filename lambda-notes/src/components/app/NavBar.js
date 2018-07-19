import React, { Component } from 'react' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
// const NavBar = () => {

    render() {
    console.log('HERE!!!',this.props);

    return (
        <React.Fragment>

            <h1>Lambda <br/> Notes</h1>

            <Link to="/">
            <button className="button-nav">View Your Notes</button>
            </Link>

            {/* <Link to="/create"> */}
            <Link to={{
                pathname: '/create',
                // state: { whatever: 1 }
                state: this.props
            }}
            
            >

            <button className="button-nav">+ Create New Note</button>
            </Link>  

        </React.Fragment>
    )
}    
}
export default NavBar ;