import React from 'react';
import  { CSVLink } from 'react-csv';


export default props => {
  return (
    <CSVLink data={props.notes} className="export-csv">
      <i class="fas fa-download fa-lg"></i>
    </CSVLink>
  );
}