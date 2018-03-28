import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "reactstrap";

import EachNote from "./each-note";

const ListView = props => {
	return (
		<Col sm="9" className="mb-4 pb-4 pl-4 pr-4">
			<h1 className="List__Title">Your Notes: </h1>
			<Row className="mb-5" >
				{props.notes.map(note => {
					return (
						<Col className="mb-4 pl-2 pr-2" xs="4" key={note.id}>
							<div className="List__View">
								<Link className="List__View__Link" to={`/view/${note.id}`} key={note.id}>
								<div className="ListView">
									<EachNote title={note.title} body={note.body} />
								</div>
								</Link>
							</div>
						</Col>
					);
				})}
			</Row>
		</Col>
	);
}


export default ListView;
