import React, { Component } from 'react';
import SideNotes from './styles/SideNotes';
import Button from './styles/Button';

class LambdaNotes extends Component {
    render() {
        return (
            <SideNotes>
            <h1>Lambda Notes</h1>
            <Button>View Your Notes</Button>
            <Button>+ Create New Notes</Button>
            </SideNotes>
        );
    }
}

export default LambdaNotes;
