import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { SortableContainer, arrayMove } from 'react-sortable-hoc';

import EachNote from "./each-note";


const Sort = SortableContainer(props => {
	return (
		<Row className="" >
			{props.notes.map((note, index) => {
				return (
					<Col className="mb-4 " xs="4" key={note.id}>
						<div className="List__View">
							<div className="ListView">
								<EachNote key={`note-${note.id}`} note={note} index={index} title={note.title} body={note.body}  handleListView={props.handleListView}/>
							</div>
						</div>
					</Col>
				);
			})
		};
		</Row>
		);
	});



 class ListView extends Component {
  state = {
    notes: this.props.notes,
  };

 	handleListView = index => {
    this.props.handleListView(index);
  };

  	onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      notes: arrayMove(this.state.notes, oldIndex, newIndex),
    });
    this.props.sortNotes(this.state.notes);
  };

	render() {
	return (
		<React.Fragment>
		<Col xs="8" className="List">
		  <ul className="List__Wrap Hidden">
			<li className="List__Title">Y</li>
			<li className="List__Title List__Ghost">o</li>
			<li className="List__Title List__Ghost">u</li>
			<li className="List__Title List__Ghost">r</li>
			<li className="List__Title List__Spaced">L</li>
			<li className="List__Title List__Ghost">a</li>
			<li className="List__Title List__Ghost">m</li>
			<li className="List__Title List__Ghost">b</li>
			<li className="List__Title List__Ghost">d</li>
			<li className="List__Title List__Ghost">a</li>
			<li className="List__Title List__Spaced">N</li>
			<li className="List__Title List__Ghost">o</li>
			<li className="List__Title List__Ghost">t</li>
			<li className="List__Title List__Ghost">e</li>
			<li className="List__Title List__Ghost">s</li>
			<li className="List__Title List__Ghost">:</li>
		  </ul>
		  <Sort pressDelay={90} lockToContainerEdges={true} axis={"xy"} notes={this.state.notes} onSortEnd={this.onSortEnd} handleListView={this.handlListView} />	
		</Col>
		</React.Fragment>
	);
  }
}


export default ListView;
