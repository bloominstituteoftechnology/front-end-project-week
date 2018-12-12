import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchFormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const SearchBox = styled.input`
    margin-top: 40px;
    padding: 10px;
    /* border-radius: 3px; */
    width: 80%;
    border: 0;
`;

const SearchBoxButton = styled.button`
    width: 80%;
	background-color: #24b8bd;
	color: #f3f9f9;
	padding: 8px 15px;
	margin: 12px;
    font-weight: bold;
    font-size: 1rem;
	text-align: center;
    text-decoration: none;
    border: 0;
`;

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            searchQuery: '',
        };
        
    }

    handleChange = event => {
		this.setState({
			searchQuery: event.target.value,
        });
	};
    
    handleSubmit = event => {
		event.preventDefault();
		this.setState({
            searchQuery: this.state.searchQuery,
        })

	};

	render() {
        console.log('search form', this.state)
		return (
			<SearchFormContainer onSubmit={this.handleSubmit}>
				<SearchBox type="text" placeholder="Search your notes" name="searchQuery" onChange={this.handleChange}/>
				{/* <SearchBoxButton>Search</SearchBoxButton> */}
			</SearchFormContainer>
		);
	}
}

export default SearchForm;
