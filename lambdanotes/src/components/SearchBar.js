import React from 'react'

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
            <div>
                Search Bar: <input value={this.state.searchterm} onChange={this.handleChange} placeholder="Search" />
            </div>
        )
    }
}

export default SearchBar