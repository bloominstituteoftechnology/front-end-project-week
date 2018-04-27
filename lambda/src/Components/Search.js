import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class Search extends Component {
    state = {
        query: ''
    };

    render() {
        console.log( this.state);
        return (
            <Form className='search'>
                <Input 
                type='text'
                placeholder='Search'
                query={this.state.query}
                onChange={this.handleSearch}
                className='search'/>
            </Form>
        )
    }
    handleSearch = event => {
        event.preventDefault();
        this.setState({ query: event.target.query });
    }

}

export default Search;