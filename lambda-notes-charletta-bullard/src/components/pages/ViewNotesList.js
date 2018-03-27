import React from 'react';
import { Link } from 'react-router-dom';

const ViewNotes = () => (
  <div>
    <h1>Lambda Notes</h1>
    <Link to='/ViewNotes'>View Notes</Link>
    <Link to='/CreateNote'>+Create Note</Link>
  </div>
);

