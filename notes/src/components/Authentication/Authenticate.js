import React from 'react';
import Login from '../Login/Login';
import {connect} from 'react-redux';
import {fetchData} from '../../actions';
import {withRouter} from 'react-router-dom';

const Authenticate = App => {
  class InnerApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

/*Component displays only if localStorage contains a certain value*/
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({loggedIn: false});
      } else {
        this.setState({loggedIn: true});
      }
    }

    render() {
      console.log('from authenticate', this.props)
      if (this.state.loggedIn) return <App appProps={this.props} />;
      return <Login />;
    }
  }


  const mapStateToProps = state => {
    return {
    notes: state.notes,
    fetching: state.fetchingNotes
  };
};

return withRouter(connect(mapStateToProps, {fetchData})(InnerApp));
}
export default Authenticate;
