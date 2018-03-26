import React from 'react';
import { Button } from 'reactstrap';
import './Buttons.css';

class Buttons extends React.Component {
    render() {
      return (
        <div className="Button">        
          <Button type="button" className="BTN btn btn-info"> View Your Notes </Button>
          <br />
          <Button type="button" className="BTN btn btn-info">+ Create New Note</Button>
        </div>
      );
    }
  }
  
  export default Buttons;