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
            <div className="searchWrapper">
                <div className="search">
                    <input 
                        type="text"
                        name="search"
                        className="searchBar"
                        placeholder="Search..."
                        onChange={this.handleChange}
                        value={this.state.search} 
                    />
                    <button 
                        className="searchButton"
                        onClick={this.SAR}
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar