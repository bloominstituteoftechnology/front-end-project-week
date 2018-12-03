import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIndividual } from '../actions';

class IndividualNote extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getIndividual(id);
	}
	render() {
		return (
			<div>
				<div>{this.props.state.title}</div>
				<div>{this.props.state.textBody}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		state: state.currentIndividual
	};
};

export default connect(
	mapStateToProps,
	{ getIndividual }
)(IndividualNote);
