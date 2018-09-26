// React
import React from 'react';

// Dependencies
import fuzzysearch from 'fuzzysearch';

// Components
import { Note } from '../../components';

class ListView extends React.Component {
	state = {
		errorMsg: '',
		search: {
			exactSearch: false,
			fuzzySearch: false,
		},
		input: {
			exactInput: '',
			fuzzyInput: '',
		}
	};

	toggleSearch = e => {
		e.preventDefault();
		const newSearch = { ...this.state.search };

		for (let key in newSearch) {
			if (key === e.target.name) newSearch[key] = !newSearch[key];
			else newSearch[key] = false;
		}

		this.setState({
			...this.state,
			errorMsg: '',
			search: newSearch,
			input: { 
				exactInput: '',
				fuzzyInput: '',
			},
		});
	}

	handleInputChange = e => {
		e.preventDefault();
		const newInput = { ...this.state.input };

		if (e.target.value.length > 85) {
			return this.setState({
				...this.state,
				errorMsg: 'Error: Search term cannot be more than 85 characters long.',
				search: { ...this.state.search },
				input: newInput,
			});
		}

		for (let key in newInput) {
			if (key === e.target.name) newInput[key] = e.target.value;
			else newInput[key] = '';
		}

		this.setState({
			...this.state,
			errorMsg: '',
			search: { ...this.state.search },
			input: newInput,
		});
	}

	render() {
		return(
			<div className = 'main-content'>
				<div className = 'list'>
					<div className = 'search-wrapper'>
						{ this.state.errorMsg && <p>{ this.state.errorMsg }</p> }
						<div>
							<button className = 'btn' name = 'exactSearch' onClick = { e => this.toggleSearch(e) }>Exact search</button>

							<button className = 'btn' name = 'fuzzySearch' onClick = { e => this.toggleSearch(e) }>Fuzzy search</button>
						</div>

						{ this.state.search.exactSearch && 
							<div className = 'search'>
								<input 
									className = 'lengthen-anim' 
									name = 'exactInput' 
									placeholder = 'Search for exact terms...' 
									value = { this.state.input.exactInput } 
									onChange = { e => this.handleInputChange(e) } 
								/>
							</div> 
						}

						{ this.state.search.fuzzySearch && 
							<div className = 'search'>
								<input 
									className = 'lengthen-anim' 
									name = 'fuzzyInput' 
									placeholder = 'Search for fuzzy terms...' 
									value = { this.state.input.fuzzyInput } 
									onChange = { e => this.handleInputChange(e) } 
								/>
							</div> 
						}
					</div>

					<h2>{ this.props.username }'s Notes:</h2>

					{ 
						(this.state.search.exactSearch && (this.props.notes.filter(note => {
							if ((note.title.indexOf(this.state.input.exactInput) !== -1) || (note.textBody.indexOf(this.state.input.exactInput) !== -1)) return true;
							else return false;
						}).map((note, i) => <Note history = { this.props.history } key = { i } exactInput = { this.state.input.exactInput } note = { note } />))) || 

						(this.state.search.fuzzySearch && (this.props.notes.filter(note => {
							if (fuzzysearch(this.state.input.fuzzyInput, note.title) || fuzzysearch(this.state.input.fuzzyInput, note.textBody)) return true;
							else return false;
						}).map((note, i) => <Note history = { this.props.history } key = { i } note = { note } />))) || 

						(this.props.notes.map((note, i) => <Note history = { this.props.history } key = { i } note = { note } />)) 
					}
				</div>
			</div>
		);
	}
}

export default ListView;
