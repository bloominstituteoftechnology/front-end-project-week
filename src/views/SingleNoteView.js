import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData, deleteData } from '../actions';

import SingleNote from '../components/Notes/SingleNote';

class SingleNoteView extends Component {
	state = {
		isModalVisible: false,
	};

	componentDidMount() {
		if (this.props.notes.length === 0) {
			this.props.fetchData();
		}
	}

	handleModalVisible = () => {
		const visible = this.state.isModalVisible;
		this.setState({
			isModalVisible: !visible,
		});
	};

	render() {
		console.log('SingleNoteView', this.props.notes);
		return (
			<SingleNote
				{...this.props}
				{...this.state}
				handleModalVisible={this.handleModalVisible}
			/>
		);
	}
}

const mapStateToProps = state => ({
	notes: state.notesReducer.notes,
});

export default connect(
	mapStateToProps,
	{
		fetchData,
		deleteData,
	}
)(SingleNoteView);
