import React, { Component } from 'react';
import { Sidebar } from "../../style/style";
import { Button } from 'reactstrap';



class Side extends Component {
  render() { 
    return ( 
      <Sidebar>
        {/* <h1>Lambda</h1>
        <h1>Notes</h1> */}
        <div className="actions">
        <Button color="success" size="lg"> View Your Notes</Button>
        <Button color="success"size="lg"> + Create New Note </Button>
        </div>
      </Sidebar>
    );
  }
}
export default Side;