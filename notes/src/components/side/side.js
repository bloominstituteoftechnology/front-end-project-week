import React, { Component } from 'react';
import { Sidebar } from "../../style/style";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



class Side extends Component {
  render() { 
    return ( 
      <Sidebar>
        <div className="actions">'
        <Link to='/myNotes'>
        <Button color="success" size="lg" block> View Your Notes</Button>
        </Link>
        <Link to='/form'>
        <Button color="success"size="lg" block> + Create New Note </Button>
        </Link>
        </div>
      </Sidebar>
    );
  }
}
export default Side;