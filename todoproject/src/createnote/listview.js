import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import ListItems from './listitems';


class ListView extends Component {

    render() {
        return (
     
            <div className ="container1">
            <h2>Your Notes:</h2>

            <ListItems todos={this.props.todos} />
            </div>
        )
    }
};

export default ListView;