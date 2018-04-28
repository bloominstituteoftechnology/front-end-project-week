import React, { Component } from 'react';

class SearchBar extends Component {

    submitFilter = (e) => {
        const criterion = this.input.value;
        this.props.filterNotes(criterion);
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.submitFilter} ref={input => this.input = input} placeholder="Search"/>
            </div>
        );
    }
};

export default SearchBar;