import React from 'react';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class NavSection extends Component {
    render() {
    return (
        <div>
            <h1>Lambda Notes</h1>
            <Button>View Your Notes</Button>{' '}
            <Button>+ Create New Note</Button>{' '}
            </div>
        );
    }   
};

export default NavSection;

