import  React  from 'react';
import { Button, Row, Col } from 'reactstrap';
import './Sidebar.css';
//sidebar should show up in every page
//has two buttons, View Your Notes & +Create New Note

const Sidebar = props => {
  return <div class="container">
      <div class="row">
        <div class="col" className="Sidebar">
        <h1>
          Lambda
          Notes
        </h1>
          <div>
            <Button className="SidebarButton">View Your Notes</Button>
          </div>
          <div>
            <Button className="SidebarButton">+Create New Note</Button>
          </div>
        </div>
      </div>
    </div>;
};

export default Sidebar;