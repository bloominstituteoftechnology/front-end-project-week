import React from 'react';
import { Button } from 'reactstrap';
import './SideBar.css';

const SideBar = () => {
  return(
    <div className="side-bar col-12 col-sm-3">
      <div className="row justify-content-center">
        <h2>Lambda Notes</h2>
        <Button className="side-button">View Your Notes</Button>
        <Button className="side-button">+ Create New Note</Button>
      </div>
    </div>
  ) 
}
 
export default SideBar;