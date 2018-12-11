import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tokenExists, logout } from '../actions';

const keyName = process.env.REACT_APP_TOKEN_ITEM;

export default ChildComponent => {
    class ComposedComponent extends Component {
        
        componentDidMount() {
            this.checkForAuth();
        }

        componentDidUpdate() {
            this.checkForAuth();
        }

        checkForAuth() {
            const token = localStorage.getItem(keyName);

            if (!token && this.props.authenticated){
                this.props.logout();
                this.props.history.push('/login');
                return;
            }

            if (token && !this.props.authenticated) {
                this.props.tokenExists();
                return
            }
            
            if (!this.props.authenticated) {
                this.props.history.push('/login');
                return;
            }

            const currentTime = Date.now() / 1000;

            if(this.props.exp !== null && currentTime > this.props.exp) {
                
                this.props.logout();
                this.props.history.push('/login');
                return;
            }

        }

        render() {
            return (
                <>
                {
                    this.props.authenticated ? <ChildComponent {...this.props}/> : null
                }
                </>
            )
        }
    }

    const mapStateToProps = state => {
        const { authenticated, exp } = state.auth;
        return { authenticated, exp };
    }

    return connect(mapStateToProps, { tokenExists, logout })(ComposedComponent);
};
