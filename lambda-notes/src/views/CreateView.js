import React from 'react';
import { Sidebar, Form } from '../components';
import { connect } from 'react-redux';
import {
  addNote
} from '../actions';

class CreateView extends React.Component {

  componentDidMount(){
    if (!this.props.loggedIn) {
      this.props.history.push('/')
    }
  }
  render() {
    return(
      <div className='container'>
      <Sidebar />
      <Form submit={this.props.addNote} match={this.props.match} history={this.props.history}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  }
}

export default connect(
  mapStateToProps,
  {
    addNote
  }
)(CreateView);
