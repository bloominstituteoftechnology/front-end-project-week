// React
import React from 'react';

// Components
import { Note } from '../../components';

class ListView extends React.Component {
	state = {
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
			search: newSearch,
			input: { ...this.state.input },
		});
	}

	handleInputChange = e => {
		e.preventDefault();
		const newInput = { ...this.state.input };

		for (let key in newInput) {
			if (key === e.target.name) newInput[key] = e.target.value;
			else newInput[key] = '';
		}

		this.setState({
			...this.state,
			search: { ...this.state.search },
			input: newInput,
		});


	}

	render() {
		return(
			<div className = 'main-content'>
				<div className = 'list'>
					<div className = 'search-wrapper'>
						<button name = 'exactSearch' onClick = { e => this.toggleSearch(e) }>Exact search</button>

						<button name = 'fuzzySearch' onClick = { e => this.toggleSearch(e) }>Fuzzy search</button>

						{ this.state.search.exactSearch && 
							<div className = 'search'>
								<input 
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
						(this.state.search.exactSearch && (this.props.notes.filter((note) => {
							if ((note.title.indexOf(this.state.input.exactInput) !== -1) || (note.textBody.indexOf(this.state.input.exactInput) !== -1)) return true;
							else return false;
						}).map((note, i) => <Note history = { this.props.history } key = { i } exactInput = { this.state.input.exactInput } note = { note } />)) ) || 

						(this.props.notes.map((note, i) => <Note history = { this.props.history } key = { i } note = { note } />)) 
					}
				</div>
			</div>
		);
	}
}

export default ListView;
