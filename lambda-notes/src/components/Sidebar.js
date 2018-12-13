import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import CSVButton from './CSVButton';


const SideBar = props => {

  const csvheaders = [
    {label: 'Title', key: 'title'},
    {label: 'Text', key: 'textBody'},
  ];

  let csvdata = props.notes;

  return (
    <div className='sidebar'>
      <h1>Lambda Notes</h1>
      <h4>Welcome, {props.user}</h4>
      <Link to='/notes'>
        <div className='button view-button'>
        View Your Notes
        </div>
      </Link>
      <Link to='/add'>
        <div className='button create-button'>
        + Create New Note
        </div>
      </Link>
      <Route exact path='/' render={(props) => (<CSVButton {...props} csvheaders={csvheaders} csvdata={csvdata} />)}  />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps, null)(SideBar);
