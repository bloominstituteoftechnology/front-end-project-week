import React, { Component } from 'react';
import './SearchBar.css';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
        }
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <div className='search-bar-container'>
                <form>
                    <input
                        placeholder='Search for:'
                        ref={ input => this.search = input }
                        onChange={ this.handleInputChange }
                    />
                    <p className='search-display'>{ this.state.query }</p>
                </form>
            </div>
        )
    }

}