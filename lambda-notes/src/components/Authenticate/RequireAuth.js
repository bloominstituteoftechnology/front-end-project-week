import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { checkToken, setSignIn } from '../../actions/auth';

const RequireAuth = ComposedComponent =>
    class extends React.Component {
        componentDidMount() {
            const token = localStorage.getItem('token');
            if (token) {
                return this.props.checkToken(token);
            }
            this.props.setSignIn();
            this.props.history.push('/login');
        }

        render() {
            if (this.props.authenticated) {
                return <ComposedComponent {...this.props} />
            }
            return null;
        }
    }

RequireAuth.propTypes = { authenticated: PropTypes.bool };

const mapStateToProps = state => {
    return { authenticated: state.auth.signedIn };
}

export default compose(
    connect(mapStateToProps, { checkToken, setSignIn }),
    RequireAuth
);