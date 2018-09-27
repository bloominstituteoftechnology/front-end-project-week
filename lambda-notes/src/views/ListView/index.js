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
			exact: '',
			fuzzy: '',
		},
		deleteAllModal: false,
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
			btnClass: { ...this.state.btnClass },
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
				btnClass: { ...this.state.btnClass },
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
			btnClass: { ...this.state.btnClass },
		});
	}

	handleDeleteAll = () => {
		const allIds = [];

		for (let i = 0; i < this.props.notes.length; i++) {
			allIds.push(this.props.notes[i]._id);
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
			deleteAllModal: !this.state.deleteAllModal,
		});
	}

	render() {
		const { errorMsg, search, input, deleteAllModal } = this.state;
		const { history, notes, username } = this.props;
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

							<button className = 'btn' name = 'exactSearch' onClick = { e => this.toggleSearch(e) }>Exact search</button>

							<button className = 'btn' name = 'fuzzySearch' onClick = { e => this.toggleSearch(e) }>Fuzzy search</button>
						</div>

						<div>
							<Modal 
								centered={ true } 
								isOpen={ deleteAllModal } 
								toggle={ this.toggleDeleteAllModal } 
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

					{ 
						(search.exactSearch && (notes.filter(note => {
							if ((note.title.indexOf(input.exactInput) !== -1) || (note.textBody.indexOf(input.exactInput) !== -1)) return true;
							else return false;
						}).map((note, i) => <Note history = { history } key = { i } exactInput = { input.exactInput } note = { note } />))) || 

						(search.fuzzySearch && (notes.filter(note => {
							if (fuzzysearch(input.fuzzyInput, note.title) || fuzzysearch(input.fuzzyInput, note.textBody)) return true;
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
			tags: PropTypes.arrayOf(PropTypes.string),
			textBody: PropTypes.string,
			title: PropTypes.string,
			'__v': PropTypes.number,
			'_id': PropTypes.string,
		}),
	),
	username: PropTypes.string,
}
