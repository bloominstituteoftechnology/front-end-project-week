// React
import React, { Component } from 'react';

// Styling
import { Form, Input } from 'reactstrap';

class Search extends Component {
    state = {
        query: ''
    };

    render() {
        console.log( this.state);
        return (
            <Form onSubmit={() => this.searchNotes()} className='search'>
                <Input 
                type='text'
                placeholder='Search...'
                query={this.state.query}
                onChange={this.handleSearch}
                className='search-input col-4 mr-4'/>
            </Form>
        )
    } // end render()

    handleSearch = event => {
        event.preventDefault();
        this.setState({ query: event.target.query });
    }

    searchNotes = event => {

    }

} // end Search

export default Search;