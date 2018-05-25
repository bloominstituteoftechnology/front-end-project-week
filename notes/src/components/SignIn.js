
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "./Actions/";
import PropTypes from "prop-types";
import img from '../google.jpg'

class Signin extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    // Forwards us to our app if we are logged in 
    componentWillUpdate(nextProps) {
        if (nextProps.auth) {
            this.context.router.history.push("/notes");
        }
    }

    render() {
        return (
            <div className="sign-in">
                <div className="col s10 offset-s1 center-align">

                    <h4 className="sign-in-header">Sign In to start</h4>
                    <a href="#" className="social-signin" onClick={() => {
                        this.props.signIn()
                    }}>
                        <img alt="Sign in" id="sign-in" src={img} />
                    </a>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);