import  React  from 'react';
import { Button, Row, Col } from 'reactstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom';
//sidebar should show up in every page
//has two buttons, View Your Notes & +Create New Note

const Sidebar = props => {
  return <div class="container">
      <div class="row">
        <div class="col" className="Sidebar">
          <h1>Lambda Notes</h1>
          <div>
            <Button className="SidebarButton">
              <Link to="/" className="Link">
                View Your Notes
              </Link>
            </Button>
          </div>
          <div>
            <Button className="SidebarButton">
              <Link to="/CreateNote" className="Link">
                +Create New Note
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};

export default Sidebar;