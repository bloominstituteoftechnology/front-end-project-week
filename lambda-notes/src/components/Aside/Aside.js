import React from 'react';
import Button from '../Button/Button.js';
import './Aside.css';


const Aside = (props) => { 
  //console.log('props', props)
  return (
    <aside> 
      <div className="bg-secondary float-left aside">
        <h3 className="float-left ml-4 mt-3">Lambda <br />Notes</h3>
        <Button content="View Your Notes" />
        <Button content="+ Create New Note" />
      </div>
    </aside>
  );
}


export default Aside;