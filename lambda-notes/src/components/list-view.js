import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "reactstrap";

import EachNote from "./each-note";

class ListView extends Component {
	state = {
	notes: this.props.notes
	};

	handleId = cardId => {
	this.props.handleNoteView(cardId);
	};

	render() {
		return (
			<Col sm="9" className="mb-4 pb-4 pl-4 pr-4">
				<h1 className="List__Title">Your Notes: </h1>
					<Row className="mb-5" >
						{this.state.notes.map(note => {
							return (
								<Col className="mb-4 pl-2 pr-2" xs="4" key={note.id}>
									<Card className="List__View">
										<Link to={"/view"} key={note.id} onClick={() => { this.handleId(note.id); }}>
										<div className="ListView">
										<EachNote title={note.title} body={note.body} />
										</div>
										</Link>
									</Card>
								</Col>
							);
						})}
					</Row>
			</Col>
		);
	}
}

export default ListView;
