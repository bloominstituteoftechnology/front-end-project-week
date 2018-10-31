import React from 'react';
import { CSVLink } from 'react-csv';

const CSVButton = props => {
  return (
    <CSVLink className='button csv-button' data={props.csvdata} headers={props.csvheaders}>
     Download CSV</CSVLink>
  )
}

export default CSVButton; 
