// React
import React from 'react';

// Dependencies
import fuzzysearch from 'fuzzysearch';
import { CSVLink } from 'react-csv';
import PropTypes from 'prop-types';

// Components
import { Note } from '../../components';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody } from 'reactstrap';

export default class ListView extends React.Component {
	state = {
		errorMsg: '',
		search: {
			exactSearch: false,
			fuzzySearch: false,
		},
		input: {
			exactInput: '',
			fuzzyInput: '',
		},
		btnClass: {
			exactSearch: '',
			fuzzySearch: '',
		},
		deleteAllModal: false,
		toggleSort: false,
		sortingValues: {
			sortBy: '',
			sortOrder: '',
		},
	};

	toggleSearch = e => {
		e.preventDefault();
		const newSearch = { ...this.state.search };
		const newBtnClass = { ...this.state.btnClass };

		for (let key in newSearch) {
			// If a particular search button has been 'activated', highlight it and
			// 'deactivate' the other one.
			if (key === e.target.name) {
				newSearch[key] = !newSearch[key];
				newBtnClass[key] = newBtnClass[key] ? '' : 'curr-search';
			}
			else {
				newSearch[key] = false;
				newBtnClass[key] = '';
			}
		}

		this.setState({
			...this.state,
			errorMsg: '',
			search: newSearch,
			input: { 
				exactInput: '',
				fuzzyInput: '',
			},
			btnClass: newBtnClass,
			sortingValues: { ...this.state.sortingValues },
		});
	} // toggleSearch()

	handleInputChange = e => {
		e.preventDefault();
		const newInput = { ...this.state.input };

		if (e.target.value.length > 85) {
			// If searching for something longer than 85 chars, return an error.
			return this.setState({
				...this.state,
				errorMsg: 'Error: Search term cannot be more than 85 characters long.',
				search: { ...this.state.search },
				input: newInput,
				btnClass: { ...this.state.btnClass },
				sortingValues: { ...this.state.sortingValues },
			});
		}

		for (let key in newInput) {
			// This will be the string that is searched for.
			if (key === e.target.name) newInput[key] = e.target.value;
			else newInput[key] = '';
		}

		this.setState({
			...this.state,
			errorMsg: '',
			search: { ...this.state.search },
			input: newInput,
			btnClass: { ...this.state.btnClass },
			sortingValues: { ...this.state.sortingValues },
		});
	} // handleInputChange()

	handleDeleteAll = () => {
		const allIds = [];

		// Push all note IDs into an array and send it off to the appropirate action creator.
		for (let i = 0; i < this.props.notes.length; i++) {
			allIds.push(this.props.notes[i].id);
		}

		this.props.deleteAll(allIds, this.props.history);
	}

	toggleDeleteAllModal = e => {
		e.preventDefault();

		this.setState({
			...this.state,
			search: { ...this.state.search },
			input: { ...this.state.input },
			btnClass: { ...this.state.btnClass },
			// Toggle this modal on and off
			deleteAllModal: !this.state.deleteAllModal,
			sortingValues: { ...this.state.sortingValues },
		});
	}

	toggleSort = newSortingValues => {
		this.setState({
			...this.state,
			search: { ...this.state.search },
			input: { ...this.state.input },
			btnClass: { ...this.state.btnClass },
			toggleSort: !this.state.toggleSort,
			// Return new sorting values if available, else return empty strings.
			sortingValues: newSortingValues ? newSortingValues : { sortBy: '', sortOrder: '' },
		});
	}

	handleToggleSort = (e, sortingValues) => {
		e.preventDefault();

		this.toggleSort(sortingValues);
	}

	handleSorting = e => {
		e.preventDefault();

		const newSortingValues = {
			sortBy: '',
			sortOrder: '',
		}

		// Create a new 'sorting values' object and only insert the targets which have been checked.
		for (let i = 0; i < e.target.length - 1; i++) {
			if (e.target[i].checked) newSortingValues[e.target[i].name] = e.target[i].value;
		}

		this.toggleSort(newSortingValues);
	}

	render() {
		const { 
			errorMsg, 
			search, 
			input, 
			btnClass, 
			deleteAllModal, 
			toggleSort, 
			sortingValues 
		} = this.state;
		const { history, username } = this.props;
		let notes = [ ...this.props.notes ];
		const csvHeaders = [
			{label: 'ID', key: '_id'},
			{label: 'Tags', key: 'tags'},
			{label: 'Title', key: 'title'},
			{label: 'Body', key: 'textBody'},
		];
		const csvData = [];

		for (let i = 0; i < notes.length; i++) {
			csvData.push(notes[i]);
		}

		if (sortingValues.sortBy) {
			// If sorting values exist, then sort the notes by those values.
			notes.sort((note1, note2) => {
				let a = note1[sortingValues.sortBy].toLowerCase();
				let b = note2[sortingValues.sortBy].toLowerCase();
				if (sortingValues.sortOrder === 'asc') {
					return ((a < b) ? -1 : ((a > b) ? 1 : 0));
				} else {
					return ((a > b) ? -1 : ((a < b) ? 1 : 0));
				}
			});
		} else {
			// Else, if no sorting values exist, then notes is the original array received from props.
			notes = this.props.notes;
		}

		return(
			<div className = 'main-content'>
				<div className = 'list'>
					<div className = 'search-wrapper'>
						{ errorMsg && <p>{ errorMsg }</p> }

						<div>
							<button className = 'btn delete-all-btn' onClick = { e => this.toggleDeleteAllModal(e) }>Delete All Notes</button>

							<CSVLink 
								headers = { csvHeaders }
								data = { csvData } 
								filename = { `${ username }-notes.csv` } 
								className = 'btn csv-link' 
							>Export as CSV</CSVLink>

							<button className = { `btn ${ btnClass.exactSearch }` } name = 'exactSearch' onClick = { e => this.toggleSearch(e) }>Exact search</button>

							<button className = { `btn ${ btnClass.fuzzySearch }` } name = 'fuzzySearch' onClick = { e => this.toggleSearch(e) }>Fuzzy search</button>
						</div>

						<div>
							<Modal 
								centered = { true } 
								isOpen = { deleteAllModal } 
								toggle = { this.toggleDeleteAllModal } 
							>
								<ModalBody>
									<p>Are you sure you want to delete all your notes? This action cannot be undone.</p>

									<div className = 'modal-btns'>
										<div 
											className = 'btn save-btn delete-btn' 
											onClick = { this.handleDeleteAll } 
										>Yes, Delete All Notes</div>
										<div 
											className = 'btn save-btn no-btn' 
											onClick = { this.toggleDeleteAllModal } 
										>No</div>
									</div>
								</ModalBody>
							</Modal>
						</div>

						{ (search.exactSearch || search.fuzzySearch) && <p className = 'search-note lengthen-anim'> All searches are case sensitive</p> }

						{ search.exactSearch && 
							<div className = 'search'>
								<input 
									className = 'lengthen-anim' 
									name = 'exactInput' 
									placeholder = 'Search for exact terms...' 
									value = { input.exactInput } 
									onChange = { e => this.handleInputChange(e) } 
								/>
							</div> 
						}

						{ search.fuzzySearch && 
							<div className = 'search'>
								<input 
									className = 'lengthen-anim' 
									name = 'fuzzyInput' 
									placeholder = 'Search for fuzzy terms...' 
									value = { input.fuzzyInput } 
									onChange = { e => this.handleInputChange(e) } 
								/>
							</div> 
						}
					</div>

					<h2>{ username }'s Notes:</h2>

					<div className = 'sort-options'>
						{ !toggleSort && 
							<button onClick = { (e, sortingValues = this.state.sortingValues) => this.handleToggleSort(e, sortingValues) } className = 'btn'>Sorting options</button>
						}

						{ toggleSort && 
							<div className = 'sort-values grow-anim-sort'>
								<form onSubmit = { e => this.handleSorting(e) }>
									<input type = 'radio' name = 'sortBy' value = 'title' defaultChecked = { sortingValues.sortBy === 'title' ? true : sortingValues.sortBy === '' ? true : false } />
									<span>Title</span>

									<input type = 'radio' name = 'sortBy' value = 'content' defaultChecked = { sortingValues.sortBy === 'content' ? true : false } />
									<span>Content</span>

									<span className = 'divider tablet'>|</span>
									<span className = 'divider phone'>_____</span>

									<input type = 'radio' name = 'sortOrder' value = 'asc' defaultChecked = { sortingValues.sortOrder === 'asc' ? true : sortingValues.sortBy === '' ? true : false } />
									<span>Ascending</span>

									<input type = 'radio' name = 'sortOrder' value = 'des' defaultChecked = { sortingValues.sortOrder === 'des' ? true : false } />
									<span>Descending</span>

									<button className = 'btn' type = 'submit'>Sort</button>
								</form>
								
								<button onClick = { e => this.handleToggleSort(e) } className = 'btn'>No sort</button>
							</div>
						}

						{ sortingValues.sortBy && <p>Sorted by { sortingValues.sortBy === 'content' ? 'text body' : sortingValues.sortBy } { sortingValues.sortOrder === 'asc' ? 'ascending' : 'descending' }</p> }
					</div>

					{/* 
						If there exists a search (exact or fuzzy), filter the notes array
						by the search input and map this newly filtered array using the
						Note component.
					*/}
					{ 
						(search.exactSearch && (notes.filter(note => {
							if ((note.title.indexOf(input.exactInput) !== -1) || (note.content.indexOf(input.exactInput) !== -1)) return true;
							else return false;
						}).map((note, i) => <Note history = { history } key = { i } exactInput = { input.exactInput } note = { note } />))) || 

						(search.fuzzySearch && (notes.filter(note => {
							if (fuzzysearch(input.fuzzyInput, note.title) || fuzzysearch(input.fuzzyInput, note.content)) return true;
							else return false;
						}).map((note, i) => <Note history = { history } key = { i } note = { note } />))) || 

						(notes.map((note, i) => <Note history = { history } key = { i } note = { note } />)) 
					}
				</div>
			</div>
		);
	}
}

ListView.propTypes = {
	deleteAll: PropTypes.func,
	history: PropTypes.shape({
		action: PropTypes.string,
		block: PropTypes.func,
		createHref: PropTypes.func,
		go: PropTypes.func,
		goBack: PropTypes.func,
		goForward: PropTypes.func,
		length: PropTypes.number,
		listen: PropTypes.func,
		location: PropTypes.shape({
			hash: PropTypes.string,
			key: PropTypes.string,
			pathname: PropTypes.string,
			search: PropTypes.string,
		}),
		push: PropTypes.func,
		replace: PropTypes.func,
	}),
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			content: PropTypes.string,
			id: PropTypes.number,
			title: PropTypes.string,
		}),
	),
	username: PropTypes.string,
}
