import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBar.css';

export const LeftBar = () => {
    return (
      <div className="left-bar">
        <div className="left-bar_header">Lambda Notes</div>
        <Link to="/"><button className="left-bar_button">View Your Notes</button></Link>
        <Link to="/new-note"><button className="left-bar_button">+ Create New Note</button></Link>
      </div>
    );
};

export default LeftBar;