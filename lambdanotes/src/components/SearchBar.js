import React from 'react'

import '../styles/SearchBar.css'

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            searchterm: '',
        }
    }

    handleChange = (event) => {
        this.setState({searchterm: event.target.value });
        this.props.filterNote(this.state.searchterm)
    }

    render(){
        return(
            <div className="searchbar">
                <input value={this.state.searchterm} onChange={this.handleChange} placeholder="Search By Title" />
            </div>
        )
    }
}

export default SearchBar