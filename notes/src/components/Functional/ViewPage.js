import React form 'react';
import { connect } from 'react-redux';

import { deleteNote, getData } from '../../Store/actions';
import Modal from '../Views/Modal';
import Todo from './Todo';

class ViewPage extends React.Component {
  state= {
    note: {},
    showModal: false
  }

  
}

componentDidMount() {
  this.props.getData();
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    success: state.success
  }
}

export default connect(
  mapStateToProps,
    { deleteNote, getData }
)(ViewPage);