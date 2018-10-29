import React from 'react';
import { Sidebar, Form } from '../components';
import { connect } from 'react-redux';
import {
  addNote
} from '../actions';

class CreateView extends React.Component {
  render() {
    return(
      <div className='container'>
      <Sidebar />
      <Form submit={this.props.addNote}/>
      </div>
    )
  }
}



export default connect(
  null,
  {
    addNote
  }
)(CreateView);
