import React from 'react';
import { Button } from 'reactstrap';
import './Buttons.css';
import { Link } from 'react-router-dom';

class Buttons extends React.Component {
    render() {
      return (
        <div className="Button">        
          <Link to="/"><Button type="button" className="BTN btn btn-info"> View Your Notes </Button></Link>
          <br />
          <Link to="/New"><Button type="button" className="BTN btn btn-info">+ Create New Note</Button></Link>
          <br />
          <Link to="/Register"><Button type="button" className="BTN btn btn-info"> Register </Button></Link>
          <br />
          <Link to="/Login"><Button type="button" className="BTN btn btn-info"> Login </Button></Link>
        </div>
      );
    }
  }
  
  export default Buttons;