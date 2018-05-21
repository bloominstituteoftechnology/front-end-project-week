import React from 'react';
import Mybutton from './Mybutton';
import styles from '../../Styles/Sidebar.css';

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1> Lambda Notes </h1>
          <Mybutton text = "View your notes"/>
          <Mybutton text = "+ Create new notes"/>
        </div>
    </div>
  </div>
  )
};

