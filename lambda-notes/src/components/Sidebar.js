import React from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';

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
      <CSVLink className='button csv-button' data={csvdata} headers={csvheaders}>
       Download CSV</CSVLink>
    </div>
  )
}

export default SideBar;
