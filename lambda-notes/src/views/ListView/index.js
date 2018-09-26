// React
import React from 'react';

// Dependencies
import fuzzysearch from 'fuzzysearch';
import { CSVLink } from 'react-csv';

// Components
import { Note } from '../../components';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody } from 'reactstrap';

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
		const csvHeaders = [
			{label: 'Version', key: '__v'},
			{label: 'Tags', key: 'tags'},
			{label: 'ID', key: '_id'},
			{label: 'Title', key: 'title'},
			{label: 'Body', key: 'textBody'},
		];
		const csvData = [];

		for (let i = 0; i < this.props.notes.length; i++) {
			csvData.push(this.props.notes[i]);
		}

		return(
			<div className = 'main-content'>
				<div className = 'list'>
					<div className = 'search-wrapper'>
						{ this.state.errorMsg && <p>{ this.state.errorMsg }</p> }

						<div>
							<button className = 'btn delete-all-btn' onClick = { e => this.toggleDeleteAllModal(e) }>Delete All Notes</button>

							<CSVLink 
								headers = { csvHeaders }
								data = { csvData } 
								filename = { `${ this.props.username }-notes.csv` } 
								className = 'btn csv-link' 
							>Export as CSV</CSVLink>

							<button className = 'btn' name = 'exactSearch' onClick = { e => this.toggleSearch(e) }>Exact search</button>

							<button className = 'btn' name = 'fuzzySearch' onClick = { e => this.toggleSearch(e) }>Fuzzy search</button>
						</div>

						<div>
							<Modal 
								centered={ true } 
								isOpen={ this.state.deleteAllModal } 
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

						{ (this.state.search.exactSearch || this.state.search.fuzzySearch) && <p className = 'search-note lengthen-anim'> All searches are case sensitive</p> }

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
