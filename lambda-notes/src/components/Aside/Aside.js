import React from 'react';
import Button from '../Button/Button.js';


const Aside = (props) => { 
  console.log('props', props)
  return (
    <aside>
      <div className="container">
        <h2>Lambda Notes</h2>
        <Button content="View Your Notes" />
        <Button content="+ Create New Note" />
      </div>
    </aside>
  );
}


export default Aside;