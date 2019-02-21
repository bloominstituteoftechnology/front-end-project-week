import React from 'react';

//props from sbView.js
//notes={props.notes}
//searchNotes={this.searchNotes}

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    SAR = (e) => {
        this.props.searchNotes(this.state.search);
        this.setState({
            search: ""
        });
    }

    render() {
        return (
            <div className="search">
                <h6>Search your notes:</h6>
                <input 
                    type="text"
                    name="search"
                    className="searchBar"
                    placeholder="Search..."
                    onChange={this.handleChange}
                    value={this.state.search} />
                    <button 
                        className="searchButton"
                        onClick={this.SAR}
                    >
                        <img src="https://img.icons8.com/ios-glyphs/15/000000/search.png" alt="search icon" />
                    </button>
            </div>
        )
    }
}

export default SearchBar