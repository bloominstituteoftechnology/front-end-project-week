import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        
        componentDidMount() {
            this.checkForAuth();
        }

        componentDidUpdate() {
            this.checkForAuth();
        }

        checkForAuth() {
            if (!this.props.authenticated) {
                this.props.history.push('/login');
            }
        }

        render() {
            return (
                <ChildComponent {...this.props}/>
            )
        }
    }

    const mapStateToProps = state => {
        const { authenticated } = state.auth;
        return { authenticated };
    }

    return connect(mapStateToProps, {})(ComposedComponent);
};
