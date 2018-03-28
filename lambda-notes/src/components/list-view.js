import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "reactstrap";

import EachNote from "./each-note";

class ListView extends Component {

	handleId = cardId => {
	this.props.handleListView(cardId);
	};

	render() {
		return (
			<Col sm="9" className="mb-4 pb-4 pl-4 pr-4">
				<h1 className="List__Title">Your Notes: </h1>
					<Row className="mb-5" >
						{this.props.notes.map(note => {
							return (
								<Col className="mb-4 pl-2 pr-2" xs="4" key={note.id}>
									<Card className="List__View">
										<div className="ListView">
										<Link to={"/view"} key={note.id} onClick={() => { this.handleId(note.id); }}>
										<EachNote title={note.title} body={note.body} />
										</Link>
										</div>
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
