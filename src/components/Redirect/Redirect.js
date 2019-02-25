import React from 'react';

class Redirect extends React.Component {
    componentDidMount() {
        this.props.history.push('/notes');
    }

    render() {
        return <div>Redirecting...</div>
    }
}

export default Redirect;