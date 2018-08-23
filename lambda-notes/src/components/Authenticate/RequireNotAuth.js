import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { checkToken, setSignIn } from '../../actions/auth';

const RequireNotAuth = ComposedComponent =>
    class extends React.Component {
        componentDidMount() {
            const token = localStorage.getItem('token');
            if (token) {
                return this.props.checkToken(token, this.props.history);
            }
            this.props.setSignIn();
        }

        componentDidUpdate() {
            if (this.props.authenticated && localStorage.getItem('token')) {
                this.props.history.push('/notes');
            }
        }

        render() {
            if (!this.props.authenticated && !this.props.checkingToken) return <ComposedComponent {...this.props} />
            return null;
        }
    }

RequireNotAuth.propTypes = { authenticated: PropTypes.bool };

const mapStateToProps = state => {
    return {
        authenticated: state.auth.signedIn,
        checkingToken: state.auth.checkingToken
    };
}

export default compose(
    connect(mapStateToProps, { checkToken, setSignIn }),
    RequireNotAuth
);