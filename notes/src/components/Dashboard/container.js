import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import requireAuth from '../requireAuth';
import Dashboard from './Dashboard';
import { getNotes } from '../../actions';


const mapStateToProps = state => {
    return {
      showMenu: state.notes.showMenu,
      authenticated: state.auth,
      error: state.notes.error
    }
  }

const mapDispatchToProps = {
    getNotes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(requireAuth(Dashboard)));

