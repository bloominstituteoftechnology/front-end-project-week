import React from 'react';
import { Route, Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { Button } from 'reactstrap';

const Sidebar = props => (
  <div className="sidebar">
    <h1>Lambda Notes</h1>
    <Link to="/"><Button color="info">View Your Notes</Button></Link>
    <Link to="/create"><Button color="info">+ Create New Note</Button></Link>
    <Route 
      exact 
      path="/" 
      render={() => (
        <Button 
          data={props.formatForCSV()} 
          filename="notes.csv"
          color="info"
          tag={CSVLink}
        >
          Export To CSV
        </Button>
      )} 
    />
  </div>
);

export default Sidebar;