import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = (props) => {

    const redirectToLogin = () => {
        props.history.push("/")
    }
    
    const handleSignout = () => {
        props.signout(() => props.history.push("/"));
    }

    const AuthButton = withRouter(
        ({ history }) =>
        props.isAuth ? (
            <div style={{fontSize: "10px"}}>
                Welcome <span style={{fontWeight: '600px'}}>{props.username}</span>{" "}
                <button onClick={handleSignout} className="ExtraButton"> Sign out </button>
            </div>
            ) : (
            <div>
                <button onClick={redirectToLogin} className="ExtraButton">Log in</button>
            </div>
            )
        );

    return (
        <div className="NavBar">
            <AuthButton />
            <img src={logo} alt="logo" style={{width: "120px", height: "120px", margin: "10% auto 50% auto"}} />
            <Link to="/notes"><div className="NavBar__Button">View Your Notes</div></Link>
            <Link to="/AddNote"><div className="NavBar__Button">+ Create New Note</div></Link>
            <a href={props.export()} download="LambdaNotesExport.csv"><div className="NavBar__Button">Export Notes CSV</div></a>
        </div>
    );
};

export default NavBar;