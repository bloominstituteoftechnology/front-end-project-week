import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';
import { search } from '../actions';

class Searchbar extends Component {
    handleChange(event) {
        this.props.search(event.target.value);    
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Input name="search" placeholder="search" onChange={this.handleChange.bind(this)}/>
                </FormGroup>
            </Form>
        );
    }
}

export default connect(null, { search })(Searchbar);