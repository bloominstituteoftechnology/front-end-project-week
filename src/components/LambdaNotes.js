import React, { Component } from 'react';
import SideNotes from './styles/SideNotes';
import Button from './styles/Button';
import {Link} from 'react-router-dom';

class LambdaNotes extends Component {
    render() {
        return (
            <SideNotes>
            <h1>Lambda Notes</h1>
            <Link to='/'>
               <Button>View Your Notes</Button>
            </Link>
            <Link to='/notes'>
              <Button>+ Create New Notes</Button>
            </Link>
           
            </SideNotes>
        );
    }
}

export default LambdaNotes;
