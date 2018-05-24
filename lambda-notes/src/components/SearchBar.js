import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filter: props.filter
        }
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log("search term: ", this.state.search)
    }

    render() {
            
        return (
            <form 
                className="search-bar" 
                onSubmit={(e) => {
                    e.preventDefault();
                    const searchTerm = this.state.search
                    console.log("search term: ", searchTerm)
                    console.log(this.state.filter);
                    this.state.filter(searchTerm)
                }}>
                <i className="fas fa-search"></i>
                <input
                    name= "search" 
                    className="search-field" 
                    placeholder="Search" 
                    value={this.state.search}
                    onChange={this.handleChange}/>
            </form>
        )
    }
}
 
export default SearchBar;