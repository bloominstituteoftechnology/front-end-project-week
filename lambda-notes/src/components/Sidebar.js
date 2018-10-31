import React from 'react';
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

      <Link to='/'>
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

export default SideBar;
