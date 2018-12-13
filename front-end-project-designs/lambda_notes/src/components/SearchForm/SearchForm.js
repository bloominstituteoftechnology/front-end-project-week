import React from "react";
import styled from "styled-components";

const SearchFormContainer = styled.form`
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;
	margin-right: 80px;

	h2 {
		color: #24b8bd;
	}

	.search-submit-button {
		background-color: #dddddd;
		margin: 2px -80px 30px;
		padding: 5px 10px 5px 20px;
		width: 100px;
		/* border: 2px solid red; */
		z-index: 0;
		text-align: right;
		border-top-right-radius: 30px;
		border-bottom-right-radius: 30px;

		i {
			margin: 0;
			padding: 0;
		}
	}
`;

const SearchBox = styled.input`
    margin:  2px 20px 30px;
    padding: 5px 20px;
    border-radius: 30px;
    width: 200px;
	border: 0;
	z-index: 1;
	
}

    &:focus {
        outline: 0;
        -moz-box-shadow: 0px 0px 0px 2px #24b8bd;
        -webkit-box-shadow: 0px 0px 0px 2px #24b8bd;
        box-shadow: 0px 0px 0px 2px #24b8bd;
    }
`;

// const SearchBoxButton = styled.button`
//     width: 80%;
// 	background-color: #24b8bd;
// 	color: #f3f9f9;
// 	padding: 8px 15px;
// 	margin: 12px;
//     font-weight: bold;
//     font-size: 1rem;
// 	text-align: center;
//     text-decoration: none;
//     border: 0;
// `;

// ================ END OF STYLES

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: "",
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
		});
		// setTimeout( ()=>{ this.props.searchNotes(this.state.searchQuery);}, 100)
		this.props.searchNotes(this.state.searchQuery);
		// console.log(this.state.searchQuery)
	};

	render() {
		// console.log("search form", this.props);
		return (
			<SearchFormContainer onSubmit={this.handleSubmit}>
				<SearchBox
					type="text"
					placeholder="Search your notes"
					name="searchQuery"
					onChange={this.handleChange}
				/>
				<div className="search-submit-button">
					<i className="fas fa-search" />
				</div>
				{/* <SearchBoxButton>Search</SearchBoxButton> */}
			</SearchFormContainer>
		);
	}
}

export default SearchForm;
