import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <h1>Lambda<br></br>Notes</h1>
        <Link to="/"><button>View Your Notes</button></Link>
        <br></br>
        <br></br>
        <Link to="/Create"><button>+ Create New Note</button></Link>
    </div>
  );
};

export default Navigation;