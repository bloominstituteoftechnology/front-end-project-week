import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { compose } from 'redux';

const RequireNotAuth = ComposedComponent =>
    class extends React.Component {
        componentDidMount() {
            if (this.props.authenticated && localStorage.getItem('token')) {
                this.props.history.push('/notes');
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.authenticated && localStorage.getItem('token')) {
                this.props.history.push('/notes');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

RequireNotAuth.propTypes = { authenticated: PropTypes.bool };

const mapStateToProps = state => {
    return { authenticated: state.auth.signedIn };
}

export default compose(
    connect(mapStateToProps),
    RequireNotAuth
);